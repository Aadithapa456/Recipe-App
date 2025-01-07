import axios from "axios";

export const storeFavourite = (id) => {
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  if (!favourites.includes(id)) {
    favourites.push(id);
  }
  localStorage.setItem("favourites", JSON.stringify(favourites));
};

export const getFavouriteItem = async () => {
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  if (favourites.length === 0) return [];

  try {
    const response = await axios.get(
      "https://api.spoonacular.com/recipes/informationBulk",
      {
        params: {
          apiKey: import.meta.env.VITE_API_KEY,
          ids: favourites.join(","),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};
