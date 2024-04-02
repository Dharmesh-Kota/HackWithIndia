import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['ngo', 'compostAgency'],
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        required: true
    }
},{
    timestamps: true
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;