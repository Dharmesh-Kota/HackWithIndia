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

    

    // const dummyObject = [
    //     {
    //         username: "username",
    //         name: "name",
    //         rewards: [["tshirt",100], ["shirt", 200]],
    //         userPoints: 100
    //     },
    //     {
    //         username: "username",
    //         name: "name",
    //         rewards: [["tshirt",1000], ["shirt", 2000]],
    //         userPoints: 1000
    //     },
    //     {
    //         username: "username",
    //         name: "name",
    //         rewards: [["tshirt",10000], ["shirt", 20000]],
    //         userPoints: 10000
    //     }
    // ]

          
    return (
        <div>
            This is rewards page
            {rewardlist.map((reward,index) => (
                        <div style={RewardCardStyle} key={index}>
                            <AgencyReward name="Agency Name" rewards={reward} />                         
                        </div>
                    )) }
        </div>
      ))}
    </div>
  );
};

export default Rewards;
