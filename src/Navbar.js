import React from "react";
import "./Navbar.css";
import { BiShoppingBag } from "react-icons/bi";
import About from "./About";
import { Link, NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Navbar() {
  const [{ basket }, dispatch] = useStateValue();
  const about = () => {
    window.open("./About");
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      id="navbarNav"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Scrubsolace.
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/products" className="nav-link active">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active">
                <p>About</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/logout" className="nav-link active">
                Log Out
              </Link>
            </li>
            <div className="nav-icon">
              <li className=" nav-item nav-icon active">
                <Link to="/cart" className=" nav-link-cart active">
                  <BiShoppingBag />
                  <span className="nav-item" id="item-count">
                    {basket?.length}
                  </span>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
