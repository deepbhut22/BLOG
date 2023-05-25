import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import mongodb from 'mongodb';
import cors from 'cors';
import { log } from 'console';

const app = new express();
app.use(cors());


app.post("/register" , (req,res)=>{
    log(req.body.username)
})

app.get("/" , (req,res)=>{
    res.json('{"hello"}');
})

app.listen(3002 , ()=>{
    console.log("server running");
})