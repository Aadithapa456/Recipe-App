import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import axios from "axios";
import Home from "./components/Home";
import Favourites from "./components/Favourites";

const App = () => {
  const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";
  const [currentView, setCurrentView] = useState("Home");
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [recipe, setRecipe] = useState([]);
  const fetchApiData = async () => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          apiKey: API_KEY,
        },
      });
      setRecipe(response.data.results);
      console.log(recipe);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchApiData();
  }, []);
  const renderContent = () => {
    switch (currentView) {
      case "Home":
        return <Home recipe={recipe} />;
      case "Favourites":
        return <Favourites />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="app-container flex min-h-screen">
        <div className="flex flex-1">
          <div className="sidebar mr-16">
            <SideBar onSelect={setCurrentView} />
          </div>
          <div className="main-content mt-10 flex flex-1 flex-col gap-8">
            <Header />
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
