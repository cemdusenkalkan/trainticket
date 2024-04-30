import React, { useState, useEffect } from 'react';
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
import TicketsList from './pages/TicketsList';
import PaymentPage from './pages/PaymentPage';

// Sohbet paneli ve buton bileşeni
const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Merhaba, size nasıl yardımcı olabilirim?", sender: "bot" }]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if(newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage('');
    }
  };

  useEffect(() => {
    if (messages.length && messages[messages.length - 1].sender === "user") {
      setTimeout(() => {
        setMessages(msgs => [...msgs, { text: "Sohbet desteği geliştirme aşamasında", sender: "bot" }]);
      }, 1000); // Kullanıcı mesajından 1 saniye sonra bot yanıtı ekle
    }
  }, [messages]);

  return (
    <div className="support-chat">
      <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>
      <div className="chat-panel" style={{ display: isOpen ? 'flex' : 'none' }}>
        <div className="chat-content">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Mesajınızı yazınız..."
            onKeyPress={(event) => event.key === 'Enter' && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>Gönder</button>
        </div>
      </div>
    </div>
  );
};

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
            <Link to="/" className="custom-button">Home</Link>
            <Link to="/contact" className="custom-button">Contact</Link>
            <Link to="/ticket-inquiry" className="custom-button">Ticket Inquiry</Link>
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
            <Route path="/ticket" element={<TicketsList />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
          <ChatSupport /> {/* Sohbet bileşeni burada eklendi */}
        </main>
      </div>
    </Router>
  );
};

export default App;
