import { useState, useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import LAYOUT from "./layouts/LAYOUT/LAYOUT";

import Home from "./pages/Home/Home";
import Todo from "./pages/Todo/Todo";
import Calculator from "./pages/Calculator/Calculator";
import Components from "./pages/Components/Components";
import Animation from "./pages/Animation/Animation";
import Products from "./pages/Products/Products";
import Carts from "./pages/Carts/Carts";

import { fetchProducts } from "./Data/products";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Login from "./pages/Login/Login";

function App() {
  const [token, setToken] = useState('');
  const [role , setRole] = useState('');

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => setProducts(fetchProducts()), []);
  useEffect(() => console.log(products), [products]);

  if (token === "") {
    return <Login setToken={setToken} setRole={setRole}/>;
  } else {
    return (
      <div className="app-container">
        <HashRouter>
          <Routes>
            <Route element={<LAYOUT products={products} carts={carts} setToken={setToken} />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/animation" element={<Animation />} />
              <Route path="/component" element={<Components />} />
              <Route path="/todo" element={<Todo />} />
              <Route
                path="/products"
                element={
                  <Products
                    products={products}
                    carts={carts}
                    setCarts={setCarts}
                  />
                }
              />
              <Route
                path="/carts"
                element={<Carts carts={carts} setCarts={setCarts} />}
              />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    );
  }
}

export default App;
