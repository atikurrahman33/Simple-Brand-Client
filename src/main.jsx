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
import CarCard from './Pages/Add_Product/CarCard';






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
        loader: ({ params }) => fetch(`https://simple-brand-server-bnt1savmi-atikur-rahmans-projects-28d664b2.vercel.app/brand/${params.id}`),
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
        loader: ({ params }) => fetch(`https://simple-brand-server-bnt1savmi-atikur-rahmans-projects-28d664b2.vercel.app/newuser/${params.id}`),

      },
      {
        path: "/carcard/:id",
        element: <PrivateRoute><CarCard></CarCard></PrivateRoute>,
        loader: ({ params }) => fetch(`https://simple-brand-server-bnt1savmi-atikur-rahmans-projects-28d664b2.vercel.app/newuser/${params.id}`)
      },


    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
