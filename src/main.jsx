import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { ViewProvider } from "./context/ViewContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchProvider>
      <ViewProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ViewProvider>
    </SearchProvider>
  </StrictMode>,
);
