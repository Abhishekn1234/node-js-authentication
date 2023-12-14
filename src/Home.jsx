import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const containerStyle = {
    textAlign: 'center',
    background: 'blue',
    color: 'white',
    margin: '270px',
    padding: '20px',
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px',
    backgroundColor: 'white',
    color: 'blue',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1>Home page</h1>
      <div>
        <Link to="/login" style={buttonStyle}>
          <button>Login</button>
        </Link>
        <Link to="/register" style={buttonStyle}>
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
