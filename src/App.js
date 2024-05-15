import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './App.css';
//import './styles.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import TrainSearchPage from './pages/TrainSearchPage';
import TicketResultPage from './pages/TicketResultPage';
import TicketsList from './pages/TicketsList';
import PaymentPage from './pages/PaymentPage';
import SelectSeatPage from './pages/SelectSeatPage';
import AdminPanelPage from './pages/AdminPanelPage';
import ChatSupport from './components/ChatSupport';

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
          <Navbar bg="light" expand="lg" className="nav-links">
            <Container>
              <Navbar.Brand href="/">
                <img src={logoImage} className="logo" alt="logo"  />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="/" className="nav-link" activeClassName="active">Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/contact" className="nav-link" activeClassName="active">Contact</Nav.Link>
                  <Nav.Link as={NavLink} to="/ticket-inquiry" className="nav-link" activeClassName="active">Ticket Inquiry</Nav.Link>
                  {isLoggedIn ? (
                    <Button onClick={handleLogout} className="login-button">Logout</Button>
                  ) : (
                    <Nav.Link as={NavLink} to="/login" className="nav-link login-button" activeClassName="active">Login</Nav.Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
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
            <Route path="/SelectSeatPage" element={<SelectSeatPage />} />
          </Routes>
          <ChatSupport />
        </main>
      </div>
    </Router>
  );
};

export default App;
