import React, { useState } from "react";
import { Link } from "react-router-dom";
// import '../CSS/Navbar.css';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import config from "../config.js";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const LogOut = () => {
    setIsLoggedIn(false);
    window.localStorage.removeItem("token");
    navigate("/");
  };

  const navbarStyle = {
    position: "sticky",
    top: "0%",
    zIndex: 100,
    backgroundColor: "#20247B",
    margin: 0,
  };

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
            {window.localStorage.getItem("role") === '"compostAgency"' && (
              <>
                <li className="nav-item">
                  <div className="my-button">
                    <Link
                      className="nav-link"
                      to="/agency_rewards"
                      style={{ color: "white" }}
                    >
                      Rewards
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="my-button">
                    <Link
                      className="nav-link"
                      to="/history"
                      style={{ color: "white" }}
                    >
                      History
                    </Link>
                  </div>
                </li>
              </>
            )}
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
                <>
                  <div>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircleOutlinedIcon
                        fontSize="large"
                        style={{ color: "white" }}
                      />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>
                        <Link className="nav-link" to="/profile">
                          Profile
                        </Link>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleClose();
                          LogOut();
                        }}
                      >
                        Logout
                      </MenuItem>
                    </Menu>
                  </div>
                </>
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
