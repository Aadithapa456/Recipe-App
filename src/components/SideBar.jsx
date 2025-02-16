import React, { useContext, useState } from "react";
import {
  Home,
  Heart,
  Folder,
  Clock,
  Settings,
  Utensils,
  Menu,
} from "lucide-react";
import { ViewContext } from "../context/ViewContext";
import { Link } from "react-router-dom";

const sideBarContents = [
  { name: "Home", icon: <Home />, path: "/" },
  { name: "Favourites", icon: <Heart />, path: "/favourites" },
  { name: "Collection", icon: <Folder />, path: "/collection" },
  { name: "Recents", icon: <Clock />, path: "/recents" },
  { name: "Settings", icon: <Settings />, path: "/settings" },
];

const SideBar = () => {
  const { currentView, setCurrentView } = useContext(ViewContext);
  const [isMobile, setIsMobile] = useState(false);
  const handleSelect = (item) => {
    setCurrentView(item.name);
    if (isMobile) {
      setIsMobile(false); // Close sidebar on mobile after selection
    }
  };

  return (
    <>
      <button
        className="fixed left-4 top-4 z-50 block lg:hidden"
        onClick={() => setIsMobile(!isMobile)}
      >
        <Menu className="text-primary" />
      </button>
      <div
        className={`sidebar-container fixed inset-y-0 left-0 z-40 flex h-full w-64 flex-col gap-20 bg-white px-10 py-2 shadow-md transition-transform duration-300 lg:relative lg:translate-x-0 ${
          isMobile ? "translate-x-0" : "-translate-x-full"
        } lg:block lg:translate-x-0`}
      >
        <div className="sidebar-logo mt-4 flex items-center gap-4 p-4 text-center text-3xl font-bold text-primary">
          <span>ReciPie</span>
          <Utensils />
        </div>
        <div className="sidebar-main lg:mt-20">
          <ul>
            {sideBarContents.map((item, index) => (
              <Link to={item.path}>
                <li
                  key={index}
                  className={`text-md mt-6 flex cursor-pointer items-center gap-4 rounded-lg px-4 py-3 transition duration-300 hover:bg-primary hover:text-white ${
                    currentView === item.name
                      ? "bg-primary text-white"
                      : "text-gray-700"
                  }`}
                  onClick={() => handleSelect(item)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      {isMobile && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 lg:hidden"
          onClick={() => setIsMobile(false)}
        ></div>
      )}
    </>
  );
};

export default SideBar;
