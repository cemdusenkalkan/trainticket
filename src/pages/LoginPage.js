import React, { useState } from 'react';
import '../LoginPage.css'; // Make sure to create this CSS file
import { useNavigate } from 'react-router-dom'; // If you're using react-router

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validUsers = [
    { id: 1, name: 'Admin', email: 'admin@gmail.com', password: 'password', role: 'admin' },
    { id: 2, name: 'Miray Köksal', email: 'miray@gmail.com', password: 'password', role: 'user' },
    { id: 3, name: 'Cem Kalkandüşen', email: 'cem@gmail.com', password: 'password', role: 'user' },
    { id: 4, name: 'Meryem Çanga', email: 'meryem@gmail.com', password: 'password', role: 'user' }
  ];

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const user = validUsers.find(u => u.email === email && u.password === password);

    if (user) {
      console.log('Logging in with', email, 'Role:', user.role);
      if (user.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/');
      }
    } else {
      setError('Invalid email or password');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form className="form" onSubmit={handleLoginSubmit}>
        {error && <div className="error-message">{error}</div>}

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

        <a href="" onClick={handleRegisterRedirect} className="register-link">Don't have an account yet?  Sign Up</a>

        
      </form>
      
    </div>
  );
};

export default LoginPage;
