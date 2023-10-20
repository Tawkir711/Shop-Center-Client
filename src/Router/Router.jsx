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
import BrandDetail from '../Components/BrandDetail/BrandDetail';
import CardDetails from '../Components/Details/CardDetails';
import UpdateData from '../Components/UpdateData/UpdateData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/product.json"),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/myCart"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/brandDetail/:brandName",
        element: (
          <PrivateRoute>
            <BrandDetail></BrandDetail>
          </PrivateRoute>
        ),
      },
      {
        path: "/cardInfo/:id",
        element: <CardDetails></CardDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cardInfo/${params.id}`),
      },
      {
        path: "/updateData/:id",
        element: <UpdateData></UpdateData>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cardInfo/${params.id}`),
      },
    ],
  },
]);
export default router;