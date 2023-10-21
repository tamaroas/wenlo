import { FunctionComponent } from 'react';
import './Footer.css';

type FooterType = {
  paymentCardExpirationDate?: string;
  cardExpirationDate?: string;
};

const Footer: FunctionComponent<FooterType> = ({
  paymentCardExpirationDate,
  cardExpirationDate,
}) => {
  return (
    <div className="footer-comp-expirationDateParent">
      <div className="footer-comp-expirationDate">{paymentCardExpirationDate}</div>
      <div className="footer-comp-wrapper">
        <div className="footer-comp-expirationDate">{cardExpirationDate}</div>
      </div>
    </div>
  );
};

export default Footer;
