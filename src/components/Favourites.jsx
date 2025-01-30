import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { getFavouriteItem } from "../services/favourites";
import NotFound from "./NotFound";

const Favourites = ({ handleRecipeClick, handleFavouriteClick }) => {
  const [favouriteItem, setFavouriteItem] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getFavouriteItem();
      setFavouriteItem(data);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div className="recipe-section md:grid-cols2 mb-6 mt-10 grid grid-cols-1 gap-x-4 gap-y-12 lg:grid-cols-4">
      {favouriteItem ? (
        favouriteItem.map((item, index) => (
          <RecipeCard
            data={item}
            handleRecipeClick={handleRecipeClick}
            handleFavouriteClick={handleFavouriteClick}
            key={index}
          />
        ))
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Favourites;
