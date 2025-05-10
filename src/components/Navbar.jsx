import React from 'react'
import { Link } from 'react-router-dom';
import Logout from './Logout';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';

const NavBar = () => {

  return (
    <Navbar expand="lg" bg='primary' data-bs-theme="dark" fixed='top'>
      <Container>
        <Navbar.Brand href= "/">Home</Navbar.Brand>
        <Nav className='ms-auto'>
          <Stack direction='horizontal' gap={3}>
            <Link to={"/tickets"}>Tickets</Link>
            <Link to={"/users"}>Users</Link>
            <Link to={"/admins"}>Admins</Link>
            <Link to={"/faq"}>FAQ</Link>
            <Logout />
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar;