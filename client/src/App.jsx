import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";

export default function App() {
  <BrowserRouter>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/auth' exact element={<Auth/>} />
      </Routes>
    </Container>
  </BrowserRouter>;
}
