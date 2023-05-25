import mongoose from "mongoose"
import mongodb from 'mongodb';


const Userschema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

const User = mongoose.model("user" , Userschema);


export default User;