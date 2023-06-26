import React from "react";
import Login from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> */}
      <Route path="/login" element={<Login />} />
      {/* </Route> */}
    </Routes>
  );
}
