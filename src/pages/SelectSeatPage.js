import React, { useState } from 'react';
import '../SelectSeat.css';

const SelectSeatPage = () => {
    const createSeats = () => {
        let seats = [];
        for (let row = 0; row < 4; row++) {
          for (let num = 1; num <= 10; num++) {
            seats.push({ id: `${row + 1}${String.fromCharCode(65 + num - 1)}`, occupied: false });
          }
        }
        return seats;
      };

  const [seats, setSeats] = useState(createSeats());

  const toggleSeatSelection = (id) => {
    const newSeats = seats.map(seat => {
      if (seat.id === id) {
        return { ...seat, occupied: !seat.occupied };
      }
      return seat;
    });
    setSeats(newSeats);
  };

  return (
    <div className="train-car">
      <div className="train-container">
        {seats.map((seat, index) => (
          <button
            key={seat.id}
            className={`seat ${seat.occupied ? 'occupied' : ''}`}
            onClick={() => toggleSeatSelection(seat.id)}
            disabled={seat.occupied}
          >
            {seat.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SelectSeatPage;
