import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [role, setRole] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password === repassword) {
      axios
      .post('http://localhost:8000/signup', {
        username: username,
        email: email,
        name: name,
        password: password,
        role: role
      })
      .then((response) => {
        if (response.status === 201) {
          navigate('/login');
        }
      })
      .catch((error) => {
        if (error.response.status === 409) {
          navigate('/login');
        } else {
          console.error('Error: ', error);
        }
      });
    } else {
      setPassword('');
      setRePassword('');
      alert('Passwords do not match!');
    }
  };
    
  return (
    <div className='signup'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Email: </label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Name: </label>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Role: </label>
          <select id="roleSelect" onChange={(e) => { setRole(e.target.value) }}>
            <option value="compositeAgency">Composting Agency</option>
            <option value="ngo">NGO</option>
            <option value="donor" selected>Donor</option>
        </select>
        </div>
        <div>
          <label>Password: </label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Reenter Password: </label>
          <input type='password' value={repassword} onChange={(e) => setRePassword(e.target.value)} />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default SignUp;