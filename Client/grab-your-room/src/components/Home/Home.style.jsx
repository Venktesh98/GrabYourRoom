import { makeStyles } from "@material-ui/core";
import Image from "../../assets/images/bannerImage.jpg";
// import Image from "../../assets/images/banneroom.jpg";
const font = "Play, sans-serif";
const drawerWidth = 250;

export const useStyles = makeStyles((theme) => ({
  homeImage: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "100% 100%",
    width: "100%",
    height: "100vh",
    position: "relative",
  },
  menuIcon: {
    [theme.breakpoints.down("md")]: {
      color: "white",
      marginLeft: "2%",
      cursor: "pointer",
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
  mainContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
      alignItems: "center",
    },
  },
  mainDrawerContent: {
    [theme.breakpoints.down("lg")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      lineHeight: "2rem",
    },
  },
  navLinks: {
    textDecoration: "none",
    color: "black",
    fontFamily:font
  },
  leftPane: {
    marginTop: "2%",
    "& a": {
      color: "white",
      textDecoration: "none",
      marginLeft: theme.spacing(5),
      letterSpacing: theme.spacing(0.5),
      fontFamily: font,
    },
    "& a:hover": {
      color: "#89cff0",
      cursor: "pointer",
    },
  },
  logoDiv: {
    marginTop: "2%",
    "& a": {
      color: "white",
      textDecoration: "none",
      textAlign: "center",
      fontSize: "1.5rem",
      fontFamily: font,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "2%",
    },
  },
  rightPane: {
    marginTop: "2%",
    "& a": {
      color: "white",
      textDecoration: "none",
      marginRight: theme.spacing(5),
      letterSpacing: theme.spacing(0.5),
      fontFamily: font,
    },
    "& a:hover": {
      color: "#89cff0",
      cursor: "pointer",
    },
  },
  BoxContent: {
    position: "relative",
    maxWidth: "20%",
    textAlign: "center",
    marginTop: "-15rem",
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  boxContentText: {
    fontFamily: font,
  },
  bookNow: {
    // marginLeft: "37rem",
    marginTop: "2%",
    borderRadius: "3px",
    backgroundColor: "#4169e1",
    cursor: "pointer",
    fontFamily: font,
  },
  bookNowContent: {
    textDecoration: "none",
    color: "white",
  },
}));
