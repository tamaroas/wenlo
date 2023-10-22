import { FunctionComponent } from "react";
import InvoiceContainer from "../../components/InvoiceContainer/InvoiceContainer";
import PremiumPlanCard from "../../components/PremiumPlanCard/PremiumPlanCard";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import styles from "./Frame1.module.css";

const Frame1: FunctionComponent = () => {
  return (
    <div className={styles.headerParent}>
      <InvoiceContainer
        requestStatusMessage="/new-releases.svg"
        requestStatusIcon="Your request is approved!"
        buttonColor="#147a3d"
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

export default Frame1;
