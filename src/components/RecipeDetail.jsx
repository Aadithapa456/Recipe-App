import React from "react";
import Separator from "./Separator";
import { ArrowLeft, Clock, User } from "lucide-react";
const capitalizeFirstLetter = (val) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
};

const RecipeDetail = ({ data, close }) => {
  return (
    <>
      {data ? (
        <div className="recipe-info-container mx-auto flex max-w-[1300px] flex-col gap-10">
          <button
            className="transition duration-300 hover:text-primary"
            onClick={close}
          >
            <ArrowLeft />
          </button>
          <div className="recipe-info-top">
            <div className="recipe-details mb-10 flex items-center justify-between">
              <div className="recipe-detail-title text-2xl font-bold text-primary">
                {data.title}
              </div>
              <div className="recipe-meta flex items-center gap-6 text-sm text-gray">
                <div className="recipe-time flex items-center gap-2">
                  <Clock /> <span>{data.cookingMinutes}</span>
                </div>
                <div className="recipe-servings flex items-center gap-1">
                  <User />
                  <span>{data.servings} Servings</span>
                </div>
              </div>
            </div>
            <div className="image-container">
              <img
                src={data.image}
                alt=""
                className="h-[400px] w-full object-cover"
              />
            </div>
          </div>
          <div className="recipe-info-bottom flex gap-10">
            <div className="recipe-info-ingredients h-fit w-4/5 rounded-lg px-6 py-4 shadow-md">
              <div className="recipe-info-ingredients-title text-lg font-bold text-primary">
                Ingredients
              </div>
              <div className="recipe-items">
                {data.extendedIngredients.map((ingredient, index) => (
                  <>
                    <div
                      className="recipe-info-item mt-4 flex justify-between gap-10 p-1"
                      key={index}
                    >
                      <div className="item-name">
                        {capitalizeFirstLetter(ingredient.name)}
                      </div>
                      <div className="item-quantity">
                        {ingredient.amount}
                        {ingredient.unit}
                      </div>
                    </div>
                    <Separator />
                  </>
                ))}
              </div>
            </div>
            <div className="recipe-info-instructions-wrapper flex h-fit flex-col rounded-lg px-4 py-3 shadow-md">
              <div className="recipe-info-instructions-title px-4 text-xl font-bold text-primary">
                Instructions
              </div>
              <div className="recipe-instructions">
                {data.analyzedInstructions[0].steps.map((item, index) => (
                  <>
                    <div className="mt-10 flex items-center gap-5" key={index}>
                      <div className="instruction-number flex h-10 w-10 items-center justify-center rounded-full bg-primary p-4 text-white">
                        {index + 1}
                      </div>
                      <div className="instruction">{item.step}</div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Loading Data"
      )}
    </>
  );
};

export default RecipeDetail;
