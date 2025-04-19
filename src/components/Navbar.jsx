import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar p-0 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <NavLink to={"/"} className=" font-bold text-xl">
          FlagshipFaceOff
        </NavLink>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className=" flex gap-3   px-1">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white py-1 px-2 rounded  border border-orange-500  bg-amber-700 transition-all duration-200"
                  : "border py-1 px-2 rounded border-transparent" +
                    " py-1 px-2 rounded transition-all duration-200 hover:bg-amber-600 hover:text-white hover:py-1 hover:rounded"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white py-1 px-2 rounded  border border-orange-500  bg-amber-700 transition-all duration-200"
                  : "border py-1 px-2 rounded border-transparent" +
                    " py-1 px-2 rounded transition-all duration-200 hover:bg-amber-600 hover:text-white hover:py-1 hover:rounded"
              }
              to={"about"}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white py-1 px-2 rounded  border border-orange-500  bg-amber-700 transition-all duration-200"
                  : "border py-1 px-2 rounded border-transparent" +
                    " py-1 px-2 rounded transition-all duration-200 hover:bg-amber-600 hover:text-white hover:py-1 hover:rounded"
              }
              to={"cart"}
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-white py-1 px-2 rounded  border border-orange-500  bg-amber-700 transition-all duration-200"
                  : "border py-1 px-2 rounded border-transparent" +
                    " py-1 px-2 rounded transition-all duration-200 hover:bg-amber-600 hover:text-white hover:py-1 hover:rounded"
              }
              to={"favorites"}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
