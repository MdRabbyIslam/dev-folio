import React from "react";
import {
  AppBar,
  Button,
  Hidden,
  makeStyles,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SideDrawer from "./SideDrawer";
import { navLinks } from "../../Data";

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
          <List>
            <Link to="/" className={classes.linkText}>
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
                <>
                  {title !== "resume" ? (
                    <Link to={path} key={title} className={classes.linkText}>
                      <ListItem>
                        <ListItemText primary={title} />
                      </ListItem>
                    </Link>
                  ) : (
                    <a
                      className={classes.linkText}
                      href="https://drive.google.com/uc?export=download&id=16DO7zNSYrMq00Pqg6hAPa0Yvp9yFOIPf"
                      download="my_resume.pdf"
                    >
                      <ListItem>
                        <ListItemText primary={title} />
                      </ListItem>
                    </a>
                  )}
                </>
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
