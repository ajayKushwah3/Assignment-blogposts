import React from 'react'
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Home from '../pages/home';
import Profile from '../pages/profile';

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user/:id' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes