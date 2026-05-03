import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { AuthProvider, useAuth } from './context/AuthContext';
import { setAuthToken } from './services/api';

function Bootstrap() {
  const { token } = useAuth();
  setAuthToken(token);
  return <App />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Bootstrap />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
