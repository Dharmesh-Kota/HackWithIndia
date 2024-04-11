import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import Form from 'react-bootstrap/Form';

// import BackgroundVideo from '../Context/backgroundVideo';

import Alert from "@mui/material/Alert";
import axios from "axios";
// import Alert from 'react-bootstrap/Alert';
// import '../CSS/Login.css';

import { Select, MenuItem } from "@mui/material";
import config from "../config.js";
import { useAuth } from "../context/auth.jsx";

const defaultTheme = createTheme();

export default function Register() {
  const [loading, setloading] = useState(false);
  const [Emailcheck, setEmailcheck] = useState(false);
  const [passwordcheck, setpasswordcheck] = useState(false);
  const [justVerify, setJustVerify] = useState(false);
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  //   const navigate = useNavigate();

  const handlePasswordofLogin = (e) => {
    const input = e.target.value;
    setpasswordcheck(true);
    setPassword(input);
    if (input.length < 8) {
      setValidPassword(false);
      return;
    } else {
      setValidPassword(true);
    }
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();
  const { LogOut } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setJustVerify(true);

    if (
      username === "" ||
      email === "" ||
      name === "" ||
      !validPassword ||
      password !== repassword ||
      role === ""
    ) {
      return;
    }

    setloading(true);
    if (password === repassword) {
      await axios
        .post((config.BACKEND_API || "http://localhost:8000") + "/signup", {
          username: username,
          email: email,
          name: name,
          password: password,
          role: role,
        })
        .then((response) => {
          if (response.status === 201) {
            navigate("/login");
          }
        })
        .catch((error) => {
          setIsAlert(true);
          // if (error.response.status === 403) {
          //   LogOut();
          // }
          // if (error.response?.status === 409) {
          // } else {
          //   console.error("Error: ", error);
          // }

          console.error("Error: ", error);
        });
    } else {
      setPassword("");
      setRePassword("");
      alert("Passwords do not match!");
    }
    setloading(false);
  };

  return (
    <div className="my-glass-effect">
      <ThemeProvider theme={defaultTheme}>
        <Container
          component="main"
          maxWidth="sm"
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <CssBaseline />
          <Box
            style={{
              backgroundColor: "#caf0f8",
              boxShadow: "0px 4px 8px #caf0f8",
            }}
            sx={{
              marginTop: 12,
              marginBottom: 12,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              borderRadius: "2em",
              padding: "3em",
              height: "auto",
              // "&:hover": {
              //   border: "1px solid #03045e",
              // },
            }}
          >
            <Avatar sx={{ m: 1 }} style={{ backgroundColor: "#25396F" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{ fontFamily: "Quicksand", fontWeight: "bold" }}
            >
              Create A New Account
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1, width: "100%" }}
            >
              <TextField
                id="standard-basic-1"
                variant="standard"
                margin="normal"
                required
                fullWidth
                label="Username"
                name="username"
                autoFocus
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                value={username}
                InputProps={{
                  style: {
                    fontFamily: "Quicksand",
                    fontWeight: "bold",
                  },
                }}
                error={justVerify && username === ""}
                helperText={
                  justVerify &&
                  (username === "" ? "This field cannot be empty." : "")
                }
                autoComplete="off"
              />
              <TextField
                id="standard-basic-2"
                variant="standard"
                margin="normal"
                required
                fullWidth
                label="Name"
                name="name"
                autoFocus
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                InputProps={{
                  style: {
                    fontFamily: "Quicksand",
                    fontWeight: "bold",
                  },
                }}
                error={justVerify && name === ""}
                helperText={
                  justVerify &&
                  (name === "" ? "This field cannot be empty." : "")
                }
                autoComplete="off"
              />
              <TextField
                id="standard-basic-3"
                variant="standard"
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoFocus
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                InputProps={{
                  style: {
                    fontFamily: "Quicksand",
                    fontWeight: "bold",
                  },
                }}
                error={justVerify && email === ""}
                helperText={
                  justVerify &&
                  (email === "" ? "This field cannot be empty." : "")
                }
                autoComplete="off"
              />

              <TextField
                id="standard-basic-4"
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={handlePasswordofLogin}
                value={password}
                InputProps={{
                  style: {
                    fontFamily: "Quicksand",
                    fontWeight: "bold",
                    color: !validPassword ? "#f44336" : "#25396F",
                  },
                }}
                error={justVerify && (!validPassword || password === "")}
                helperText={
                  justVerify &&
                  (password === ""
                    ? "This field cannot be empty."
                    : !validPassword
                    ? "The password must contain at least 8 digits."
                    : "")
                }
                autoComplete="off"
              />
              <TextField
                id="standard-basic-5"
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirm - Password"
                type="password"
                onChange={(e) => {
                  setRePassword(e.target.value);
                }}
                value={repassword}
                InputProps={{
                  style: {
                    fontFamily: "Quicksand",
                    fontWeight: "bold",
                    color: repassword !== password ? "#f44336" : "#25396F",
                  },
                }}
                error={justVerify && repassword !== password}
                helperText={
                  justVerify &&
                  (repassword !== password ? "password is not mathing" : "")
                }
                autoComplete="off"
              />
              <Grid
                item
                xs={10}
                style={{ marginTop: "0.4em", fontFamily: "Quicksand" }}
                sx={{
                  fontWeight: "bold",
                }}
                id="searchBoxContainer"
              >
                Role *
              </Grid>
              <Select
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
                style={{ fontWeight: "bold", fontFamily: "Quicksand" }}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                fullWidth
                error={justVerify && role === ""}
              >
                <MenuItem
                  value="compostAgency"
                  style={{ fontWeight: "bold", fontFamily: "Quicksand" }}
                >
                  Compost Agency
                </MenuItem>
                <MenuItem
                  value="ngo"
                  style={{ fontWeight: "bold", fontFamily: "Quicksand" }}
                >
                  NGO
                </MenuItem>
                <MenuItem
                  value="donor"
                  style={{ fontWeight: "bold", fontFamily: "Quicksand" }}
                >
                  Donor
                </MenuItem>
              </Select>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{
                  fontFamily: "Quicksand",
                  fontWeight: "bold",
                  backgroundColor: "#25396F",
                }}
              >
                {!loading ? "Sign Up" : "Signing Up...."}
              </Button>
              <Grid container>
                <Grid item xs={12}>
                  {isAlert && (
                    <Alert
                      variant="filled"
                      severity="error"
                      style={{ fontFamily: "Quicksand", fontWeight: "600" }}
                    >
                      User Already Exist !!
                    </Alert>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    color="secondary"
                    onClick={() => {
                      navigate("/login");
                    }}
                    variant="text"
                    style={{
                      fontFamily: "Quicksand",
                      fontWeight: "bold",
                      color: "ghostwhite",
                      textDecoration: "underline",
                      color: "#03045e",
                    }}
                  >
                    Already have an account? Sign In
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
