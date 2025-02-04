import React from "react";
import { Outlet } from "react-router";
import SideNav from "./SideNav";

function RootLayout() {
  return (
    <div className="flex">
      <div className="h-screen w-1/6">
        <SideNav />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
