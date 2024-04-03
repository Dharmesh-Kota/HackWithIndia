import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Agency from "../components/Agency";
import Searchnearby from "../components/Searchnearby";
import { useAuth } from "../context/auth";
import Temp from "../components/Temp";
import config from '../config.js';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      {isLoggedIn ? (
        <>
          <Agency />
          <Searchnearby />
        </>
      ) : (
        <>
          <Temp />
          <Temp />
          <Temp />
          <Temp />
        </>
      )}
    </>
  );
}
