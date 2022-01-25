import React from "react";
import { Link } from "react-router-dom";
import { AppBarStyled, HeaderStyled } from "../../styles";
import { Toolbar, Typography } from "@mui/material";
import { Button, Avatar } from "@mui/material";

export const Navbar = () => {
  const user = null;
  return (
    <AppBarStyled position="static" color="inherit">
      <div>
        <HeaderStyled component={Link} to="/" variant="h2" align="center">
          Blogs
        </HeaderStyled>
      </div>
      <Toolbar>
        {user ? (
          <div>
            <Avatar alt={user.result.name} src={user.result.imageUrl}>
              {user.result.name.charAt(0).toUpperCase()}
            </Avatar>
            <Typography variant="h6">{user.result.name}</Typography>
            <Button variant="contained" color="secondary">
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBarStyled>
  );
};
