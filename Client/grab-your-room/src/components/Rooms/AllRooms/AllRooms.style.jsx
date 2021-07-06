import { makeStyles } from "@material-ui/core";
// import Image from "../../assets/images/allRoomsbanner.jpg"

export const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    width: "100%",
    height: "37rem",
    marginTop: "1px",
    position: "relative",
    // textAlign:"right"
    // max-width: 800px;
    // margin: 0 auto;
  },
  allRoomsbanner: {
    // backgroundImage: `url(${Image})`,
    // backgroundImage: "url('https://wallpapers.net/maldives-hotel-room-hd-wallpaper/download/5120x2160.jpg')",
    // backgroundImage: "url('https://www.theramblehotel.com/wp-content/uploads/2017/12/Ramble-King-Room-banner-2.jpg')",
    backgroundImage:
      "url('https://cdn.decoist.com/wp-content/uploads/2017/04/Blue-bedroom-mixed-with-white-and-cream-elements.jpeg')",
    backgroundSize: "100% 100%",
    width: "100%",
    height: "100%",
  },
  textContent: {
    position: "absolute",
    background: "rgba(65,105,225,0.6)" /* Blue background with 0.6 opacity */,
    color: "#f1f1f1",
    width: "25%",
    padding: "22px",
    top: "5vh",
    right: 0,
    textAlign: "right",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
  backToSearchDiv: {
    textAlign: "center",
    width: "100% ",
    marginTop: "1px",
  },
  backToSearch: {
    position: "static",
    boxShadow: "none",
    borderRadius: "2px",
    fontFamily: "Play, sans-serif",
    backgroundColor: "#6495ED",
  },
  roomTitle: {
    fontFamily: "Lora, serif",
  },
  tagline: {
    fontFamily: "Courgette, cursive",
  },
  roomTitleContent: {
    textAlign: "center",
    margin: "3rem 0 -3.5rem 0",
    fontFamily: "Lora, serif",
    fontSize: "30px",
  },
}));
