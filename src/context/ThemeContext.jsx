// src/context/ThemeContext.js
import React, { createContext, useContext, useState } from "react";

// Create the Theme Context
const ThemeContext = createContext();

// Create a Provider Component
export const ThemeContextProvider = ({ children }) => {
  const [themeState, setThemeState] = useState("Light");

  const switchTheme = () => {
    setThemeState((prevTheme) => (prevTheme === "Light" ? "Dark" : "Light"));
  };

  return (
    <ThemeContext.Provider value={{ themeState, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the Theme Context
export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeContext;

// import { createContext, useContext, useState } from "react";

// const ThemeContext = createContext();
// const [themeState, setThemeState] = useState("Light");
// const switchTheme = () => {
//   setThemeState((prevTheme) => (prevTheme === "Light" ? "Dark" : "Light"));
// };
// export default ThemeContext;
