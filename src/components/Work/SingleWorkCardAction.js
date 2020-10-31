import { Button, CardActions, IconButton, makeStyles } from "@material-ui/core";
import { LanguageRounded, GitHub } from "@material-ui/icons";
// import  from "@material-ui/icons/GitHub";

import React from "react";
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

const SingleWorkCardAction = ({ handleClick, github, liveSite, backbtn }) => {
  const classes = useStyles();
  return (
    <CardActions className={classes.root}>
      <a href={github} target="_blank">
        <IconButton aria-label="github link">
          <GitHub />
        </IconButton>
      </a>
      <a href={liveSite} target="_blank">
        <IconButton aria-label="live website link">
          <LanguageRounded />
        </IconButton>
      </a>
      {backbtn ? (
        <Button onClick={handleClick} variant="outlined" color="primary">
          Back
        </Button>
      ) : (
        <Button onClick={handleClick} variant="outlined" color="primary">
          Details
        </Button>
      )}
    </CardActions>
  );
};

export default SingleWorkCardAction;
