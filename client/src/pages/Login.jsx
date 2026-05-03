import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, setAuthToken } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const { data } = await api.post('/auth/login', { email, password });
    login(data);
    setAuthToken(data.token);
    navigate('/');
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto mt-20 bg-white p-6 rounded-xl shadow space-y-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <input className="w-full border p-2 rounded" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <input className="w-full border p-2 rounded" placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <button className="w-full bg-blue-600 text-white p-2 rounded">Sign In</button>
    </form>
  );
}
