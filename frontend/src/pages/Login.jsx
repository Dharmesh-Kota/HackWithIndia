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

import axios from "axios";

const defaultTheme = createTheme();

export default function Login() {
  const [loading, setloading] = useState(false);
  const [Emailcheck, setEmailcheck] = useState(false);
  const [passwordcheck, setpasswordcheck] = useState(false);
  const [justVerify, setJustVerify] = useState(false);

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  // const navigate = useNavigate();

  //   const handleSubmit = async (e) => {};

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

  const [emailUsername, setEmailUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setloading(true);
    axios
      .post("http://localhost:8000/create-session", {
        emailUsername: emailUsername,
        password: password,
      })
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem("token", JSON.stringify(token));
        navigate("/");
      })
      .catch((error) => {
        setJustVerify(true);
        if (error.response.status === 401) {
          setEmailUsername("");
          setPassword("");
          //   alert("Invalid Username/Email or Password!");
        } else {
          console.error("Error: ", error);
        }
      });
    setloading(false);
  };

  return (
    <div className="my-glass-effect" style={{ backgroundColor: "lightblue" }}>
      <ThemeProvider theme={defaultTheme}>
        <Container
          component="main"
          maxWidth="sm"
          sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <CssBaseline />
          <Box
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
              {!(!emailUsername && Emailcheck) ? (
                <TextField
                  id="standard-basic-1"
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  label="Username / Email Address"
                  name="email"
                  // autoComplete="email"
                  autoFocus
                  onChange={(e) => {
                    setEmailcheck(true);
                    setEmailUsername(e.target.value);
                  }}
                  value={emailUsername}
                  InputProps={{
                    style: {
                      fontFamily: "Quicksand",
                      fontWeight: "bold",
                      color: "#25396F",
                    },
                  }}
                  autoComplete="off"
                />
              ) : (
                <TextField
                  error
                  helperText={
                    !emailUsername && Emailcheck
                      ? "This field cannot be empty."
                      : ""
                  }
                  id="standard-basic-1"
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  label="Username / Email Address"
                  name="email"
                  // autoComplete="email"
                  autoFocus
                  color="secondary"
                  onChange={(e) => {
                    setEmailcheck(true);
                    setEmailUsername(e.target.value);
                  }}
                  value={emailUsername}
                  InputProps={{
                    style: { fontFamily: "Quicksand", fontWeight: "bold" },
                  }}
                  autoComplete="off"
                />
              )}
              {validPassword ? (
                <TextField
                  id="standard-basic-2"
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  // autoComplete="current-password"
                  onChange={handlePasswordofLogin}
                  value={password}
                  InputProps={{
                    style: {
                      fontFamily: "Quicksand",
                      fontWeight: "bold",
                      color: "#25396F",
                    },
                  }}
                  autoComplete="off"
                />
              ) : (
                <TextField
                  error
                  helperText={
                    !password && passwordcheck
                      ? "This field cannot be empty."
                      : !validPassword && password
                      ? "The password must contain at least 8 digits."
                      : ""
                  }
                  id="standard-basic-2"
                  variant="standard"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  color="secondary"
                  // autoComplete="current-password"
                  onChange={handlePasswordofLogin}
                  value={password}
                  InputProps={{
                    style: { fontFamily: "Quicksand", fontWeight: "bold" },
                  }}
                  autoComplete="off"
                />
              )}
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
                  {window.localStorage.getItem("token") === null &&
                    justVerify && (
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
                      color: "ghostwhite",
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
