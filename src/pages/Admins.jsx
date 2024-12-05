import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { useContext } from 'react';
import UserContext from '../context/UserContext';


const Admins = () => {

  const { userEmail, 
    userPassword,
    setUserPassword, 
    supportLevel, 
    setSupportLevel } = useContext(UserContext);

  return (
    <section>
      <NavBar />

      <Form style={{margin: "20vh 2vw 5vh"}}>

        <Row className='mb-4'>
          <Form.Group as={Col}>
            <Form.Label>Name: </Form.Label>
            <Form.Control type='text' />
            <Form.Text className='text-muted'>Enter your name here</Form.Text>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Email: </Form.Label>
            <Form.Control type='email' defaultValue={userEmail} readOnly/>
            <Form.Text className='text-muted'>This is your login email</Form.Text>
          </Form.Group>
        </Row>

        <Row>
          <Stack direction='horizontal'>
            <Form.Group>
              <Form.Label>Support Level: </Form.Label>
              <Form.Control type='number' 
              defaultValue={supportLevel} 
              max={5} min={1} />
            </Form.Group>

            <Button style={{margin: "0 auto", 
              width: "max-content", 
              height: "max-content",
              alignSelf: "end"}}>
                Save
            </Button>
          </Stack>
        </Row>

      </Form>

      <Footer />
    </section>
  )
}

export default Admins;