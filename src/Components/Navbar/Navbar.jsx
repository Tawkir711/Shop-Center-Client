import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/Context";

const Navbar = ({ darkMood, handleDark }) => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  const userImage =
    user && user.photoURL
      ? user.photoURL
      : "https://i.postimg.cc/zB10zYpJ/userImg.jpg";
  const userName = user && user.displayName;

  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-red-600" : ""
          }
        >
          Home
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to={"/addProduct"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-red-600" : ""
            }
          >
            Add Product
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to={"/myCart"}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline text-red-600" : ""
            }
          >
            My Cart
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to={"/login"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-red-600" : ""
          }
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/register"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-red-600" : ""
          }
        >
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div
      className={`navbar ${
        darkMood ? "bg-gray-900 text-white" : "bg-white"
      } sticky top-0 z-10`}
    >
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
            <div className="navbar-end md:hidden md:flex">
              <p>{userName}</p>
              <label className="btn btn-ghost btn-circle avatar  ">
                <div className="w-10 rounded-full">
                  <img src={userImage} alt="user img" />
                </div>
              </label>
              {user ? (
                <button onClick={handleSignOut} className="btn">
                  Sign Out
                </button>
              ) : (
                <Link to={"/login"}>
                  <button className="btn">Login</button>
                </Link>
              )}
            </div>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-3">
          <h2 className="text-xl font-semibold">Shop Center</h2>
          <img
            className="h-[50px] rounded-full hidden md:flex "
            src="https://i.postimg.cc/kG4Ln1CF/online-shop-ecommerce-logo.jpg"
            alt="logo"
          />
          <div>
            <button className="btn" onClick={handleDark}>{`${
              darkMood ? "dark" : "light"
            }`}</button>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end hidden md:flex">
        <p>{userName}</p>
        <label className="btn btn-ghost btn-circle avatar  ">
          <div className="w-10 rounded-full">
            <img src={userImage} alt="user img" />
          </div>
        </label>
        {user ? (
          <button onClick={handleSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
