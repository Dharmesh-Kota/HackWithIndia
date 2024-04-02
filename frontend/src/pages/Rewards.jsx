import React from 'react'
import AgencyReward from '../components/AgencyReward'

const RewardCard = {
    width :"20%",
    border:"2px solid black",
    borderRadius: '10px',
    margin: "auto",
}

const Rewards = () => {

    const rewards = 
        [['Reward 1', 'Reward 2'],
        ['Reward 3', 'Reward 4']]
    
    return (
        <div>
            This is rewards page
            <AgencyReward name="Agency Name" rewards={rewards} /> 
        </div>
    )
}

export default Rewards