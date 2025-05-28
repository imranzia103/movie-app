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

//Restricted


import Home from "./pages/Home.jsx"


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />}/>


      {" "}
    </Route>
  )
);

ReactDom.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
