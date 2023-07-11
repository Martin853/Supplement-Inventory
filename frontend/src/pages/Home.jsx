import React, { useEffect } from "react";
import { Product } from "../components/Product";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useProductsContext } from "../hooks/useProductsContext";

export const Home = () => {
  // Products

  const { products, dispatch } = useProductsContext();

  // Fetch Products

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3000/api/products");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_PRODUCTS", payload: json });
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='w-full p-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3'>
      {products ? (
        products.map((product) => (
          <Product key={product._id} product={product} />
        ))
      ) : (
        <div className='flex flex-col justify-center items-center gap-3 w-screen h-screen'>
          <h1 className='text-4xl'>Loading...</h1>
          <AiOutlineLoading3Quarters className='animate-spin text-4xl ' />
        </div>
      )}
    </div>
  );
};
