import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link> */}
      {/* 8 - active link */}
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="/about"
      >
        Sobre
      </NavLink>
    </nav>
  );
};

export default Navbar;
