import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import CategoryFilter from "./CategoryFilter";
import { filterByCategory, searchItems } from "../utils/helpers";

const Home = ({
  recipe,
  handleRecipeClick,
  handleFavouriteClick,
  searchQuery,
}) => {
  const [searchedItems, setSearchedItems] = useState(recipe);
  const [selectedCategory, setselectedCategory] = useState("All Recipes");

  // Function to search recipes based on the search query
  const searchRecipes = () => {
    let filteredItems;
    if (searchQuery) {
      filteredItems = searchItems(searchedItems, searchQuery);
    } else {
      filteredItems = filterByCategory(selectedCategory, recipe);
    }
    setSearchedItems(filteredItems);
  };

  const handleDishTypeChange = (category) => {
    console.log(searchedItems);
    // Exits the function if selected category is All
    if (category === "All Recipes") {
      setSearchedItems(recipe);
    } else {
      const filteredRecipes = filterByCategory(category, recipe);
      setSearchedItems(filteredRecipes);
      setselectedCategory(category);
    }
  };

  useEffect(() => {
    searchRecipes();
  }, [searchQuery, recipe]);

  useEffect(() => {
    setSearchedItems(recipe);
  }, [recipe]);
  return (
    <div>
      <CategoryFilter handleDishType={handleDishTypeChange} />
      <div className="recipe-section md:grid-cols2 mb-6 mt-10 grid grid-cols-1 justify-items-center gap-x-4 gap-y-12 lg:grid-cols-4">
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
