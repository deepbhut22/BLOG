import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import mongodb from 'mongodb';
import cors from 'cors';
import { log } from 'console';
import exp from 'constants';
import User from './models/user.js';

const app = new express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/BLOG");


app.post("/register" , async(req,res)=>{
    const{username , email , password} = req.body;
    await User.create({
        username,
        email,
        password
    })
    console.log(username);
    console.log(email);
    console.log(password);
})

app.get("/" , (req,res)=>{
    res.json('{"hello"}');
})

app.listen(3002 , ()=>{
    console.log("server running");
})
