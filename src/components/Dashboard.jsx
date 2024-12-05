import React from 'react';
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Dashboard = () => {
  
  return (
    <Container className='d-flex align-content-center justify-content-center'>
      <Row className='justify-content-sm-center'>
        <Col xs="auto">Dashboard</Col>
      </Row>
    </Container>
  )
}

export default Dashboard