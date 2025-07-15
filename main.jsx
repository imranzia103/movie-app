import React from "react";
import ReactDom from "react-dom/client"; // Corrected import

import { Provider } from "react-redux";


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

import PrivateRoute from "./pages/Auth/PrivateRoute.jsx";
import Profile from "./pages/Auth/user/Profile.jsx";

//Restricted


import Home from "./pages/Home.jsx"
import Register from './pages/Auth/Register.jsx';
import Login from './pages/Auth/Login.jsx';
import AdminRoutes from "./pages/Admin/AdminRoutes.jsx";
import GenreList from "./pages/Admin/GenreList.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />}/>
      <Route path="/Register" element={<Register />}/>
      <Route path="/Login" element={<Login />}/>

      //Resticted Routed

       <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />

        
      </Route>

        <Route path="" element={<AdminRoutes />} />
        <Route path="/admin/movies/genre" element={<GenreList />} />


      {" "}
    </Route>
  )
);

ReactDom.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
