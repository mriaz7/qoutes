import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add any password handling logic here if needed
    localStorage.setItem('username', username);
    localStorage.setItem('password', password); // Optional: Store password if necessary
    navigate('/home');
  };

  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="loginInput"
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="loginInput"
      />
      <button onClick={handleLogin} className="loginButton">Login</button>
    </div>
  );
};

export default SignIn;
