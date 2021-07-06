import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  datePicker: {
    width: "25rem",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));
