import React from "react";
import { Routes, Route } from "react-router-dom";
import CardActivities from "../Components/CardActivities";
import Home from "../Components/Home";
import Packages from "../Pages/Packages";
import Footer from "../Components/Footer";
import PrivateRoute from "./PrivateRoute";
import Destination from "../Components/Destination";
import Address from "../Components/Payment/address";
import Payment from "../Components/Payment/payment";
import Load from "../Components/Payment/load";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/packages" element={<Packages />} />

      <Route path="/destinations" element={<Destination />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/address" element={<Address />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/load" element={<Load />} />
    </Routes>
  );
};

export default AllRoutes;
