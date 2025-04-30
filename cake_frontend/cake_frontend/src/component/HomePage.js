import React, { useState } from "react";

function HomePage({user, onLogout}) {
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);

    const toggleUserMenu = () => {
        setUserMenuOpen(!isUserMenuOpen);
    }


    return (
    <div className="home-page">
        <nav className="navbar">
            <span>
                Hello 
            </span>
            <div className="nav-icons">
                <button className="user-icon" onClick={toggleUserMenu}> show menu </button>
                {isUserMenuOpen && (
                    <div className="custom-menu">
                        <ul>
                            <li>Profile</li>
                            <li>News</li>
                            <button onClick={onLogout}>Logouts</button>
                        </ul>
                    </div>
                )}
                {/* <button className="cart-icon"/> */}
            </div>
        </nav>
        <header>
            {/* <h1>Welcome, {user.firstname} !</h1> */}
        </header>
        <main>{}</main>
    </div>
    );
}

export default HomePage;