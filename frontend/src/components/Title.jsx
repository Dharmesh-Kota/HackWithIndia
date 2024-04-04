import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Grid, Typography } from "@mui/material";
import "../CSS/Title.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Title() {
  const ImgURL = "https://i.pinimg.com/564x/d1/a8/e5/d1a8e5b53acc375d139bc839ca5062f0.jpg";
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
        borderBottomLeftRadius: ["0em", "12em", "28em"],
        borderBottomRightRadius: ["0em", "12em", "28em"],
        height: "auto",
        minHeight: "76vh",
        overflow: "hidden",
        paddingBottom: ["4em", "8em", "16em"],
      }}
    >
      <ThemeProvider theme={theme}>
        <Container sx={{ p: [4, 6, 9] }}>
          <Grid container justifyContent="center" alignItems="center" spacing={3}>
            <Grid item xs={12} md={6} mb={4} className="mt-5">
              <Typography
                data-aos="fade-left"
                variant="h2"
                sx={{ textAlign: "center", fontWeight: "600", fontSize:"67px",marginTop:"30px",  }}
              >
                Compostify
              </Typography>
              <Typography
                className="mt-4"
                data-aos="fade-left"
                variant="body1"
                component="div"
                sx={{ width: "100%", textAlign: "center",fontSize:"23px" }}
              >
                Where leftovers become opportunities and sustainability thrives through innovation
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
                  component="img"
                  alt="profile"
                  height="100"
                  image={ImgURL}
                  style={{
                    maxWidth: "100%",
                    height: "100%",
                    objectFit: "cover",
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
