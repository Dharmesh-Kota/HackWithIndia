import React , {useState, useEffect} from 'react'
import AgencyReward from '../components/AgencyReward.jsx'
import axios from 'axios';


const RewardCardStyle = {
    width :"60%",
    margin: "auto",
    marginTop:"10px", 
    marginBottom:'20px'
}

const listStyle = {
    margin: "10px",
    
}

const Rewards =() => {
    const [rewardlist, setrewardlist] = useState();
    
    useEffect(() => {
      const fetchData = async () => {
        try {
        const headers = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          };

          const response = await axios.get("http://localhost:8000/donor/reward-store", { headers });
          console.log(response.data);
          setrewardlist(response.data);
        } catch (err) {
          console.error('Failed to fetch data', err);
        }
    };
    fetchData();
    }, []);

    

    const dummyObject = [
        {
          username: "eco123",
          name: "Eco-Friendly Solutions",
            rewards: [["Reusable Stainless Steel Straws",100], ["Bamboo Toothbrush Set", 200]],
            userPoints: 100
        },
        {
          username: "sustainable456",
          name: "Sustainable Futures",
            rewards: [["Organic Cotton Tote Bag",500], ["Eco-Friendly Lunch Box Set", 1000]],
            userPoints: 1000
        },
        {
          username: "ecosavers789",
          name: "EcoSavers",
            rewards: [["Indoor Herb Garden Kit", 2000], ["Compost Bin Starter Kit",5000]],
            userPoints: 10000
        }
    ]

          
    return (
        <div>
            {dummyObject.map((reward,index) => (
                        <div style={RewardCardStyle} key={index}>
                            <AgencyReward name="Agency Name" rewards={reward} />                         
                        </div>
                    )) }
    </div>
  );
};

export default Rewards;
