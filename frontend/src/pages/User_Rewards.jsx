import React, { useState } from "react";
import AgencyReward from "../components/AgencyReward.jsx";
import axios from "axios";
import { useAuth } from "../context/auth.jsx";

const RewardCard = {
  width: "20%",
  border: "2px solid black",
  borderRadius: "10px",
  margin: "auto",
};

const listStyle = {
  margin: "10px",
};

const Rewards = () => {
  const [rewardlist, setrewardlist] = useState();
  const { LogOut } = useAuth();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  };

  axios
    .get("http://localhost:8000/reward-store", { headers })
    .then((res) => {
      console.log(res.data);
      setrewardlist(res.data);
    })
    .catch((err) => {
      LogOut();
      console.error("Failed to fetch data", err);
    });

  const dummyObject = [
    {
      username: "username",
      name: "name",
      rewards: [
        ["tshirt", 100],
        ["shirt", 200],
      ],
      userPoints: 100,
    },
    {
      username: "username",
      name: "name",
      rewards: [
        ["tshirt", 1000],
        ["shirt", 2000],
      ],
      userPoints: 1000,
    },
    {
      username: "username",
      name: "name",
      rewards: [
        ["tshirt", 10000],
        ["shirt", 20000],
      ],
      userPoints: 10000,
    },
  ];

  return (
    <div>
      This is rewards page
      {dummyObject.map((reward) => (
        <div style={listStyle}>
          <AgencyReward name="Agency Name" rewards={reward} />
        </div>
      ))}
    </div>
  );
};

export default Rewards;
