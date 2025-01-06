import { Plus, Search } from "lucide-react";
import React from "react";
const Header = () => {
  return (
    <div className="header-container mb-6 flex justify-between">
      <div className="header-left relative flex">
        <Search className="absolute left-2 top-[50%] translate-y-[-50%]" />
        <input
          type="text"
          className="w-96 border border-border-light bg-white py-2 pl-10 text-sm"
          placeholder="Search for recipes.."
        />
      </div>
      <div className="header-right mr-4 flex items-center gap-8">
        <button className="add-recipe flex items-center gap-4 rounded-md bg-primary px-4 py-2 text-sm text-white shadow-sm transition hover:bg-primary-dark">
          <Plus />
          <span>Add Recipe</span>
        </button>
        <div className="profile">
          <img
            src="https://i.pinimg.com/550x/ac/82/57/ac8257e1cfc4e63f5c63f3d4869eb7c4.jpg"
            className="h-12 w-12 rounded-full"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
