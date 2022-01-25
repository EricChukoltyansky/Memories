import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Container } from "@mui/material";
import { Navbar } from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

export default function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
        </Routes>
      </Container>
    </Router>
  );
}
