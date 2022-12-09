import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  // const NavbarStyle = {
  //   color: "red",
  //   textDecoration: 'none'
  // }

  // const liStyle = {
  //   listStyle: 'none',
  //   listStyleType: 'none',
  // }

  // const linkStyle = {
  //   fontWeight: 'bold',
  // }

  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
     
    </>
  );
}
