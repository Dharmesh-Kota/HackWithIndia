import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import PaymentIcon from "@mui/icons-material/Payment";
import CancelIcon from "@mui/icons-material/Cancel";

import { useNavigate } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import { Tune } from "@mui/icons-material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import "../CSS/Agency.css";
import config from "../config.js";

function Ngo() {
  const [queue, setQueue] = useState([]);

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const getQueue = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    };

    try {
      const results = await axios.get(
        (config.BACKEND_API || "http://localhost:8000") + "/ngo/requests",
        {
          headers,
        }
      );
      setQueue(results.data.requests);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQueue();
  }, []);

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
            Requests
          </Typography>
          {queue.length === 0 ? (
            <>
              <Card sx={{ maxWidth: 345, margin: "auto" }}>
                <CardMedia
                  sx={{ height: 350 }}
                  image="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/empty-white-paper-sheet_zJwl80Lu_thumb.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    EMPTY
                  </Typography>
                </CardContent>
              </Card>
            </>
          ) : (
            <>
              <Box sx={{ flexGrow: 1 }} style={{ margin: "4%" }}>
                <Grid container spacing={2}>
                  {queue.map((row, index) => (
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
                              User : {row.sender}
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
                              Quantity : {row.quantity}
                            </Button>
                          </Typography>
                        </AccordionSummary>
                      </Accordion>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </>
          )}
        </ThemeProvider>
      </div>
      <div className="mt-5">&nbsp;</div>
      <div className="mt-5">&nbsp;</div>
      <div className="mt-5">&nbsp;</div>
    </>
  );
}

export default Ngo;
