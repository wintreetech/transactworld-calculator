import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { TbFileInvoice } from "react-icons/tb";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FiPenTool } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

function Sidebar() {
  const location = useLocation();

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
    {
      id: 5,
      name: "Logout",
      icon: <RiLogoutBoxLine />,
      path: "/auth",
    },
  ];

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
            {/* Open drawer */}
            <RxHamburgerMenu />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay "
          ></label>

          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-6">
            <h1 className="text-3xl mb-8 text-center font-script">
              TransactWorld UK
            </h1>
            <hr className="border-gray-300 mb-8" />
            {MenuItem.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={`${item.path}`}
                  className={`flex gap-3 px-4 py-3 capitalize hover:bg-gray-100 ${
                    location.pathname === `${item.path}` ? "bg-base-100" : ""
                  } mb-3 text-lg rounded-lg`}
                >
                  {/* <img src={item.icon} alt={item.name} width={28} height={28} /> */}
                  <div className="flex items-center text-xl">{item.icon}</div>
                  {item.name}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
