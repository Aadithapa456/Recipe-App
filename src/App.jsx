import React, { useContext, useEffect, useState } from "react";
import Home from "./Pages/Home";
import Favourites from "./components/Favourites";
import RecipeDetail from "./components/RecipeDetail";
import { fetchApiData, fetchRecipeInformation } from "./services/api";
import NotFound from "./components/NotFound";
import { SearchContext } from "./context/SearchContext";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Pages/Login";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AuthLayout";
import SignUp from "./Pages/SignUp";

const App = () => {
  const { searchQuery } = useContext(SearchContext);
  const [recipeId, setRecipeId] = useState("");
  const [recipeInformation, setRecipeInformation] = useState();
  const [recipe, setRecipe] = useState([]);
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const location = useLocation();
  useEffect(() => {
    // Preventing Unnecessary API calls
    if (location.pathname !== "/login") {
      const fetchData = async () => {
        const data = await fetchApiData();
        setRecipe(data);
      };
      fetchData();
    }
  }, [location.pathname]);

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

  const closeRecipeDetail = () => {
    setRecipeVisible(false);
  };

  return (
    <>
      <Routes>
        <Route
          element={
            <MainLayout showToast={showToast} toastMessage={toastMessage} />
          }
        >
          <Route
            path="/"
            element={
              <Home
                recipe={recipe}
                handleRecipeClick={handleRecipeClick}
                handleFavouriteClick={handleFavouriteClick}
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            path="/favourites"
            element={
              <Favourites
                handleRecipeClick={handleRecipeClick}
                handleFavouriteClick={handleFavouriteClick}
              />
            }
          />
          <Route
            path="/recipe/:id"
            element={
              <RecipeDetail
                data={recipeInformation}
                close={closeRecipeDetail}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/recipe/:id"
            element={
              <RecipeDetail
                data={recipeInformation}
                close={closeRecipeDetail}
              />
            }
          />
        </Route>
        <Route
          element={
            <AuthLayout showToast={showToast} toastMessage={toastMessage} />
          }
        >
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
