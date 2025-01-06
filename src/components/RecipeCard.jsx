import { Clock, Heart, User } from "lucide-react";
import React from "react";
import { formatMinutes } from "../utils/utils";
const RecipeCard = ({ data, onclick }) => {
  return (
    <div
      className="recipe-card-container flex max-w-xs flex-col gap-4 overflow-hidden rounded-md bg-white shadow-md"
      onClick={() => onclick(data)}
    >
      <div className="recipe-card-image">
        <img src={`${data.image}`} alt="" className="" />
      </div>
      <div className="recipe-card-main flex flex-col gap-3 px-4">
        <div className="recipe-label grid-auto-fill">
          {data.dishTypes.map((label, index) => (
            <div
              className="shadow-xs flex items-center justify-center rounded-lg bg-gray-light px-3 py-1.5 text-xs"
              key={index}
            >
              {label}
            </div>
          ))}
        </div>
        <div className="recipe-main-details">
          <div className="recipe-title py-2 text-lg font-bold">
            {data.title}
          </div>
          <div
            className="recipe-description mt-auto text-xs text-gray"
            dangerouslySetInnerHTML={{ __html: data.summary.slice(0, 201) }}
          ></div>
        </div>
      </div>
      <div className="recipe-footer mb-4 mt-auto flex items-center justify-between px-4">
        <div className="recipe-footer-left flex items-center gap-2">
          <div className="recipe-time flex items-center gap-2 text-xs text-gray">
            <Clock />
            <span>{formatMinutes(data.readyInMinutes)} Mins</span>
          </div>
          <div className="recipe-people flex items-center gap-2 text-xs text-gray">
            <User />
            <span>{data.servings}</span>
          </div>
        </div>
        <div className="recipe-footer-right">
          <button className="recipe-favourite text-gray hover:text-primary">
            <Heart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
