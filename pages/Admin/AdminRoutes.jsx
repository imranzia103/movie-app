import React from "react";

import { Navigate, Outlet } from "react-router";

import { useSelector } from "react-redux";

const AdminRoutes = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo && userInfo ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoutes;
