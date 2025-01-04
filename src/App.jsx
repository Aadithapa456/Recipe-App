import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import axios from "axios";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import RecipeDetail from "./components/RecipeDetail";

const App = () => {
  const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [currentView, setCurrentView] = useState("Home");
  const [recipeId, setRecipeId] = useState("");
  const [recipeInformation, setRecipeInformation] = useState();
  const [recipe, setRecipe] = useState([]);
  const [recipeVisible, setRecipeVisible] = useState(false);
  const fetchApiData = async () => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          apiKey: API_KEY,
        },
      });
      setRecipe(response.data.results);
      // console.log(recipe);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchRecipeInformation = async (id) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information`,
        {
          params: {
            apiKey: API_KEY,
          },
        },
      );
      setRecipeInformation(response.data);
      console.log(recipeInformation);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchApiData();
  }, []);
  useEffect(() => {
    if (recipeId) {
      fetchRecipeInformation(recipeId);
    }
  }, [recipeId]);
  const hello = (data) => {
    // fetchRecipeInformation(data.id)
    // alert(data.id);
    setRecipeId(data.id);
    setRecipeVisible((prev) => !prev);
    console.log(data.id);
  };
  const renderContent = () => {
    switch (currentView) {
      case "Home":
        return <Home recipe={recipe} onclick={hello} />;
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
          <div className="main-content mt-10 flex flex-1 flex-col gap-8 mr-6">
            {recipeVisible ? (
              <RecipeDetail data={recipeInformation} close={closeRecipeDetail}></RecipeDetail>
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
