import { FunctionComponent } from "react";
import styles from "./PremiumPlanCard.module.css";

const PremiumPlanCard: FunctionComponent = () => {
  return (
    <div className={styles.itemGroup}>
      <div className={styles.item}>
        <div className={styles.text}>Customer</div>
        <div className={styles.text1}>Gabriela Hudges</div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>Email</div>
        <div className={styles.text1}>Gabrielahudges@gmail.com</div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>Receipt #</div>
        <div className={styles.text1}>901839810</div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>Date Paid</div>
        <div className={styles.text1}>April 24, 2023</div>
      </div>
      <div className={styles.item}>
        <div className={styles.text8}>Payment Method</div>
        <div className={styles.text1}>Visacard</div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>Card Number</div>
        <div className={styles.text1}>**** **** **** 5645</div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>Type Plan</div>
        <div className={styles.text1}>Monthly</div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>Plan</div>
        <div className={styles.text1}>Premium Plan</div>
      </div>
    </div>
  );
};

export default PremiumPlanCard;
