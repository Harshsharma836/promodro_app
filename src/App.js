// src/App.js
import React, { useState } from 'react';
import Timer from './components/timer/Timer';
import Login from './components/auths/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Timer />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
