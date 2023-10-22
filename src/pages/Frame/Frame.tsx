import { FunctionComponent } from "react";
import InvoiceContainer from "../../components/InvoiceContainer/InvoiceContainer";
import PremiumPlanCard from "../../components/PremiumPlanCard/PremiumPlanCard";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.headerParent}>
      <InvoiceContainer
        requestStatusMessage="/emergency-home.svg"
        requestStatusIcon="Your request is rejected"
      />
      <PremiumPlanCard />
      <PaymentForm />
      <div className={styles.cancelParent}>
        <div className={styles.cancel}>Cancel</div>
        <div className={styles.download01Parent}>
          <img className={styles.download01Icon} alt="" src="/download01.svg" />
          <div className={styles.cancel}>Download PDF</div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
