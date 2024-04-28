import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './styles.css';

// Import your page components
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import TrainSearchPage from './pages/TrainSearchPage';
import TicketResultPage from './pages/TicketResultPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (credentials) => {
    // Logic to check the credentials
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <header>
          {/* Navigation links */}
          <nav className="nav-links">
            <Link to="/" className="custom-button">Home</Link>
            <Link to="/contact" className="custom-button">Contact</Link>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="login-button">Logout</button>
            ) : (
              <Link to="/login" className="login-button">Login / Register</Link>
            )}
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/ticket-inquiry" element={<TrainSearchPage />} />
            <Route path="/ticket-result" element={<TicketResultPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
