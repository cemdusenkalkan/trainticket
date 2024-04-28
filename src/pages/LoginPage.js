import React, { useState } from 'react';
import '../LoginPage.css'; // Make sure to create this CSS file
import { useNavigate } from 'react-router-dom'; // If you're using react-router

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Here you would typically check against your backend for valid credentials
    if (email && password) { // simple check
      console.log('Logging in with', email, password);
      navigate('/'); // Navigate to home on successful login
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form className="form" onSubmit={handleLoginSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <button className="register-redirect" onClick={handleRegisterRedirect}>
        Register
      </button>
    </div>
  );
};

export default LoginPage;
