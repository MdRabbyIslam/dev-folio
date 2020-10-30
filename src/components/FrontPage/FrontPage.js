import React from "react";
import "./FrontPage.css";
// import Nav from "../Nav/Nav";
import ParticlesBg from "particles-bg";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    color: "white",
  },
  typographyGroup: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
});

const FrontPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push("/home");
  };
  return (
    <>
      <div className={classes.root}>
        <Box className={classes.typographyGroup}>
          <div>
            <Typography variant="h2">
              Hello I'm <span style={{ color: "#F15A11" }}>Rabby Islam</span>
            </Typography>
            <Typography variant="h4">I Am A Junior Web Developer</Typography>
          </div>
          <button onClick={handleClick} className="workBtn">
            View my work
          </button>
        </Box>
        <ParticlesBg type="lines" bg={true} />
      </div>
    </>
  );
};

export default FrontPage;
