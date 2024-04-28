import React from 'react';
import NavigationBar from '../components/NavigationBar';
import LoginButton from '../components/LoginButton';
import TicketPurchase from '../components/TicketPurchase';

const HomePage = () => {
  return (
    <div className="home-page">
      <NavigationBar />
      <TicketPurchase />
      {/* ... other components or content ... */}
    </div>
  );
};

export default HomePage;
