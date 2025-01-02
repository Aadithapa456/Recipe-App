import React from "react";
import Separator from "./Separator";
const ingredients = [
  { name: "Fettuccine pasta", quantity: "1 pound" },
  { name: "Heavy cream", quantity: "2 cups" },
  { name: "Garlic cloves, minced", quantity: "6 cloves" },
  { name: "Parmesan cheese, grated", quantity: "1 cup" },
  { name: "Butter", quantity: "4 tbsp" },
  { name: "Salt", quantity: "to taste" },
  { name: "Black pepper", quantity: "to taste" },
];
const instructions = [
  "Bring a large pot of salted water to boil. Cook pasta according to package instructions until al dente. Reserve 1 cup of pasta water before draining.",
  "While pasta is cooking, melt butter in a large skillet over medium heat. Add minced garlic and sauté until fragrant and lightly golden, about 1-2 minutes. Be careful not to burn the garlic as it can become bitter.",
  "Pour in heavy cream and bring to a gentle simmer. Reduce heat to medium-low and let it cook for 5 minutes, stirring occasionally, until the sauce starts to thicken slightly.",
  "Add the grated Parmesan cheese to the sauce and stir until melted and smooth. Season with salt and black pepper to taste. If the sauce becomes too thick, add some reserved pasta water to achieve desired consistency.",
  "Add the cooked pasta to the sauce and toss until well coated. Serve immediately, garnished with extra Parmesan cheese and freshly ground black pepper if desired.",
];
const RecipeDetail = () => {
  return (
    <div className="recipe-info-container mx-auto flex max-w-[1300px] flex-col gap-10">
      <div className="recipe-info-top">
        <img
          src="https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg"
          alt=""
          className="w-full h-[400px] object-cover"
        />
      </div>
      <div className="recipe-info-bottom flex gap-10">
        <div className="recipe-info-ingredients w-4/5 rounded-lg px-6 py-4 shadow-md h-fit">
          <div className="recipe-info-ingredients-title text-lg font-bold text-primary">
            Ingredients
          </div>
          <div className="recipe-items">
            {ingredients.map((item, index) => (
              <>
                <div
                  className="recipe-info-item mt-4 flex justify-between gap-10 p-1"
                  key={index}
                >
                  <div className="item-name">{item.name}</div>
                  <div className="item-quantity">{item.quantity}</div>
                </div>
                <Separator />
              </>
            ))}
          </div>
        </div>
        <div className="recipe-info-instructions-wrapper flex flex-col justify-center rounded-lg px-4 shadow-md py-3">
          <div className="recipe-info-instructions-title px-4 text-xl font-bold text-primary">
            Instructions
          </div>
          <div className="recipe-instructions">
            {instructions.map((instruction, index) => (
              <div className="mt-10 flex items-center gap-5">
                <div className="instruction-number flex h-10 w-10 items-center justify-center rounded-full bg-primary p-4 text-white">
                  {index + 1}
                </div>
                <div className="instruction">{instruction}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
