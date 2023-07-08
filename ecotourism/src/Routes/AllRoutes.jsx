import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Components/Home";
import Packages from "../Pages/Packages";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/packages" element={<Packages />} />
    </Routes>
  );
};

export default AllRoutes;
