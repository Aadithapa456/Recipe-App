import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import CategoryFilter from "./CategoryFilter";
import Toast from "./Toast";

const Home = ({
  recipe,
  handleRecipeClick,
  handleFavouriteClick,
  searchQuery,
}) => {
  const [searchedItems, setSearchedItems] = useState(recipe);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
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

  const toggleFavourite = (id, newFavourite) => {
    handleFavouriteClick(id, newFavourite);
    setToastMessage(
      newFavourite ? "Added to Favourites" : "Removed from Favourites",
    );
    setShowToast(true);
  };
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2900);
      return () => clearTimeout(timer);
    }
  }, [showToast]);
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
                handleFavouriteClick={toggleFavourite}
              />
            ))
          : "No recipes found"}
      </div>
      {showToast && <Toast message={toastMessage} />}
    </div>
  );
};

export default Home;
