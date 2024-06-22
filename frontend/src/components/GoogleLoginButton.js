import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleLoginButtonComponent = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const [message, setMessage] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onSuccess = async (response) => {
    try {
      const idToken = response.credential;
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/google`, { idToken });
      const userName = res.data.name;
      setMessage(`You have signed in successfully, ${userName}!`);
      setIsSignedIn(true);
    } catch (error) {
      console.error('Error authenticating user:', error);
    }
  };

  const onFailure = (error) => {
    console.error('Login failed:', error);
  };

  return (
    <div>
      {!isSignedIn && (
        <div className="login-box">
          <GoogleLogin
            clientId={clientId}
            onSuccess={onSuccess}
            onFailure={onFailure}
            render={({ onClick }) => (
              <button onClick={onClick} style={{ padding: '10px 20px', backgroundColor: '#4285F4', color: 'white', border: 'none', cursor: 'pointer' }}>
                Sign in with Google
              </button>
            )}
          />
        </div>
      )}
      {message && <span style={{fontFamily: "Raleway, sans-serif",
              marginBottom: "1rem",
              color: "#003B40", }}>{message}</span>}
    </div>
  );
};

export default GoogleLoginButtonComponent;
