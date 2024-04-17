// App.js

import React, { useState } from 'react';
import RegisterForm from './component/RegisterForm';
import LoginForm from './component/LoginForm';
import Lobby from './component/Lobby';
import './App.css';

function App() {
const [currentPage, setCurrentPage] = useState('login');
const [currentUserId, setCurrentUserId] = useState(null);
const navigate = (page) => {
  setCurrentPage(page);
};

const handleSignup = () => {
  navigate('login');
};

const handleRegister = () => {
  navigate('signup')
};

const handleLogin = (userId) => {
  setCurrentUserId('login');
  navigate('lobby');
  
};
const renderPage = () => {
  switch (currentPage) {
    case 'signup':
      return <RegisterForm onSignup={handleSignup} />;
    case 'login':
      return <LoginForm onLogin={handleLogin} onSignup={handleRegister} />;
    case 'lobby':
      return <Lobby userId={currentUserId} />;
    default:
      return <RegisterForm onSignup={handleSignup} />;
  }
};


  return (
    <div className="App">
      <header className="App-header">
        <h1>CodeNames</h1>
      </header>
      <div className="forms-container">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
