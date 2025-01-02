import { Clock, Heart, User } from "lucide-react";
import React from "react";
const labels = ["Italian", "30 min"];
const RecipeCard = ({ data }) => {
  return (
    <div className="recipe-card-container flex max-w-xs flex-col gap-4 overflow-hidden rounded-md bg-white shadow-md">
      <div className="recipe-card-image">
        <img src={`${data.image}`} alt="" />
      </div>
      <div className="recipe-card-main flex flex-col gap-3 px-4">
        <div className="recipe-label flex gap-4">
          {labels.map((label, index) => (
            <div
              className="shadow- rounded-lg bg-gray-light px-3 py-1.5 text-xs"
              key={index}
            >
              {label}
            </div>
          ))}
        </div>
        <div className="recipe-main-details mt-auto">
          <div className="recipe-title py-2 text-lg font-bold">
            {data.title}
          </div>
          <div className="recipe-description mt-auto text-xs text-gray">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            expedita sequi delectus doloremque voluptates.
          </div>
        </div>
      </div>
      <div className="recipe-footer mb-4 mt-auto flex items-center justify-between px-4">
        <div className="recipe-footer-left flex items-center gap-2">
          <div className="recipe-time flex items-center gap-2 text-xs text-gray">
            <Clock />
            <span>30 min</span>
          </div>
          <div className="recipe-people flex items-center gap-2 text-xs text-gray">
            <User />
            <span>4</span>
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
