import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Rewards = () => {
    const navigate = useNavigate();
    const [rewards, setRewards] = useState([]);
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      };

    const getRewards = async () => {
        await axios
            .get("http://localhost:8000/agency/rewards", {
                headers,
            })
            .then((response) => {
                setRewards(response.data.rewards);
            })
            .catch((err) => {
                console.error('Error: ', err);
            });
    }
    useEffect(() => {
        getRewards();
    }, []);

    const [rewardName, setRewardName] = useState('');
    const [rewardPoint, setRewardPoint] = useState('');

    const addRewardHandler = async () => {
        axios
            .post('http://localhost:8000/agency/add-reward', {
                name: rewardName,
                point: rewardPoint
            }, {
                headers: headers
            })
            .then((response) => {
                navigate('/rewards');
            })
            .catch((error) => {
                console.error('Error: ', error);
            })
    }

    return (
        <div>Rewards</div>
    )
}

export default Rewards