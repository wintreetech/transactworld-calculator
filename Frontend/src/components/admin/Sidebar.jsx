import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { TbFileInvoice } from "react-icons/tb";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FiPenTool } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import axios from "axios";
import toast from "react-hot-toast";
import AuthContext from "../../context/AuthContext";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const MenuItem = [
    {
      id: 1,
      name: "Dashboard",
      icon: <AiOutlineDashboard />,
      path: "/admin",
    },
    {
      id: 2,
      name: "Customers",
      icon: <FaRegUser />,
      path: "/admin/customers",
    },
    {
      id: 3,
      name: "invoices",
      icon: <TbFileInvoice />,
      path: "/admin/invoices",
    },
    {
      id: 4,
      name: "Quote",
      icon: <FiPenTool />,
      path: "/admin/quotes",
    },
  ];

  const { handleLogoutUser } = useContext(AuthContext);

  const handleLogout = async () => {
    const response = await handleLogoutUser();
    if (response === "OK") navigate("/auth");
  };

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center md:flex-row md:justify-between">
          <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
            {/* Open drawer */}
            <RxHamburgerMenu />
          </label>
        </div>
        <div className="drawer-side z-30">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay "
          ></label>

          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-6">
            {/* <h1 className="text-3xl mb-8 text-center font-script">
              TransactWorld UK
            </h1> */}
            <img src="/TWUKLogo.png" alt="logo" />
            <hr className="border-gray-300 mb-8" />
            {MenuItem.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={`${item.path}`}
                  className={`flex gap-3 px-4 py-3 capitalize hover:bg-gray-100 ${
                    location.pathname === `${item.path}`
                      ? "bg-base-100 border-l-4 border-Charcoal-gray"
                      : ""
                  } mb-3 text-lg rounded-lg`}
                >
                  {/* <img src={item.icon} alt={item.name} width={28} height={28} /> */}
                  <div className="flex items-center text-xl">{item.icon}</div>
                  {item.name}
                </Link>
              );
            })}
            <li>
              <button
                onClick={handleLogout}
                className="gap-3 px-4 py-3 hover:bg-gray-100 text-red-500 mb-3 text-lg rounded-lg"
              >
                <RiLogoutBoxLine /> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
