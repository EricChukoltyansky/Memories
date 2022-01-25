import React from "react";
import { AppBar, Avatar, Toolbar, Typography, Button } from "@mui/material";
// import useStyles from "./styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  //   const classes = useStyles();
  const user = null;

  return (
    <AppBar position="static" color="inherit">
      <div>
        <Typography component={Link} to="/" variant="h2" align="center">
          Memories
        </Typography>
        {/* <img className={classes.image} src={memories} alt="icon" height="60" /> */}
      </div>
      <Toolbar>
        {user ? (
          <div>
            <Avatar></Avatar>
            <img src={user.result.imageUrl} alt={user.result.name} />
            {user.result.name.charAt(0)}
            <Typography variant="h6">{user.result.name}</Typography>
            <Button variant="contained">Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained"></Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
