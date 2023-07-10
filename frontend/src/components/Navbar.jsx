import React from "react";
import image from "/favicon.ico?url";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='w-full h-fit bg-indigo-900 text-lg lg:text-3xl text-white flex flex-col items-center justify-between py-4 gap-2 md:gap-4'>
      <Link to={"/"} className='flex gap-2 items-center h-fit'>
        <img src={image} />
        <h1 className='font-bold'>Supplement Inventory</h1>
      </Link>
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
