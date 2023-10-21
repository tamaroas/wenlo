import { FunctionComponent } from "react";
import "./StarterPlanContainer.css";

type StarterPlanContainerType = {
  planName?: string;
  subscriptionInfo?: string;
  planIconUrl?: string;
};

const StarterPlanContainer: FunctionComponent<StarterPlanContainerType> = ({
  planName,
  subscriptionInfo,
  planIconUrl,
}) => {
  return (
    <div className="starter-plan-container-comp-frameParent">
      <div className="starter-plan-container-comp-ellipseParent">
        <div className="starter-plan-container-comp-frameChild" />
        <div className="starter-plan-container-comp-frameWrapper">
          <div className="starter-plan-container-comp-starterPlanParent">
            <div className="starter-plan-container-comp-starterPlan">{planName}</div>
            <div className="starter-plan-container-comp-frameItem" />
          </div>
        </div>
        <div className="starter-plan-container-comp-frameGroup">
          <div className="starter-plan-container-comp-topUpFeeParent">
            <div className="starter-plan-container-comp-topUpFee">Top-up fee</div>
            <div className="starter-plan-container-comp-div">9%</div>
          </div>
          <div className="starter-plan-container-comp-topUpFeeParent">
            <div className="starter-plan-container-comp-topUpFee">Maximum ad accounts per month</div>
            <div className="starter-plan-container-comp-div">3</div>
          </div>
          <div className="starter-plan-container-comp-topUpFeeParent">
            <div className="starter-plan-container-comp-topUpFee">
              Restricted ad account review service
            </div>
            <img
              className="starter-plan-container-comp-checkCircleIcon"
              alt=""
              src="images/check-circle.svg"
            />
          </div>
          <div className="starter-plan-container-comp-topUpFeeParent">
            <div className="starter-plan-container-comp-priorityInRequest">
              Priority in request processing (Top-up, ad account, balance
              transfer ...)
            </div>
            <div className="starter-plan-container-comp-div">Low</div>
          </div>
          <div className="starter-plan-container-comp-topUpFeeParent">
            <div className="starter-plan-container-comp-priorityInRequest">
              Management of all advertising platforms (Meta, Google, TikTok,
              Bing, Snapchat, Twitter…)
            </div>
            <img
              className="starter-plan-container-comp-checkCircleIcon"
              alt=""
              src="images/check-circle.svg"
            />
          </div>
          <div className="starter-plan-container-comp-topUpFeeParent">
            <div
              className="starter-plan-container-comp-topUpFee"
            >{`Live chat & Customer service`}</div>
            <img
              className="starter-plan-container-comp-checkCircleIcon"
              alt=""
              src="images/check-circle.svg"
            />
          </div>
          <div className="starter-plan-container-comp-topUpFeeParent">
            <div className="starter-plan-container-comp-topUpFee">
              Personalized assistance and ongoing management
            </div>
            <img className="starter-plan-container-comp-checkCircleIcon" alt="" src="images/cancel.svg" />
          </div>
          <div className="starter-plan-container-comp-topUpFeeParent">
            <div className="starter-plan-container-comp-topUpFee">
              Full customization of the ad account name (no "wenlo" suffix)
            </div>
            <img className="starter-plan-container-comp-checkCircleIcon" alt="" src="images/cancel.svg" />
          </div>
          <div className="starter-plan-container-comp-topUpFeeParent">
            <div className="starter-plan-container-comp-topUpFee">
              Multi-user (Add your team members)
            </div>
            <img className="starter-plan-container-comp-checkCircleIcon" alt="" src="images/cancel.svg" />
          </div>
          <div className="starter-plan-container-comp-topUpFeeParent">
            <div className="starter-plan-container-comp-topUpFee">Total monthly top-up limit</div>
            <div className="starter-plan-container-comp-k">$10k</div>
          </div>
        </div>
      </div>
      <div className="starter-plan-container-comp-freeWrapper">
        <div className="starter-plan-container-comp-free">{subscriptionInfo}</div>
      </div>
      <div className="starter-plan-container-comp-partyingFace">
        <img className="starter-plan-container-comp-imageIcon" alt="" src={planIconUrl} />
      </div>
    </div>
  );
};

export default StarterPlanContainer;
