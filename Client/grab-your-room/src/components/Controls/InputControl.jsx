import { TextField } from "@material-ui/core";
import React from "react";
import { useStyles } from "./InputControl.style";

function InputControl({
  id,
  label,
  variant,
  name,
  onChange,
  value,
  error = null,
}) {
  const classes = useStyles();
  return (
    <div>
      <TextField
        id={id}
        label={label}
        variant={variant}
        name={name}
        value={value}
        onChange={onChange}
        className={classes.inputTextField}
        {...(error && { error: true, helperText: error })}
      />
    </div>
  );
}

export default InputControl;
