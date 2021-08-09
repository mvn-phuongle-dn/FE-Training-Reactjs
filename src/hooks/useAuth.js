import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { changeLoginStatus } from '../store/loginSlice';

const useAuth = () => {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [isLogged, setIsLogged] = useState(!!user);
  const history = useHistory();
  const dispatch = useDispatch();

  const login = (email, password) => {
    return new Promise((res,rej) => {
      setTimeout(() => {
        setUser({email});
        setIsLogged(true);
        localStorage.setItem('user', JSON.stringify({email}));
        history.push('/account');
        res({email});
        dispatch(changeLoginStatus(true));
      }, 1000);
    })
  }

  const logout = () => {
    localStorage.removeItem('user');
    setIsLogged(false);
    dispatch(changeLoginStatus(false));
    history.push('/');
  }

  return {isLogged, login, logout};
}

export default useAuth;
