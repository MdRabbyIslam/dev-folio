import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import FrontPage from "./components/FrontPage/FrontPage";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";

const theme = createMuiTheme({
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
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
