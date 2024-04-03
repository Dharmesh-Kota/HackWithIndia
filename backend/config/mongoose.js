import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const db = mongoose
            .connect(process.env.MONGOURL || "mongodb://127.0.0.1:27017/d-compost")
            .then(() => {
                console.log("Successfully connected to Mongo-Database");
            })
            .catch((error) => {
                console.error(error);
            });
        
export default db;