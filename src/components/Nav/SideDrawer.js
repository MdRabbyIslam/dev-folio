// import {
//   Drawer,
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
//   makeStyles,
// } from "@material-ui/core";
// import { Menu } from "@material-ui/icons";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const SideDrawer = ({ navLinks }) => {
//   console.log(navLinks);
//   const [state, setState] = useState({ right: false });

//   const classes = useStyles();

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }
//     setState({ [anchor]: open });
//   };

//   const sideDrawerList = (anchor) => {
//     <div
//       className={classes.list}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List component="nav">
//         {navLinks.map(({ title, path }) => (
//           <Link to={path} key={title} className={classes.linkText}>
//             <ListItem button>
//               <ListItemText primary={title} />
//             </ListItem>
//           </Link>
//         ))}
//       </List>
//     </div>;
//   };

//   return (
//     <div>
//       <IconButton
//         edge="start"
//         aria-label="menu"
//         onClick={toggleDrawer("right", true)}
//       >
//         <Menu />
//       </IconButton>
//       <Drawer
//         anchor="right"
//         open={state.right}
//         onOpen={toggleDrawer("right", true)}
//         onClose={toggleDrawer("right", false)}
//       >
//         {sideDrawerList("right")}
//       </Drawer>
//     </div>
//   );
// };

// export default SideDrawer;

import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Drawer,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React, { useState } from "react";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  linkText: {
    textDecoration: "none",
    textTransform: "uppercase",
    color: "black",
  },
});

const SideDrawer = ({ navLinks }) => {
  const [state, setState] = useState({ right: false });
  const classes = useStyles();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "shift")
    ) {
      return;
    }
    setState({ [anchor]: open });
  };

  const sideDrawerList = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav">
        {navLinks.map(({ title, path }) => (
          <a href={path} key={title} className={classes.linkText}>
            <ListItem button>
              <ListItemText primary={title} />
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer("right", true)}
      >
        <Menu />
      </IconButton>
      <Drawer
        anchor="right"
        open={state.right}
        onOpen={toggleDrawer("right", false)}
        onClose={toggleDrawer("right", false)}
      >
        {sideDrawerList("right")}
      </Drawer>
    </>
  );
};

export default SideDrawer;
