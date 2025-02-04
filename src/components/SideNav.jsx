import React from "react";
import { NavLink } from "react-router";

function SideNav() {
  return (
    <div>
      <h1 className="m-10 ">LOGO</h1>
      <div className="flex flex-col">
        <NavLink
          to="/"
          //   className={({ isActive }) =>
          //     isActive ? classes.active : undefined
          //   }
          className="pl-5 text-blue-300 hover:text-blue-600"
          end
        >
          - Home
        </NavLink>
        <NavLink
          to="/entries"
          //   className={({ isActive }) =>
          //     isActive ? classes.active : undefined
          //   }
          className="pl-5 text-blue-300 hover:text-blue-600"
          end
        >
          - All Entries
        </NavLink>
      </div>
    </div>
  );
}

export default SideNav;
