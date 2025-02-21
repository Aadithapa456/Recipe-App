import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Toast from "./Toast";
import { ToastContext } from "../context/ToastContext";

const AuthLayout = () => {
  const { showToast, toastMessage } = useContext(ToastContext);
  return (
    <div className="auth-container flex min-h-screen items-center justify-center">
      <Outlet />
      {showToast && <Toast message={toastMessage} />}
    </div>
  );
};

export default AuthLayout;
