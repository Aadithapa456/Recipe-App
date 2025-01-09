import { Clock, Heart, User } from "lucide-react";
import React, { useState } from "react";
import { formatMinutes } from "../utils/helpers";
import { useEffect } from "react";
import Label from "./Label";

const RecipeCard = ({ data, handleRecipeClick, handleFavouriteClick }) => {
  const [favourite, setFavourite] = useState(false);
  const toggleFavourite = () => {
    setFavourite((prevFavourite) => {
      const newFavourite = !prevFavourite;
      handleFavouriteClick(data.id, newFavourite);
      return newFavourite;
    });
  };
  let favs;
  useEffect(() => {
    favs = JSON.parse(localStorage.getItem("favourites")) || [];
    favs.forEach((item) => {
      if (data.id == item.id) {
        setFavourite(true);
      }
    });
  }, [data.id]);
  return (
    <div className="recipe-card-container flex max-w-xs flex-col gap-4 overflow-hidden rounded-md bg-white shadow-md">
      <div className="recipe-card-image">
        <img src={`${data.image}`} alt="" className="" />
      </div>
      <div className="recipe-card-main flex flex-col gap-3 px-4">
        <div className="recipe-label grid-auto-fill-card">
          {data.dishTypes.slice(0, 3).map((label, index) => (
            <Label label={label} key={index} />
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
          <div
            className="recipe-time flex items-center gap-2 text-xs text-gray"
            onClick={() => handleRecipeClick(data)}
          >
            <Clock />
            <span>{formatMinutes(data.readyInMinutes)} Mins</span>
          </div>
          <div className="recipe-people flex items-center gap-2 text-xs text-gray">
            <User />
            <span>{data.servings}</span>
          </div>
        </div>
        <div className="recipe-footer-right">
          <button
            className="recipe-favourite text-gray hover:text-primary"
            onClick={toggleFavourite}
          >
            <Heart className={`${favourite ? "fill-primary" : "text-red"}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
