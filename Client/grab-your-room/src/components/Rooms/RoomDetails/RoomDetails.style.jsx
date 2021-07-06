import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  roomDetailsBannerContainer: {
    position: "relative",
    width: "100%",
    height: "30rem",
    marginTop: "1px",
  },
  roomDetailsBannerImage: {
    backgroundImage:
      "url('https://www.theramblehotel.com/wp-content/uploads/2017/12/Ramble-King-Room-banner-2.jpg')",
    backgroundSize: "100% 100%",
    width: "100%",
    height: "100%",
  },
  backToRoomsDiv: {
    position: "absolute",
    textAlign: "center",
    width: "95% ",
    marginLeft: "2rem",
    bottom: "10%",
    [theme.breakpoints.down("md")]: {
      bottom: "10%",
      marginLeft: "auto",
    },
  },
  backToRooms: {
    boxShadow: "none",
    borderRadius: "2px",
    fontFamily: "Play, sans-serif",
    marginTop: "28%",
    backgroundColor: "#6495ED",
  },
  roomCategory: {
    textAlign: "left",
    marginTop: "2.3rem",
    fontSize: "2.2rem",
    // backgroundColor:"rgba(100, 149, 237,0.5)",
    fontFamily: "Play, sans-serif",
  },
  content: {
    marginTop: "0.8rem",
    fontFamily: "Play, sans-serif",
  },
  carousels: {
    margin: "3rem 0 2rem 0",
    borderRadius: "5px",
    width: "95%",
  },
  carouselsImage: {
    width: "100%",
    height: "52vh",
    borderRadius: "4px",
  },
  roomPrice: {
    marginTop: "3rem",
    fontFamily: "Play, sans-serif",
  },
  bookNow: {
    margin: "-2rem 0 2rem 0",
    float: "right",
    borderRadius: "2px",
    boxShadow: "none",
    fontFamily: "Play, sans-serif",
    backgroundColor: "#6495ED",
  },
  extra: {
    fontFamily: "Play, sans-serif",
    marginBottom: "1rem",
  },
  extraFacilities: {
    marginBottom: "2rem",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  itemName: {
    padding: "0.6rem",
    fontFamily: "Play, sans-serif",
    width: "auto",
    "&:hover": {
      border: "1px solid #6ca0dc",
      borderRadius: "25px",
      color: "white",
      cursor: "pointer",
      backgroundColor: "rgb(63,81,181)",
    },
  },
}));
