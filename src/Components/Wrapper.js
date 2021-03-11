import React from "react";
import {
  AppBar,
  makeStyles,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
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
});

function Wrapper() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.title}>
              bwell
            </Typography>
            <Button color="inherit">Notifications</Button>
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
    </div>
  );
}

export default Wrapper;
