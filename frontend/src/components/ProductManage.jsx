import React from "react";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export const ProductManage = ({ product }) => {
  const baseURL = window.location.origin;

  return (
    <div className='flex flex-col w-full bg-neutral-100 rounded-lg h-fit p-4 border-2 border-neutral-300 justify-center items-start'>
      <h1 className='text-green-600 text-2xl font-black'>{product.title}</h1>
      <h1>
        Category:{"  "}
        <Link
          to={`${baseURL}/${product.category.toLowerCase()}`}
          className='text-blue-600'
        >
          {product.category}
        </Link>
      </h1>
      <h1>Price: {product.price}$</h1>
      <h1>Quantity: {product.quantity}</h1>
      <h1>{product.createdAt}</h1>
      <div className='w-full h-fit py-2 flex gap-2'>
        <button className='w-full flex justify-center items-center gap-2 bg-emerald-400 border-emerald-500 border-2 p-2 rounded-lg text-white font-semibold hover:bg-emerald-500 transition-all ease-in-out duration-300'>
          <AiFillEdit />
          Edit
        </button>
        <button className='w-full flex justify-center items-center gap-2 bg-red-400 border-red-500 border-2 p-2 rounded-lg text-white font-semibold hover:bg-red-500 transition-all ease-in-out duration-300'>
          <AiFillDelete />
          Delete
        </button>
      </div>
    </div>
  );
};
