import React from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // Remove user from local storage

    localStorage.removeItem("user");

    dispatch({ tyoe: "LOGOUT" });
  };

  return { logout };
};
