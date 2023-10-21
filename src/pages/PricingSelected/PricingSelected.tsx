import { FunctionComponent } from 'react';
import PricingPlanContainer from '../../components/PricingPlanContainer/PricingPlanContainer';
import PriceContainer from '../../components/PriceContainer/PriceContainer';
import './PricingSelected.css';

const PricingSelected: FunctionComponent = () => {
  return (
    <div className="pricing-selected-pricingSelected">
      <img
        className="pricing-selected-pricingSelectedChild"
        alt=""
        src="images/group-1.svg"
      />
      <PricingPlanContainer />
      <PriceContainer
        price="$6.99"
        priceText="$10.99"
        itemPrice="$14.99"
        itemPriceText="$20.99"
      />
      <div className="pricing-selected-frameParent">
        <div className="pricing-selected-backParent">
          <div className="pricing-selected-back">Back</div>
          <div className="pricing-selected-rectangleParent">
            <div className="pricing-selected-groupChild" />
            <div className="pricing-selected-groupItem" />
          </div>
          <div className="pricing-selected-rectangleGroup">
            <div className="pricing-selected-groupChild" />
            <div className="pricing-selected-groupItem" />
          </div>
        </div>
        <div className="pricing-selected-nextWrapper">
          <div className="pricing-selected-next">Next</div>
        </div>
      </div>
    </div>
  );
};

export default PricingSelected;
