import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-gray-700 text-2xl font-bold">No Recipes Found</h1>
        <p className="text-gray-500 mt-2">
          Try adjusting your search or filter to find what you're looking for.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
