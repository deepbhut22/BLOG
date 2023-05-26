import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import mongodb from 'mongodb';
import cors from 'cors';
import { log } from 'console';
import exp from 'constants';
import User from './models/user.js';
import bcrypt from 'bcryptjs';
import  Jwt from 'jsonwebtoken';

const salt = bcrypt.genSaltSync(5);
const secret = 'vgcvgakvkfuuygfy643trgiubkja6d56468er7g4';

const app = new express();
app.use(cors({credentials:true , origin:'http://localhost:3000'}));
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/BLOG");


app.post("/register" , async(req,res)=>{
    const{username , email , password} = req.body;

    try{
        const user = await User.create({
            username,
            email,
            password:bcrypt.hashSync(password,salt)
        })
        // console.log(user);
        res.json(user);
    }
    catch(e){
        // console.log(e);
        res.status(400).json(e);
    }
    
    console.log(username);
    console.log(email);
    console.log(password);
})

app.post("/login" , async (req,res)=>{
    const{username, password} = req.body;
    try{
        const userFromDB = await User.findOne({username: username});
        const result = bcrypt.compareSync(password , userFromDB.password);
        if(result){
            Jwt.sign({username, id:userFromDB._id}, secret ,{} ,(err,token)=>{
                res.cookie('token' , token).json("ok");
            })
        }
        else{
            res.status(400).json('wrong credentials');
        }
    }
    catch(e){
        res.status(400).json(e);
    }
    

})




app.get("/" , (req,res)=>{
    res.json('{"hello"}');
})

app.listen(3002 , ()=>{
    console.log("server running");
})
