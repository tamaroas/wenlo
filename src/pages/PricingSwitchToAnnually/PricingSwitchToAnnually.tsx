/* eslint-disable jsx-a11y/anchor-is-valid */
import { FunctionComponent, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PricingPlanContainer1 from '../../components/PricingPlanContainer1/PricingPlanContainer1';
import './PricingSwitchToAnnually.css';
import ContainerForm from '../../components/ContainerForm/ContainerForm';

const PricingSwitchToAnnually: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButton4Click = useCallback(() => {
    navigate('/question2');
  }, [navigate]);

  const onFrameContainer69Click = useCallback(() => {
    navigate('/pricing-payment-method');
  }, [navigate]);

  return (
    <div className="pricing-switch-to-annualy-pricingSwitchToAnnually">
      <img
        className="pricing-switch-to-annualy-pricingSwitchToAnnuallyChild"
        alt=""
        src="images/group-1.svg"
      />
      <img
        className="pricing-switch-to-annualy-pricingSwitchToAnnuallyItem"
        alt=""
        src="images/group-1.svg"
      />
      <img
        className="pricing-switch-to-annualy-image1Icon"
        alt=""
        src="images/image-12@2x.png"
      />
      <PricingPlanContainer1 />
      <div className="pricing-switch-to-annualy-frameParent">
        <div className="pricing-switch-to-annualy-frameGroup">
          <div className="pricing-switch-to-annualy-frameContainer">
            <div className="pricing-switch-to-annualy-monthlyParent">
              <div className="pricing-switch-to-annualy-monthly">Monthly</div>
              <Link
                className="pricing-switch-to-annualy-ellipseParent"
                to="/pricing-default"
              >
                <div className="pricing-switch-to-annualy-frameChild" />
                <div className="pricing-switch-to-annualy-frameItem" />
              </Link>
              <div className="pricing-switch-to-annualy-annually">Annually</div>
            </div>
            <ContainerForm
              pricingText="$169/Ye"
              pricingDescription="$423/Ye"
              pricingValue="$679/Ye"
            />
          </div>
          <a
            className="pricing-switch-to-annualy-cantFindYourContainer"
            href="#"
          >
            <span className="pricing-switch-to-annualy-cantFindYour">{`Can’t find your best plan? 😵‍💫 `}</span>
            <span className="pricing-switch-to-annualy-customYourPlan">
              Custom your plan instead
            </span>
          </a>
        </div>
        <div className="pricing-switch-to-annualy-frameDiv">
          <button
            className="pricing-switch-to-annualy-backParent"
            onClick={onFrameButton4Click}
          >
            <div className="pricing-switch-to-annualy-back">Back</div>
            <div className="pricing-switch-to-annualy-rectangleParent">
              <div className="pricing-switch-to-annualy-groupChild" />
              <div className="pricing-switch-to-annualy-groupItem" />
            </div>
            <div className="pricing-switch-to-annualy-rectangleGroup">
              <div className="pricing-switch-to-annualy-groupChild" />
              <div className="pricing-switch-to-annualy-groupItem" />
            </div>
          </button>
          <div
            className="pricing-switch-to-annualy-nextWrapper"
            onClick={onFrameContainer69Click}
          >
            <div className="pricing-switch-to-annualy-next">Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSwitchToAnnually;
