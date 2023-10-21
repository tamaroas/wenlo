/* eslint-disable jsx-a11y/anchor-is-valid */
import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PricingDefault.css";
import PricingPlanContainer1 from "../../components/PricingPlanContainer1/PricingPlanContainer1";
import ContainerForm from "../../components/ContainerForm/ContainerForm";

const PricingDefault: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameCheckboxClick = useCallback(() => {
    navigate("/pricing-switch-to-annually");
  }, [navigate]);

  const onFrameButton4Click = useCallback(() => {
    navigate("/question2");
  }, [navigate]);

  return (
    <div className="pricing-default-pricingDefault">
      <img className="pricing-default-pricingDefaultChild" alt="" src="images/group-1.svg" />
      <img className="pricing-default-pricingDefaultItem" alt="" src="images/group-1.svg" />
      <img className="pricing-default-image1Icon" alt="" src="images/image-12@2x.png" />
      <PricingPlanContainer1 />
      <div className="pricing-default-frameParent">
        <div className="pricing-default-frameGroup">
          <div className="pricing-default-frameContainer">
            <div className="pricing-default-monthlyParent">
              <div className="pricing-default-monthly">Monthly</div>
              <input
                className="pricing-default-frameChild"
                disabled={true}
                type="checkbox"
                onClick={onFrameCheckboxClick}
              />
              <div className="pricing-default-annually">Annually</div>
            </div>
            <ContainerForm
              pricingText="$199/Mo"
              pricingDescription="$499/Mo"
              pricingValue="$799/Mo"
              yesBorder="1px solid #f2f2f2"
              personalizedAssistanceAndBorder="1px solid #b8b8b8"
              liveChatAlignSelf="stretch"
              yesWidth="unset"
              yesFlex="1"
            />
          </div>
          <a className="pricing-default-cantFindYourContainer" href="#">
            <span
              className="pricing-default-cantFindYour"
            >{`Can’t find your best plan? 😵‍💫 `}</span>
            <span className="pricing-default-customYourPlan">
              Custom your plan instead
            </span>
          </a>
        </div>
        <div className="pricing-default-frameDiv">
          <button className="pricing-default-backParent" onClick={onFrameButton4Click}>
            <div className="pricing-default-back">Back</div>
            <div className="pricing-default-rectangleParent">
              <div className="pricing-default-groupChild" />
              <div className="pricing-default-groupItem" />
            </div>
            <div className="pricing-default-rectangleGroup">
              <div className="pricing-default-groupChild" />
              <div className="pricing-default-groupItem" />
            </div>
          </button>
          <div className="pricing-default-nextWrapper">
            <div className="pricing-default-next">Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingDefault;
