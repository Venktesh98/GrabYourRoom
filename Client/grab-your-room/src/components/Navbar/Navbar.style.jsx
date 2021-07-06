import { makeStyles } from "@material-ui/core/styles";
const font = "Play, sans-serif";

export const drawerWidth = 250;
export const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: font,
  },
  appBar: {
    backgroundColor: "#6495ed",
  },
  appBarContent: {
    marginRight: theme.spacing(1.5),
    fontFamily: font,
    "&:hover": {
      cursor: "pointer",
    },
  },
  navLinks: {
    textDecoration: "none",
    color: "white",
    fontFamily: font,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  links: {
    margin: `${theme.spacing(1.1)}px ${theme.spacing(0)}px ${theme.spacing(
      0
    )}px ${theme.spacing(6.2)}px`,
  },
  closeMenuButton: {
    marginRight: "auto",
    marginLeft: 0,
  },
  navbarDrawerLinks: {
    fontSize: "16px",
    paddingTop: "10px",
    textDecoration: "none",
    "&:hover": {
      color: "#446ccf",
      cursor: "pointer",
    },
  },
  drawerLinks: {
    color: "black",
    fontSize:"18px"
  },
}));
