import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Login from "../Login/login";
import Logout from "../Login/logout";
import Register from "../Register";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}