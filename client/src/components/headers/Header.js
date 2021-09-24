import React from "react";
import Menu from "./icon/menu.svg";
import Close from "./icon/close.svg";
import Cart from "./icon/cart.svg";
import logo from './icon/logo.svg'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="menu">
        <img src={Menu} alt="" width="30" />
      </div>
      <div className="logo">
        <h4>
          <Link to="/"> <img src={logo} alt="" width="40" /></Link>
        </h4>
      </div>
      <ul>
        <li>
          <Link to="/products">Product</Link>
        </li>
        <li>
          <Link to="/login">Login ✥ Register</Link>
        </li>

        <li>
          <img src={Close} alt="" width="30" className="menu" />
        </li>
      </ul>
      <div className="cart-icon">
        <span>0</span>
        <Link to='/cart'>
          <img src={Cart} alt="" width="30" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
