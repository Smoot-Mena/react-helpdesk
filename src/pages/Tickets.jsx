import React, { useState, useMemo } from 'react';
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
  /**Variables**/
  const [tickets, setTickets] = useState(defaultTickets);
  const [input, setInput] = useState({
    filterUser: "",
    filterSubject: ""
  });
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

  /**Functions**/
  // Filters tickets based on input
  const filteredTickets = useMemo(() => {
    return tickets.filter((ticket) => {
      const matchesUser = ticket.user.toLowerCase().includes(input.filterUser.toLowerCase());
      const matchesSubject = ticket.subject.toLowerCase().includes(input.filterSubject.toLowerCase());
      return matchesUser && matchesSubject;
    });
  }, [tickets, input]);

  // Handles input changes for filtering
  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  // Sorts tickets based on the given key (name in JSON file)
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    // Maps out sorted tickets
    const sortedTickets = [...tickets].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });

    setTickets(sortedTickets);
    setSortConfig({ key, direction });
  };

  return (
    <article id='ticket-page'>
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

          <Row className='mb-4'>
            <Stack direction='horizontal' gap={3}>
              <label>Sort By: </label>
              <Button variant='outline-primary' onClick={() => handleSort("ticketNumber")}>Ticket #</Button>
              <Button variant='outline-primary' onClick={() => handleSort("user")}>User's Name</Button>
              <Button variant='outline-primary' onClick={() => handleSort("priority")}>Priority</Button>
              <Button variant='outline-primary' onClick={() => handleSort("status")}>Status</Button>
            </Stack>
          </Row>

          <Row className='me-1'>
            <Button className='ms-auto' style={{width: "max-content"}}>Create New Ticket</Button>
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
              {tickets && filteredTickets.map((ticket) => (
                <tr key={ticket.ticketNumber}>
                  <td>
                    <Link
                    state={ {ticket: ticket} }
                    to={`/tickets/${ticket.ticketNumber}`}>{ticket.ticketNumber}</Link>
                  </td>
                  <td>{ticket.user}</td>
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
    </article>
  )
}

export default Tickets;

{/* <tbody>
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
            </tbody> */}