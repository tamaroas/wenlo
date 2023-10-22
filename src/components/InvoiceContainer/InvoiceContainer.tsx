import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./InvoiceContainer.module.css";

type InvoiceContainerType = {
  requestStatusMessage?: string;
  requestStatusIcon?: string;

  /** Style props */
  buttonColor?: CSSProperties["color"];
};

const InvoiceContainer: FunctionComponent<InvoiceContainerType> = ({
  requestStatusMessage,
  requestStatusIcon,
  buttonColor,
}) => {
  const supportingTextStyle: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  return (
    <div className={styles.header}>
      <div className={styles.textAndSupportingText}>
        <div className={styles.title}>
          <b className={styles.text}>{`Invoice `}</b>
          <div className={styles.text1}>#8FB28438-0001</div>
        </div>
        <div className={styles.emergencyHomeParent}>
          <img
            className={styles.emergencyHomeIcon}
            alt=""
            src={requestStatusMessage}
          />
          <div className={styles.supportingText} style={supportingTextStyle}>
            {requestStatusIcon}
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <img className={styles.xCloseIcon} alt="" src="/xclose.svg" />
      </div>
    </div>
  );
};

export default InvoiceContainer;
