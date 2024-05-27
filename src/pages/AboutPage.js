import React from 'react';
import '../AboutPage.css';
import founder1 from '../img/resim1.jpg';


const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>Hakkımızda</h1>
        <p>
          TrainTrack olarak sizlere en iyi tren yolculuğu deneyimini sunmak için buradayız.
          Misyonumuz, yolculuklarınızı keyifli ve güvenli hale getirmektir. Bizimle yolculuk
          yapmayı seçtiğiniz için teşekkür ederiz!
        </p>
      </div>
      <div className="founders-container">
        <div className="founder">
          <img src="resim1.jpg" alt="Founder 1" className="founder-image" />
          <h2>Kurucu 1</h2>
          <p>Kendim hakkında yazı 1.</p>
        </div>
        <div className="founder">
          <img src="resim2.jpg" alt="Founder 2" className="founder-image" />
          <h2>Kurucu 2</h2>
          <p>Kendim hakkında yazı 2.</p>
        </div>
        <div className="founder">
          <img src="resim3.jpg" alt="Founder 3" className="founder-image" />
          <h2>Kurucu 3</h2>
          <p>Kendim hakkında yazı 3.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
