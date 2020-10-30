import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import FrontPage from "./components/FrontPage/FrontPage";
import Home from "./components/Home/Home";

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
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
