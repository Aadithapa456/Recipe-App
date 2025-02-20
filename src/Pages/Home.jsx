import React, { useContext, useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import CategoryFilter from "../components/CategoryFilter";
import { filterByCategory, searchItems } from "../utils/helpers";
import NotFound from "../components/NotFound";
import Pagination from "../components/Pagination";
import { SearchContext } from "../context/SearchContext";

const Home = ({ recipe, handleRecipeClick, handleFavouriteClick }) => {
  const { searchQuery } = useContext(SearchContext);
  const [searchedItems, setSearchedItems] = useState(recipe);
  const [selectedCategory, setselectedCategory] = useState("All Recipes");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = recipe.slice(firstPostIndex, lastPostIndex);
  // Function to search recipes based on the search query
  const searchRecipes = () => {
    let filteredItems;
    if (searchQuery) {
      filteredItems = searchItems(recipe, searchQuery);
    } else {
      filteredItems = filterByCategory(currentPosts, selectedCategory);
      console.log("object");
    }
    console.log(filteredItems);
    setSearchedItems(filteredItems);
  };

  const handleDishTypeChange = (category) => {
    // Exits the function if selected category is All
    if (category === "All Recipes") {
      setSearchedItems(recipe);
    } else {
      const filteredRecipes = filterByCategory(currentPosts, category);
      setSearchedItems(filteredRecipes);
      setselectedCategory(category);
    }
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    searchRecipes();
  }, [searchQuery, recipe]);

  useEffect(() => {
    // setSearchedItems(recipe);
    setSearchedItems(currentPosts);
  }, [recipe]);
  useEffect(() => {
    setSearchedItems(currentPosts);
  }, [currentPage]);
  return (
    <div>
      <CategoryFilter handleDishType={handleDishTypeChange} />
      <div className="recipe-section md:grid-cols2 mb-6 mt-10 grid grid-cols-1 justify-items-center gap-x-4 gap-y-12 lg:grid-cols-4">
        {searchedItems.length > 0 ? (
          searchedItems.map((item) => (
            <RecipeCard
              data={item}
              key={item.id}
              handleRecipeClick={handleRecipeClick}
              handleFavouriteClick={handleFavouriteClick}
            />
          ))
        ) : (
          <NotFound />
        )}
      </div>
      <Pagination handlePageChange={handlePageChange} />
    </div>
  );
};

export default Home;
