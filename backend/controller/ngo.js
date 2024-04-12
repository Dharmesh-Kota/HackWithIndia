import Transaction from "../models/transaction.js";

// Send the pending requests data to the agency home page
export const requests = async (req, res) => {
    try {
        let requests = await Transaction.find({ status: 'accepted', receiver: req.user.username }, {sender: 1, quantity: 1});
        console.log(requests);
        return res.status(200).json({ message: 'Requests data sent!', requests: requests });
    } catch (error) {
        console.log('Error: ', error.message);
        return res.status(500).json({ error: 'Server Error!' });
    }
}