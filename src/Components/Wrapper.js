import React, { useState } from "react";
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
  },
}));

function Wrapper() {
  const [openDrawer, toggleDrawer] = useState(true);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              bwell
            </Typography>
            <Button color="inherit">{`View your notifications & to-dos`}</Button>
            <IconButton
              edge="start"
              className={classes.profileIcon}
              color="inherit"
              aria-label="profileIcon"
            >
              <AccountCircleIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </header>
      <MUIDrawer
        anchor={"left"}
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        colorTransparent
      ></MUIDrawer>
    </div>
  );
}

export default Wrapper;
