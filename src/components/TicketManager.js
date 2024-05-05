import React, { useState } from 'react';
import '../admin.css';

const TicketManager = () => {
  const [tickets, setTickets] = useState([
    { id: 1, passengerName: 'John Doe', destination: 'New York', status: 'Pending' },
    { id: 2, passengerName: 'Jane Smith', destination: 'London', status: 'Confirmed' },
    { id: 3, passengerName: 'Emma Brown', destination: 'Paris', status: 'Pending' }
  ]);

  const handleCancelTicket = (ticketId) => {
    setTickets(tickets.map(ticket => {
      if (ticket.id === ticketId) {
        return { ...ticket, status: 'Cancelled' };
      }
      return ticket;
    }));
  };

  return (
    <div className="ticket-manager">
      <h2>Ticket Manager</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Passenger Name</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.passengerName}</td>
              <td>{ticket.destination}</td>
              <td>{ticket.status}</td>
              <td>
                {ticket.status === 'Pending' && (
                  <button onClick={() => handleCancelTicket(ticket.id)}>Cancel</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketManager;
