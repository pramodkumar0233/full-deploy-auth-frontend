import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = async () => {
    try {
      await axios.post(`${BACKEND_URL}/api/auth/signup`, { email, password });
      alert("Signup success! Please login.");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={signup}>Signup</button>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Signup;
