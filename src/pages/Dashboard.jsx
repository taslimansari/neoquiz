import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Unauthorized access. Redirecting to login...');
      navigate('/'); // Redirect to login if no token
    } else {
      const userData = JSON.parse(localStorage.getItem('user'));
      setUser(userData);
    }
  }, [navigate]);

  return (
    <div style={styles.container}>
      <h2>Welcome to Dashboard!</h2>
      {user && (
        <>
          <p>Email: {user.email}</p>
          <button onClick={() => {
            localStorage.clear(); // Logout
            navigate('/');
          }} style={styles.button}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px'
  },
  button: {
    padding: '10px',
    backgroundColor: '#FF5733',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px'
  }
};

export default Dashboard;
