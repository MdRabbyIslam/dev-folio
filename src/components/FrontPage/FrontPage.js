import React from "react";
import "./FrontPage.css";
// import Nav from "../Nav/Nav";
import ParticlesBg from "particles-bg";
import {
  Box,
  Button,
  createMuiTheme,
  IconButton,
  makeStyles,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import MyLinks from "../Shared/MyLinks";

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

const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        color: "white",
        "&:hover": {
          backgroundColor: "$labelcolor",
          color: "royalBlue",
        },
      },
    },
  },
});

const FrontPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    history.push("/home");
  };
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Box className={classes.typographyGroup}>
          <div>
            <Typography variant="h2">
              Hello I'm <span style={{ color: "royalblue" }}>Rabby Islam</span>
            </Typography>
            <Typography variant="h4">I Am A Junior Web Developer</Typography>
          </div>
          <MyLinks></MyLinks>
          <button onClick={handleClick} className="workBtn">
            View my work
          </button>
        </Box>
        <ParticlesBg type="lines" bg={true} />
      </div>
    </ThemeProvider>
  );
};

export default FrontPage;
