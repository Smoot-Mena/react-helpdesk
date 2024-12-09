import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar';

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { IoReturnDownBack } from "react-icons/io5";

const EditTicket = ( {ticket} ) => {
  const details = useLocation();
  const navigate = useNavigate();

  ticket = details.state.ticket;

  return (
    <section>
      <NavBar />
      {ticket && (
      <Form style={{
        width: "80vw", 
        margin: "20vh auto", 
        border: "1px solid lightgrey",
        padding: "2vh 2vw"}}>
        <Row className='mb-4'>
          <Form.Group as={Col} controlId='formUserName'>
            <Form.Label>User Name</Form.Label>
            <Form.Control type='text' defaultValue={ticket.user} disabled/>
          </Form.Group>

          <Form.Group as={Col} controlId='formEmail'>
            <Form.Label>User Email</Form.Label>
            <Form.Control type='email' defaultValue={ticket.contact} readOnly/>
          </Form.Group>

          <Button  
          variant='danger'
          style={{width: "75px", height: "40px", alignSelf: "end", margin: "0 1vw"}}
          onClick={() => {navigate("/tickets")}}>
            <IoReturnDownBack style={{width: "25px", height: "25px"}} />
          </Button>

          {/* <Form.Group as={Col} controlId='formReturnButton'>
            <Button variant='danger'
            style={{alignSelf: "end"}}
            onClick={() => {navigate("/tickets")}}>
              <IoReturnDownBack style={{width: "25px", height: "25px"}} />
            </Button>
          </Form.Group> */}
        </Row>

        <Row className='mb-4'>
          <Form.Group as={Col} controlId='formTicketNumber'>
            <Form.Label>Ticket Number</Form.Label>
            <Form.Control value={ticket.ticketNumber} readOnly/>
          </Form.Group>

          <Form.Group as={Col} controlId='formTicketPriority'>
            <Form.Label>Ticket Priority</Form.Label>
            <Form.Control value={ticket.priority} readOnly/>
          </Form.Group>

          <Form.Group as={Col} controlId='formTicketDate'>
            <Form.Label>Ticket Creation Date</Form.Label>
            <Form.Control defaultValue={ticket.dateOpened} disabled/>
          </Form.Group>
        </Row>

        <Row className='mb-4'>
          <Form.Group as={Col} controlId='formSubject'>
            <Form.Label>Subject</Form.Label>
            <Form.Control type='text' defaultValue={ticket.subject} readOnly/>
          </Form.Group>
        </Row>

        <Row className='mb-4'>
          <Form.Group as={Col} controlId='formDetails'>
            <Form.Label>Ticket Details</Form.Label>
            <Form.Control as='textarea' defaultValue={ticket.body} readOnly/>
          </Form.Group>
        </Row>

        <Row className='mb-4'>
          <Form.Group as={Col} controlId='formCategory'>
            <Form.Label>Category</Form.Label>
            <Form.Select defaultValue={ticket.category}>
              <option value="email">Email</option>
              <option value="excel">Excel</option>
              <option value="word">Word</option>
              <option value="powerpoint">PowerPoint</option>
              <option value="password reset">Password Reset</option>
              <option value="hardware request">Hardware Request</option>
              <option value="software request">Software Request</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId='formStatus'>
            <Form.Label>Status</Form.Label>
            <Form.Select defaultValue={ticket.status}>
              <option value="open">Open</option>
              <option value="in progress">In Progress</option>
              <option value="needs approval">Needs Approval</option>
              <option value="paused">Paused</option>
              <option value="closed">Closed</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className='mb-4'>
          <Form.Group as={Col} controlId='formNotes'>
            <Form.Label>Notes</Form.Label>
            <Form.Control as='textarea' defaultValue={ticket.notes}/>
          </Form.Group>

          <Button  
          variant='primary'
          style={{width: "75px", height: "40px", alignSelf: "end", margin: "0 1vw"}}
          onClick={() => {navigate("/tickets")}}>
            Save
          </Button>
        </Row>
      </Form>)}
    </section>
  )
}

export default EditTicket;