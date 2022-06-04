import { useState, useEffect } from "react";

function usoToken() {
  const [token, setToken] = useState(null);
  
  const saveToken = userToken => {
    window.localStorage.setItem('token', JSON.stringify(userToken));
    if(userToken && userToken.token) {
      setToken(userToken.token);
    }
  };

  const deleteToken = () => {
    window.localStorage.clear();
    setToken(null); 
  }
  
  useEffect(() => {
    const tokenString = window.localStorage.getItem('token');
    if (tokenString) {
      const userToken = JSON.parse(tokenString);
      if(userToken && userToken.token) {
        setToken(userToken.token);
      }
    }
  }, [])

  return {
    setToken: saveToken,
    deleteToken,
    token
  }
}

export default usoToken;