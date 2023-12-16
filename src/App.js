import {
  createBrowserRouter, RouterProvider, Outlet
} from "react-router-dom";

import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Project from "./Pages/Project/Project"
import  Registration from "./Pages/Registration/Registration";


const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )

}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/project",
        element: <Project />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}


export default App

