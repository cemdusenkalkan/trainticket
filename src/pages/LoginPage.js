import React, { useState } from 'react';
import '../LoginPage.css'; // Make sure to create this CSS file
import { useNavigate } from 'react-router-dom'; // If you're using react-router

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Hard-coded user credentials for demonstration purposes
  const validUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123', role: 'admin' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', password: 'password456', role: 'user' }
  ];

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const user = validUsers.find(u => u.email === email && u.password === password);

    if (user) {
      console.log('Logging in with', email, 'Role:', user.role); // For debugging purposes
      // Redirect based on role
      if (user.role === 'admin') {
        navigate('/admin-dashboard'); // Navigate to admin dashboard for admin users
      } else {
        navigate('/'); // Navigate to home for regular users
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
        {error && <div className="error-message">{error}</div>} {/* Display error message if any */}

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
