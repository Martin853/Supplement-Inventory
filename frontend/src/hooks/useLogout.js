import React from "react";
import { useAuthContext } from "./useAuthContext";
import { useProductsContext } from "../context/ProductContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: productsDispatch } = useProductsContext();

  const logout = () => {
    // Remove user from local storage

    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });
    productsDispatch({ type: "SET_PRODUCTS", payload: null });
  };

  return { logout };
};
