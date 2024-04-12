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
        setrewardlist(response.data.userRewards);
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
                      <AgencyReward name="Agency Name" rewards={reward} agencyname={rewardlist.username} />                         
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
