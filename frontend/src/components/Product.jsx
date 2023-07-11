import React from "react";
import { Link } from "react-router-dom";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

export const Product = ({ product }) => {
  const baseURL = window.location.origin;
  const date = formatDistanceToNow(new Date(product.createdAt), {
    addSuffix: true,
  });

  return (
    <div className='flex flex-col w-full bg-neutral-100 rounded-lg h-50 p-4 border-2 border-neutral-300 justify-center items-start'>
      <h1 className='text-green-600 text-2xl font-black'>{product.title}</h1>
      <h1>
        Category: {""}
        <Link
          to={`${baseURL}/${product.category.toLowerCase()}`}
          className='text-blue-600'
        >
          {product.category}
        </Link>
      </h1>
      <h1>Price: {product.price}$</h1>
      <h1>Quantity: {product.quantity}</h1>
      <h1 className=' text-sm text-gray-500 font-bold'>{date.toUpperCase()}</h1>
    </div>
  );
};
