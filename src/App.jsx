import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import RecipeDetail from "./components/RecipeDetail";
import { fetchApiData, fetchRecipeInformation } from "./services/api";

const App = () => {
  const [currentView, setCurrentView] = useState("Home");
  const [recipeId, setRecipeId] = useState("");
  const [recipeInformation, setRecipeInformation] = useState();
  const [recipe, setRecipe] = useState([]);
  const [recipeVisible, setRecipeVisible] = useState(false);

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

  const handleRecipeClick = (data) => {
    setRecipeId(data.id);
    setRecipeVisible((prev) => !prev);
  };
  const renderContent = () => {
    switch (currentView) {
      case "Home":
        return <Home recipe={recipe} onclick={handleRecipeClick} />;
      case "Favourites":
        return <Favourites />;
      default:
        return null;
    }
  };
  const closeRecipeDetail = () => {
    setRecipeVisible(false);
  };
  return (
    <>
      <div className="app-container flex min-h-screen">
        <div className="flex flex-1">
          <div className="sidebar mr-16">
            <SideBar onSelect={setCurrentView} />
          </div>
          <div className="main-content mr-6 mt-10 flex flex-1 flex-col gap-8">
            {recipeVisible ? (
              <RecipeDetail
                data={recipeInformation}
                close={closeRecipeDetail}
              ></RecipeDetail>
            ) : (
              renderContent()
            )}
            {/* {} */}
            {/* <RecipeDetail /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
