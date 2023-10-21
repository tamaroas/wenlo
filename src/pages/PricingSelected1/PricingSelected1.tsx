import { FunctionComponent } from 'react';
import PricingPlanContainer1 from '../../components/PricingPlanContainer1/PricingPlanContainer1';
import './PricingSelected1.css';
import CardContainer from '../../components/CardContainer/CardContainer';

const PricingSelected1: FunctionComponent = () => {
  return (
    <div className="pricing-selected1-pricingSelected">
      <img
        className="pricing-selected1-pricingSelectedChild"
        alt=""
        src="images/group-1.svg"
      />
      <img
        className="pricing-selected1-pricingSelectedItem"
        alt=""
        src="images/group-1.svg"
      />
      <img
        className="pricing-selected1-image1Icon"
        alt=""
        src="images/image-12@2x.png"
      />
      <PricingPlanContainer1 />
      <div className="pricing-selected1-frameParent">
        <div className="pricing-selected1-frameGroup">
          <div className="pricing-selected1-frameContainer">
            <div className="pricing-selected1-monthlyParent">
              <div className="pricing-selected1-monthly">Monthly</div>
              <div className="pricing-selected1-ellipseParent">
                <div className="pricing-selected1-frameChild" />
                <div className="pricing-selected1-frameItem" />
              </div>
              <div className="pricing-selected1-annually">Annually</div>
            </div>
            <div className="pricing-selected1-frameDiv">
              <CardContainer
                planName="Starter Plan"
                subscriptionType="Free"
                pricingPlanName="Standart Plan"
                monthlyPrice="$199/Mo"
              />
              <CardContainer
                planName="Premium Plan"
                subscriptionType="$499/Mo"
                pricingPlanName="Enterprise-level Plan"
                monthlyPrice="$799/Mo"
                frameDivBorder="1px solid #3949a1"
                frameDivBoxShadow="0px 4px 56px rgba(0, 0, 0, 0.12)"
                noBorder="6px solid #3949a1"
              />
            </div>
          </div>
          <div className="pricing-selected1-cantFindYourContainer">
            <span className="pricing-selected1-cantFindYour">{`Can’t find your best plan? 😵‍💫 `}</span>
            <span className="pricing-selected1-customYourPlan">
              Custom your plan instead
            </span>
          </div>
        </div>
        <div className="pricing-selected1-frameParent1">
          <div className="pricing-selected1-backParent">
            <div className="pricing-selected1-back">Back</div>
            <div className="pricing-selected1-rectangleParent">
              <div className="pricing-selected1-groupChild" />
              <div className="pricing-selected1-groupItem" />
            </div>
            <div className="pricing-selected1-rectangleGroup">
              <div className="pricing-selected1-groupChild" />
              <div className="pricing-selected1-groupItem" />
            </div>
          </div>
          <div className="pricing-selected1-nextWrapper">
            <div className="pricing-selected1-next">Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSelected1;
