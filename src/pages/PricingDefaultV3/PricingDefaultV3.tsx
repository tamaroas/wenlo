import { FunctionComponent } from 'react';
import './PricingDefaultV3.css';
import PricingPlanContainer from '../../components/PricingPlanContainer/PricingPlanContainer';
import PriceContainer from '../../components/PriceContainer/PriceContainer';

const PricingDefaultV3: FunctionComponent = () => {
  return (
    <div className="pricing-default-v3-pricingDefaultV3">
      <img
        className="pricing-default-v3-pricingDefaultV3Child"
        alt=""
        src="images/group-1.svg"
      />
      <PricingPlanContainer />
      <PriceContainer
        price="$8.99"
        priceText="$8.99"
        itemPrice="$8.99"
        itemPriceText="$8.99"
        frameDivBorder="1px solid #f2f2f2"
        frameDivBorder1="1px solid #b8b8b8"
      />
      <div className="pricing-default-v3-frameParent">
        <div className="pricing-default-v3-backParent">
          <div className="pricing-default-v3-back">Back</div>
          <div className="pricing-default-v3-rectangleParent">
            <div className="pricing-default-v3-groupChild" />
            <div className="pricing-default-v3-groupItem" />
          </div>
          <div className="pricing-default-v3-rectangleGroup">
            <div className="pricing-default-v3-groupChild" />
            <div className="pricing-default-v3-groupItem" />
          </div>
        </div>
        <div className="pricing-default-v3-nextWrapper">
          <div className="pricing-default-v3-next">Next</div>
        </div>
      </div>
    </div>
  );
};

export default PricingDefaultV3;
