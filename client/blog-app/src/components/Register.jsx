import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const[username , setusername] = useState("");
    const[Password , setpassword] = useState("");
    const[email , setemail] = useState("");

    async function register(event){
        await fetch("http://localhost:3002/register" ,{
            method: 'POST',
            body: JSON.stringify({username,email,Password}),
            headers: {'Content-Type' : 'application/json'},
        })
    }
    return (
        <div className='register'>
            <from onSubmit={register}>
                <input type='text' placeholder='Username'
                    value={username}
                    onChange={(event)=>{setusername(event.target.value)}}
                />
                <br/>
                <input type='email' placeholder='E-mail' 
                    value = {email}
                    onChange={(event)=>{setemail(event.target.value)}}
                />
                <br/>
                <input type='text' placeholder='Password' 
                    value = {Password}
                    onChange={(event)=>{setpassword(event.target.value)}}
                />
                <br/>
                <button onSubmit={register} type='submit'>Register</button>
                <p>Already Registered?</p>
                <p>Click <Link to="/login">Here</Link> To Login</p>
            </from>
            <button>press</button>
        </div>
    );
};

export default Register;