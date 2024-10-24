import { Outlet } from "react-router";

import Header from "../header/header";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

import "./LATOUT.css";

function LAYOUT({ products,carts,setToken }) {
  return (
    <div className="layout-container">
       <Header />
       <Navbar products={products} carts={carts} setToken={setToken}/>
       <Outlet />
       <Footer />
    </div>
  );
}

export default LAYOUT;