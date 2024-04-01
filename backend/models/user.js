import mongoose from "mongoose";

const userScehma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['compostAgency', 'ngo', 'donor'],
        required: true
    },
    location: String,
    contact: String,
    address: String
},{
    timestamps: true
});

const User = mongoose.model('User', userScehma);

export default User;