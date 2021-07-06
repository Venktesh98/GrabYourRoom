import { makeStyles } from "@material-ui/core";
import Image from "../../assets/images/bannerSearch.jpg";
const font = "Play, sans-serif";

export const useStyles = makeStyles((theme) => ({
  searchText: {
    textAlign: "center",
    fontFamily: font,
  },
  searchBackground: {
    position: "absolute",
    backgroundImage: `url(${Image})`,
    backgroundSize: "100% 100%",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  paperContent: {
    position: "absolute",
    height: "auto",
    padding: "2.5%",
    maxWidth: "100%",
    top: "5%",
    [theme.breakpoints.down("xs")]: {
      padding: "6%",
    },
  },
  searchButton: {
    marginTop: "1rem",
    float: "right",
    textTransform: "capitalize",
    fontFamily: font,
  },
}));
