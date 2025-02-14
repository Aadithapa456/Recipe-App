import React, { useContext, useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import RecipeDetail from "./components/RecipeDetail";
import { fetchApiData, fetchRecipeInformation } from "./services/api";
import Header from "./components/Header";
import Toast from "./components/Toast";
import NotFound from "./components/NotFound";
import { SearchContext } from "./context/SearchContext";

const App = () => {
  const { searchQuery } = useContext(SearchContext);
  const [currentView, setCurrentView] = useState("Home");
  const [recipeId, setRecipeId] = useState("");
  const [recipeInformation, setRecipeInformation] = useState();
  const [recipe, setRecipe] = useState([]);
  const [recipeVisible, setRecipeVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApiData();
      setRecipe(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchRecipeInfo = async () => {
      if (recipeId) {
        const info = await fetchRecipeInformation(recipeId);
        setRecipeInformation(info);
      }
    };
    fetchRecipeInfo();
  }, [recipeId]);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2900);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleRecipeClick = (data) => {
    setRecipeId(data.id);
    setRecipeVisible((prev) => !prev);
  };

  const handleFavouriteClick = (state) => {
    setToastMessage(state ? "Added to Favourites" : "Removed from Favourites");
    setShowToast(true);
  };

  const handleCurrentView = (current) => {
    setCurrentView(current);
    setRecipeVisible(false);
  };

  const closeRecipeDetail = () => {
    setRecipeVisible(false);
  };

  const renderContent = () => {
    switch (currentView) {
      case "Home":
        return (
          <Home
            recipe={recipe}
            handleRecipeClick={handleRecipeClick}
            handleFavouriteClick={handleFavouriteClick}
            searchQuery={searchQuery}
          />
        );
      case "Favourites":
        return (
          <Favourites
            handleRecipeClick={handleRecipeClick}
            handleFavouriteClick={handleFavouriteClick}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="app-container flex min-h-screen">
        <div className="flex flex-1">
          <div className="sidebar mr-6 lg:mr-16">
            <SideBar onSelect={handleCurrentView} />
          </div>
          <div className="main-content relative mr-1 mt-10 flex flex-1 flex-col gap-8 lg:mr-6">
            <Header />
            {recipeVisible ? (
              <RecipeDetail
                data={recipeInformation}
                close={closeRecipeDetail}
              ></RecipeDetail>
            ) : recipe ? (
              renderContent()
            ) : (
              <NotFound />
            )}
          </div>
        </div>
      </div>
      {showToast && <Toast message={toastMessage} />}
    </>
  );
};

export default App;
