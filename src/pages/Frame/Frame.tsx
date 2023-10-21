import { FunctionComponent } from 'react';
import './Frame.css';
import InvoiceContainer from '../../components/InvoiceContainer/InvoiceContainer';
import PremiumPlanCard from '../../components/PremiumPlanCard/PremiumPlanCard';
import PaymentForm from '../../components/PaymentForm/PaymentForm';

const Frame: FunctionComponent = () => {
  return (
    <div className="frame-headerParent">
      <InvoiceContainer
        requestStatusMessage="images/emergency-home.svg"
        requestStatusIcon="Your request is rejected"
      />
      <PremiumPlanCard />
      <PaymentForm />
      <div className="frame-cancelParent">
        <div className="frame-cancel">Cancel</div>
        <div className="frame-download01Parent">
          <img
            className="frame-download01Icon"
            alt=""
            src="images/download01.svg"
          />
          <div className="frame-cancel">Download PDF</div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
