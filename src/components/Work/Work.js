import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { works } from "../../Data";
import Nav from "../Nav/Nav";
import SingleWork from "./SingleWork";

const useStyles = makeStyles({
  typography: {
    margin: "30px 0",
  },
});

const Work = () => {
  const classes = useStyles();
  return (
    <div>
      <Nav></Nav>
      <Container style={{ textAlign: "center" }}>
        <Typography variant="h2" color="primary" className={classes.typography}>
          WORKS
        </Typography>
        <Grid container>
          {works.map((work) => (
            <SingleWork
              style={{ marginBottom: "100px" }}
              work={work}
              key={work.title}
            ></SingleWork>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Work;
