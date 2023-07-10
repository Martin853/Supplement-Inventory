import React, { useEffect, useState } from "react";

export const Home = () => {
  // Products

  const [products, setProducts] = useState(null);

  // Fetch Products

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3000/api/products");
      const json = await response.json();

      if (response.ok) {
        setProducts(json);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products &&
        products.map((product) => <p key={product._id}>{product.title}</p>)}
    </div>
  );
};
