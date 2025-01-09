import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import CategoryFilter from "./CategoryFilter";

const Home = ({
  recipe,
  handleRecipeClick,
  handleFavouriteClick,
  searchQuery,
}) => {
  const [searchedItems, setSearchedItems] = useState(recipe);
  useEffect(() => {
    const searchRecipes = () => {
      if (searchQuery) {
        const filteredItems = recipe.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        setSearchedItems(filteredItems);
      } else {
        setSearchedItems(recipe);
      }
    };
    searchRecipes();
  }, [searchQuery, recipe]);
  return (
    <div>
      <CategoryFilter />
      <div className="recipe-section md:grid-cols2 mb-6 mt-10 grid grid-cols-1 gap-x-4 gap-y-12 lg:grid-cols-4">
        {searchedItems.length > 0
          ? searchedItems.map((item) => (
              <RecipeCard
                data={item}
                key={item.id}
                handleRecipeClick={handleRecipeClick}
                handleFavouriteClick={handleFavouriteClick}
              />
            ))
          : "No recipes found"}
      </div>
    </div>
  );
};

export default Home;
