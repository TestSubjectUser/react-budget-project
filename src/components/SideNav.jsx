import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/themeSlice";
import { NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";

function SideNav() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

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
        <ThemeToggle />
      </div>
    </div>
  );
}

export default SideNav;
