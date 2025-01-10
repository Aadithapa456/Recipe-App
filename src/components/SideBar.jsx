import React, { useState } from "react";
import { Home, Heart, Folder, Clock, Settings, Utensils } from "lucide-react";
const sideBarContents = [
  { name: "Home", icon: <Home /> },
  { name: "Favourites", icon: <Heart /> },
  { name: "Collection", icon: <Folder /> },
  { name: "Recents", icon: <Clock /> },
  { name: "Settings", icon: <Settings /> },
];
const SideBar = ({ onSelect }) => {
  const [activeItem, setActiveItem] = useState("Home");
  const handleSelect = (item) => {
    onSelect(item.name);
  };
  return (
    <div className="sidebar-container flex h-full max-w-80 flex-col gap-20 bg-white px-10 py-2 shadow-md">
      <div className="sidebar-logo flex items-center gap-4 p-4 text-center text-3xl font-bold text-primary">
        <Utensils />
        <span>Cookify</span>
      </div>
      <div className="sidebar-main">
        <ul>
          {sideBarContents.map((item, index) => (
            <li
              key={index}
              className={`text-md mt-6 flex cursor-pointer items-center gap-4 rounded-lg px-4 py-3 transition duration-300 hover:bg-primary hover:text-white ${activeItem == item ? "bg-primary text-white" : "text-gray-700"}`}
              onClick={() => {
                handleSelect(item);
                setActiveItem(item);
              }}
            >
              {item.icon}
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
