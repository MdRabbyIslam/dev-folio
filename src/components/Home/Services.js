import React from "react";
import { services } from "../../Data";

import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import Service from "./Service";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    padding: "2%",
    margin: "auto",
    textAlign: "center",
  },
  heading: {
    color: "royalBlue",
    marginBottom: "10%",
  },
  serviceContainer: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

const Services = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h2" className={classes.heading}>
        What I Offer
      </Typography>

      <Grid container className={classes.serviceContainer}>
        {services.map((service) => (
          <Service key={services.indexOf(service)} service={service}></Service>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
