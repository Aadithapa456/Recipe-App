import axios from "axios";
const BASE_URL = "https://api.spoonacular.com/recipes/random";
const API_KEY = import.meta.env.VITE_API_KEY;
export const fetchApiData = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apiKey: API_KEY,
        number: 20,
      },
    });
    return response.data.recipes;
    // setRecipe(response.data.recipes);
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchRecipeInformation = async (id) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information`,
      {
        params: {
          apiKey: API_KEY,
        },
      },
    );
    return response.data;
    // setRecipeInformation(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
