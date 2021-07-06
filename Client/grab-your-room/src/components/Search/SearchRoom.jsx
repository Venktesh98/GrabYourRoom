import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Button from "@material-ui/core/Button";
import { useStyles } from "./SearchRoom.style";
import InputControl from "../Controls/InputControl";
import DatePickerControl from "../Controls/DatePickerControl";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { getSingleUserData } from "../../Services/useAxios";
import DataPersistContext from "../../Context/StateContext";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER, REGISTER_USER, UPDATE_USER } from "../../queries/queries";
import moment from "moment";

function SearchRoom(props) {
  const classes = useStyles();
  const getDataofUser = JSON.parse(localStorage.getItem("userId"));

  // Using Context Api way
  const { usersDataValue, usersEmail } = React.useContext(DataPersistContext);
  const [response, setResponse] = usersDataValue;
  const [email, setEmail] = usersEmail;

  // using Apollo
  const [registerUserData] = useMutation(REGISTER_USER);
  const [updateUserData] = useMutation(UPDATE_USER);
  const { data } = useQuery(GET_USER, {
    variables: { id: getDataofUser },
  });

  const [errors, setErrors] = useState({});

  // persisting existing user data on the form after refresh
  useEffect(() => {
    console.log("In useEffect searchroom:", data);
    if (data?.user) {
      console.log("DATA:", data);
      setResponse(data.user);
      setEmail(data.user.email);
    }
  }, [data]);

  // Validations
  const validate = (fieldValues = response) => {
  
    let validation = { ...errors }; // specifies that to exists all other error messages if we type in another input

    if ("firstName" in fieldValues) {
      validation.firstName = fieldValues.firstName
        ? ""
        : "This field is required";
    }
    if ("lastName" in fieldValues) {
      validation.lastName = fieldValues.lastName
        ? ""
        : "This field is required";
    }
    if ("email" in fieldValues) {
      validation.email = /^\S+@\S+\.\S+$/.test(fieldValues.email)
        ? ""
        : "Email is not valid";
    }

    setErrors({
      ...validation,
    });

    const returendValue = Object.values(validation).every(
      (vali) => vali === ""
    ); // returns either true or false
    return returendValue;
  };

  // Input Change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setResponse((inputs) => ({
      ...inputs,
      [name]: value,
    }));

    // validating the form
    validate({ [name]: value });
  };

  // Submit function
  const handleSubmit = (event) => {
    event.preventDefault();

    const dateFormat = "YYYY-MM-DD";
    let parseIntoDateFormat = moment(response.checkIn).format(dateFormat);

    const pushCheckInData = () => {
      if (response.firstName && response.lastName && response.email) {
        props.history.push(`/rooms-listing?checkIn=${parseIntoDateFormat}`);
      }
    };

    // Validating the form
    if (validate()) {
      // Apollo i.e post of the new user
      if (response.email !== email) {
        console.log("In post request");
        registerUserData({
          variables: {
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email,
            checkIn: response.checkIn,
            checkOut: response.checkOut,
          },
        })
          .then((response) => {
            // console.log("Response of the user:", response.data.addUser.id);
            localStorage.setItem(
              "userId",
              JSON.stringify(response.data.addUser.id)
            );
          })
          .catch((error) => {
            console.log("Error:", error);
          });

        // send the checkIn date to other page as queryString
        pushCheckInData();
      } else {
        console.log("In put request:");
        // Using Apollo i.e update user details
        updateUserData({
          variables: {
            id: getDataofUser,
            firstName: response.firstName,
            lastName: response.lastName,
            email: response.email,
            checkIn: response.checkIn,
            checkOut: response.checkOut,
          },
        })
          .then((response) => {
            console.log("User updated details", response.data);
            pushCheckInData();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  return (
    <React.Fragment>
      <Navbar /> {/* Centralised Navbar */}
      <Grid>
        <div className={classes.searchBackground}>
          <Paper elevation={3} className={classes.paperContent}>
            <Typography variant="h5" className={classes.searchText}>
              Search Room
            </Typography>
            <form onSubmit={handleSubmit}>
              <InputControl
                label="First Name"
                variant="outlined"
                id="outlined-basic"
                name="firstName"
                onChange={handleInputChange}
                value={response?.firstName}
                error={errors?.firstName}
              />
              <InputControl
                label="Last Name"
                variant="outlined"
                id="outlined-basic"
                name="lastName"
                onChange={handleInputChange}
                value={response?.lastName}
                error={errors?.lastName}
              />
              <InputControl
                label="Email"
                variant="outlined"
                id="outlined-basic"
                name="email"
                onChange={handleInputChange}
                value={response?.email}
                error={errors?.email}
              />
              <DatePickerControl
                name="checkIn"
                label="Check In"
                value={response?.checkIn}
                onChange={handleInputChange}
              />
              <DatePickerControl
                name="checkOut"
                label="Check Out"
                value={response?.checkOut}
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.searchButton}
              >
                Search
              </Button>
            </form>
          </Paper>
        </div>
      </Grid>
    </React.Fragment>
  );
}

// withRouter as if we want to pass the data to another page after the completion of some specific function
export default withRouter(SearchRoom);
