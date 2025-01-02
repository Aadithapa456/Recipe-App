import React from "react";

import RecipeCard from "./RecipeCard";
import CategoryFilter from "./CategoryFilter";

const Home = ({ recipe }) => {
  console.log(recipe);
  return (
    <div>
      <CategoryFilter />
      <div className="recipe-section md:grid-cols2 mb-6 mt-10 grid grid-cols-1 gap-x-4 gap-y-12 lg:grid-cols-4">
        {recipe.length > 0
          ? recipe
              .slice(0, 6)
              .map((item) => <RecipeCard data={item} key={item.id} />)
          : "Loading"}
      </div>
    </div>
  );
};

export default Home;
