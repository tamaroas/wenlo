import { FunctionComponent } from 'react';
import PricingPlanContainer1 from '../../components/PricingPlanContainer1/PricingPlanContainer1';
import StarterPlanContainer from '../../components/StarterPlanContainer/StarterPlanContainer';
import './PricingDefaultV2.css';
import PremiumPlanContainer from '../../components/PremiumPlanContainer/PremiumPlanContainer';

const PricingDefaultV2: FunctionComponent = () => {
  return (
    <div className="pricing-default-v2-pricingDefaultV2">
      <img
        className="pricing-default-v2-pricingDefaultV2Child"
        alt=""
        src="images/group-1.svg"
      />
      <img
        className="pricing-default-v2-pricingDefaultV2Item"
        alt=""
        src="images/group-1.svg"
      />
      <img
        className="pricing-default-v2-image1Icon"
        alt=""
        src="images/image-12@2x.png"
      />
      <PricingPlanContainer1 />
      <div className="pricing-default-v2-frameParent">
        <div className="pricing-default-v2-monthlyParent">
          <div className="pricing-default-v2-monthly">Monthly</div>
          <div className="pricing-default-v2-ellipseParent">
            <div className="pricing-default-v2-frameChild" />
            <div className="pricing-default-v2-frameItem" />
          </div>
          <div className="pricing-default-v2-annually">Annually</div>
          <div className="pricing-default-v2-save15Wrapper">
            <div className="pricing-default-v2-save15">Save 15%</div>
          </div>
        </div>
        <div className="pricing-default-v2-frameGroup">
          <div className="pricing-default-v2-frameContainer">
            <StarterPlanContainer
              planName="Starter Plan"
              subscriptionInfo="Free"
              planIconUrl="/image@2x.png"
            />
            <StarterPlanContainer
              planName="Standart Plan"
              subscriptionInfo="$199/Mo"
              planIconUrl="/1f929-starstruck-1024px-01-06-1@2x.png"
            />
          </div>
          <div className="pricing-default-v2-frameContainer">
            <PremiumPlanContainer
              planName="Premium Plan"
              planIconUrl="/image1@2x.png"
              monthlyPrice="$499/Mo"
            />
            <PremiumPlanContainer
              planName="Enterprise-level Plan"
              planIconUrl="/image2@2x.png"
              monthlyPrice="$799/Mo"
            />
          </div>
        </div>
      </div>
      <div className="pricing-default-v2-cantFindYourContainer">
        <span className="pricing-default-v2-cantFindYour">{`Can’t find your best plan? 😵‍💫 `}</span>
        <span className="pricing-default-v2-customYourPlan">
          Custom your plan instead
        </span>
      </div>
      <div className="pricing-default-v2-frameParent1">
        <div className="pricing-default-v2-backParent">
          <div className="pricing-default-v2-back">Back</div>
          <div className="pricing-default-v2-rectangleParent">
            <div className="pricing-default-v2-groupChild" />
            <div className="pricing-default-v2-groupItem" />
          </div>
          <div className="pricing-default-v2-rectangleGroup">
            <div className="pricing-default-v2-groupChild" />
            <div className="pricing-default-v2-groupItem" />
          </div>
        </div>
        <div className="pricing-default-v2-nextWrapper">
          <div className="pricing-default-v2-next">Next</div>
        </div>
      </div>
    </div>
  );
};

export default PricingDefaultV2;
