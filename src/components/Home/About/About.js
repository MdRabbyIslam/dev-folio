// import { Box, Container } from "@material-ui/core";
import React from "react";
import "./About.css";
import hello from "../../../Images/hariporter.png";
import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontWeight: "bold",
        backgroundColor: "transparent",
        margin: "10px",
        "&:hover": {
          backgroundColor: "white",
          color: "black",
        },
      },
    },
  },
});

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    textAlign: "center",
    height: "100%",
    paddingTop: "2%",
    boxSizing: "border-box",
    margin: 0,
  },
  heading: {
    marginBottom: "25%",
    fontWeight: "bold",
    color: "royalBlue",
  },
  title: {
    color: "white",
    paddingBottom: "20px",
  },
  imgStyle: {
    width: "200px",
  },
  imgContainer: {},
  button: {
    width: "40%",
    fontSize: 16,
    color: "white",
    borderColor: "white",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: "30px",
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root}>
        <Typography variant="h2" className={classes.heading}>
          ABOUT ME
        </Typography>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-around"
          style={{ backgroundColor: "royalblue" }}
        >
          <Grid item md={5} sm={11} style={{ paddingBottom: "20%" }}>
            <Box>
              <Typography variant="h5" className={classes.title}>
                Welcome To Dev Rabby
              </Typography>
              <Typography style={{ textAlign: "justify", color: "white" }}>
                Hello, My name is Rabby Islam. I am a Junior Web developer. I am
                vary passionate to my work. I never give up untill work done. I
                dont want to present myself in front of you by my previous work.
                I want to prove myself with your project. waiting for your
                calling... <br />
              </Typography>
              <Box className={classes.btnContainer}>
                <Button variant="outlined" className={classes.button}>
                  Hire Me
                </Button>
                <Button variant="outlined" className={classes.button}>
                  My Resume
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item md={5} sm={11} style={{ paddingBottom: "20%" }}>
            <div style={{ marginTop: "-20vh" }}>
              <img
                style={{ width: "220px", display: "block", marginLeft: "20%" }}
                src={hello}
                alt=""
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default About;
