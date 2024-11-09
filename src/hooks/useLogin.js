import React from 'react'
import useUserInfo from "../zustand/useUserInfo.js";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
    const { setUserEmail, setUserPassword } = useUserInfo();
    const navigate = useNavigate();

    const login = (email, password) => {
        const checksOut = handleInputErrors(email, password);
        if (!checksOut) return;

        try {
            navigate("/");
            setUserEmail(email);
            setUserPassword(password);
            
        } catch (error) {
            toast.error(error.message);
            console.log("Error in useLogin");
        }

    };

    return {login};

};

const handleInputErrors = ({ email, password }) => {
    if (!email || !password) {
        toast.error("Please fill in the fields.");
        return false;
    };

    if (password < 6) {
        toast.error("Password is too short. Must be at least 6 characters");
        return false;
    }
}

export default useLogin;