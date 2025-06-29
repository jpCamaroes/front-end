import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginScreen.css';
import logo from '../../assets/logo.png';

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5555/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials: 'include'
      });

      if (!response.ok) {
        let data = {};
        try {
          data = await response.json();
        } catch {
          setError('Erro de conexão com o servidor.');
          return;
        }
        setError(data?.message || 'Credenciais inválidas');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Erro de conexão com o servidor.', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <img src={logo} alt="Logo" className="login-logo" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email or username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="options">
            <label>
              <input type="checkbox" /> Remember
            </label>
            <a href="#">Forgot your password?</a>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Entrando...' : 'NEXT →'}
          </button>
          {error && <div style={{ color: '#ff7777', marginTop: 10 }}>{error}</div>}
        </form>
        <a className="create-account" href="#">Create account</a>
      </div>
    </div>
  );
}

export default LoginScreen;