import React from "react";
import Separator from "./Separator";
import { ArrowLeft, Clock, User } from "lucide-react";
import Header from "./Header";
import { capitalizeFirstLetter, formatMinutes } from "../utils/utils";

const RecipeDetail = ({ data, close }) => {
  return (
    <>
      <Header />
      {data ? (
        <div className="recipe-info-container mx-auto mb-10 flex w-full max-w-[1400px] flex-col gap-10 px-10">
          <button
            className="transition duration-300 hover:text-primary"
            onClick={close}
          >
            <ArrowLeft />
          </button>
          <div className="recipe-meta-details mb-5 flex items-center justify-between">
            <div className="recipe-detail-title text-2xl font-bold text-primary">
              {data.title}
            </div>
            <div className="recipe-meta flex items-center gap-6 text-sm text-gray">
              <div className="recipe-time flex items-center gap-2">
                {/* <Clock /> <span>{data.cookingMinutes || "15"} Mins</span> */}
                <Clock /> <span>{formatMinutes(data.readyInMinutes)} Mins</span>
              </div>
              <div className="recipe-servings flex items-center gap-1">
                <User />
                <span>{data.servings} Servings</span>
              </div>
            </div>
          </div>
          <div className="recipe-info-top flex justify-between gap-10">
            <div className="image-container">
              <img
                src={data.image}
                alt={data.title}
                className="shadow-image h-[450px] w-full rounded-md object-cover"
              />
            </div>
            <div className="recipe-info-ingredients min-h-60 w-2/5 rounded-lg bg-white px-10 py-4 shadow-md">
              <div className="recipe-info-ingredients-title py-3 text-xl font-bold text-primary">
                Ingredients
              </div>
              <Separator />
              <div className="recipe-ingredient-items mb-4 mt-10 flex flex-col gap-3">
                {data.extendedIngredients
                  .slice(1, 7)
                  .map((ingredient, index) => (
                    // <>
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
                    // </>
                  ))}
              </div>
            </div>
          </div>
          <div className="recipe-info-bottom flex shadow-md">
            <div className="recipe-info-instructions-wrapper flex h-fit flex-col rounded-lg bg-white px-8 py-6 shadow-md">
              <div className="recipe-info-instructions-title py-2 text-2xl font-bold text-primary">
                Instructions
              </div>
              <Separator />
              <div className="recipe-instructions">
                {data.analyzedInstructions[0].steps.map((item, index) => (
                  <>
                    <div className="mt-8 flex items-center gap-6" key={index}>
                      <div className="instruction-number flex h-6 w-6 items-center justify-center rounded-full bg-primary p-4 text-gray-light">
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
