import { Container, Grid, Paper, Typography } from "@material-ui/core";
import moment from "moment";
import React from "react";
import DataPersistContext from "../../../Context/StateContext";
import Navbar from "../../Navbar/Navbar";
import { useStyles } from "./RoomReceipt.styles";

function RoomReceipt(props) {
  console.log("Props:", props);
  const classes = useStyles();
  const data = props.location.state;

  // Context Api way
  const { usersDataValue } = React.useContext(DataPersistContext);
  const [userValues, setUserValues] = usersDataValue;

  const dateFormat = "YYYY-MM-DD";
  let parseCheckInDateFormat = moment(userValues.checkIn).format(dateFormat);
  let parseCheckOutDateFormat = moment(userValues.checkOut).format(dateFormat);
  
  return (
    <div>
      <Navbar />
      <Container>
        <Grid>
          <div className={classes.paper}>
            <Paper
              className={classes.paperContent}
              elevation={1}
              style={{ backgroundColor: "rgba(248,244,255,0.5)" }}
            >
              <Grid item>
                <Typography>
                  <img
                    src={process.env.PUBLIC_URL + "/Logo.png"}
                    style={{
                      width: "250px",
                      height: "100px",
                      marginTop: "-1.2rem",
                    }}
                    alt=""
                  />
                </Typography>
                <Typography
                  variant="h5"
                  className={`${classes.userText} ${classes.userTextStyle}`}
                >
                  User Details
                </Typography>
                <Typography
                  variant="h3"
                  className={`${classes.userText} ${classes.roomCategory}`}
                  style={{ fontSize: "30px" }}
                >
                  {data.roomDetails.roomCategory}
                </Typography>

                <Container>
                  <p className={classes.userDetails}>
                    {/* {data.user.firstName} {data.user.lastName} */}
                    {userValues.firstName} {userValues.lastName}
                  </p>
                  <p className={classes.roomDetails}>
                    <b>Room Size: </b>
                    {data.roomDetails.roomSize} SQFT
                  </p>
                  <p className={classes.roomDetails}>
                    <b>Price:</b> ${data.roomDetails.roomPrice}
                  </p>
                  <div>
                    <p
                      className={`${classes.checkInDetails} ${classes.userTextStyle}`}
                    >
                      Check In Details
                    </p>
                    <p className={classes.roomDetails}>
                      <b>Check In Date:</b> {parseCheckInDateFormat}
                    </p>
                    <p className={classes.roomDetails}>
                      <b>Check Out Date:</b> {parseCheckOutDateFormat}
                    </p>
                  </div>
                </Container>
              </Grid>
            </Paper>
          </div>
        </Grid>
      </Container>
    </div>
  );
}

export default RoomReceipt;
