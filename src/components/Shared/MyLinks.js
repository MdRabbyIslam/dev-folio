import { createMuiTheme, IconButton, ThemeProvider } from "@material-ui/core";
import { Facebook, GitHub, LinkedIn } from "@material-ui/icons";
import React from "react";

const MyLinks = () => {
  return (
    //     <ThemeProvider theme={theme}>
    <div>
      <a href="https://github.com/Rabby-sopno" rel="noreferrer" target="_blank">
        <IconButton>
          <GitHub fontSize="large" />
        </IconButton>
      </a>
      <a
        href="https://www.linkedin.com/in/rabby-islam-4579a4164/"
        target="_blank"
        rel="noreferrer"
      >
        <IconButton>
          <LinkedIn fontSize="large" />
        </IconButton>
      </a>
      <a
        href="https://www.facebook.com/heartlessboy.rabby.7"
        rel="noreferrer"
        target="_blank"
      >
        <IconButton>
          <Facebook fontSize="large" />
        </IconButton>
      </a>
    </div>
    //     </ThemeProvider>
  );
};

export default MyLinks;
