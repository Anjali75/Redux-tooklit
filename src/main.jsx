import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/pages/Home.jsx";
import Cart from "./components/pages/Cart.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./components/common/MainLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element = {<MainLayout/>}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/cart"} element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
