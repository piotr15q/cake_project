import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage({user, onLogout}) {
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);
    const [forms, setForms] = useState([]);
    const navigate = useNavigate();

    const toggleUserMenu = () => {
        setUserMenuOpen(!isUserMenuOpen);
    }

    const handleaddOrderClick = () => {
        navigate('/addOrder');
    }

    useEffect(() => {
        const fetchForms = async () => {
          try {
            const response = await fetch("http://localhost:8080/api/forms"); // zakładany endpoint
            if (response.ok) {
              const data = await response.json();
              setForms(data);
            } else {
              console.error("Błąd pobierania formularzy");
            }
          } catch (err) {
            console.error("Błąd połączenia z API:", err);
          }
        };
    
        fetchForms();
    }, []);

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
            <h1>Welcome, {user.firstname} !</h1>
        </header>
        <div>
            <button onClick={handleaddOrderClick}> Add new order offer </button>
        </div>
        <main><h2>Twoje formularze:</h2>
        <div className="form-cards-container">
          {forms.map((form, index) => (
            <div className="form-card" key={form.id || index}>
              <h3>{form.name || `Formularz #${index + 1}`}</h3>
              <p>Ilość pól: {form.fields?.length || 0}</p>
              <button onClick={() => navigate(`/form/${form.id}`)}>Pokaż</button>
            </div>
          ))}
        </div></main>
    </div>
    );
}

export default HomePage;