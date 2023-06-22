import React, { useEffect, useState } from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css'

import Errorpage from "./routes/Errorpage/Errorpage";
import Home from "./routes/Home/Home";
import Navbar from './Navbar/Navbar'
import jwtDecode from "jwt-decode"
import secrets from '../secrets.json'
import { UserObject } from './interfaces';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Errorpage />,
  }
]);


function App() {

    const [user, setUser] = useState<UserObject>()

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: secrets.googleOAuth.client_id,
            callback: handleCallbackResponse
        })
        google.accounts.id.prompt()
        google.accounts.id.renderButton(
            document.getElementById("googleSignIn"),
            { theme: "filled_black", shape: ""}
        )
    }, [])

    function handleCallbackResponse(response: any) {
        const userObject: UserObject = jwtDecode(response.credential)
        // console.log(userObject)
        setUser(userObject)
    }

    function handleSignOut() {
        setUser(undefined)
    }

    return (
        <div className='app'>
            <Navbar user={user} handleSignOut={() => handleSignOut()}/>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
