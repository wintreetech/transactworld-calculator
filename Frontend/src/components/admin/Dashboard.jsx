import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

function Dashboard() {
  const ctx = useContext(AuthContext);
  const userName = ctx.state?.user?.username;
  const role = ctx.state?.user?.role;

  return (
    <div>
      {userName ? (
        <div className="flex justify-between">
          <h1 className="text-2xl">Dashboard </h1>
          <span className="flex items-center border p-2 px-4 ml-3 rounded-full">
            <FaUserCircle className="mr-2 text-xl" />
            Welcome, <span className="capitalize"> {userName} </span>{" "}
            <span className="px-2">|</span>
            <span>{role}</span>
          </span>
        </div>
      ) : (
        <h1 className="text-2xl">Dashboard</h1>
      )}
    </div>
  );
}

export default Dashboard;
