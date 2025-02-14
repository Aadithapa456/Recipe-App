import { Plus, Search } from "lucide-react";
import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
const Header = () => {
  // const [formData, setFormData] = useState("");
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const handleInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log(searchQuery);
  };
  return (
    <div className="header-container mb-6 mt-3 flex flex-col-reverse justify-between gap-10 md:mt-2 md:gap-1 lg:mt-1 lg:flex-row">
      <div className="header-left relative flex">
        <Search
          className="absolute left-2 top-[50%] translate-y-[-50%]"
          onClick={handleSearch}
        />
        <input
          type="text"
          className="w-full border border-border-light bg-white py-2 pl-10 text-sm lg:w-96"
          placeholder="Search for recipes.."
          onChange={handleInput}
          value={searchQuery}
        />
      </div>
      <div className="header-right mr-4 flex flex-row-reverse items-center justify-between gap-8 md:justify-center lg:flex-row">
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
