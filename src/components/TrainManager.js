import React, { useState } from 'react';
import '../admin.css';

const TrainManager = () => {
  const [trains, setTrains] = useState([
    { id: 1, name: 'Express', route: 'New York - Washington', status: 'Active' },
    { id: 2, name: 'Eurostar', route: 'London - Paris', status: 'Active' },
    { id: 3, name: 'Bullet Train', route: 'Tokyo - Osaka', status: 'Inactive' }
  ]);

  const handleToggleTrainStatus = (trainId) => {
    setTrains(trains.map(train => {
      if (train.id === trainId) {
        return { ...train, status: train.status === 'Active' ? 'Inactive' : 'Active' };
      }
      return train;
    }));
  };

  return (
    <div className="train-manager">
      <h2>Train Manager</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Route</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train) => (
            <tr key={train.id}>
              <td>{train.id}</td>
              <td>{train.name}</td>
              <td>{train.route}</td>
              <td>{train.status}</td>
              <td>
                <button onClick={() => handleToggleTrainStatus(train.id)}>
                  {train.status === 'Active' ? 'Deactivate' : 'Activate'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainManager;
