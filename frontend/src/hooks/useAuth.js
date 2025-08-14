import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { setAuthToken } from '../api';

export function useAuth() {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(token ? jwtDecode(token) : null);

  useEffect(() => {
    if (token) {
      setAuthToken(token);
      setUser(jwtDecode(token));
      localStorage.setItem('token', token);
    } else {
      setAuthToken(null);
      setUser(null);
      localStorage.removeItem('token');
    }
  }, [token]);

  return { token, setToken, user };
}
