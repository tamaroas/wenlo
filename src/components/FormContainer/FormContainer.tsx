import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FormContainer.module.css";

type FormContainerType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propZIndex?: CSSProperties["zIndex"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  propWidth,
  propZIndex,
  propBorderRadius,
  propWidth1,
  propWidth2,
}) => {
  const frameDiv7Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      zIndex: propZIndex,
    };
  }, [propWidth, propZIndex]);

  const frameDiv8Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      width: propWidth1,
    };
  }, [propBorderRadius, propWidth1]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className={styles.frameParent} style={frameDiv7Style}>
      <div className={styles.frameGroup}>
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
        <div className={styles.payNowWrapper}>
          <div className={styles.payNow}>Pay now</div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameContainer}>
          <div className={styles.b}>
            <span
              className={styles.accountSpendingLimit}
            >{`Account Spending Limit: `}</span>
            <b>$27,810.00</b>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.rectangleParent} style={frameDiv8Style}>
              <div className={styles.frameChild} style={rectangleDivStyle} />
              <div className={styles.frameItem} />
            </div>
          </div>
        </div>
        <div className={styles.ellipseParent}>
          <div className={styles.frameInner} />
          <div className={styles.spent2781000Container}>
            <span
              className={styles.accountSpendingLimit}
            >{`$26,667.73 spent / `}</span>
            <span className={styles.available}>$27,810.00 available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
