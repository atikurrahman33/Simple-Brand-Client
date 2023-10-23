import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home/Home.jsx';
import Main_layout from './Main_Layout/Main_layout.jsx';
import Add_Product from './Pages/Add_Product/Add_Product.jsx';
import My_product from './Pages/My_Product/My_product.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import Contact from './Pages/Contacts/Contact.jsx';

import ErrorPage from './Pages/Home/ErrorPage.jsx';
import Carrds from './All About Card/Carrds';
import Login from './User Page/Login/Login';
import Registration from './User Page/Registration/Registration';
import AuthProvider from './User Page/AuthProvider';
import PrivateRoute from './Route/PrivateRoute';
import Update from './Pages/My_Product/update';
import ToyCard from './Pages/Add_Product/ToyCard';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_layout></Main_layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/Card.json'),
      },
      {
        path: "/addProduct",
        element: <PrivateRoute><Add_Product></Add_Product></PrivateRoute>,
      },
      {
        path: "/myProduct",
        element: <PrivateRoute> <My_product></My_product></PrivateRoute>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about/:id",
        element: <Carrds></Carrds>,
        loader: ({ params }) => fetch(`http://localhost:5000/brand/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>

      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/newuser/${params.id}`),

      },
      {
        path: "/toycard/:id",
        element: <PrivateRoute><ToyCard></ToyCard></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/newuser/${params.id}`)
      },


    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
