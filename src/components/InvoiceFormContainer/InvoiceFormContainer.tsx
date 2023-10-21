import { FunctionComponent } from "react";
import "./InvoiceFormContainer.css";
import PremiumPlanCard from "../PremiumPlanCard/PremiumPlanCard";
import PaymentForm from "../PaymentForm/PaymentForm";

const InvoiceFormContainer: FunctionComponent = () => {
  return (
    <div className="invoice-form-container-comp-headerParent">
      <div className="invoice-form-container-comp-header">
        <div className="invoice-form-container-comp-textAndSupportingText">
          <div className="invoice-form-container-comp-title">
            <b className="invoice-form-container-comp-text">{`Invoice `}</b>
            <div className="invoice-form-container-comp-text1">#8FB28438-0001</div>
          </div>
          <div className="invoice-form-container-comp-supportingText">
            Thank you for subsription plan!
          </div>
        </div>
        <div className="invoice-form-container-comp-button">
          <img className="invoice-form-container-comp-xCloseIcon" alt="" src="images/xclose.svg" />
        </div>
      </div>
      <PremiumPlanCard />
      <PaymentForm />
      <button className="invoice-form-container-comp-cancelParent">
        <div className="invoice-form-container-comp-cancel">Cancel</div>
        <div className="invoice-form-container-comp-download01Parent">
          <img className="invoice-form-container-comp-download01Icon" alt="" src="images/download01.svg" />
          <div className="invoice-form-container-comp-downloadPdf">Download PDF</div>
        </div>
      </button>
    </div>
  );
};

export default InvoiceFormContainer;
