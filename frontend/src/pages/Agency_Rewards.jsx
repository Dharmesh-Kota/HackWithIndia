import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import AOS from "aos";
import "aos/dist/aos.css";
import config from "../config.js";
import { useAuth } from "../context/auth.jsx";
import DeleteIcon from "@mui/icons-material/Delete";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Rewards = () => {
  const [rewards, setRewards] = useState([]);

  const [rewardName, setRewardName] = useState("");
  const [rewardPoint, setRewardPoint] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [hovered, setHovered] = useState(false);
  const [visibleBtn, setVisibleBtn] = useState(false);
  const [justVerify, setJustVerify] = useState(false);

  const navigate = useNavigate();
  const { setIsLoggedIn, setRole, LogOut } = useAuth();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  };

  const handleRewardPoints = (e) => {
    // Check if the string contains only digits
    const str = e.target.value;
    if (/^\d+$/.test(str)) {
      // Remove leading zeros
      setRewardPoint(str.replace(/^0+/, ""));
    } else {
      // If the string contains non-digit characters, return null or handle accordingly
      setRewardPoint("");
    }
  };

  const getRewards = async () => {
    try {
      const response = await axios.get(
        (config.BACKEND_API || "http://localhost:8000") + "/agency/rewards",
        {
          headers,
        }
      );
      setRewards(response.data.rewards.reward);
    } catch (err) {
      // if (err.response.status === 403) {
      //   LogOut();
      // }
      console.log("Error -> ", err);
    }
  };

  useEffect(() => {
    getRewards();
  }, []);

  const deleteReward = async (row) => {
    try {
      const results = await axios.post(
        (config.BACKEND_API || "http://localhost:8000") +
          "/agency/delete-reward",
        {
          name: row.name,
          point: row.point,
        },
        {
          headers: headers,
        }
      );
      getRewards();
    } catch (err) {
      // if (err.results.status === 403) {
      //   LogOut();
      // }
      console.log(err);
    }
  };

  const addRewardHandler = async () => {
    if (rewardName === "" || rewardPoint === "") {
      return;
    }

    setVisibleBtn(false);
    try {
      //   console.log("rewardName", rewardName);
      //   console.log("rewardPoint", rewardPoint);
      const response = await axios.post(
        (config.BACKEND_API || "http://localhost:8000") + "/agency/add-reward",
        {
          name: rewardName,
          point: rewardPoint,
        },
        {
          headers: headers,
        }
      );
      console.log("added", response);
      // Assuming you want to refresh the rewards list after adding a reward
      getRewards();
    } catch (err) {
      // if (err.response.status === 403) {
      //   LogOut();
      // }
      console.log("Error -> ", err);
    }
  };

  const theme = createTheme({
    typography: {
      fontFamily: "Quicksand",
      body1: {
        fontWeight: "600",
        fontSize: "medium",
      },
    },
  });

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div data-aos="fade-up">
        <ThemeProvider theme={theme}>
          <Typography
            style={{
              margin: "auto",
              marginTop: "4%",
              marginBottom: "4%",
              width: "90%",
              fontWeight: "bold",
            }}
            variant="h4"
          >
            Rewards
          </Typography>
          <>
            <Box sx={{ flexGrow: 1 }} style={{ margin: "4%" }}>
              <Grid container spacing={2}>
                {rewards.map((row, index) => (
                  <Grid key={index} item xs={12} md={10}>
                    <Accordion
                      style={{
                        backgroundColor:
                          hoveredIndex === index ? "#119da4" : "ghostwhite",
                        transform:
                          hoveredIndex === index ? "scale(1.01)" : "scale(1)",
                        transition: "all 0.15s ease",
                      }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(-1)}
                    >
                      <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Button
                            className="mx-2 px-4"
                            style={{
                              backgroundColor: "rgb(234, 234, 255)",
                              borderRadius: "1em",
                              fontWeight: "bold",
                              fontSize: "large",
                              margin: "0.1em",
                            }}
                          >
                            {index + 1}
                          </Button>
                          <Button
                            className="mx-2 px-4"
                            style={{
                              backgroundColor: "rgb(234, 234, 255)",
                              borderRadius: "1em",
                              fontWeight: "600",
                              fontSize: "large",
                              margin: "0.1em",
                            }}
                          >
                            Name : {row.name}
                          </Button>
                          <Button
                            className="mx-2 px-4"
                            style={{
                              backgroundColor: "rgb(234, 234, 255)",
                              borderRadius: "1em",
                              fontWeight: "600",
                              fontSize: "large",
                              margin: "0.1em",
                            }}
                          >
                            Points : {row.point}
                          </Button>
                          <Tooltip TransitionComponent={Zoom} title="Delete">
                            <Button
                              onClick={handleClickOpen}
                              className="mx-2 px-4"
                              style={{
                                backgroundColor: "#ffe5ec",
                                color: "red",
                                borderRadius: "1em",
                                fontWeight: "600",
                                fontSize: "large",
                              }}
                            >
                              <DeleteIcon />
                            </Button>
                          </Tooltip>
                          <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">
                              Are you sure?
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                Do you really want Delete this Reward? This
                                process cannot be undone.
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button
                                onClick={handleClose}
                                style={{ fontWeight: "bold" }}
                                variant="outlined"
                                color="info"
                              >
                                Ignore
                              </Button>
                              <Button
                                autoFocus
                                style={{ fontWeight: "bold" }}
                                onClick={() => {
                                  handleClose();
                                  deleteReward(row);
                                }}
                                variant="contained"
                                color="error"
                              >
                                Delete
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </Typography>
                      </AccordionSummary>
                    </Accordion>
                  </Grid>
                ))}
                <Grid item xs={12} md={10}>
                  <Accordion
                    style={{
                      backgroundColor: hovered ? "#119da4" : "ghostwhite",
                      transform: hovered ? "scale(1.01)" : "scale(1)",
                      transition: "all 0.15s ease",
                    }}
                    onMouseOver={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <AccordionSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button
                          onClick={() => {
                            setVisibleBtn(true);
                          }}
                          className="mx-2 px-4 py-4"
                          style={{
                            backgroundColor: "rgb(234, 234, 255)",
                            borderRadius: "1em",
                            fontWeight: "bold",
                            fontSize: "large",
                            margin: "0.1em",
                          }}
                        >
                          <AddIcon />
                        </Button>
                        <Button
                          disableRipple
                          className="mx-2 px-4"
                          style={{
                            backgroundColor: "rgb(234, 234, 255)",
                            borderRadius: "1em",
                            fontWeight: "600",
                            fontSize: "large",
                            margin: "0.1em",
                            visibility: visibleBtn ? "visible" : "hidden",
                          }}
                        >
                          <TextField
                            id="standard-basic-1"
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            label="Reward Name"
                            name="email"
                            autoFocus
                            value={rewardName}
                            onChange={(e) => {
                              setRewardName(e.target.value);
                            }}
                            InputProps={{
                              style: {
                                fontFamily: "Quicksand",
                                fontWeight: "bold",
                                color: "#25396F",
                              },
                            }}
                            error={justVerify && rewardName === ""}
                            helperText={
                              justVerify &&
                              (rewardName == ""
                                ? "This field cannot be empty."
                                : "")
                            }
                            autoComplete="off"
                          />
                        </Button>
                        <Button
                          disableRipple
                          className="mx-2 px-4"
                          style={{
                            backgroundColor: "rgb(234, 234, 255)",
                            borderRadius: "1em",
                            fontWeight: "600",
                            fontSize: "large",
                            margin: "0.1em",
                            visibility: visibleBtn ? "visible" : "hidden",
                          }}
                        >
                          <TextField
                            id="standard-basic-1"
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            label="Reward Points"
                            name="email"
                            autoFocus
                            value={rewardPoint}
                            onChange={handleRewardPoints}
                            InputProps={{
                              style: {
                                fontFamily: "Quicksand",
                                fontWeight: "bold",
                                color: "#25396F",
                              },
                            }}
                            error={justVerify && rewardPoint === ""}
                            helperText={
                              justVerify &&
                              (rewardPoint == ""
                                ? "Please enter valid points."
                                : "")
                            }
                            autoComplete="off"
                          />
                        </Button>
                        <Tooltip TransitionComponent={Zoom} title="Add">
                          <Button
                            onClick={addRewardHandler}
                            className="mx-2 px-4 py-4"
                            style={{
                              backgroundColor: "#83f28f",
                              color: "#00ab41",
                              borderRadius: "1em",
                              fontWeight: "600",
                              fontSize: "large",
                              margin: "0.1em",
                              visibility: visibleBtn ? "visible" : "hidden",
                            }}
                          >
                            <DoneIcon color="success" />
                          </Button>
                        </Tooltip>
                        <Tooltip TransitionComponent={Zoom} title="Cancel">
                          <Button
                            onClick={() => {
                              setVisibleBtn(false);
                            }}
                            className="mx-2 px-4 py-4"
                            style={{
                              backgroundColor: "#ffe5ec",
                              color: "red",
                              borderRadius: "1em",
                              fontWeight: "600",
                              fontSize: "large",
                              margin: "0.1em",
                              visibility: visibleBtn ? "visible" : "hidden",
                            }}
                          >
                            <ClearIcon color="error" />
                          </Button>
                        </Tooltip>
                      </Typography>
                    </AccordionSummary>
                  </Accordion>
                </Grid>
              </Grid>
            </Box>
          </>
        </ThemeProvider>
      </div>
      <div className="mt-5">&nbsp;</div>
      <div className="mt-5">&nbsp;</div>
      <div className="mt-5">&nbsp;</div>
    </>
  );
};

export default Rewards;
