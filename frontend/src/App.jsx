import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Protein } from "./pages/Protein";
import { Creatine } from "./pages/Creatine";
import { PreWorkout } from "./pages/PreWorkout";
import { ManageInventory } from "./pages/ManageInventory";
import { Signup } from "./pages/Authentication/Signup";
import { Login } from "./pages/Authentication/Login";

export const App = () => {
  return (
    <div className='font-montserrat'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/protein' element={<Protein />} />
          <Route path='/creatine' element={<Creatine />} />
          <Route path='/pre-workout' element={<PreWorkout />} />
          <Route path='/manage-inventory' element={<ManageInventory />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
