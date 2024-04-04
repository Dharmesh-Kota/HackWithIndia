import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

// import Gif22 from '../images/gif22.gif';
// import Gif23 from '../images/gif23.gif';
// import Gif24 from '../images/gif24.gif';
// import Gif20 from '../images/gif20.gif';

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import "aos/dist/aos.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function ExtraInfo() {
  const Gif22 =
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D";
  const Gif23 =
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D";
  const Gif24 =
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D";
  const Gif20 =
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D";

  const theme = createTheme({
    typography: {
      fontFamily: "Quicksand",
      body1: {
        fontWeight: "600",
        fontSize: "large",
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
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          className="mt-5"
          style={{ marginBottom: "3em", marginTop: "3em" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "xx-large",
              textDecoration: "underline",
            }}
          >
            Our Expertise
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            className="mt-5"
            style={{ marginBottom: "3em" }}
          >
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                data-aos="fade-right"
                elevation={0}
                style={{ width: "65%" }}
              >
                <CardMedia component="img" alt="green iguana" image={Gif22} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <Container
                data-aos="fade-left"
                maxWidth="sm"
                style={{
                  backgroundColor: "#dfffff",
                  margin: "auto",
                  border: "2px solid white",
                  padding: "2em",
                  paddingTop: "4em",
                  paddingBottom: "2em",
                  borderRadius: "1em",
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  User-Friendly Interface
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Our app boasts an incredibly intuitive and user-friendly interface, ensuring that the process of searching, selecting, and booking train tickets is a breeze. With a clean and organized design, users can navigate effortlessly, making their booking experience enjoyable and efficient." />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Container>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            flexDirection="row-reverse"
            className="mt-5"
            style={{ marginBottom: "3em" }}
          >
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card data-aos="fade-left" elevation={0} style={{ width: "65%" }}>
                <CardMedia component="img" alt="green iguana" image={Gif23} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <Container
                data-aos="fade-left"
                maxWidth="sm"
                style={{
                  backgroundColor: "#dfffff",
                  margin: "auto",
                  border: "2px solid white",
                  padding: "2em",
                  paddingTop: "4em",
                  paddingBottom: "2em",
                  borderRadius: "1em",
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  Extensive Train Options
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Gain access to an extensive database of train schedules and routes, providing users with a comprehensive list of options. Our app's advanced filtering and sorting features empower users to quickly find the most suitable trains based on their preferences, ensuring a tailored and convenient booking experience." />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Container>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            className="mt-5"
            style={{ marginBottom: "3em" }}
          >
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                data-aos="fade-right"
                elevation={0}
                style={{ width: "65%" }}
              >
                <CardMedia component="img" alt="green iguana" image={Gif20} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <Container
                data-aos="fade-left"
                maxWidth="sm"
                style={{
                  backgroundColor: "#dfffff",
                  margin: "auto",
                  border: "2px solid white",
                  padding: "2em",
                  paddingTop: "4em",
                  paddingBottom: "2em",
                  borderRadius: "1em",
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  Real-Time Availability
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Stay informed with real-time updates on seat availability and ticket status. Receive instant confirmation for booked tickets, eliminating any uncertainty and allowing users to plan their journeys with confidence." />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Container>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            flexDirection="row-reverse"
            className="mt-5"
            style={{ marginBottom: "3em" }}
          >
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Card data-aos="fade-left" elevation={0} style={{ width: "65%" }}>
                <CardMedia component="img" alt="green iguana" image={Gif24} />
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <Container
                data-aos="fade-left"
                maxWidth="sm"
                style={{
                  backgroundColor: "#dfffff",
                  margin: "auto",
                  border: "2px solid white",
                  padding: "2em",
                  paddingTop: "4em",
                  paddingBottom: "2em",
                  borderRadius: "1em",
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  Personalized User Accounts
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Enjoy the benefits of a personalized user account, allowing for quick and efficient bookings. Save preferences, access booking history, and tailor the app to individual needs, providing a seamless and personalized experience for every user." />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default ExtraInfo;
