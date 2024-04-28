import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './styles.css';

// Page components
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import TrainSearchPage from './pages/TrainSearchPage'; // Assuming TrainSearch is a page now
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const [ticket, setTicket] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSearch = (ticketData) => {
    // Implement search functionality or call an API
  };

  const handleLogin = (credentials) => {
    // Implement login functionality or call an API
    setIsLoggedIn(true); // You would actually check credentials here before setting loggedIn state
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setTicket(null); // Clear the ticket data on logout
  };

  return (
    <Router>
      <div className="container">
        <header>
          <nav className="nav-links">
            <Link to="/" className="custom-button">Home</Link>
            <Link to="/contact" className="custom-button">İletişim</Link>
            <Link to="/ticket-inquiry" className="custom-button">Bilet Sorgulama</Link>
          </nav>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="login-button">Logout</button>
          ) : (
            <Link to="/login" className="login-button">Giriş / Kayıt</Link>
          )}
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/ticket-inquiry" element={<TrainSearchPage onSearch={handleSearch} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
