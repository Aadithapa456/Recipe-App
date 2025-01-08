import React from "react";

const Label = ({ label }) => {
  return (
    <div className="shadow-xs flex items-center justify-center rounded-lg bg-gray-light px-3 py-1.5 text-xs">
      {label}
    </div>
  );
};

export default Label;
