import { FunctionComponent } from "react";
import styles from "./ContainerCardForm.module.css";
import FormContainer from "../FormContainer/FormContainer";

const ContainerCardForm: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.amountDueParent}>
            <h5 className={styles.amountDue}>Amount Due</h5>
            <h6 className={styles.invoicesAreIssued}>
              Invoices are issued between the 1st and 5th of each month and are
              due 30 days later.
            </h6>
          </div>
          <img className={styles.moreVertIcon} alt="" src="/more-vert.svg" />
        </div>
        <div className={styles.parent}>
          <h4 className={styles.h4}>$26,667.73</h4>
          <button className={styles.payNowWrapper}>
            <div className={styles.payNow}>Pay now</div>
          </button>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv}>
            <h4 className={styles.accountSpendingLimitContainer}>
              <span
                className={styles.accountSpendingLimit}
              >{`Account Spending Limit: `}</span>
              <b>$27,810.00</b>
            </h4>
            <div className={styles.groupWrapper}>
              <div className={styles.rectangleParent}>
                <div className={styles.groupChild} />
                <div className={styles.groupItem} />
              </div>
            </div>
          </div>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <h5 className={styles.spent2781000Container}>
              <span
                className={styles.accountSpendingLimit}
              >{`$26,667.73 spent / `}</span>
              <span className={styles.available}>$27,810.00 available</span>
            </h5>
          </div>
        </div>
      </div>
      <FormContainer
        propWidth="408px"
        propZIndex="1"
        propBorderRadius="unset"
        propWidth1="368px"
        propWidth2="368px"
      />
      <FormContainer
        propWidth="376px"
        propZIndex="0"
        propBorderRadius="unset"
        propWidth1="336px"
        propWidth2="336px"
      />
    </div>
  );
};

export default ContainerCardForm;
