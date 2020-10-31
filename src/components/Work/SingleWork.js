import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ReactCardFlip from "react-card-flip";
import { Container, Grid } from "@material-ui/core";
import SingleWorkCardAction from "./SingleWorkCardAction";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: "20px 0",
    color: "royalBlue",
  },
  body1: {
    paddingBottom: "10px",
    textAlign: "justify",
  },
}));

const SingleWork = ({ work }) => {
  console.log(work);
  const classes = useStyles();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Grid item lg={3} md={4} sm={6} xs={12} style={{ height: "350" }}>
      <Container>
        <div>
          <ReactCardFlip
            isFlipped={isFlipped}
            containerStyle={{
              height: "380px",
              marginBottom: "20px",
            }}
          >
            <Card variant="outlined" style={{ height: "100%" }}>
              <CardContent>
                <img
                  style={{ width: "100%", height: "200px" }}
                  src={work.photo}
                  alt=""
                />
                <Typography variant="h6" className={classes.typography}>
                  {work.title}
                </Typography>
              </CardContent>
              <SingleWorkCardAction
                handleClick={handleClick}
                github={work.github}
                liveSite={work.liveSite}
                backbtn={false}
              ></SingleWorkCardAction>
            </Card>

            <Card variant="outlined" style={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" className={classes.typography}>
                  {work.title}
                </Typography>
                <Typography variant="body1" className={classes.body1}>
                  {work.discription}
                </Typography>
                <Typography variant="body1" className={classes.body1}>
                  Technology: {work.technology}
                </Typography>
              </CardContent>
              <SingleWorkCardAction
                handleClick={handleClick}
                github={work.github}
                liveSite={work.liveSite}
                backbtn={true}
              ></SingleWorkCardAction>
            </Card>
          </ReactCardFlip>
        </div>
      </Container>
    </Grid>
  );
};

export default SingleWork;
