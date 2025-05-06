import React, {useState} from 'react';
import { BrowserRouter as Router, Link, Routes, Route, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import HomePage from './component/HomePage';
import LoginPage from './component/LoginPage';
import RegisterPage from './component/RegisterPage';
import AddOrderPage from './component/AddOrderPage';
import ViewFormPage from './component/FormViewPage';

function App() {
  const [user, setUser] = useState('');

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser('');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              !user ? (
                <LoginPage onLogin={handleLogin} />
              ) : (
                <HomePage user={user} onLogout={handleLogout} />
              )
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/addOrder' element={<AddOrderPage/>}/>
          <Route path='/form' element={<ViewFormPage/>}/>
        </Routes>
        <div>
          {!user && (
            <AuthLink />
          )}
        </div>
      </div>
    </Router>
  );
}

function AuthLink() {
  const location = useLocation();
  if (location.pathname !== '/register') {
    return (
      <p class = "registration-link">
        Don't have an account? <Link to="/register">Click here to register</Link>
      </p>
    );
  }
  return null;
}

export default App;

