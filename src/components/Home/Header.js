// import classes from "*.module.css";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import home from "../../Images/home.png";
import ParticlesBg from "particles-bg";

const useStyles = makeStyles({
  root: {
    display: "flex",
    width: "100vw",
    minHeight: "90vh",
  },
  buttonsBox: {
    display: "flex",
    marginTop: "30px",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    width: "100%",
    fontSize: 20,
  },
  typographyBox: {
    margin: "0 auto",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  aboutContainer: {
    flexDirection: "row",
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
              <Typography variant="h4">I am Web Developer</Typography>
            </Box>
            <Box className={classes.buttonsBox}>
              <Link
                to="/contact"
                style={{ width: "40%", textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Hire me
                </Button>
              </Link>
              <a
                style={{ width: "40%" }}
                href="https://drive.google.com/uc?export=download&id=16DO7zNSYrMq00Pqg6hAPa0Yvp9yFOIPf"
                download="my_resume.pdf"
              >
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Resume
                </Button>
              </a>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <ParticlesBg type="polygon" num={5} bg={true} />
    </Box>
  );
};

export default Header;
