import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
// import { services } from "../../Data";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Service = ({ service }) => {
  const classes = useStyles();
  console.log(service);

  return (
    <Grid item md={3} style={{ marginBottom: "20px", maxHeight: "500px" }}>
      <Card className={classes.root}>
        <CardActionArea>
          <img
            style={{ maxWidth: "180px", maxHeight: "150px" }}
            src={service.photo}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {service.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {service.discription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Service;
