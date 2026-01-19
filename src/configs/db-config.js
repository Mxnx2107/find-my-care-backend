import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const uri = process.env.DB_URL;

const ConnectDB = () => {
    mongoose.connect(uri)
    .then(() => {
        console.log("Succesfully Connected to Database.")
    })
    .catch((error) => {
        console.log("Database Connection ERROR.", error);
        
    })
}

export default ConnectDB;