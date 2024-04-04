import User from "../models/user.js";
import Points from "../models/userPoints.js";
import Agency from "../models/compostAgency.js";
import History from "../models/history.js";
import Transaction from "../models/transaction.js";

// Send the pending requests data to the agency home page
export const queue = async (req, res) => {
    try {
        let queue = await Transaction.find({ status: 'pending', receiver: req.user.username }, {sender: 1, quantity: 1});
        return res.status(200).json({ message: 'Requests data sent!', requests: queue });
    } catch (error) {
        console.log('Error: ', error.message);
        return res.status(500).json({ error: 'Server Error!' });
    }
}

// Confirm the supplies request sent by a user
export const cofirm_supplies = async (req, res) => {
    try {
        await Transaction.findOneAndUpdate(
            { sender: req.body.sender, receiver: req.user.username, quantity: req.body.quantity },
            { $set: { status: 'confirm' } },
            { new: true }
          );

        let user = await User.findOne({username: req.body.username});
        await Points.findOneAndUpdate(
            { user: user.id, "availablePoints.agency": req.user.id },
            { 
              $inc: { "availablePoints.$.points": req.body.quantity*10 },
              $setOnInsert: { user: username },
            },
            { upsert: true, new: true }
          );

        return res.status(200).json({ message: 'Points updated for the user!'});

    } catch (error) {
        console.log('Error: ', error.message);
        return res.status(500).json({ error: 'Server Error!' });
    }
}

// Reject the supplies request sent by a user
export const reject_supplies = async (req, res) => {
    try {
        await Transaction.findOneAndUpdate(
            { sender: req.body.sender, receiver: req.user.username, quantity: req.body.quantity },
            { $set: { status: 'rejected' } },
            { new: true }
          );

        return res.status(200).json({ message: 'Request rejected!'});

    } catch (error) {
        console.log('Error: ', error.message);
        return res.status(500).json({ error: 'Server Error!' });
    }
}

// Get the history of rewards redeemed by different users
export const history = async (req, res) => {
    try {
        let history = await History.findOne({ sender: req.user.username });
        if (history) {
            return res.status(200).json({ message: 'Redeem history sent!', history: history });
        }
        return res.status(200).json({ message: 'Redeem history sent!' });
    } catch (error) {
        console.log('Error: ', error.message);
        return res.status(500).json({ error: 'Server Error!' });
    }
}

// Get the list of rewards by composit Agency
export const rewards = async (req, res) => {
    try {
        let rewards = await Agency.findOne({ user: req.user.id }, { reward: 1 });
        return res.status(200).json({ message: 'Rewards sent seccussfully!', rewards: rewards });   

    } catch (error) {
        console.log('Error: ', error.message);
        return res.status(500).json({ error: 'Server Error!' });
    }
}

// Add a reward for the composite agency
export const add_reward = async (req, res) => {
    try {
        // console.log(req.body);
        let reward = await Agency.findOneAndUpdate(
            { user: req.user.id },
            { 
              $addToSet: { reward: { name: req.body.name, point: req.body.point } }
            },
            { upsert: true, new: true }
          );
        //   console.log(reward);
        return res.status(200).json({ message: 'New Reward added sucessfully!' });

    } catch (error) {
        console.log('Error: ', error.message);
        return res.status(500).json({ error: 'Server Error!' });
    }
}