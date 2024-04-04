import React, { useState } from "react";
import { Link } from "react-router-dom";
// import '../CSS/Navbar.css';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { useAuth } from "../context/auth";

function Navbar() {
  const navbarStyle = {
    position: "sticky",
    top: "0%",
    zIndex: 100,
    backgroundColor: "#20247B",
    margin: 0,
  };

  const { isLoggedIn } = useAuth();

  return (
    <nav className=" navbar navbar-expand-lg p-2" style={navbarStyle}>
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{ color: "white", fontWeight: "bold", fontSize: "x-large" }}
        >
          Hack With India
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <MenuIcon style={{ color: "white" }} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="my-button">
                <Link
                  className="nav-link active"
                  to="/"
                  style={{ color: "white" }}
                >
                  Home
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="my-button">
                <Link
                  className="nav-link"
                  to="/booklist"
                  style={{ color: "white" }}
                >
                  Booklist
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="my-button">
                <Link
                  className="nav-link"
                  to="/aboutus"
                  style={{ color: "white" }}
                >
                  AboutUS
                </Link>
              </div>
            </li>
            <li className="nav-item">
              {isLoggedIn ? (
                <Link
                  className="nav-link"
                  to="/profile"
                  style={{ color: "white" }}
                >
                  <AccountCircleOutlinedIcon fontSize="large" />
                </Link>
              ) : (
                <Button variant="outlined">
                  <Link
                    className="nav-link"
                    to="/login"
                    style={{ color: "white" }}
                  >
                    LogIn/SignUP
                  </Link>
                </Button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
