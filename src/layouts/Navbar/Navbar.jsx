import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect, useRef } from "react";

const initTab = "home";

function Navbar({ products, carts, setToken }) {
  const [tab, setTab] = useState("");

  useEffect(() => {
    setTab(initTab);
  }, []);

  const navRefs = {
    home: useRef(),
    calculator: useRef(),
    animation: useRef(),
    component: useRef(),
    todo: useRef(),
    products: useRef(),
    carts: useRef(),
  };

  useEffect(() => {
    const ref = navRefs[tab] || navRefs[initTab];
    ref.current.click();
  }, [tab]);

  return (
    <div className="navbar-container">
      <Link to="/home">
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={`btn ${
            tab === "home" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setTab("home")}
          ref={navRefs.home}
        >
          Home
        </button>
      </Link>

      <Link to="/calculator">
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={`btn ${
            tab === "calculator" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setTab("calculator")}
          ref={navRefs.calculator}
        >
          Calculator
        </button>
      </Link>

      <Link to="/animation">
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={`btn ${
            tab === "animation" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setTab("animation")}
          ref={navRefs.animation}
        >
          Animation
        </button>
      </Link>

      <Link to="/component">
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={`btn ${
            tab === "component" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setTab("component")}
          ref={navRefs.component}
        >
          Component
        </button>
      </Link>

      <Link to="/todo">
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={`btn ${
            tab === "todo" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setTab("todo")}
          ref={navRefs.todo}
        >
          Todo
        </button>
      </Link>

      <Link to="/products">
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={`btn ${
            tab === "products" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setTab("products")}
          ref={navRefs.products}
        >
          Products ({products.length})
        </button>
      </Link>

      <Link to="/carts">
        <button
          style={{ boxShadow: "0 0 0.25rem gray" }}
          className={`position-relative btn ${
            tab === "carts" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setTab("carts")}
          ref={navRefs.carts}
        >
          Carts
          {carts.length > 0 && (
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {carts.length < 10 ? carts.length : "9+"}
              <span class="visually-hidden">unread messages</span>
            </span>
          )}
        </button>
      </Link>

      <button
        className="btn btn-outline-danger"
        style={{ marginLeft: "1rem" }}
        onClick={() => {setToken("")}}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
