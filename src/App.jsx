import React, { useContext, useEffect, useState } from "react";
import Home from "./Pages/Home";
import Favourites from "./components/Favourites";
import RecipeDetail from "./components/RecipeDetail";
import { fetchApiData, fetchRecipeInformation } from "./services/api";
import NotFound from "./components/NotFound";
import { SearchContext } from "./context/SearchContext";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import MainLayout from "./components/MainLayout";
import AuthLayout from "./components/AuthLayout";

const App = () => {
  const { searchQuery } = useContext(SearchContext);
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
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<SignUp />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
