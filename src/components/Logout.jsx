import React from 'react';
import Button from "react-bootstrap/Button";

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

const Logout = () => {

    const { setUserEmail, setUserPassword } = useContext(UserContext);
    const navigate = useNavigate();
    const cachedEmail = localStorage.getItem("login-email");

    const handleLogout = () => {
        if (cachedEmail) {
          setUserEmail("");
          setUserPassword("");
          localStorage.removeItem("login-email");
          navigate("/login");
        } 
    };

  return (
    <Button type='button' variant='danger' onClick={handleLogout}>Logout</Button>
  )
}

export default Logout;