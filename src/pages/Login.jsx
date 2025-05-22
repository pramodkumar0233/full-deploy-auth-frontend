import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const res = await axios.post(`${BACKEND_URL}/api/auth/login`, { email, password });
      alert("You did it man");
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
      <p>Don't have an account? <Link to="/signup">Signup</Link></p>
    </div>
  );
}

export default Login;
