import { FunctionComponent } from "react";
import styles from "./ContainerWithFormAndButtons.module.css";
import FormContainer from "../FormContainer/FormContainer";

const ContainerWithFormAndButtons: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.amountDueParent}>
            <div className={styles.amountDue}>Amount Due</div>
            <div className={styles.invoicesAreIssued}>
              Invoices are issued between the 1st and 5th of each month and are
              due 30 days later.
            </div>
          </div>
          <img className={styles.moreVertIcon} alt="" src="/more-vert.svg" />
        </div>
        <div className={styles.parent}>
          <b className={styles.b}>$26,667.73</b>
          <button className={styles.payNowWrapper}>
            <div className={styles.payNow}>Pay now</div>
          </button>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv}>
            <div className={styles.b}>
              <span
                className={styles.accountSpendingLimit}
              >{`Account Spending Limit: `}</span>
              <b>$27,810.00</b>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.rectangleWrapper}>
                <div className={styles.frameChild} />
              </div>
            </div>
          </div>
          <div className={styles.ellipseParent}>
            <div className={styles.frameItem} />
            <div className={styles.spent2781000Container}>
              <span
                className={styles.accountSpendingLimit}
              >{`$26,667.73 spent / `}</span>
              <span className={styles.available}>$27,810.00 available</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.frameContainer}>
          <div className={styles.amountDueParent}>
            <div className={styles.amountDue}>Amount Due</div>
            <div className={styles.invoicesAreIssued}>
              Invoices are issued between the 1st and 5th of each month and are
              due 30 days later.
            </div>
          </div>
          <img className={styles.moreVertIcon} alt="" src="/more-vert.svg" />
        </div>
        <div className={styles.group}>
          <b className={styles.b}>$26,667.73</b>
          <div className={styles.payNowContainer}>
            <div className={styles.payNow1}>Pay now</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv}>
            <div className={styles.b}>
              <span
                className={styles.accountSpendingLimit}
              >{`Account Spending Limit: `}</span>
              <b>$27,810.00</b>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameChild} />
              </div>
            </div>
          </div>
          <div className={styles.ellipseParent}>
            <div className={styles.frameItem} />
            <div className={styles.spent2781000Container}>
              <span
                className={styles.accountSpendingLimit}
              >{`$26,667.73 spent / `}</span>
              <span className={styles.available}>$27,810.00 available</span>
            </div>
          </div>
        </div>
      </div>
      <FormContainer />
    </div>
  );
};

export default ContainerWithFormAndButtons;
