// FAQ.js
import React, { useState } from 'react';
import '../FAQ.css'; // Make sure to create this CSS file

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAnswers = [
    { question: 'When can I buy a ticket?', answer: 'Whenever you want brother.' },
    { question: 'Cem Düşenkalkan Kimdir', answer: 'Komedinin ta kendisidir' },
    { question: 'Tren Bileti Gelcek Var mı', answer: 'Ben gelirim ' },
    { question: 'Nasıl Bilet Alınır?', answer: 'Tarih ve yön seçip çıkan hatlardan satın alabilirsiniz.' },
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
