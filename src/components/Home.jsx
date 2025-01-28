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


  // Function to search recipes based on the search query
  const searchRecipes = () => {
    if (searchQuery) {
      const filteredItems = searchedItems.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setSearchedItems(filteredItems);
      console.log(filteredItems);
    } else {
      setSearchedItems(recipe);
    }
  };

  const handleDishTypeChange = (data) => {
    // Exits the function if selected category is All
    if (data === "All Recipes") {
      setSearchedItems(recipe);
    } else {
      const filteredRecipes = recipe.filter((item) =>
        item.dishTypes.includes(data.toLowerCase()),
      );
      setSearchedItems(filteredRecipes);
    }
  };

  // Function to toggle favourite status
  // const toggleFavourite = (newFavourite) => {
  //   // Receiving id and state of the favourite card
  //   setToastMessage(
  //     newFavourite ? "Added to Favourites" : "Removed from Favourites",
  //   );
  //   setShowToast(true);
  // };


  useEffect(() => {
    searchRecipes();
  }, [searchQuery, recipe]);
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
