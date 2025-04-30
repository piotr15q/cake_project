import React, { useState } from "react";

function LoginPage({onLogin}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async() => {
        try {
            //const url = 
        }
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
                <button className="login-button" type="button" /*onClick={handleLogin}*/>Login</button>
            </div>
        </div>
    );
}

export default LoginPage;