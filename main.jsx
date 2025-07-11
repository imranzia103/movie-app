import React from "react";
import ReactDom from "react-dom/client"; // Corrected import

import { Provider } from "react-redux";
import Register from "./pages/Auth/Register.jsx";
import Login from "./pages/Auth/Login.jsx";


import "./index.css";
import App from "./App.jsx";
import  store  from "./redux/store.js";
import {
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router";
import { createBrowserRouter } from "react-router-dom";


//Auth

//Restricted


import Home from "./pages/Home.jsx"
import PrivateRoute from "./components/PrivateRoute.jsx";
import Profile from "./pages/User/Profile.jsx";
import Admin from "./pages/Admin/Admin.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(

   <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route index={true} path="/" element={<Home />} />
      
      
       <Route path="" element={<PrivateRoute/>}>
        <Route path="/profile" element={<Profile />} />
      

      
      
      

      
      </Route>
    </Route>
  )
);
ReactDom.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
