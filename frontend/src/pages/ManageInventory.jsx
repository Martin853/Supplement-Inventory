import React, { useEffect, useState } from "react";
import { ProductManage } from "../components/ProductManage";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ProductForm } from "../components/ProductForm";
import { useProductsContext } from "../hooks/useProductsContext";

export const ManageInventory = () => {
  // Products

  const { products, refresh, dispatch } = useProductsContext();

  // Fetch Products

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REQUEST_LINK}/api/products`
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_PRODUCTS", payload: json });
      }
    };

    fetchProducts();
  }, [refresh]);

  if (!products) {
    return (
      <div className='flex flex-col justify-center items-center gap-3 w-full h-screen col-span-3'>
        <h1 className='text-4xl'>Loading...</h1>
        <AiOutlineLoading3Quarters className='animate-spin text-4xl ' />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className='flex flex-col items-center w-full h-fit'>
        <div className='pt-4 px-4 w-full'>
          <ProductForm />
        </div>
        <div className='flex flex-col justify-center items-center gap-3 w-full h-screen col-span-3'>
          <h1 className='text-4xl'>There are no products in your inventory</h1>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col items-center w-full h-fit'>
      <div className='pt-4 px-4 w-full'>
        <ProductForm />
      </div>
      <div className='w-full p-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => (
          <ProductManage key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
