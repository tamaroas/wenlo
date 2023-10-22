import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

type FooterType = {
  paymentCardExpirationDate?: string;
  cardExpirationDate?: string;
};

const Footer: FunctionComponent<FooterType> = ({
  paymentCardExpirationDate,
  cardExpirationDate,
}) => {
  return (
    <div className={styles.expirationDateParent}>
      <div className={styles.expirationDate}>{paymentCardExpirationDate}</div>
      <div className={styles.wrapper}>
        <div className={styles.expirationDate}>{cardExpirationDate}</div>
      </div>
    </div>
  );
};

export default Footer;
