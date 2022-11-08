import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Elizabeth Mcconnell.png";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 my-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <Link to="/add-service">Add Service</Link>
              </li>
              <li tabIndex={0}>
                <Link className="justify-between">Parent</Link>
              </li>
              <li>
                <Link>Item 3</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/add-service">Add Service</Link>
            </li>
            <li tabIndex={0}>
              <Link>Parent</Link>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn mr-2">
            Login
          </Link>
          <button className="btn mr-2">Logout</button>
          <Link to="/signup" className="btn">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
