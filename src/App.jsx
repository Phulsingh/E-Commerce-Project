import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/User/Login";
import Register from "./Components/User/Register";
import ContaxtProvider from "./Components/Contaxt/ContaxtProvider";
import ProductPage from "./Components/ProductPage/ProductPage";
import CheckoutPage from "./Components/Cart/CheckoutPage";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; // Ensure styles are imported

const App = () => {
  return (
    <ContaxtProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<ProductPage/>}/>
          <Route path="/order" element={<CheckoutPage/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={3000} limit={3} />
    </ContaxtProvider>
  );
};

export default App;
