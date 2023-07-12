import React, { createContext, useReducer } from "react";

export const ProductsContext = createContext();

export const productsReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        products: action.payload,
      };
    case "CREATE_PRODUCTS":
      return {
        products: [action.payload, ...state.products],
      };
    case "DELETE_PRODUCT":
      return {
        products: state.products.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    case "UPDATE_PRODUCT":
      const updatedProducts = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, propertyToUpdate: action.payload.propertyValue }
          : product
      );
      return {
        ...state,
        products: updatedProducts,
        refresh: !state.refresh, // Toggle the refresh flag
      };
    default:
      return state;
  }
};

export const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productsReducer, {
    products: null,
  });

  return (
    <ProductsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};
