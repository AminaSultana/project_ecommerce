import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import NavBar from "./components/TopMenu";
import "./App.min.css";
const HomeView = lazy(() => import("./views/Home"));
const ProductDetailView = lazy(() => import("./views/product/Detail"));
const CheckoutView = lazy(() => import("./views/cart/Checkout"));

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Suspense
          fallback={
            <div className="text-white text-center mt-3">Loading...</div>
          }
        >
          <Routes>
            <Route exact path="/" element={<HomeView/>} />
            <Route exact path="/product/detail/:id" element={<ProductDetailView/>} />
            <Route exact path="/checkout" element={<CheckoutView />} />
          </Routes>
        </Suspense>
      </>
    </BrowserRouter>
  );
}

export default App;
