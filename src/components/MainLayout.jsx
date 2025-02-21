import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Toast from "./Toast";
import SideBar from "./SideBar";
import { ToastContext } from "../context/ToastContext";

const MainLayout = () => {
  const { showToast, toastMessage } = useContext(ToastContext);

  return (
    <>
      <div className="app-container flex min-h-screen">
        <div className="flex flex-1">
          <div className="sidebar mr-6 lg:mr-16">
            <SideBar />
          </div>
          <div className="main-content relative mr-1 mt-10 flex flex-1 flex-col gap-8 lg:mr-6">
            <Header />
            <Outlet />
          </div>
        </div>
      </div>
      {showToast && <Toast message={toastMessage} />}
    </>
  );
};

export default MainLayout;
