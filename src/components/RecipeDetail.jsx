import React from "react";
import Separator from "./Separator";
import { ArrowLeft, Clock, User } from "lucide-react";
import { formatMinutes } from "../utils/helpers";
import Label from "./Label";
import Instructions from "./Instructions";
import Ingredients from "./Ingredients";

const RecipeDetail = ({ data, close }) => {
  return (
    <>
      {data ? (
        <div className="recipe-info-container mx-auto mb-10 flex w-full max-w-[1400px] flex-col gap-10 px-2 lg:px-10">
          <button
            className="transition duration-300 hover:text-primary"
            onClick={close}
          >
            <ArrowLeft />
          </button>
          <div className="recipe-meta-details mb-5 flex flex-wrap items-center justify-between">
            <div className="recipe-detail-title text-2xl font-bold text-primary">
              {data.title}
            </div>
            <div className="recipe-meta flex items-center gap-6 text-sm text-gray">
              <div className="recipe-time flex items-center gap-2">
                <Clock /> <span>{formatMinutes(data.readyInMinutes)} Mins</span>
              </div>
              <div className="recipe-servings flex items-center gap-1">
                <User />
                <span>{data.servings} Servings</span>
              </div>
            </div>
          </div>
          <div className="recipe-info-top flex flex-col justify-between gap-10 lg:flex-row">
            <div className="image-container">
              <img
                src={data.image}
                alt={data.title}
                className="shadow-image h-[450px] w-full rounded-md object-cover"
              />
            </div>
            <Ingredients ingredients={data.extendedIngredients.slice(1, 7)} />
          </div>
          <div className="recipe-info-bottom flex flex-col rounded-lg shadow-md">
            <Instructions instructions={data.analyzedInstructions[0].steps} />
            <Separator />
            <div className="labels grid-auto-fill-detail bg-white px-6 py-4">
              {data.dishTypes.map((label, index) => (
                <Label label={label} key={index} />
              ))}
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
