import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  inputTextField: {
    width: "100%",
    marginTop: "3%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    // backgroundColor:"black"
  },
}));
