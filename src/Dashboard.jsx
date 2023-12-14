import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    margin:'250px',
    background: 'linear-gradient(to bottom, #3498db, #2980b9)',
    color: 'white',
  };

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    
    navigate('/');
  };

  return (
    <div style={containerStyle}>
      <h2>Welcome to the Dashboard</h2>
      
      <button onClick={handleNavigateHome}>Go to Home</button>
    </div>
  );
}

export default Dashboard;
