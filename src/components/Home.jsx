import React from "react";

import RecipeCard from "./RecipeCard";
import CategoryFilter from "./CategoryFilter";
import Header from "./Header";

const Home = ({ recipe, handleRecipeClick, handleFavouriteClick }) => {
  return (
    <div>
      <Header />
      <CategoryFilter />
      <div className="recipe-section md:grid-cols2 mb-6 mt-10 grid grid-cols-1 gap-x-4 gap-y-12 lg:grid-cols-4">
        {recipe.length > 0
          ? recipe.map((item) => (
              <RecipeCard
                data={item}
                key={item.id}
                handleRecipeClick={handleRecipeClick}
                handleFavouriteClick={handleFavouriteClick}
              />
            ))
          : "Loading"}
      </div>
    </div>
  );
};

export default Home;
