import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { redirect } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";

function Searchnearby() {
  const [type, setType] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [amount, setAmount] = useState(0);
  const [username, setUsername] = useState("");

  async function handleChangeType(e) {
    if (e.target.value === "") {
      return;
    }

    // console.log(e.target.value);

    setType(e.target.value);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    };

    const data = await axios
      .get(`http://localhost:8000/donor/nearby-agency/${e.target.value}`, {
        headers,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.response.status === 422) {
          // TODO: alert user that location is not yet been updated

          // redirect to profile page
          redirect("/profile");
        }
        console.log(err);
        // console.log("Error Occured");
      });

    setDataList(data);
  }

  function changeAmount(e) {
    setAmount(e.target.value);
  }

  const handleOpenModal = (username, role) => {
    setUsername(username);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  async function amountHandler(e) {
    if (amount > 0) {
      // console.log(amount);

      // initialize transaction post request

      const data = {
        username: username,
        type: type,
        quantity: amount,
      };

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      };

      await axios
        .post("http://localhost:8000/donor/donate-supplies", data, { headers })
        .then((res) => {
          // alert user that the transaction initallized successfully
          // redirect to home page or history page
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // alert user that amount can not be zero
      console.log("Amount can not be zero");
    }
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <div style={{ margin: "2rem" }}>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <h2 id="parent-modal-title">{`Hello (+91 1111111111)`}</h2>
          <p id="parent-modal-description">Demo Agency Address</p>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              endAdornment={<InputAdornment position="end">kg</InputAdornment>}
              value={amount}
              onChange={changeAmount}
              type="number"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <FormHelperText id="outlined-weight-helper-text">
              Weight
            </FormHelperText>

            <Button type="submit" variant="contained" onClick={amountHandler}>
              Submit
            </Button>
          </FormControl>
        </Box>
      </Modal>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Compost or Donate
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Compost or Donate"
            onChange={handleChangeType}
          >
            <MenuItem value={""}>Choose One Type</MenuItem>
            <MenuItem value={"compostAgency"}>Composting Agency</MenuItem>
            <MenuItem value={"ngo"}>NGO</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <div style={{ marginTop: "1rem" }}>
        <Card
          sx={{ maxWidth: "full" }}
          style={{ marginTop: "1rem" }}
          onClick={() => handleOpenModal("demoagency", "ngo")}
        >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {`Hello  (+91 1111111111)`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Demo Agency Address
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {dataList &&
          dataList.map((card) => {
            return (
              <Card
                sx={{ maxWidth: "full" }}
                style={{ marginTop: "1rem" }}
                onClick={() => handleOpenModal(card.username, card.role)}
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {`${card.name}  (${card.contact})`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.address}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
      </div>
    </div>
  );
}

export default Searchnearby;
