import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import './styles.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import TrainSearchPage from './pages/TrainSearchPage';
import TicketResultPage from './pages/TicketResultPage';
import TicketsList from './pages/TicketsList';
import PaymentPage from './pages/PaymentPage';
import AdminPanelPage from './pages/AdminPanelPage';
import ChatSupport from './components/ChatSupport'; // Make sure the path matches where you placed the file

import logoImage from './img/logo.png';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (credentials) => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <header>
          <nav className="nav-links">
            <img src={logoImage} alt="logo" />
            <NavLink to="/" className="custom-button" activeClassName="active">Home</NavLink>
            <NavLink to="/contact" className="custom-button" activeClassName="active">Contact</NavLink>
            <NavLink to="/ticket-inquiry" className="custom-button" activeClassName="active">Ticket Inquiry</NavLink>
            {isLoggedIn ? (
              <button onClick={handleLogout} className="login-button">Logout</button>
            ) : (
              <NavLink to="/login" className="login-button" activeClassName="active">Login</NavLink>
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
            <Route path="/ticket" element={<TicketsList />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/admin-dashboard" element={<AdminPanelPage />} />
          </Routes>
          <ChatSupport /> {/* Sohbet bileşeni burada eklendi */}
        </main>
      </div>
    </Router>
  );
};

export default App;
