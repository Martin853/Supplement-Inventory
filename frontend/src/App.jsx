import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Protein } from "./pages/Protein";
import { Creatine } from "./pages/Creatine";
import { PreWorkout } from "./pages/PreWorkout";
import { ManageInventory } from "./pages/ManageInventory";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
};
