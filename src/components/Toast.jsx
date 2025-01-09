import React from "react";

const Toast = ({ message }) => {
  return (
    <div className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 transform items-center justify-center">
      <div className="animate-fade-in-out rounded-lg border border-gray-light bg-white px-4 py-2 text-center shadow-2xl">
        {message}
      </div>
    </div>
  );
};

export default Toast;
