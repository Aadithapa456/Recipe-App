import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="auth-container flex min-h-screen items-center justify-center">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
