import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import './index.css'

import Errorpage from "./routes/Errorpage/Errorpage";
import Home from "./routes/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Errorpage />,
  }
]);

const root = document.getElementById('root')
if(root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
        <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
                integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
                crossOrigin="anonymous"
            />
        <RouterProvider router={router} />
    </React.StrictMode>
  )
}