import React, { useState } from "react";

const categories = [
  "All Recipes",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Desserts",
  "Drink",
  "Starter",
  "Snack",
];
const CategoryFilter = ({ handleDishType }) => {
  const [activeCategory, setActiveCategory] = useState("All Recipes");
  return (
    <div className="category-container flex flex-wrap justify-center gap-4 md:justify-normal md:gap-6">
      {categories.map((category, index) => (
        <button
          className={`category-button rounded-full border border-border-light px-5 py-2 transition duration-300 hover:bg-primary hover:text-white ${activeCategory == category ? "bg-primary text-white" : ""}`}
          key={index}
          onClick={() => {
            handleDishType(category);
            setActiveCategory(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
