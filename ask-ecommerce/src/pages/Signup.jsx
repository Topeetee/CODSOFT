import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import { useNavigate } from 'react-router-dom'; 

const Signup = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/auth/signup', { 
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      console.log('Response Status:', response.status);
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Response Data:', responseData);
        // Navigate to the login page
        navigate('/Login');
      } else {
        const errorData = await response.json();
        console.log('Error Data:', errorData);
        setErrorMessage(errorData.message || 'An error occurred during signup');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred during signup');
    }
  };
  
  return (
    <div>
      <Navbar />
      <div className="container mt-44 flex justify-center flex-col text-center">
      {errorMessage && (
        <div className="text-red-500 mb-4">{errorMessage}</div>
      )}
        <h2 className='text-center text-3xl font-sans'>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 mt-5 ">
            <input
              type="text"
              id="username"
              name="username"
              className="form-control  border-2 p-4 w-96"
              value={formData.username}
              placeholder='Username'
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control  border-2 p-4 w-96"
              value={formData.email}
              placeholder='Email'
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              className="form-control  border-2 p-4 w-96"
              value={formData.password}
              placeholder='Password'
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary button-color mb-3">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
