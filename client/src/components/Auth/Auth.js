import React, { useState } from "react";
import {
  Avatar,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Input from "./Input";

export default function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const isSignedUp = true;
  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">
          {isSignedUp ? "Sign Up" : "Sign In"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignedUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  onChange={handleChange}
                  half
                />
                <Input
                  name="lastName"
                  label="Last name"
                  onChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignedUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
              ></Input>
            )}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            {isSignedUp ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container justify="flex-end">
              <Grid item>
                  <Button >

                  </Button>
              </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
