import { Clock, Heart, ShieldQuestion, User } from "lucide-react";
import React, { useState } from "react";
import { formatLabels, formatMinutes } from "../utils/helpers";
import { useEffect } from "react";
import Label from "./Label";
import { storeFavourite } from "../services/favourites";

const RecipeCard = ({ data, handleRecipeClick, handleFavouriteClick }) => {
  const [favourite, setFavourite] = useState(false);
  const toggleFavourite = () => {
    setFavourite((prevFavourite) => {
      const newFavourite = !prevFavourite;
      storeFavourite(data.id, newFavourite);
      handleFavouriteClick(newFavourite); // Sending the current state of selected recipe
      return newFavourite;
    });
  };

  useEffect(() => {
    let favs = JSON.parse(localStorage.getItem("favourites")) || [];
    favs.forEach((item) => {
      if (data.id == item.id) {
        setFavourite(true);
      }
    });
  }, [data.id]);

  return (
    <div className="recipe-card-container flex max-w-xs flex-col gap-4 overflow-hidden rounded-md bg-white shadow-md">
      <div className="recipe-card-image relative mb-3">
        <img
          src={`${data.image ? data.image : "https://placehold.co/600x400"}`}
          alt=""
          className="recipe-image"
        />
        <button
          className="recipe-favourite absolute -bottom-3 right-2 rounded-full bg-white p-1 text-gray shadow-md transition duration-300 hover:scale-110 hover:text-primary"
          onClick={toggleFavourite}
        >
          <Heart
            className={`hover:stroke-primary ${favourite ? "fill-primary" : "text-red"}`}
            stroke={`${favourite ? "none" : "gray"}`}
          />
        </button>
      </div>
      <div className="recipe-card-main mt-auto flex flex-col gap-3 px-4">
        <div className="recipe-label grid-auto-fill-card">
          {data.dishTypes
            .reduce((acc, label) => {
              const formattedLabel = formatLabels(label);
              if (formattedLabel)
                acc.push(<Label key={acc.length} label={formattedLabel} />);
              return acc;
            }, [])
            .slice(0, 4)}
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
          <button
            className="details-btn p-.5 rounded-full p-1 text-gray shadow-md transition duration-300 hover:scale-110"
            onClick={() => handleRecipeClick(data)}
          >
            <ShieldQuestion />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
