import React from 'react';
import Button from "react-bootstrap/Button"
import useUserInfo from '../zustand/useUserInfo';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { userEmail, setUserEmail, userPassword, setUserPassword } = useUserInfo();
    const navigate = useNavigate();

    const handleLogout = () => {
        if (userEmail && userPassword) {
            setUserEmail("");
            setUserPassword("");
            navigate("/login");
        }
    };

  return (
    // <button type='button' className='btn btn-danger' onClick={handleLogout}>Logout</button>
    <Button type='button' variant='danger' onClick={handleLogout}>Logout</Button>
  )
}

export default Logout;