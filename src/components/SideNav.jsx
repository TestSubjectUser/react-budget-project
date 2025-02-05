import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/themeSlice";
import { NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

function SideNav() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const { themeState, switchTheme } = useTheme();
  // const { themeState, switchTheme } = useContext(ThemeContext);
  console.log("Current theme: ", themeState);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);

  useEffect(() => {
    document.body.className = theme; // Apply theme to body
    localStorage.setItem("theme", theme); // Save theme to localStorage
  }, [theme]);

  return (
    <div>
      <h1 className="m-10 ">LOGO</h1>
      <div className="flex flex-col">
        <NavLink to="/" className="pl-5 text-blue-300 hover:text-blue-600" end>
          - Home
        </NavLink>
        <NavLink
          to="/entries"
          className="pl-5 text-blue-300 hover:text-blue-600"
          end
        >
          - All Entries
        </NavLink>
        <NavLink
          to="/counter"
          className="pl-5 text-blue-300 hover:text-blue-600"
          end
        >
          - Counter
        </NavLink>
        <ThemeToggle />
        <br></br>
        <br></br>
        // with use context
        <p>Current Theme: {themeState}</p>
        <button onClick={switchTheme}>Toggle Theme</button>
      </div>
    </div>
  );
}

export default SideNav;
