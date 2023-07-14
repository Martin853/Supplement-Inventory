import React, { useEffect } from "react";
import { Product } from "../components/Product";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useProductsContext } from "../hooks/useProductsContext";

export const PreWorkout = () => {
  // Pre Workout

  const { products, dispatch } = useProductsContext();

  // Fetch Pre Workout

  useEffect(() => {
    const fetchPreWorkout = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_REQUEST_LINK}/api/products/pre-workout`
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_PRODUCTS", payload: json });
      }
    };

    fetchPreWorkout();
  }, []);

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
      <div className='flex flex-col justify-center items-center gap-3 w-full h-screen col-span-3'>
        <h1 className='text-4xl'>There are no products in your inventory</h1>
      </div>
    );
  }

  return (
    <div className='w-full p-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};
