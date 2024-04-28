import React, { useState } from 'react'; // Importing useState
import { useNavigate } from 'react-router-dom';
import '../TicketsList.css';

const TicketsList = () => {
  const navigate = useNavigate();

  // Creating ticket state and initial values with useState
  const [tickets, setTickets] = useState([
    { id: 1, from: 'Fatih', to: 'Beylikdüzü', departure: '08:00', arrival: '10:00' },
    { id: 2, from: 'Bakırköy', to: 'Kadıköy', departure: '09:00', arrival: '10:30' },
    { id: 3, from: 'Üsküdar', to: 'Taksim', departure: '09:30', arrival: '10:45' },
    { id: 4, from: 'Beşiktaş', to: 'Sarıyer', departure: '10:00', arrival: '11:00' },
  ]);

  // Function to navigate for ticket purchase
  const handleBuyClick = () => {
    navigate(`/payment`); // Using the dynamic route '/payment/:id' to navigate to the payment page
  };

  return (
    <div className="tickets-container">
      {tickets.map((ticket) => (
        <div key={ticket.id} className="ticket">
          <div>Departure Point: {ticket.from}</div>
          <div>Destination: {ticket.to}</div>
          <div>Departure Time: {ticket.departure}</div>
          <div>Arrival Time: {ticket.arrival}</div>
          <button onClick={() => handleBuyClick()}>Buy</button>
        </div>
      ))}
    </div>
  );
};

export default TicketsList;
