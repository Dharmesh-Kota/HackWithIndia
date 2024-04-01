import mongoose from "mongoose";

const pointsScehma = new mongoose.Schema({
    availablePoints: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
});

const Points = mongoose.model('Points', pointsScehma);

export default Points;