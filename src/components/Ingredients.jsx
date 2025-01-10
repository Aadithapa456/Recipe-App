import React from "react";
import { capitalizeFirstLetter } from "../utils/helpers";
import Separator from "./Separator";

const Ingredients = ({ ingredients }) => {
  return (
    <div className="recipe-info-ingredients min-h-60 w-full rounded-lg bg-white px-10 py-4 shadow-md lg:w-2/5">
      <div className="recipe-info-ingredients-title py-3 text-xl font-bold text-primary">
        Ingredients
      </div>
      <Separator />
      <div className="recipe-ingredient-items mb-4 mt-10 flex flex-col gap-3">
        {ingredients.map((ingredient, index) => (
          <div
            className="recipe-ingredient-item shadow-xs flex items-center justify-between rounded-lg bg-gray-light px-3 py-2"
            key={index}
          >
            <div className="item-name text-base">
              {capitalizeFirstLetter(ingredient.name)}
            </div>
            <div className="item-quantity text-xs text-gray">
              {ingredient.amount}
              <span> {ingredient.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
