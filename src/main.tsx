import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import "./styles/global.scss"
import {ShopProvider} from "./data/shop-store.tsx";


//Switching page connections
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopProvider>
        <App/>
      </ShopProvider>
    </BrowserRouter>
  </React.StrictMode>
);
