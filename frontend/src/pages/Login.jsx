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
// import Form from "react-bootstrap/Form";

// import BackgroundVideo from '../Context/backgroundVideo';

// import { useFirebase } from '../Context/Firebase';
import Alert from "@mui/material/Alert";

// import Alert from "react-bootstrap/Alert";
// import "../CSS/Login.css";

import { useAuth } from "../context/auth";
import axios from "axios";
import config from "../config.js";

const defaultTheme = createTheme();

export default function Login() {
  const [loading, setloading] = useState(false);
  const [Emailcheck, setEmailcheck] = useState(false);
  const [passwordcheck, setpasswordcheck] = useState(false);
  const [justVerify, setJustVerify] = useState(false);

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const { setIsLoggedIn, setRole, LogOut } = useAuth();

  const [isAlert, setIsAlert] = useState(false);
  // const navigate = useNavigate();

  //   const handleSubmit = async (e) => {};

  const handlePasswordofLogin = (e) => {
    const input = e.target.value;
    // setpasswordcheck(true);
    setPassword(input);
    if (input.length < 8) {
      setValidPassword(false);
      return;
    } else {
      setValidPassword(true);
    }
  };

  const [emailUsername, setEmailUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setJustVerify(true);
    if (emailUsername === "" || password === "" || !validPassword) {
      return;
    }
    setloading(true);
    await axios
      .post(
        (config.BACKEND_API || "http://localhost:8000") + "/create-session",
        {
          emailUsername: emailUsername,
          password: password,
        }
      )
      .then((response) => {
        const { token, role } = response.data;
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("role", JSON.stringify(role));
        setIsLoggedIn(true);
        setRole(role);
        navigate("/");
      })
      .catch((error) => {
        setIsAlert(true);
        // if (error.response.status === 403) {
        //   LogOut();
        // }
        // if (error.response?.status === 401) {
        //   // setEmailUsername("");
        //   // setPassword("");
        //   //   alert("Invalid Username/Email or Password!");
        //   console.log("Error: 401 -> Login");
        // } else {
        //   console.error("Error: ", error);
        // }

        console.error("Error: ", error);
      });
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
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              borderRadius: "2em",
              padding: "3em",
              height: "auto",
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
              Sign in
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
                label="Username / Email Address"
                name="email"
                autoFocus
                value={emailUsername}
                onChange={(e) => {
                  setEmailUsername(e.target.value);
                }}
                InputProps={{
                  style: {
                    fontFamily: "Quicksand",
                    fontWeight: "bold",
                    color: "#25396F",
                  },
                }}
                error={justVerify && emailUsername === ""}
                helperText={
                  justVerify &&
                  (emailUsername == "" ? "This field cannot be empty." : "")
                }
                autoComplete="off"
              />
              <TextField
                id="standard-basic-2"
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
                {!loading ? "Sign In" : "Signing In...."}
              </Button>
              <Grid container>
                <Grid item xs={12}>
                  {window.localStorage.getItem("token") === null && isAlert && (
                    <Alert
                      variant="filled"
                      severity="error"
                      style={{ fontFamily: "Quicksand", fontWeight: "600" }}
                    >
                      Invalid Email and/or Password
                    </Alert>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    color="secondary"
                    onClick={() => {
                      navigate("/register");
                    }}
                    variant="text"
                    style={{
                      fontFamily: "Quicksand",
                      fontWeight: "bold",
                      color: "#03045e",
                      textDecoration: "underline",
                    }}
                  >
                    Don't have an account? Sign Up
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
