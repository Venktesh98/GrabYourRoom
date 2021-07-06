import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5rem",
  },
  card: {
    height: "16.5rem",
    maxWidth: 300,

    "& .hidden-button": {
      display: "none",
    },
    "&:hover .hidden-button": {
      position: "absolute",
      display: "block",
      // backgroundColor: "rgba(100,149,237,0.5)",
      backgroundColor: "rgba(0,0,0,0.4)",
      color: "white",
      fontWeight: "600",
      padding: "10px",
      borderRadius: "5px",
      margin: "-7rem 0 0 7rem",
      fontFamily: "Play, sans-serif",
    },
    "&:hover .roomName": {
      backgroundColor: "rgba(0,0,0,0.5)",
      height: "100px",
      color: "white",
    },
  },
  roomPrice: {
    textAlign: "center",
    fontSize: "20px",
    marginTop: "1rem",
  },
  roomCategory: {
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "Play, sans-serif",
  },
  noRooms:{
    fontSize:"25px",
    textAlign:"center",
    marginLeft:"32rem",
  }
}));
