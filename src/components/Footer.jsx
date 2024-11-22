import React from 'react';
import { Link } from 'react-router-dom';

import Stack from "react-bootstrap/Stack";

const Footer = () => {
  return (
    <Stack direction='horizontal' 
    gap={4} id='footer' 
    className='d-flex align-content-md-end justify-content-center mt-4'>
      <p>Copyright 2024</p>
      <p>
        <Link>Contact Us</Link>
      </p>
    </Stack>
  )
}

export default Footer;