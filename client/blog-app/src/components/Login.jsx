import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <from>
                <input type='text' placeholder='Username'/>
                <br/>
                <input type='text' placeholder='Password' />
                <br/>
                <button type='submit'>Login</button>
                <p>Haven't Regestered yet?</p>
                <p>Click <Link to="/register">Here</Link> To Register Your Self</p>
            </from>
        </div>
    );
};

export default Login;