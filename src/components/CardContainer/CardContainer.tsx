import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./CardContainer.css";

type CardContainerType = {
  planName?: string;
  subscriptionType?: string;
  pricingPlanName?: string;
  monthlyPrice?: string;

  /** Style props */
  frameDivBorder?: CSSProperties["border"];
  frameDivBoxShadow?: CSSProperties["boxShadow"];
  noBorder?: CSSProperties["border"];
};

const CardContainer: FunctionComponent<CardContainerType> = ({
  planName,
  subscriptionType,
  pricingPlanName,
  monthlyPrice,
  frameDivBorder,
  frameDivBoxShadow,
  noBorder,
}) => {
  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      border: frameDivBorder,
      boxShadow: frameDivBoxShadow,
    };
  }, [frameDivBorder, frameDivBoxShadow]);

  const ellipseDiv1Style: CSSProperties = useMemo(() => {
    return {
      border: noBorder,
    };
  }, [noBorder]);

  return (
    <div className="card-container-comp-frameParent">
      <div className="card-container-comp-frameGroup" style={frameDiv6Style}>
        <div className="card-container-comp-frameContainer">
          <div className="card-container-comp-frameWrapper">
            <div className="card-container-comp-starterPlanParent">
              <div className="card-container-comp-starterPlan">{planName}</div>
              <div className="card-container-comp-frameChild" style={ellipseDiv1Style} />
            </div>
          </div>
          <div className="card-container-comp-frameDiv">
            <div className="card-container-comp-topUpFeeParent">
              <div className="card-container-comp-topUpFee">Top-up fee</div>
              <div className="card-container-comp-div">9%</div>
            </div>
            <div className="card-container-comp-topUpFeeParent">
              <div className="card-container-comp-topUpFee">
                Maximum ad accounts per month
              </div>
              <div className="card-container-comp-div">3</div>
            </div>
            <div className="card-container-comp-topUpFeeParent">
              <div className="card-container-comp-topUpFee">
                Restricted ad account review service
              </div>
              <div className="card-container-comp-div">Yes</div>
            </div>
            <div className="card-container-comp-topUpFeeParent">
              <div className="card-container-comp-priorityInRequest">
                Priority in request processing (Top-up, ad account, balance
                transfer ...)
              </div>
              <div className="card-container-comp-div">Low</div>
            </div>
            <div className="card-container-comp-topUpFeeParent">
              <div className="card-container-comp-priorityInRequest">
                Management of all advertising platforms (Meta, Google, TikTok,
                Bing, Snapchat, Twitter…)
              </div>
              <div className="card-container-comp-div">Yes</div>
            </div>
            <div className="card-container-comp-topUpFeeParent">
              <div
                className="card-container-comp-topUpFee"
              >{`Live chat & Customer service`}</div>
              <div className="card-container-comp-div">Yes</div>
            </div>
            <div className="card-container-comp-topUpFeeParent">
              <div className="card-container-comp-topUpFee">
                Personalized assistance and ongoing management
              </div>
              <div className="card-container-comp-div">No</div>
            </div>
            <div className="card-container-comp-topUpFeeParent">
              <div className="card-container-comp-topUpFee">
                Full customization of the ad account name (no "wenlo" suffix)
              </div>
              <div className="card-container-comp-div">No</div>
            </div>
            <div className="card-container-comp-topUpFeeParent">
              <div className="card-container-comp-topUpFee">
                Multi-user (Add your team members)
              </div>
              <div className="card-container-comp-div">No</div>
            </div>
            <div className="card-container-comp-topUpFeeParent">
              <div className="card-container-comp-topUpFee">Total monthly top-up limit</div>
              <div className="card-container-comp-k">$10k</div>
            </div>
          </div>
        </div>
        <div className="card-container-comp-freeWrapper">
          <div className="card-container-comp-free">{subscriptionType}</div>
        </div>
      </div>
      <div className="card-container-comp-frameGroup">
        <div className="card-container-comp-frameContainer">
          <div className="card-container-comp-frameWrapper">
            <div className="card-container-comp-starterPlanParent">
              <div className="card-container-comp-starterPlan">{pricingPlanName}</div>
              <div className="card-container-comp-frameChild" />
            </div>
          </div>
          <div className="card-container-comp-frameDiv">
            <div className="card-container-comp-topUpFeeParent">
              <div className="card-container-comp-topUpFee">Top-up fee</div>
              <div className="card-container-comp-div">9%</div>
            </div>
            <div className="card-container-comp-topUpFeeParent">
              <div className="card-container-comp-topUpFee">
                Maximum ad accounts per month
              </div>
              <div className="card-container-comp-div">3</div>
            </div>
            <div className="card-container-comp-topUpFeeParent">
              <div className="card-container-comp-topUpFee">
                Restricted ad account review service
              </div>
              <div className="card-container-comp-div">Yes</div>
            </div>
            <div className="card-container-comp-topUpFeeParent">
              <div className="card-container-comp-priorityInRequest">
                Priority in request processing (Top-up, ad account, balance
                transfer ...)
              </div>
              <div className="card-container-comp-div">Low</div>
            </div>
            <div className="card-container-comp-topUpFeeParent">
              <div className="card-container-comp-priorityInRequest">
                Management of all advertising platforms (Meta, Google, TikTok,
                Bing, Snapchat, Twitter…)
              </div>
              <div className="card-container-comp-div">Yes</div>
            </div>
            <div className="card-container-comp-topUpFeeParent">
              <div
                className="card-container-comp-topUpFee"
              >{`Live chat & Customer service`}</div>
              <div className="card-container-comp-div">Yes</div>
            </div>
            <div className="card-container-comp-topUpFeeParent">
              <div className="card-container-comp-topUpFee">
                Personalized assistance and ongoing management
              </div>
              <div className="card-container-comp-div">No</div>
            </div>
            <div className="card-container-comp-topUpFeeParent">
              <div className="card-container-comp-topUpFee">
                Full customization of the ad account name (no "wenlo" suffix)
              </div>
              <div className="card-container-comp-div">No</div>
            </div>
            <div className="card-container-comp-topUpFeeParent">
              <div className="card-container-comp-topUpFee">
                Multi-user (Add your team members)
              </div>
              <div className="card-container-comp-div">No</div>
            </div>
            <div className="card-container-comp-topUpFeeParent">
              <div className="card-container-comp-topUpFee">Total monthly top-up limit</div>
              <div className="card-container-comp-k">$10k</div>
            </div>
          </div>
        </div>
        <div className="card-container-comp-freeWrapper">
          <div className="card-container-comp-free">{monthlyPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
