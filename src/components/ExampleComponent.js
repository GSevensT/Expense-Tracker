// ExampleComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTokens, clearTokens } from '../redux/store'; // Adjust the path based on your structure

const ExampleComponent = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.auth);

  const handleLogin = () => {
    // Simulate a login and set the tokens
    const fakeTokens = {
      accessToken: '12345',
      sid: 'user_sid',
      refreshToken: 'refresh_token',
    };
    dispatch(setTokens(fakeTokens));
  };

  const handleLogout = () => {
    dispatch(clearTokens());
  };

  return (
    <div>
      <h1>{accessToken ? `Logged in with token: ${accessToken}` : 'Not logged in'}</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ExampleComponent;
