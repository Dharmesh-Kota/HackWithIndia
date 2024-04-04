import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

// import homeTrain from '../images/homeTrain.jpg'
// import traingif from "../images/train.gif";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  Select,
  MenuItem,
} from "@mui/material";
import "../CSS/Title.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Title() {
  const ImgURL =
    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const theme = createTheme({
    typography: {
      fontFamily: "Quicksand",
      body1: {
        fontWeight: "600",
        fontSize: "small",
      },
    },
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="my-title"
      style={{
        background: "linear-gradient(to bottom, rgba(255, 255, 255), #00b4d8)",
        borderBottomLeftRadius: ["0em", "16em", "32em"],
        borderBottomRightRadius: ["0em", "16em", "32em"],
        height: "auto",
        minHeight: "86vh",
        overflow: "hidden",
        paddingBottom: ["4em", "8em", "16em"],
      }}
    >
      <ThemeProvider theme={theme}>
        <Container sx={{ p: [4, 6, 9] }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} md={6} mb={4} className="mt-5">
              <Typography
                data-aos="fade-left"
                variant="h2"
                sx={{ textAlign: "center", fontWeight: "500" }}
              >
                Welcome,
              </Typography>
              <Typography
                className="mt-2"
                data-aos="fade-left"
                variant="body1"
                component="div"
                sx={{ width: "100%", textAlign: "center" }}
              >
                Revolutionize your travel experience with our train travel
                website, offering seamless booking, real-time updates, and
                curated itineraries. Explore the world by rail, where every
                journey is a story waiting to be written.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                elevation={0}
                style={{ backgroundColor: "transparent" }}
                sx={{
                  maxWidth: "100%",
                  justifyContent: "center",
                  textAlign: "center",
                  marginBottom: ["-2em", "-3em", "-5em"],
                }}
              >
                <CardMedia
                  data-aos="zoom-in-up"
                  className="trainImg"
                  component="img"
                  alt="profile"
                  height="100"
                  image={ImgURL}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    borderBottomLeftRadius: "25%",
                    borderTopRightRadius: "25%",
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Title;
