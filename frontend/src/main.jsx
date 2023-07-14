import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { ProductsContextProvider } from "./context/ProductContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
  </AuthContextProvider>
);
