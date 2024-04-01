import mongoose from "mongoose";

const historyScehma = new mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    receiver: {
        type: String,
        required: true
    },
    reward: {
        type: {
            name: {
                type: String,
                required: true
            },
            point: {
                type: Number,
                required: true
            }
        },
        required: true
    }
},{
    timestamps: true
});

const History = mongoose.model('History', historyScehma);

export default History;