import React from 'react';
// import useLogin from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import useUserInfo from '../zustand/useUserInfo';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {

    // const { login } = useLogin();
    const { userEmail, setUserEmail, setUserPassword } = useUserInfo();
    const navigate = useNavigate();
    const header = "React Helpdesk";
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
    //   login(email, password);
      localStorage.setItem("login-email", userEmail);
      navigate("/");
    }

  return (
    <Container id='login-window'>

      <Row className='justify-content-md-center mt-5 mx-4'>
        <Col xs="auto">
          <header style={{fontSize: "1.5em", fontWeight: "bold"}}>{header.toUpperCase()}
            <span style={{color: "dodgerblue"}}> {"Login".toUpperCase()}</span>
          </header>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit} name='login'>
        <Form.Group className='mb-3 mx-3 mt-5' controlId='email'>
            <Form.Label>Email Address: </Form.Label>
            <Form.Control type='email'
            onChange={(event) => setUserEmail(event.target.value)}
            required/>
            <Form.Text className='text-muted'>Enter your email address above</Form.Text>
        </Form.Group>

          <Form.Group className='mb-4 mx-3' controlId='password'>
            <Form.Label>Password: </Form.Label>
            <Form.Control 
            type='password' 
            minLength={6} onChange={(event) => setUserPassword(event.target.value)}
            required/>
            <Form.Text>Type in your password above</Form.Text>
          </Form.Group>

          <Button className='mx-3' type='submit'>
            Login
          </Button>
      </Form>
      
    </Container>
  )
}

export default Login;

{/* <section id='login-window'>
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
</section> */}
