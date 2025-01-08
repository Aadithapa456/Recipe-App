import axios from "axios";

export const storeFavourite = (id, state) => {
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  if (state) {
    // Add to favourites if not present
    if (!favourites.some((item) => item.id == id)) {
      favourites.push({ id });
    }
  } else {
    // Remove from favourites if present
    const newFavourites = favourites.filter((item) => item.id != id);
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
    return;
  }
  localStorage.setItem("favourites", JSON.stringify(favourites));
};

export const getFavouriteItem = async () => {
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  if (favourites.length === 0) return [];
  const ids = favourites.map((item) => item.id);

  try {
    const response = await axios.get(
      "https://api.spoonacular.com/recipes/informationBulk",
      {
        params: {
          apiKey: import.meta.env.VITE_API_KEY,
          ids: ids.join(","),
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};
