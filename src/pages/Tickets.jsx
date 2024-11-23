import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import Table from "react-bootstrap/Table";

import defaultTickets from "../json/tickets.json";

const Tickets = () => {
  return (
    <section id='ticket-page'>
        <NavBar />
        <Table id='ticket-list' responsive="sm" 
        striped 
        bordered 
        hover
        // className='mt-5'
        style={{width: "80vw", margin: "11vh auto"}}>
            <thead>
              <tr>
                <th>Ticket Number</th>
                <th>User's Name</th>
                <th>User's Contact</th>
                <th>Subject</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Date Opened</th>
              </tr>
            </thead>
            <tbody>
              {defaultTickets && defaultTickets.map((ticket) => (
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
                  <td>{ticket.status}</td>
                  <td>{ticket.dateOpened}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Footer />
    </section>
  )
}

export default Tickets;