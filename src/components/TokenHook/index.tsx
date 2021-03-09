import { useState } from 'react';

export default function TokenHook() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');

    return (tokenString ? tokenString : "")
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: string) => {
    sessionStorage.setItem('token', userToken);

    setToken(userToken);
  };

  function removeToken() {
    sessionStorage.removeItem('token');
    setToken("");
  }

  return {
    logout: removeToken,
    setToken: saveToken,
    token
  }
}