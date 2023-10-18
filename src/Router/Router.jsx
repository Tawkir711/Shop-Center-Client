import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from '../Components/Error/ErrorPage';
import Register from '../Components/Register/Register';
import Login from '../Components/Login/Login';
import PrivateRoute from './PrivateRoute';
import AddProduct from '../Components/AddProduct/AddProduct';
import MyCart from '../Components/MyCart/MyCart';
import Home from '../Components/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('product.json')
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/myCart',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/login',
        element:<Login></Login>
      }
    ]
  }
])

export default router;