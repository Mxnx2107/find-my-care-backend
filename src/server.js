import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import bodyParser from "bodyParser";
import ConnectDB from "./configs/db-config.js";
import authRoutes from "../src/controllers/auth/routes/auth-routes.js";

const port = 9000;
const app = express();

ConnectDB();

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extends:true}))
// app.use(cors());


app.use('/auth/v1', authRoutes)


app.listen(port,()=>{

    console.log(`server is running at http://localhost:${port}`);
    
})
