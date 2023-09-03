import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Header.css";
import {FaPencilAlt} from "react-icons/fa"


export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="vision Drawing Logo" />
      </div>
      <nav className="nav-links">
        <Link to="/" className="pencil">
          <FaPencilAlt className="pencil-icon" />
          Home
        </Link>
        <Link to="/drawing-prompt" className="pencil">
          <FaPencilAlt className="pencil-icon" />
          Drawing Prompts
        </Link>
        <Link to="/gallery" className="pencil">
          <FaPencilAlt className="pencil-icon" />
          Gallery
        </Link>
      </nav>
    </header>
  );
}