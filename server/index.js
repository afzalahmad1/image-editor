
import express from 'express';
const app = express();
import dotenv from "dotenv";
dotenv.config();
import connectDB from './db/connectDB.js';
import cors from 'cors'
import bodyParser from 'body-parser'
import RegistrationRoute from './routes/signup.js'
import  loginRoute from './routes/login.js'
import  imageRoute from './routes/image.js'


app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/public", express.static("public"));


app.use("/user", RegistrationRoute);
app.use("/user", loginRoute);
app.use("/image", imageRoute);

const PORT = process.env.SERVER_PORT || 5001


const start = async ()=>{
    try {
        await connectDB();
        app.listen(PORT,()=>{
        console.log("Server is running at port", PORT);
        })
    } catch (err) {
        console.log(err);
    }
}
start();