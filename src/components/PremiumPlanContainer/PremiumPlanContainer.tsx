import { FunctionComponent } from "react";
import "./PremiumPlanContainer.css";

type PremiumPlanContainerType = {
  planName?: string;
  planIconUrl?: string;
  monthlyPrice?: string;
};

const PremiumPlanContainer: FunctionComponent<PremiumPlanContainerType> = ({
  planName,
  planIconUrl,
  monthlyPrice,
}) => {
  return (
    <div className="premium-plan-container-comp-frameParent">
      <div className="premium-plan-container-comp-ellipseParent">
        <div className="premium-plan-container-comp-frameChild" />
        <div className="premium-plan-container-comp-frameWrapper">
          <div className="premium-plan-container-comp-premiumPlanParent">
            <div className="premium-plan-container-comp-premiumPlan">{planName}</div>
            <div className="premium-plan-container-comp-frameItem" />
          </div>
        </div>
        <div className="premium-plan-container-comp-frameGroup">
          <div className="premium-plan-container-comp-topUpFeeParent">
            <div className="premium-plan-container-comp-topUpFee">Top-up fee</div>
            <div className="premium-plan-container-comp-div">9%</div>
          </div>
          <div className="premium-plan-container-comp-topUpFeeParent">
            <div className="premium-plan-container-comp-topUpFee">Maximum ad accounts per month</div>
            <div className="premium-plan-container-comp-div">3</div>
          </div>
          <div className="premium-plan-container-comp-topUpFeeParent">
            <div className="premium-plan-container-comp-topUpFee">
              Restricted ad account review service
            </div>
            <img
              className="premium-plan-container-comp-checkCircleIcon"
              alt=""
              src="images/check-circle.svg"
            />
          </div>
          <div className="premium-plan-container-comp-topUpFeeParent">
            <div className="premium-plan-container-comp-priorityInRequest">
              Priority in request processing (Top-up, ad account, balance
              transfer ...)
            </div>
            <div className="premium-plan-container-comp-div">Low</div>
          </div>
          <div className="premium-plan-container-comp-topUpFeeParent">
            <div className="premium-plan-container-comp-priorityInRequest">
              Management of all advertising platforms (Meta, Google, TikTok,
              Bing, Snapchat, Twitter…)
            </div>
            <img
              className="premium-plan-container-comp-checkCircleIcon"
              alt=""
              src="images/check-circle.svg"
            />
          </div>
          <div className="premium-plan-container-comp-topUpFeeParent">
            <div
              className="premium-plan-container-comp-topUpFee"
            >{`Live chat & Customer service`}</div>
            <img
              className="premium-plan-container-comp-checkCircleIcon"
              alt=""
              src="images/check-circle.svg"
            />
          </div>
          <div className="premium-plan-container-comp-topUpFeeParent">
            <div className="premium-plan-container-comp-topUpFee">
              Personalized assistance and ongoing management
            </div>
            <img className="premium-plan-container-comp-checkCircleIcon" alt="" src="images/cancel.svg" />
          </div>
          <div className="premium-plan-container-comp-topUpFeeParent">
            <div className="premium-plan-container-comp-topUpFee">
              Full customization of the ad account name (no "wenlo" suffix)
            </div>
            <img className="premium-plan-container-comp-checkCircleIcon" alt="" src="images/cancel.svg" />
          </div>
          <div className="premium-plan-container-comp-topUpFeeParent">
            <div className="premium-plan-container-comp-topUpFee">
              Multi-user (Add your team members)
            </div>
            <img className="premium-plan-container-comp-checkCircleIcon" alt="" src="images/cancel.svg" />
          </div>
          <div className="premium-plan-container-comp-topUpFeeParent">
            <div className="premium-plan-container-comp-topUpFee">Total monthly top-up limit</div>
            <div className="premium-plan-container-comp-k">$10k</div>
          </div>
        </div>
        <div className="premium-plan-container-comp-smilingFaceWithSunglasses">
          <img className="premium-plan-container-comp-imageIcon" alt="" src={planIconUrl} />
        </div>
      </div>
      <div className="premium-plan-container-comp-moWrapper">
        <div className="premium-plan-container-comp-mo">{monthlyPrice}</div>
      </div>
    </div>
  );
};

export default PremiumPlanContainer;
