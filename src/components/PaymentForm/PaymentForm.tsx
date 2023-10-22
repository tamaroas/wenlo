import { FunctionComponent } from "react";
import styles from "./PaymentForm.module.css";

const PaymentForm: FunctionComponent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.group}>
        <div className={styles.items}>
          <div className={styles.item}>
            <div className={styles.itemName}>
              <div className={styles.text}>Premium Plan</div>
              <div className={styles.textGroup}>
                <div className={styles.supportingText}>Subsription Plan</div>
              </div>
            </div>
            <div className={styles.itemName1}>
              <div className={styles.text1}>$14.99</div>
              <div className={styles.textGroup1}>
                <div className={styles.supportingText}>User (1)</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.summary}>
          <div className={styles.item1}>
            <div className={styles.text2}>Subtotal</div>
            <div className={styles.text3}>$14.99</div>
          </div>
          <div className={styles.item1}>
            <div className={styles.text2}>Sales Tax (3%)</div>
            <div className={styles.text3}>$4.49</div>
          </div>
          <div className={styles.item3}>
            <div className={styles.text6}>Total</div>
            <div className={styles.text7}>$20.48</div>
          </div>
        </div>
      </div>
      <div className={styles.alert}>
        <img className={styles.icon} alt="" src="/icon.svg" />
        <div className={styles.text8}>
          <div className={styles.text9}>
            Past due: You will pay $749.97 today. This includes both the current
            and past due dates. It's because you haven't paid your previous
            bills.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
