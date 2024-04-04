import User from "../models/user.js";
import Points from "../models/userPoints.js";
import Agency from "../models/compostAgency.js";
import History from "../models/history.js";
import Transaction from "../models/transaction.js";
import { redeemReward } from "../mailer/rewardRedeem.js";
import { suppliesRequest } from "../mailer/suppliesRequest.js";
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

// Controller to provide the list of all nearby composting agencies to the user
export const nearby_agency = async (req, res) => {
    try {
        const role = req.params.role;

        let users = await User.find({ role: role }, {name: 1, username: 1, role: 1, location: 1, contact: 1, address: 1});
        let nearbyAgency = [];
    
        let location = await User.findById(req.user.id);
        location = location.location;

        if(!location) {
            return res.status(422).json({message: "Location not updated!"});
        }

        // find the nearby hospitals
        for (const user of users) {
            const apiKey = process.env.apiKey;

            const startCoordinates = location;
            const endCoordinates = user.location;
            console.log(startCoordinates, '&', endCoordinates);
            if (!endCoordinates) {
                continue;
            }
            const traffic = true;

            const tomtomApiEndpoint = 'https://api.tomtom.com/routing/1/calculateRoute/';
            const url = `${tomtomApiEndpoint}${startCoordinates}:${endCoordinates}/json?key=${apiKey}&traffic=${traffic}`;

            const response = await axios.get(url);
            const data = response.data;
            const route = data.routes && data.routes[0];

            if (route) {
                const distance = route.summary.lengthInMeters / 1000; // in km
                const travelTime = route.summary.travelTimeInSeconds / 3600; // in hrs

                if (distance < 10) {
                    await nearbyAgency.push(user);
                }
            } else {
                console.error('No route found.');
            }
        }
    
        return res.status(201).json({ nearbyAgency: nearbyAgency });

    } catch (error) {
        console.log('Error: ', error.message);
        return res.status(500).json({ error: 'Server Error!' });
    }
}

// Making a donation request to compost agency or ngo
export const donate_supplies = async (req, res) => {
    try {
        console.log(data);
        const { data } = req.body;
        let agency = await User.findOne({ username: data.username });
        let status = 'pending';
        if (data.type === 'ngo')
            status = 'confirm';
        let transaction = await Transaction.create({
            sender: req.user.username,
            receiver: req.data.username,
            type: data.role,
            quantity: data.quantity,
            points: data.quantity*10, //1kg = 10points
            status: status
        });

        suppliesRequest(agency, req.user, transaction);

        return res.status(200).json({ message: "Request sent to Agency/NGO!" });

    } catch (error) {
        console.log('Error: ', error.message);
        return res.status(500).json({ error: 'Server Error!' });
    }
}

// Displaying the list of agencies where user has donated from where he can get the reward
export const reward_store = async (req, res) => {
    try {
        let agencies = await Points.findOne({ user: req.user.id }, { availablePoints: 1 }); 
        
        let userRewards = [];
        for (let agency of agencies) {
            let rewards = await Agency.find({ user: agency.agency }, { reward: 1 });
            let { username, name } = await User.findById(agency.agency, {username: 1, name: 1});
            userRewards.push({ username: username, name: name, rewards: rewards, userPoints: agency.point });
        }

        return res.status(200).json({ message: 'Agency data fetched!', userRewards: userRewards});

    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({ error: error });
    }
}

// Reedem the reward and subtract the money
export const reedem_reward = async (req, res) => {
    try {
        const { reward } = req.body;
        let sender = await User.findOne({ username: req.body.username });
        await History.create({
            sender: req.body.username,
            receiver: req.user.username,
            reward: reward
        });
    
        await Points.findOneAndUpdate(
            { user: req.body.user.id, "reward.agency": sender.id },
            { $set: { "reward.$.points": -reward.point } },
            { new: true }
          );

        redeemReward(sender, req.user, reward);
          
        return res.status(200).json({ message: "Points updated successfully!" });

    } catch (error) {
        console.log('Error: ', error);
        return res.status(500).json({ error: error });
    }
}