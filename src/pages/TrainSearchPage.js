import React, { useState } from 'react';

function TrainSearch({ onSearch }) {
  const [ticketNumber, setTicketNumber] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ ticketNumber, lastName });
  };

  return (
    <div>
      <h2>Train Ticket Search</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="ticketNumber">Ticket Number:</label>
          <input 
            type="text" 
            id="ticketNumber" 
            value={ticketNumber} 
            onChange={(e) => setTicketNumber(e.target.value)} 
            placeholder="Ticket Number" 
            required 
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input 
            type="text" 
            id="lastName" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            placeholder="Last Name" 
            required 
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default TrainSearch;