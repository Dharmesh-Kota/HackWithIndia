import React , {useState, useEffect} from 'react'
import AgencyReward from '../components/AgencyReward.jsx'
import axios from 'axios';
import config from '../config.js';


const RewardCardStyle = {
    width :"60%",
    margin: "auto",
    marginTop:"10px", 
    marginBottom:'20px'
}

const listStyle = {
    margin: "10px",
    
}
const dummyObject = [
    {
        username: "username",
        name: "name",
        rewards: [["tshirt",100], ["shirt", 200]],
        userPoints: 100
    },
    {
        username: "username",
        name: "name",
        rewards: [["tshirt",1000], ["shirt", 2000]],
        userPoints: 1000
    },
    {
        username: "username",
        name: "name",
        rewards: [["tshirt",10000], ["shirt", 20000]],
        userPoints: 10000
    }
]

const dummy = [
  {
    username: "greenearth123",
    name: "Green Earth Composting",
    rewards: [
      { name: "Reusable Stainless Steel Straws", points: 100 },
      { name: "Bamboo Toothbrush Set", points: 200 }
    ],
    userPoints: 300
  },
  {
    username: "eco123",
    name: "Eco-Friendly Solutions",
    rewards: [
      { name: "Organic Cotton Tote Bag", points: 500 }
    ],
    userPoints: 500
  },
  {
    username: "sustainable456",
    name: "Sustainable Futures",
    rewards: [
      { name: "Eco-Friendly Lunch Box Set", points: 1000 },
      { name: "Indoor Herb Garden Kit", points: 2000 }
    ],
    userPoints: 3000
  },
  {
    username: "ecosavers789",
    name: "EcoSavers",
    rewards: [
      { name: "Compost Bin Starter Kit", points: 5000 }
    ],
    userPoints: 5000
  },
  {
    username: "earthguardians456",
    name: "Earth Guardians",
    rewards: [
      { name: "Reusable Stainless Steel Straws", points: 100 },
      { name: "Bamboo Toothbrush Set", points: 200 },
      { name: "Organic Cotton Tote Bag", points: 500 },
      { name: "Eco-Friendly Lunch Box Set", points: 1000 },
      { name: "Indoor Herb Garden Kit", points: 2000 },
      { name: "Compost Bin Starter Kit", points: 5000 }
    ],
    userPoints: 700
  }
]

const Rewards =() => {
    const [rewardlist, setrewardlist] = useState([]);
    
    const fetchData = async () => {
      try {
      const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        };

        const response = await axios.get((config.BACKEND_API || "http://localhost:8000") + "/donor/reward-store", { headers });
        console.log(response.data);
        // console.log(rewardlist);
        setrewardlist(dummy);
    } catch (err) {
        console.error('Failed to fetch data', err);
    }
};
useEffect(() => {
    fetchData();
    
}, []);
    return (
        <div>
            {rewardlist.length > 0  ? (
              <div>
                {rewardlist.map((reward,index) => (
                  <div style={RewardCardStyle} key={index}>
                      <AgencyReward name="Agency Name" rewards={reward} />                         
                  </div>
              ))}
            </div>
            ) : (
              <div> Loading...</div>
            )}
        </div>
  );
};

export default Rewards;
