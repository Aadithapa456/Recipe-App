import React, { createContext, useState } from "react";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const triggerToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2900);
  };
  return (
    <ToastContext.Provider value={{ toastMessage, showToast, triggerToast }}>
      {children}
    </ToastContext.Provider>
  );
};
