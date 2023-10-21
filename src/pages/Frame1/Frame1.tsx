import { FunctionComponent } from "react";
import "./Frame1.css";
import PremiumPlanCard from "../../components/PremiumPlanCard/PremiumPlanCard";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import InvoiceContainer from "../../components/InvoiceContainer/InvoiceContainer";

const Frame1: FunctionComponent = () => {
  return (
    <div className="frame-1-headerParent">
      <InvoiceContainer
        requestStatusMessage="images/new-releases.svg"
        requestStatusIcon="Your request is approved!"
        buttonColor="#147a3d"
      />
      <PremiumPlanCard />
      <PaymentForm />
      <div className="frame-1-cancelParent">
        <div className="frame-1-cancel">Cancel</div>
        <div className="frame-1-download01Parent">
          <img className="frame-1-download01Icon" alt="" src="images/download01.svg" />
          <div className="frame-1-cancel">Download PDF</div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
