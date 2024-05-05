import React, { useState } from 'react';
import '../RegisterPage.css'; // Reuse the LoginPage.css or create a new one with the same content
import { useNavigate } from 'react-router-dom'; 

const RegisterPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Implement your register logic here
    console.log('Registering with', email, password);
    // Handle password confirmation and other validation here
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="form-container">
      <h1>Register</h1>
      <form className="form" onSubmit={handleRegisterSubmit}>
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
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Register</button>

        <a href="" onClick={handleLoginRedirect} className="register-link">Already registered? Sign In</a>


      </form>
    </div>
  );
};

export default RegisterPage;
