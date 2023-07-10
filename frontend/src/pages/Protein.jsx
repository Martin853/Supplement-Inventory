import React, { useEffect, useState } from "react";
import { Product } from "../components/Product";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const Protein = () => {
  // Protein

  const [protein, setProtein] = useState(null);

  // Fetch Protein

  useEffect(() => {
    const fetchProtein = async () => {
      const response = await fetch(
        "http://localhost:3000/api/products/protein"
      );
      const json = await response.json();

      if (response.ok) {
        setProtein(json);
      }
    };

    fetchProtein();
  }, []);

  return (
    <div className='w-full p-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3'>
      {protein ? (
        protein.map((product) => (
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
