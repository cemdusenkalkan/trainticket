import React, { useState } from 'react';
import '../RegisterPage.css';
import { useNavigate } from 'react-router-dom'; 

const RegisterPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log('Registering with', email, password);
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  const handleHomeRedirect = () => {
    navigate('/');
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


        <button type="submit" onClick={handleHomeRedirect}>Register</button>

        <a href="" onClick={handleLoginRedirect} className="register-link">Already registered? Sign In</a>


      </form>
    </div>
  );
};

export default RegisterPage;
