import React from "react";
import Header from "./component/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductList from "./component/ProductList";
import ProductDetails from "./component/ProductDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/home" element={<Navigate to="/"/>}/>
        <Route path="/product/:productId" element={<ProductDetails />}/>
        <Route>404 Not Found</Route>
      </Routes>
    </>
  );
}

export default App;
