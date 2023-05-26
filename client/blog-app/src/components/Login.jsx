import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Login = () => {

    const[username , setusername] = useState("");
    const[password , setpassword] = useState("");
    const[isloggedin , setisloggedin] = useState(false);

    const submitlogin = (event)=>{
        event.preventDefault();
        fetch("http://localhost:3002/login" , {
            method: 'POST',
            body: JSON.stringify({username , password}),
            headers: {'Content-Type' : 'application/json'},
            credentials: 'include'
        }).then(res=>{
            console.log(res);
            if(res.ok === false){
                console.log("firse dalo");
                setusername("");setpassword("");
                alert("Wrong credentials");
            }
            else{
                setisloggedin(!isloggedin);
            }
        })
    }

    if(isloggedin){
        return <Navigate to={'/'} />
    }

    return (
        <div className='login' onSubmit={submitlogin}>
            <form>
                <input type='text' placeholder='Username'
                    value={username}
                    onChange={(event)=>{setusername(event.target.value)}}
                />
                <br/>
                <input type='text' placeholder='Password' 
                    value={password}
                    onChange={(event)=>{setpassword(event.target.value)}}
                />
                <br/>
                <button type='submit'>Login</button>
                <p>Haven't Regestered yet?</p>
                <p>Click <Link to="/register">Here</Link> To Register Your Self</p>
            </form>
        </div>
    );
};

export default Login;
