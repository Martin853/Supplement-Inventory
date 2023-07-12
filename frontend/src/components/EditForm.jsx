import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const EditForm = ({ product, setToggleEdit }) => {
  // Variables

  const [title, setTitle] = useState(product.title);
  const [category, setCategory] = useState(product.category);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = () => {};

  // Disable Scrolling

  useEffect(() => {
    // Add the CSS class to disable scrolling when the modal is open
    document.body.classList.add("overflow-y-hidden");

    return () => {
      // Remove the CSS class when the modal is closed
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []);

  return (
    <div className='w-screen h-screen top-0 right-0 bottom-0 left-0 fixed overflow-y-hidden'>
      <div className='w-screen h-screen top-0 right-0 bottom-0 left-0 fixed bg-gray-800 bg-opacity-75'></div>
      <div
        className='absolute z-50 w-5/6'
        style={{ top: "45%", left: "50%", transform: "translate(-50%, -50%)" }}
      >
        <form
          onSubmit={handleSubmit}
          className='w-full p-4 h-fit flex flex-col gap-2 bg-neutral-100 border-2 border-neutral-300 rounded-lg'
        >
          <div className='flex justify-between items-center'>
            <h1 className='text-sm sm:text-xl font-extrabold text-fuchsia-950'>
              Edit Product: {product._id}
            </h1>
            <AiOutlineCloseCircle className='text-black text-4xl' />
          </div>

          <label className='text-lg'>Product Title:</label>
          <input
            className={
              emptyFields.includes("title")
                ? "outline-none p-2 rounded-lg border-2 border-red-400"
                : "outline-none p-2 rounded-lg border-2 border-gray-200"
            }
            type='text'
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          <label className='text-lg'>Product Category:</label>
          <select
            className={
              emptyFields.includes("category")
                ? "outline-none p-2 rounded-lg border-2 border-red-400"
                : "outline-none p-2 rounded-lg border-2 border-gray-200"
            }
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
            className={
              emptyFields.includes("price")
                ? "outline-none p-2 rounded-lg border-2 border-red-400"
                : "outline-none p-2 rounded-lg border-2 border-gray-200"
            }
            type='number'
            onChange={(e) => {
              setPrice(parseFloat(e.target.value));
            }}
            value={price}
          />
          <label className='text-lg'>Product Quantity:</label>
          <input
            className={
              emptyFields.includes("quantity")
                ? "outline-none p-2 rounded-lg border-2 border-red-400"
                : "outline-none p-2 rounded-lg border-2 border-gray-200"
            }
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
      </div>
    </div>
  );
};
