import React from "react";

let pages = [1, 2, 3];
const Pagination = ({ handlePageChange }) => {
  const [activeButton, setActiveButton] = React.useState(1);
  return (
    <div className="mb-4 mt-10 flex items-center justify-center gap-4">
      {pages.map((item, index) => (
        <button
          key={index}
          className={`pagination-button border-gray-100 border px-4 py-2 transition duration-300 ${
            activeButton === item
              ? "bg-primary text-white"
              : "text-gray-700 hover:bg-gray-300 bg-white"
          }`}
          onClick={() => {
            handlePageChange(item);
            setActiveButton(item);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
