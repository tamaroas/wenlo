import { FunctionComponent } from 'react';
import './PricingPlanContainer.css';

const PricingPlanContainer: FunctionComponent = () => {
  return (
    <div className="pricing-plan-container-comp-frameParent">
      <div className="pricing-plan-container-comp-image1Parent">
        <img
          className="pricing-plan-container-comp-image1Icon"
          alt=""
          src="images/image-11@2x.png"
        />
        <div className="pricing-plan-container-comp-pricingPlanParent">
          <b className="pricing-plan-container-comp-pricingPlan">
            Pricing plan
          </b>
          <div className="pricing-plan-container-comp-sedDoEiusmod">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip.
          </div>
        </div>
      </div>
      <div className="pricing-plan-container-comp-monthlyParent">
        <div className="pricing-plan-container-comp-monthly">Monthly</div>
        <div className="pricing-plan-container-comp-ellipseParent">
          <div className="pricing-plan-container-comp-frameChild" />
          <div className="pricing-plan-container-comp-frameItem" />
        </div>
        <div className="pricing-plan-container-comp-annually">Annually</div>
      </div>
    </div>
  );
};

export default PricingPlanContainer;
