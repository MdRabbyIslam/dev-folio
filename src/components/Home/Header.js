// import classes from "*.module.css";
import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import home from "../../Images/home.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100vw",
    height: "90vh",
  },
  buttonsBox: {
    display: "flex",
    marginTop: "30px",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    width: "40%",
    fontSize: 20,
  },
  typographyBox: {
    //     display: "flex",
    //     justifyContent: "space-around",
    //     flexDirection: "column",
    margin: "0 auto",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box style={{ margin: "auto" }}>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={12} md={6} lg={7}>
            <img src={home} style={{ width: "100%", height: "100%" }} alt="" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={5} className={classes.title}>
            <Box>
              <Typography variant="h2">
                Hey, <br /> I am Rabby Islam
              </Typography>
              <Typography variant="h4">Hey, I am Web Developer</Typography>
            </Box>
            <Box className={classes.buttonsBox}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Hire me
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Resume
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;
