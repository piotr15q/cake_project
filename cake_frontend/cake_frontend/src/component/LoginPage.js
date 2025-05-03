import React, { useState } from "react";
import axios from 'axios';

function LoginPage({onLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setError] = useState(false);

    const handleLogin = async () => {

        if (email === '' && password === ''){
            alert("email and password is missing");
            return;
        }
        else if (email === '') {
            alert("email is missing");
            return;
        }
        else if (password === ''){
            alert("password is missing");
            return;
        }

        try {
          const url = `http://localhost:8080/api/v1/customer/get?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
          const response = await axios.get(url);
          const userData = response.data;
          onLogin(userData);
    
        } catch (error) {
            setError(true);
            console.error('Login error:', error);
        }

      };

    if (isError) {
        alert("email or password is incorrect");
        setError(false);
    }    

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Sign in to your account</h2>
                <div className="input-container">
                    <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button className="login-button" type="button" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}

export default LoginPage;