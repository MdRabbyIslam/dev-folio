import React from "react";
import {
  AppBar,
  Box,
  Button,
  Hidden,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Link } from "react-router-dom";
import SideDrawer from "./SideDrawer";

const navLinks = [
  { title: `Home`, path: `/home` },
  { title: `Blog`, path: `/blog` },
  { title: `Portfolio`, path: `/portfolio` },
  { title: `contact`, path: `/contact` },
];

const useStyles = makeStyles({
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "white",
  },
  logoText: {
    fontSize: "20px",
  },
});

const Nav = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg" className={classes.navDisplayFlex}>
          {/* <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large"></Home>
          </IconButton> */}
          <List>
            <Link to="/home" className={classes.linkText}>
              <Button
                variant="text"
                color="inherit"
                size="large"
                className={classes.logoText}
              >
                DEVRABBY
              </Button>
            </Link>
          </List>

          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <Link to={path} key={title} className={classes.linkText}>
                  <ListItem>
                    <ListItemText primary={title} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Hidden>

          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
