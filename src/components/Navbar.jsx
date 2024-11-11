import React from 'react'
import { Link } from 'react-router-dom';
import Logout from './Logout';

import Nav from "react-bootstrap/Nav";
import Stack from 'react-bootstrap/Stack';

const Navbar = () => {
  return (
    <>
      <Nav variant='pills' fill defaultActiveKey={"/home"}>
        <Nav.Item>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href='/tickets'>Tickets</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href='/users'>Users</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href='/admins'>Admins</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href='/faq'>FAQ</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link>
            <Logout />
          </Nav.Link>
        </Nav.Item>

      </Nav>
    </>
  )
}

export default Navbar;

{/* <nav>
<Stack direction='horizontal' gap={5}>
<Link to={"/"}>Home</Link>
  <Stack direction='horizontal' gap={5}>
    <Link to={"/tickets"}>Tickets</Link>
    <Link to={"/users"}>Users</Link>
    <Link to={"/admins"}>Admins</Link>
    <Link to={"/faq"}>FAQ</Link>
  </Stack>
  <Logout />
</Stack>
</nav> 

        <Nav.Item>
          <Nav as={"ul"}>
            <Nav.Item as={"li"}>
              <Nav.Link href='/tickets'>Tickets</Nav.Link>
            </Nav.Item>

            <Nav.Item as={"li"}>
              <Nav.Link href='/users'>Users</Nav.Link>
            </Nav.Item>

            <Nav.Item as={"li"}>
              <Nav.Link href='/admins'>Admins</Nav.Link>
            </Nav.Item>

            <Nav.Item as={"li"}>
              <Nav.Link href='/faq'>FAQ</Nav.Link>
            </Nav.Item>
          </Nav>
        </Nav.Item>

*/}
