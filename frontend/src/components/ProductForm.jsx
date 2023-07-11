import React, { useState } from "react";
import { useProductsContext } from "../hooks/useProductsContext";

export const ProductForm = () => {
  const { dispatch } = useProductsContext();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { title, category, price, quantity };

    console.log(product);

    const response = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setTitle("");
      setCategory("");
      setQuantity("");
      setPrice("");
      setError(null);
      console.log("New workout added, ", json);
      dispatch({ type: "CREATE_PRODUCTS", payload: json });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full p-4 h-fit flex flex-col gap-2 bg-neutral-100 border-2 border-neutral-300 rounded-lg'
    >
      <h1 className='text-2xl font-extrabold text-fuchsia-950'>
        Add New Product
      </h1>
      <label className='text-lg'>Product Title:</label>
      <input
        className='outline-none p-2 rounded-lg border-2 border-gray-200'
        type='text'
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <label className='text-lg'>Product Category:</label>
      <select
        className='outline-none p-2 rounded-lg border-2 border-gray-200'
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        <option>Select A Category</option>
        <option value={"Protein"}>Protein</option>
        <option value={"Creatine"}>Creatine</option>
        <option value={"Pre-Workout"}>Pre-Workout</option>
      </select>

      <label className='text-lg'>Product Price:</label>
      <input
        className='outline-none p-2 rounded-lg border-2 border-gray-200'
        type='number'
        onChange={(e) => {
          setPrice(parseFloat(e.target.value));
        }}
        value={price}
      />
      <label className='text-lg'>Product Quantity:</label>
      <input
        className='outline-none p-2 rounded-lg border-2 border-gray-200'
        type='number'
        onChange={(e) => {
          setQuantity(parseInt(e.target.value));
        }}
        value={quantity}
      />

      {error && (
        <div className='w-full h-fit bg-red-200 mt-2 p-4 rounded-lg border-2 border-red-700 text-red-700 flex justify-center items-center'>
          {error}
        </div>
      )}

      <button
        type='submit'
        className='w-full h-fit mt-2 py-3 border-neutral-300 border-2 rounded-lg text-xl hover:bg-neutral-200 transition-all duration-300 ease-in-out font-bold'
      >
        Create
      </button>
    </form>
  );
};
