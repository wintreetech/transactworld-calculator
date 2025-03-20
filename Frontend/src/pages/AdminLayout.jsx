import React from "react";
import Sidebar from "../components/admin/Sidebar";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
