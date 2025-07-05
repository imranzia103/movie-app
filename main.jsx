import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from "./components/redux/store.js";
import { Provider } from 'react-redux';
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";


//Auth

import AdminRoute from './components/pages/Admin/AdminRoutes.jsx';
import CategoryList from './components/pages/Admin/CategoryList.jsx';
import ProductList from './components/pages/Admin/ProductList.jsx';
import ProductUpdate from './components/pages/Admin/ProductUpdate.jsx'
import AllProducts from './components/pages/Admin/AllProducts.jsx';


//Resticted

import Login from './components/pages/Auth/Login.jsx';
import Register from './components/pages/Auth/Register.jsx';
import PrivateRoute from './components/pages/Auth/PrivateRoute.jsx';
import Profile from "./components/pages/User/Profile.jsx"



import Home from './components/pages/Home.jsx';


const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path="/" element={<App />}>
          <Route index={true} path="/" element={<Home />} />
          <Route path='/login' element={<Login/>} />
           <Route path='/register' element={<Register/>} />



           <Route path='' element={<PrivateRoute/>}>
           <Route path='/profile' element={<Profile/>}/>

            <Route path='/admin' element={<AdminRoute/>}/>
            
            <Route path="/categorylist" element={<CategoryList />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/allproducts" element={<AllProducts />} />
            <Route path="/ProductUpdate/:_id" element={<ProductUpdate />} />

           







           </Route>



  </Route>)

);

createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    
      <RouterProvider router={router} />
    
  </Provider>
  
)
