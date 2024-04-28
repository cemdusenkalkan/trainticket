// FAQ.js
import React, { useState } from 'react';
import '../FAQ.css'; // Make sure to create this CSS file

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAnswers = [
    { question: 'When can I buy a ticket?', answer: 'Tickets for all domestic trains and trains between Russia and Finland...' },
    // Add other questions and answers here
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      {questionsAnswers.map((qa, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => handleClick(index)}>
            {qa.question}
          </button>
          <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
            {qa.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
