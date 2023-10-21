import { FunctionComponent } from "react";
import "./PaymentForm.css";

const PaymentForm: FunctionComponent = () => {
  return (
    <div className="payment-form-comp-content">
      <div className="payment-form-comp-group">
        <div className="payment-form-comp-items">
          <div className="payment-form-comp-item">
            <div className="payment-form-comp-itemName">
              <div className="payment-form-comp-text">Premium Plan</div>
              <div className="payment-form-comp-textGroup">
                <div className="payment-form-comp-supportingText">Subsription Plan</div>
              </div>
            </div>
            <div className="payment-form-comp-itemName1">
              <div className="payment-form-comp-text1">$14.99</div>
              <div className="payment-form-comp-textGroup1">
                <div className="payment-form-comp-supportingText">User (1)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="payment-form-comp-divider" />
        <div className="payment-form-comp-summary">
          <div className="payment-form-comp-item1">
            <div className="payment-form-comp-text2">Subtotal</div>
            <div className="payment-form-comp-text3">$14.99</div>
          </div>
          <div className="payment-form-comp-item1">
            <div className="payment-form-comp-text2">Sales Tax (3%)</div>
            <div className="payment-form-comp-text3">$4.49</div>
          </div>
          <div className="payment-form-comp-item3">
            <div className="payment-form-comp-text6">Total</div>
            <div className="payment-form-comp-text7">$20.48</div>
          </div>
        </div>
      </div>
      <div className="payment-form-comp-alert">
        <img className="payment-form-comp-icon" alt="" src="images/icon.svg" />
        <div className="payment-form-comp-text8">
          <div className="payment-form-comp-text9">
            Past due: You will pay $749.97 today. This includes both the current
            and past due dates. It's because you haven't paid your previous
            bills.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
