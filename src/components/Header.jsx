import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../css/Header.css";
import { FaPencilAlt } from "react-icons/fa";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Vision Drawing Logo" />
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
        <div className="dropdown">
          <Link onClick={toggleDropdown} className="pencil">
            <FaPencilAlt className="pencil-icon" />
            Gallery
          </Link>
          {showDropdown && (
            <div className="dropdown-content">
              <Link to="/gallery">Saved Prompts</Link>
              <Link to="/user-gallery">User Artwork</Link>
            </div>
          )}
        </div>
        <Link to="/upload-images" className="pencil">
          <FaPencilAlt className="pencil-icon" />
          Upload
        </Link>
      </nav>
    </header>
  );
}
