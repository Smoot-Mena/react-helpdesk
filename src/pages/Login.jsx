import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {

    const { userEmail, setUserEmail, userPassword, setUserPassword } = useContext(UserContext);
    const navigate = useNavigate();
    const header = "React Helpdesk";
  
    const handleChange = (event) => {
      const { name, value } = event.target;

      name === "userEmail" ? setUserEmail(value) : setUserPassword(value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
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
        <Form.Group className='mb-3 mx-3 mt-5 mw-vw-50' controlId='email'>
            <Form.Label>Email Address: </Form.Label>
            <Form.Control type='email'
            name='userEmail'
            value={userEmail}
            onChange={handleChange}
            required
            className='bg-primary-subtle'/>
            <Form.Text className='text-muted'>Enter your email address above</Form.Text>
        </Form.Group>

          <Form.Group className='mb-4 mx-3' controlId='password'>
            <Form.Label>Password: </Form.Label>
            <Form.Control 
            type='password'
            name='userPassword'
            value={userPassword} 
            minLength={6} onChange={handleChange}
            required
            className='bg-primary-subtle'/>
            <Form.Text>Type in your password above</Form.Text>
          </Form.Group>

          <Button type='submit'
          style={{margin: "0 35vw 10vh"}}>
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
