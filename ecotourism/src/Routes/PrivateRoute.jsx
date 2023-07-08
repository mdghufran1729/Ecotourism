import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function PrivateRoute({ children }) {
  const isAuthenticated = useSelector((store) => {
    return store.isAuthenticated;
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Login To Continue!",
        confirmButtonText: "Ok",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
    }
  }, [isAuthenticated, navigate]);
  console.log(isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" />;
}
