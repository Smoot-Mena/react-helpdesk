import React from 'react';
import { useLocation } from 'react-router-dom';

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Ticket = ( {ticket} ) => {
  const details = useLocation();

  ticket = details.state.ticket;

  // console.log(ticket);
  return (
    <section>
      {ticket && (
      <Form>
        <Row className='mb-4'>
          <Form.Group as={Col} controlId='formUserName'>
            <Form.Label>User Name</Form.Label>
            <Form.Control type='text' defaultValue={ticket.user} disabled/>
          </Form.Group>

          <Form.Group as={Col} controlId='formEmail'>
            <Form.Label>User Email</Form.Label>
            <Form.Control type='email' defaultValue={ticket.contact} readOnly/>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} controlId='formTicketNumber'>
            <Form.Label>Ticket Number</Form.Label>
            <Form.Control value={ticket.ticketNumber} readOnly/>
          </Form.Group>

          <Form.Group as={Col} controlId='formTicketPriority'>
            <Form.Label>Ticket Priority</Form.Label>
            <Form.Control value={ticket.priority} readOnly/>
          </Form.Group>

          <Form.Group as={Col} controlId='formSubject'>
            <Form.Label>Subject</Form.Label>
            <Form.Control type='text' defaultValue={ticket.subject} readOnly/>
          </Form.Group>
        </Row>
      </Form>)}
    </section>
  )
}

export default Ticket;