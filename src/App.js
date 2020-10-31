import React from "react";
import "./App.css";
import "fontsource-roboto/500.css"; // All styles included.
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import FrontPage from "./components/FrontPage/FrontPage";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Work from "./components/Work/Work";

const theme = createMuiTheme({
  overrides: {
    MuiIconButton: {
      root: {
        "&:hover": {
          backgroundColor: "$labelcolor",
          color: "royalBlue",
        },
      },
    },
  },
  typography: {
    h2: {
      marginBottom: "10px",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route path="/home" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/portfolio" component={Work} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
