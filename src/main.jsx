import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Home from './Components/Home/Home';
import Root from './Layout/Root';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import Error from './Components/Error/Error';
import { HelmetProvider } from 'react-helmet-async';
import Details from './Components/Details/Details';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile';
import Update from './Components/Update/Update';
import BasicMap from './Components/GoogleMap/BasicMap';
import Order from './Components/Orders/Order';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/details/:id',
        loader: ()=>fetch('/estate.json'),
        element:<PrivateRoute><Details></Details></PrivateRoute>
      },
      {
        path:'/bMap/:id',
        loader: ()=>fetch('/estate.json'),
        element:<BasicMap></BasicMap>
      },
      {
        path:'/uProfile',
        element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path:'/update',
        element:<PrivateRoute><Update></Update></PrivateRoute>
      },
      {
        path:'/order',
        element:<PrivateRoute><Order></Order></PrivateRoute>,
        loader: ()=> fetch('/estate.json')
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
