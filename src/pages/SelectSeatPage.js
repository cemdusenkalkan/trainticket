import React, { useState } from 'react';
import '../SelectSeat.css';


const SelectedSeatPage = () => {
  const renderButtons = (start, count, char) => {
    let buttons = [];
    for (let i = start; i < count; i++) {
      buttons.push(
        <button key={i} className="m-2 seat">{i + 1}{char}</button>
      );
    }
    return buttons;
  };



  return (
    <div className="bt-container mt-5">
      <div className="row justify-content-center">
        <div className="col-auto">
          {renderButtons(0, 6, 'A')}
        </div>
        <div className="col-auto">
          {renderButtons(6, 12, 'A')}
        </div>
      </div>
      <div className="row justify-content-center mb-5">
        <div className="col-auto">
          {renderButtons(0, 6, 'B')}
        </div>
        <div className="col-auto">
          {renderButtons(6, 12, 'B')}
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-auto">
          {renderButtons(0, 6, 'C')}
        </div>
        <div className="col-auto">
          {renderButtons(6, 12, 'C')}
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-auto">
          {renderButtons(0, 6, 'D')}
        </div>
        <div className="col-auto">
          {renderButtons(6, 12, 'D')}
        </div>
      </div>
    </div>
  );
};



export default SelectedSeatPage;
