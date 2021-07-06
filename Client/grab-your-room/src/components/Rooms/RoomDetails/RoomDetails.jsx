import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSingleUserData } from "../../../Services/useAxios";
import Navbar from "../../Navbar/Navbar";
import Carousel from "react-material-ui-carousel";
import { useStyles } from "./RoomDetails.style";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ROOM, GET_USER, UPDATE_ROOM } from "../../../queries/queries";
import moment from "moment";

function RoomDetails(props) {
  const getRoomId = props.match.params.id;
  console.log("GrtRoomID:", getRoomId);
  const [roomDetails, setRoomDetails] = useState("");
  const [user, setUser] = useState("");
  const classes = useStyles();
  const getUserId = JSON.parse(localStorage.getItem("userId"));

  // Apollo
  const { data: roomData } = useQuery(GET_ROOM, {
    variables: { id: getRoomId },
  });
  const { data } = useQuery(GET_USER, {
    variables: { id: getUserId },
  });

  const [updateRoom] = useMutation(UPDATE_ROOM);

  console.log("userData:", user?.checkIn);

  // const userCheckInCheckOut = {
  //   checkIn: user.checkIn,
  //   checkOut: user.checkOut,
  // };

  // Book now i.e put request
  const handleBookNow = () => {
    // Room update request
    // axios
    //   .put(
    //     `http://localhost:5000/rooms/updateRoom/${getRoomId}`,
    //     userCheckInCheckOut
    //   )
    //   .then((response) => {
    //     console.log("Put Response:", response);
    //   })
    //   .catch((error) => {
    //     console.log("Error:", error);
    //   });

    updateRoom({
      variables: {
        id: getRoomId,
        checkIn: user?.checkIn,
        checkOut: user?.checkOut,
      },
    })
      .then((response) => {
        console.log("R$sponse of put:", response);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  // fetching Room Details
  useEffect(() => {
    if (data) {
      setUser(data.user);
    }
    if (roomData) {
      setRoomDetails(roomData.room);
    }
  }, [data, roomData]);

  // Date Parsing
  const dateFormat = "YYYY-MM-DD";
  let parseIntoDateFormat = moment(user.checkIn).format(dateFormat);

  const handleBackToRooms = () => {
    props.history.push(`/rooms-listing?checkIn=${parseIntoDateFormat}`);
  };

  console.log("RoomDetaisl:", roomDetails);

  return (
    <div>
      <Navbar />
      <Container>
        <div className={classes.roomDetailsBannerContainer}>
          <div className={classes.roomDetailsBannerImage}>
            {roomDetails.roomImages && (
              <img
                className={classes.roomDetailsBannerImage}
                src={roomDetails?.roomImages[0]}
              />
            )}
          </div>
          <div className={classes.backToRoomsDiv}>
            <Button
              className={classes.backToRooms}
              variant="contained"
              color="primary"
              onClick={handleBackToRooms}
            >
              Back To Rooms
            </Button>
          </div>
          {/* </div> */}
        </div>

        <Grid container>
          <Grid item sm={6} md={6} lg={6}>
            <div className={classes.carousels}>
              <Carousel
                animation="slide"
                navButtonsProps={{
                  // Change the colors and radius of the actual buttons. THIS STYLES APPLIES TO BOTH BUTTONS
                  style: {
                    backgroundColor: "rgba(100, 149, 237,1)",
                    borderRadius: 50,
                  },
                }}
              >
                {roomDetails.roomImages?.map((item) => (
                  <img
                    src={item}
                    className={classes.carouselsImage}
                    key={roomDetails.id}
                  />
                ))}
              </Carousel>
            </div>
          </Grid>

          <Grid item sm={6} md={6} lg={6}>
            <Typography className={classes.roomCategory}>
              {roomDetails.roomCategory}
            </Typography>
            <Typography variant="h6" className={classes.content}>
              Size: {roomDetails.roomSize} SQFT
            </Typography>
            <Typography variant="h6" className={classes.content}>
              Max-Capacity: {roomDetails.maxpersons} Persons
            </Typography>
            <Typography variant="subtitle2" className={classes.content}>
              {roomDetails.roomDescription}{" "}
            </Typography>
            <Typography variant="h6" className={classes.roomPrice}>
              ${roomDetails.roomPrice}
            </Typography>
            <Link
              to={{
                pathname: "/room-receipt",
                state: { roomDetails, user },
              }}
            >
              <Button
                className={classes.bookNow}
                variant="contained"
                onClick={handleBookNow}
                color="primary"
              >
                Book Now
              </Button>
            </Link>
          </Grid>
        </Grid>

        <Container>
          <Grid container>
            <Grid item>
              <Paper elevation={0}>
                <Typography variant="h5" className={classes.extra}>
                  Extras
                </Typography>
                <div className={classes.extraFacilities}>
                  {roomDetails.extraFacilities?.map((item) => (
                    <span className={classes.itemName}>{item}</span>
                  ))}
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </div>
  );
}

export default RoomDetails;
