import React, { useState } from "react";

function RegisterPage() {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');
    const [registrationSucces, setRegistrationSuccess] = useState(false);

    const handleRegistration = async() => {
        try {
            const userData = {
                firstname,
                lastname,
                email,
                birthDate,
                password
            };
            
            //const respose
            //console.log('User registered: 'response.data);

        } catch (error) {
            console.error('Registration error: ', error);
        }
        setRegistrationSuccess(true);
    };

    if (registrationSucces) {
        return (
            <div className="centered-container">
                <div className="login-container">
                    <h1>Register Succesfull!</h1>
                    <h2> </h2>
                <div className="registration-link">
                    <p>Did you have accont? <a href="/">Login here</a></p>
                </div>
                </div>

            </div>
        );
    }

    return (
        <div className="centered-container">
        <div className="login-container">
            <h2>Registration</h2>
            <div className="input-container">
                <input type="text" placeholder="Firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="input-container">
                <input type="text" placeholder="Lastname" value={lastname} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="input-container">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-container">
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-container">
                <input type="date" placeholder="Birthdate" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
            </div>
            <button className="login-button" onClick={handleRegistration}>Register</button>
            <div className="login-link">
                <p className='registration-link'>Already have an account? <a href="/">Login here</a></p>
            </div>
        </div>
        </div>
    );
}

export default RegisterPage;