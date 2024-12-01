import React, { useState } from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import defaultTickets from "../json/tickets.json";
import useCapitalize from '../hooks/useCapitalize';

const Tickets = () => {

  let [tickets, setTickets] = useState(defaultTickets);
  let [input, setInput] = useState({
    filterUser: "",
    filterSubject: ""
  });

  const handleChange = (event) => {
    setInput({
      ...input, [event.target.name]: event.target.value
    });
  };

  return (
    <section id='ticket-page'>
        <NavBar />

        <Form style={{margin: "20vh 2vw 5vh"}}>
          <Row className='mb-4'>
            <Form.Group as={Col}>
              <Form.Label>Filter By User: </Form.Label>
              <Form.Control type='text' value={input.filterUser} name='filterUser' onChange={handleChange}/>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Filter By Subject: </Form.Label>
              <Form.Control type='text' value={input.filterSubject} name='filterSubject' onChange={handleChange}/>
            </Form.Group>

          </Row>

          <Row>
            <Stack direction='horizontal' gap={3}>
              <label>Sort By: </label>
              <Button variant='outline-primary'>Ticket #</Button>
              <Button variant='outline-primary'>User's Name</Button>
              <Button variant='outline-primary'>Priority</Button>
              <Button variant='outline-primary'>Status</Button>
            </Stack>

          </Row>
        </Form>

        <Table id='ticket-list' responsive="sm"
        striped 
        bordered 
        hover
        style={{width: "80vw", margin: "2vh auto 1vh"}}>
            <thead>
              <tr>
                <th>Ticket Number</th>
                <th>User's Name</th>
                <th>User's Contact</th>
                <th>Subject</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Date Opened</th>
                <th>Date Closed</th>
              </tr>
            </thead>
            <tbody>
              {tickets && tickets.map((ticket) => (
                <tr key={ticket.ticketNumber}>
                  <td>
                    <Link
                    state={ {ticket: ticket} }
                    to={`/tickets/${ticket.ticketNumber}`}>{ticket.ticketNumber}</Link>
                  </td>
                  <td>
                    <Link>{ticket.user}</Link>
                  </td>
                  <td>{ticket.contact}</td>
                  <td>{ticket.subject}</td>
                  <td>{ticket.priority}</td>
                  <td>{useCapitalize(ticket.status)}</td>
                  <td>{ticket.dateOpened}</td>
                  <td>{ticket.status === "closed" ? ticket.dateOpened : "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Footer />
    </section>
  )
}

export default Tickets;