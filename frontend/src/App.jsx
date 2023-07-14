import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Protein } from "./pages/Protein";
import { Creatine } from "./pages/Creatine";
import { PreWorkout } from "./pages/PreWorkout";
import { ManageInventory } from "./pages/ManageInventory";
import { Signup } from "./pages/Authentication/Signup";
import { Login } from "./pages/Authentication/Login";

export const App = () => {
  const { user } = useAuthContext();

  return (
    <div className='font-montserrat'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={user ? <Home /> : <Navigate to='/login' />}
          />
          <Route
            path='/protein'
            element={user ? <Protein /> : <Navigate to='/login' />}
          />
          <Route
            path='/creatine'
            element={user ? <Creatine /> : <Navigate to='/login' />}
          />
          <Route
            path='/pre-workout'
            element={user ? <PreWorkout /> : <Navigate to='/login' />}
          />
          <Route
            path='/manage-inventory'
            element={user ? <ManageInventory /> : <Navigate to='/login' />}
          />
          <Route
            path='/signup'
            element={!user ? <Signup /> : <Navigate to='/' />}
          />
          <Route
            path='/login'
            element={!user ? <Login /> : <Navigate to='/' />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
