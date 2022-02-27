import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
const Config = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
};

export default Config;
