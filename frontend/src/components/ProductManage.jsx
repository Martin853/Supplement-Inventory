import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useProductsContext } from "../hooks/useProductsContext";

import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { EditForm } from "./EditForm";

export const ProductManage = ({ product }) => {
  const baseURL = window.location.origin;

  const [toggleEdit, setToggleEdit] = useState(false);

  const handleToggle = () => {
    setToggleEdit(!toggleEdit);
  };

  const date = formatDistanceToNow(new Date(product.createdAt), {
    addSuffix: true,
  });

  const { dispatch } = useProductsContext();

  const handleDelete = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_REQUEST_LINK}/api/products/` + product._id,
      {
        method: "DELETE",
      }
    );

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_PRODUCT", payload: json });
    }
  };

  return (
    <div>
      <div className='flex flex-col w-full bg-neutral-100 rounded-lg h-64  p-4 border-2 border-neutral-300 justify-center items-start'>
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
        <h1 className=' text-sm text-gray-500 font-bold'>
          {date.toUpperCase()}
        </h1>

        <div className='w-full h-fit py-2 flex gap-2'>
          <button
            onClick={handleToggle}
            className='w-full flex justify-center items-center gap-2 bg-emerald-400 border-emerald-500 border-2 p-2 rounded-lg text-white font-semibold hover:bg-emerald-500 transition-all ease-in-out duration-300'
          >
            <AiFillEdit />
            Edit
          </button>
          <button
            onClick={handleDelete}
            className='w-full flex justify-center items-center gap-2 bg-red-400 border-red-500 border-2 p-2 rounded-lg text-white font-semibold hover:bg-red-500 transition-all ease-in-out duration-300'
          >
            <AiFillDelete />
            Delete
          </button>
        </div>
      </div>

      {toggleEdit && (
        <EditForm product={product} setToggleEdit={setToggleEdit} />
      )}
    </div>
  );
};
