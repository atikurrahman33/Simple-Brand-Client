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




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main_layout></Main_layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
          path:"/",
          element:<Home></Home>, 
          loader:()=>fetch('/Card.json'),      
      },
      {
        path:"/addProduct",
        element:<Add_Product></Add_Product>,          
    },
    {
      path:"/myProduct",
      element:<My_product></My_product>,         
  },
  {
    path:"/blog",
    element:<Blog></Blog>       
},
{
  path:"/contact",
  element:<Contact></Contact>,      
},
{
  path:"/about/:id",
  element:<Carrds></Carrds>,
  loader:()=>fetch('http://localhost:5000/users'),
},
{
  path:"/login",
  element:<Login></Login>
  
},
{
  path:"/registration",
  element:<Registration></Registration>,
},


    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
