import React from "react";
import { Routes, Route } from "react-router-dom";
import CardActivities from "../Components/CardActivities";
import Home from "../Components/Home";
import Packages from "../Pages/Packages";
import Footer from "../Components/Footer";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/activities" element={<CardActivities />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  );
};

export default AllRoutes;
