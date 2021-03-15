import React, { useState } from "react";
import logo from "../assets/logo.png";
import Vector from "../assets/Vector.png";
import {
  AppBar,
  makeStyles,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MUIDrawer from "./MUIDrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "grid",
    gridTemplateAreas: `"header header""drawer content"`,
    gridTemplateColumns: `241px auto`,
    gridTemplateRows: `64px auto`,
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#2E3586",
  },
  content: {
    gridArea: "content",
    background: "#E5E5E5",
  },
  header: {
    flex: "0 1 auto",
    gridArea: "header",
  },
  drawer: {
    gridArea: "drawer",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
}));

function Wrapper({ children }) {
  const [openDrawer, toggleDrawer] = useState(true);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              <img src={logo} alt="bwellLogo" />
            </Typography>
            <Button color="inherit">{`View your notifications & to-dos`}</Button>
            <div className={classes.flexRow}>
              <IconButton
                edge="start"
                className={classes.profileIcon}
                color="inherit"
                aria-label="profileIcon"
              >
                <AccountCircleIcon />
              </IconButton>
              <div className={classes.flexColumn}>
                <Typography variant="body2">Resu Eman</Typography>
                <Typography variant="body2">Your Account</Typography>
              </div>
              <IconButton
                edge="start"
                className={classes.profileIcon}
                color="inherit"
                aria-label="openProfilePopperArrow"
              >
                {/* <DownArrow /> */}
                <img src={Vector} alt="downArrow" />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </header>
      <div className={classes.drawer}>
        <MUIDrawer
          anchor={"left"}
          open={openDrawer}
          onClose={() => toggleDrawer(false)}
          colorTransparent
        />
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
}

export default Wrapper;
