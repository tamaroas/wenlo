import { FunctionComponent } from "react";
import styles from "./InvoiceFormContainer.module.css";
import PremiumPlanCard from "../PremiumPlanCard/PremiumPlanCard";
import PaymentForm from "../PaymentForm/PaymentForm";

const InvoiceFormContainer: FunctionComponent = () => {
  return (
    <div className={styles.headerParent}>
      <div className={styles.header}>
        <div className={styles.textAndSupportingText}>
          <div className={styles.title}>
            <b className={styles.text}>{`Invoice `}</b>
            <div className={styles.text1}>#8FB28438-0001</div>
          </div>
          <div className={styles.supportingText}>
            Thank you for subsription plan!
          </div>
        </div>
        <div className={styles.button}>
          <img className={styles.xCloseIcon} alt="" src="/xclose.svg" />
        </div>
      </div>
      <PremiumPlanCard />
      <PaymentForm />
      <button className={styles.cancelParent}>
        <div className={styles.cancel}>Cancel</div>
        <div className={styles.download01Parent}>
          <img className={styles.download01Icon} alt="" src="/download01.svg" />
          <div className={styles.downloadPdf}>Download PDF</div>
        </div>
      </button>
    </div>
  );
};

export default InvoiceFormContainer;
