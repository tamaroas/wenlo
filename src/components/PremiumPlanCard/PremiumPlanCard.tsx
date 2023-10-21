import { FunctionComponent } from 'react';
import './PremiumPlanCard.css';

const PremiumPlanCard: FunctionComponent = () => {
  return (
    <div className="premium-plan-card-comp-itemGroup">
      <div className="premium-plan-card-comp-item">
        <div className="premium-plan-card-comp-text">Customer</div>
        <div className="premium-plan-card-comp-text1">Gabriela Hudges</div>
      </div>
      <div className="premium-plan-card-comp-item">
        <div className="premium-plan-card-comp-text">Email</div>
        <div className="premium-plan-card-comp-text1">
          Gabrielahudges@gmail.com
        </div>
      </div>
      <div className="premium-plan-card-comp-item">
        <div className="premium-plan-card-comp-text">Receipt #</div>
        <div className="premium-plan-card-comp-text1">901839810</div>
      </div>
      <div className="premium-plan-card-comp-item">
        <div className="premium-plan-card-comp-text">Date Paid</div>
        <div className="premium-plan-card-comp-text1">April 24, 2023</div>
      </div>
      <div className="premium-plan-card-comp-item">
        <div className="premium-plan-card-comp-text8">Payment Method</div>
        <div className="premium-plan-card-comp-text1">Visacard</div>
      </div>
      <div className="premium-plan-card-comp-item">
        <div className="premium-plan-card-comp-text">Card Number</div>
        <div className="premium-plan-card-comp-text1">**** **** **** 5645</div>
      </div>
      <div className="premium-plan-card-comp-item">
        <div className="premium-plan-card-comp-text">Type Plan</div>
        <div className="premium-plan-card-comp-text1">Monthly</div>
      </div>
      <div className="premium-plan-card-comp-item">
        <div className="premium-plan-card-comp-text">Plan</div>
        <div className="premium-plan-card-comp-text1">Premium Plan</div>
      </div>
    </div>
  );
};

export default PremiumPlanCard;
