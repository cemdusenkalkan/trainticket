// At the top of your StepsToBookTickets.js file
import IconSelectRoute from '../icon_01.svg'; // Replace with your actual icon path
import IconBuyTickets from '../icon_02.svg'; // Replace with your actual icon path
import IconCheckTickets from '../icon_03.svg'; // Replace with your actual icon path

// In your StepsToBookTickets component
const StepsToBookTickets = () => {
  return (
    <div className="steps-container">
      <div className="step">
        <img src={IconSelectRoute} alt="Select Route" />
        <h3>Rota Seç</h3>
        <p>Yolculuk yapmak istediğiniz hatlar arasında seçim yapın.</p>
      </div>
      <div className="step">
        <img src={IconBuyTickets} alt="Buy Tickets" />
        <h3>Bilet Satın Al</h3>
        <p>Bilet satın alma sayfasına gidin ve biletinizi alın.</p>
      </div>
      <div className="step">
        <img src={IconCheckTickets} alt="Check Tickets" />
        <h3>Biletinizi Kontrol Edin</h3>
        <p>Size verilen PNR numarası ile biletinizi sorgulayın. İyi Yolculuklar!</p>
      </div>
    </div>
  );
};

export default StepsToBookTickets;
