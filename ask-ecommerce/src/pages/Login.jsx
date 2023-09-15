import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/Order');
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred during login');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-44 flex justify-center items-center flex-col text-center">
        {errorMessage && (
          <div className="text-red-500 mb-4">{errorMessage}</div>
        )}
        <h2 className="text-center text-3xl font-sans">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-5">
            <input
              type="text"
              id="username"
              name="username"
              className="form-control border-2 p-4 w-96"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              className="form-control border-2 p-4 w-96 mb-5"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary button-color mb-3">
            Login
          </button>
        </form>

        <Link to="/register">
          <a className="a-link">Signup</a>
        </Link>
      </div>
    </div>
  );
};

export default Login;
