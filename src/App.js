import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, Row, Col } from 'react-bootstrap';
import './App.css';
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
import linkedinImage from './img/linkedin.png'; // LinkedIn resmi import edildi

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
                <img src={logoImage} className="logo" alt="logo" />
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
        <footer className="bg-dark text-white text-center text-lg-start">
          <Container className="p-4">
            <Row>
              <Col lg="4" md="12" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">About TrainTrack</h5>
                <p>
                  bla bla
                </p>
              </Col>
              <Col lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Quick Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Nav.Link as={NavLink} to="/" className="text-white">Home</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link as={NavLink} to="/contact" className="text-white">Contact</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link as={NavLink} to="/ticket-inquiry" className="text-white">Ticket Inquiry</Nav.Link>
                  </li>
                  <li>
                    <Nav.Link as={NavLink} to="/login" className="text-white">Login</Nav.Link>
                  </li>
                </ul>
              </Col>
              <Col lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Contact Us</h5>
                <ul className="list-unstyled mb-0">
                <li>
                    <Button 
                      variant="primary" 
                      href="https://www.linkedin.com/in/yourprofile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="linkedin-button"
                    >
                      <img src={linkedinImage} alt="LinkedIn" className="linkedin-icon" />
                      Miray Köksal
                    </Button>
                  </li>
                  <li>
                    <Button 
                      variant="primary" 
                      href="https://www.linkedin.com/in/yourprofile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="linkedin-button"
                    >
                      <img src={linkedinImage} alt="LinkedIn" className="linkedin-icon" />
                      Cem Düşenkalkan
                    </Button>
                  </li>
                  <li>
                    <Button 
                      variant="primary" 
                      href="https://www.linkedin.com/in/yourprofile" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="linkedin-button"
                    >
                      <img src={linkedinImage} alt="LinkedIn" className="linkedin-icon" />
                      Meryem Çanga
                    </Button>
                  </li>
                  
                </ul>
              </Col>
            </Row>
          </Container>
          <div className="text-center p-3 bg-secondary">
            © 2024 TrainTrack. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
