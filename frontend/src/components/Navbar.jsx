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
    backdropFilter: "blur(10px)",
    margin: 0,
    overflowY: "hidden",
    zIndex: 4,
  };

  return (
    <nav className=" navbar navbar-expand-lg p-2" style={navbarStyle}>
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            fontWeight: "bold",
            fontSize: "xx-large",
            fontFamily: "Quicksand",
          }}
        >
          <i className="fa-solid fa-seedling"></i> Compostify
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
          <MenuIcon />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Button
              disableRipple
              variant="text"
              style={{ transition: "all 0.5s ease" }}
              sx={{
                "&:hover": {
                  borderBottom: "1px solid #03045e",
                  borderRadius: "5px",
                },
              }}
            >
              <Link
                className="nav-link active"
                to="/"
                style={{ fontFamily: "Quicksand", transition: "all 0.5s ease" }}
              >
                Home
              </Link>
            </Button>
            {window.localStorage.getItem("role") === '"compostAgency"' && (
              <>
                <Button
                  disableRipple
                  variant="text"
                  style={{ transition: "all 0.5s ease" }}
                  sx={{
                    "&:hover": {
                      borderBottom: "1px solid #03045e",
                      borderRadius: "5px",
                    },
                  }}
                >
                  <Link
                    className="nav-link active"
                    to="/agency_rewards"
                    style={{ fontFamily: "Quicksand" }}
                  >
                    Rewards
                  </Link>
                </Button>
                <Button
                  disableRipple
                  variant="text"
                  style={{ transition: "all 0.5s ease" }}
                  sx={{
                    "&:hover": {
                      borderBottom: "1px solid #03045e",
                      borderRadius: "5px",
                    },
                  }}
                >
                  <Link
                    className="nav-link active"
                    to="/history"
                    style={{ fontFamily: "Quicksand" }}
                  >
                    History
                  </Link>
                </Button>
              </>
            )}
            {window.localStorage.getItem("role") === '"donor"' && (
              <>
                <Button
                  disableRipple
                  variant="text"
                  style={{ transition: "all 0.5s ease" }}
                  sx={{
                    "&:hover": {
                      borderBottom: "1px solid #03045e",
                      borderRadius: "5px",
                    },
                  }}
                >
                  <Link
                    className="nav-link active"
                    to="/user_rewards"
                    style={{ fontFamily: "Quicksand" }}
                  >
                    Rewards
                  </Link>
                </Button>
                <Button
                  disableRipple
                  variant="text"
                  style={{ transition: "all 0.5s ease" }}
                  sx={{
                    "&:hover": {
                      borderBottom: "1px solid #03045e",
                      borderRadius: "5px",
                    },
                  }}
                >
                  <Link
                    className="nav-link active"
                    to="/history"
                    style={{ fontFamily: "Quicksand" }}
                  >
                    History
                  </Link>
                </Button>
              </>
            )}
            <Button
              disableRipple
              variant="text"
              style={{ transition: "all 0.5s ease" }}
              sx={{
                "&:hover": {
                  borderBottom: "1px solid #03045e",
                  borderRadius: "5px",
                },
              }}
            >
              <Link
                className="nav-link active"
                to="/aboutus"
                style={{ fontFamily: "Quicksand" }}
              >
                AboutUS
              </Link>
            </Button>

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
                      style={{ fontFamily: "Quicksand" }}
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
              <Button
                disableRipple
                variant="outlined"
                style={{ transition: "all 0.5s ease" }}
                sx={{
                  "&:hover": {
                    borderBottom: "1px solid #03045e",
                    borderRadius: "5px",
                  },
                }}
              >
                <Link
                  className="nav-link"
                  to="/login"
                  style={{ fontFamily: "Quicksand" }}
                >
                  LogIn/SignUP
                </Link>
              </Button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
