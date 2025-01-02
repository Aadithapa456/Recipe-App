import React from "react";

const categories = [
  "All Recipes",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Desserts",
  "Vegeterian",
  "Vegan",
];
const CategoryFilter = () => {
  return (
    <div className="category-container flex gap-6">
      {categories.map((category, index) => (
        <button className="category-button hover:bg-primary border-border-light rounded-full border px-5 py-2 transition duration-300 hover:text-white" key={index}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
