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
    "./image/garbage.jpg";
  const Gif23 =
    "./image/compost.jpg";
  const Gif24 =
    "./image/veg.jpg";
  const Gif20 =
    "./image/ngo.jpg";
  const Gifuser = "./GIF/user.gif";
  const Gifbot = "./GIF/chat-bot.gif";
  const Gifpoint = "./GIF/points.gif";
  const Giflocation = "./GIF/location.gif";

  const theme = createTheme({
    typography: {
      fontFamily: "Quicksand",
      body1: {
        fontWeight: "600",
        fontSize: "large",
      },
    },
  });

  const yourList = ['Item 1', 'Item 2', 'Item 3'];

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
          className="mt-3"
          style={{ marginBottom: "1em", marginTop: "1em" }}
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
              textDecoration: "none",
              fontFamily:"Quicksand"
              // textShadow: "3px 3px 0px #2dc7ff"

            }}
          >
            What Happens When...
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
                style={{ width: "100%" }}
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
                  variant="h5"
                  gutterBottom
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                   you throw away leftovers and rotten food ?
                </Typography>
                <List >
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary={
                        <ul>
                          <li>Resource waste</li>
                          <li>Biodiversity loss</li>
                          <li>Increase in global warming from gases released by decomposing food</li>
                        </ul>
                      } />
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
              <Card data-aos="fade-left" elevation={0} style={{ width: "88%" }}>
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
                  variant="h5"
                  gutterBottom
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  you use rotten food for composting and renewable energy ?
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary={
                        <ul>
                          <li> Nutrient recycling</li>
                          <li>Soil enrichment</li>
                          <li> Biogas production</li>
                        </ul>
                      } />
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
                style={{ width: "80%"}}
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
                  variant="h5"
                  gutterBottom
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                 you give leftover foods to NGOs ?
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary={
                        <ul>
                          <li>Hunger relief</li>
                          <li>Food redistribution</li>
                          <li>Social impact</li>
                        </ul>
                      } />
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
              <Card data-aos="fade-left" elevation={0} style={{ width: "83%" }}>
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
                  variant="h5"
                  gutterBottom
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  you use Compostify ?

                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary={
                        <ul>
                          <li>Help Other people</li>
                          <li>Help Mother Earth</li>
                          <li>Help your self by getting points from Composting Agencies</li>
                        </ul>
                      }/>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Container>
            </Grid>
            <Grid
          container
          spacing={2}
          justifyContent="center"
          className="mt-5"
          style={{ marginBottom: "0em", marginTop: "3em" }}
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
              textDecoration: "none",
              fontFamily:"Quicksand",
              marginTop:"20px"
            }}
          >
            What We Do
          </Grid>
        </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            className="mt-1"
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
                style={{ width: "45%" }}
              >
                <CardMedia component="img" alt="green iguana" image={Gifuser} />
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
                  paddingTop: "2em",
                  paddingBottom: "2em",
                  borderRadius: "1em",
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  Connect Users to Composting Agencies and NGOs
                </Typography>
                
              </Container>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            className="mt-5"
            flexDirection="row-reverse"
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
                style={{ width: "35%" }}
              >
                <CardMedia component="img" alt="green iguana" image={Giflocation} />
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
                  paddingTop: "2em",
                  paddingBottom: "2em",
                  borderRadius: "1em",
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  Provide Users with ease in finding nearby NGOs and Composting Agencies using GPS

                </Typography>
                
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
                style={{ width: "35%" }}
              >
                <CardMedia component="img" alt="green iguana" image={Gifbot} />
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
                  paddingTop: "2em",
                  paddingBottom: "2em",
                  borderRadius: "1em",
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                   Offer Users the ability to find answers about composting through a ChatBot

                </Typography>
                
              </Container>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            className="mt-5"
            flexDirection="row-reverse"
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
                style={{ width: "35%" }}
              >
                <CardMedia component="img" alt="green iguana" image={Gifpoint} />
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
                  paddingTop: "2em",
                  paddingBottom: "2em",
                  borderRadius: "1em",
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  Reward Users with points for donating rotten foods to Composting Agencies
                </Typography>
                
              </Container>
            </Grid>
          </Grid>
          

        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default ExtraInfo;
