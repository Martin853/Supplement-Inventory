import React from "react";
import image from "/favicon.ico?url";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

export const Navbar = () => {
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className='w-full h-fit bg-indigo-900 text-lg lg:text-3xl text-white flex flex-col items-center justify-between py-4 gap-3 md:gap-6'>
      <div className='w-full flex flex-col items-center justify-center sm:flex-row sm:px-6 gap-2'>
        <Link to={"/"} className='flex gap-2 items-center h-fit'>
          <img src={image} />
          <h1 className='font-bold'>Supplement Inventory</h1>
        </Link>
        <div className='sm:ml-auto'>
          <button
            onClick={handleLogout}
            className='p-1 w-24 lg:w-44 text-center rounded-lg border-2 border-indigo-950 hover:bg-indigo-950 transition-all ease-in-out duration-300'
          >
            Logout
          </button>
        </div>
        <div className='flex gap-4 sm:ml-auto'>
          <Link
            to={"/signup"}
            className='p-1 w-24 lg:w-44 text-center rounded-lg border-2 border-indigo-950 hover:bg-indigo-950 transition-all ease-in-out duration-300'
          >
            Sign Up
          </Link>
          <Link
            to={"/login"}
            className='p-1 w-24 lg:w-44 text-center rounded-lg border-2 border-indigo-950 hover:bg-indigo-950 transition-all ease-in-out duration-300'
          >
            Login
          </Link>
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center w-fit gap-2 px-2 lg:text-3xl md:gap-4 lg:gap-7'>
        <Link
          to={"/"}
          className='border-t-2 border-b-2 py-1 border-indigo-950 text-center'
        >
          Home
        </Link>
        <Link
          to={"/protein"}
          className='border-t-2 border-b-2 py-1 border-indigo-950 text-center'
        >
          Protein
        </Link>
        <Link
          to={"/creatine"}
          className='border-t-2 border-b-2 py-1 border-indigo-950 text-center'
        >
          Creatine
        </Link>
        <Link
          to={"/pre-workout"}
          className='border-t-2 border-b-2 py-1 border-indigo-950 text-center'
        >
          Pre-Workout
        </Link>
        <Link
          to={"/manage-inventory"}
          className='border-t-2 border-b-2 py-1 border-indigo-950 text-center'
        >
          Manage Invetory
        </Link>
      </div>
    </div>
  );
};
