import React, { useEffect, useState } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css'

import Errorpage from "./routes/Errorpage/Errorpage";
import Home from "./routes/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Errorpage />,
  }
]);


function App() {


  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
