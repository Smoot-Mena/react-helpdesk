import React from 'react'
import { Link } from 'react-router-dom';
import Logout from './Logout';

const Navbar = () => {
  return (
    <nav>
        <Link to={"/"}>Home</Link>
        <ul>
            <li><Link to={"/tickets"}>Tickets</Link></li>
            <li><Link to={"/users"}>Users</Link></li>
            <li><Link to={"/admins"}>Admins</Link></li>
            <li><Link to={"/faq"}>FAQ</Link></li>
        </ul>
        <Logout />
    </nav>
  )
}

export default Navbar;