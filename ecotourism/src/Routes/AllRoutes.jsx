import React from "react";
import { Routes, Route } from "react-router-dom";
import CardActivities from "../Components/CardActivities";
import Home from "../Components/Home";
import Packages from "../Pages/Packages";
import Footer from "../Components/Footer";
import PrivateRoute from "./PrivateRoute";
import Destination from "../Components/Destination";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/packages" element={<Packages />} />

      <Route path="/destinations" element={<Destination />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  );
};

export default AllRoutes;
