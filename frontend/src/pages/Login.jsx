import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [emailUsername, setEmailUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/create-session', {
        emailUsername: emailUsername,
        password: password
      })
      .then((response) => {
        const { user } = response.data;
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setEmailUsername('');
          setPassword('');
          alert('Invalid Username/Email or Password!');
        } else {
          console.error('Error: ', error);
        }
      });
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username or Email: </label>
          <input type='text' value={emailUsername} onChange={(e) => setEmailUsername(e.target.value)} />
        </div>
        <div>
          <label>Password: </label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;