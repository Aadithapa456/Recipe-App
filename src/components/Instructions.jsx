import React from "react";
import Separator from "./Separator";

const Instructions = ({ instructions }) => {
  return (
    <div className="recipe-info-instructions-wrapper flex h-fit w-full flex-col bg-white px-8 py-6 shadow-md">
      <div className="recipe-info-instructions-title py-2 text-2xl font-bold text-primary">
        Instructions
      </div>
      <Separator />
      <div className="recipe-instructions">
        {instructions.map((item, index) => (
          <div className="mt-8 flex items-center gap-6" key={index}>
            <div className="instruction-number flex h-6 w-6 items-center justify-center rounded-full bg-primary p-4 text-gray-light">
              {index + 1}
            </div>
            <div className="instruction">{item.step}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructions;
