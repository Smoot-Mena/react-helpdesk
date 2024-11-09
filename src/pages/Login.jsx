import React from 'react';
import useLogin from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import useUserInfo from '../zustand/useUserInfo';

const Login = () => {

    // const { login } = useLogin();
    const { setUserEmail, setUserPassword } = useUserInfo();
    const navigate = useNavigate();
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
    //   login(email, password);
      navigate("/");
    }

  return (
    <section id='login-window'>
        <header>React Helpdesk
            <span> Login</span>
        </header>

        <form onSubmit={handleSubmit} name='login'>
            <label name="login-email">Email: </label>
            <input type="email" required onChange={(event) => setUserEmail(event.target.value)} />

            <label name="password">Password: </label>
            <input type="text" minLength={6} required onChange={(event) => setUserPassword(event.target.value)} />

            <button type='submit'>Login</button>
        </form>
  </section>
  )
}

export default Login;