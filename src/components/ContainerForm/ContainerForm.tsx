import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ContainerForm.css";

type ContainerFormType = {
  pricingText?: string;
  pricingDescription?: string;
  pricingValue?: string;

  /** Style props */
  yesBorder?: CSSProperties["border"];
  personalizedAssistanceAndBorder?: CSSProperties["border"];
  liveChatAlignSelf?: CSSProperties["alignSelf"];
  yesWidth?: CSSProperties["width"];
  yesFlex?: CSSProperties["flex"];
};

const ContainerForm: FunctionComponent<ContainerFormType> = ({
  pricingText,
  pricingDescription,
  pricingValue,
  yesBorder,
  personalizedAssistanceAndBorder,
  liveChatAlignSelf,
  yesWidth,
  yesFlex,
}) => {
  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      border: yesBorder,
    };
  }, [yesBorder]);

  const ellipseInputStyle: CSSProperties = useMemo(() => {
    return {
      border: personalizedAssistanceAndBorder,
    };
  }, [personalizedAssistanceAndBorder]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: liveChatAlignSelf,
    };
  }, [liveChatAlignSelf]);

  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      width: yesWidth,
      flex: yesFlex,
    };
  }, [yesWidth, yesFlex]);

  return (
    <div className="container-form-comp-frameParent">
      <div className="container-form-comp-frameGroup">
        <div className="container-form-comp-frameContainer">
          <div className="container-form-comp-frameDiv">
            <div className="container-form-comp-frameWrapper">
              <div className="container-form-comp-starterPlanParent">
                <div className="container-form-comp-starterPlan">Starter Plan</div>
                <input className="container-form-comp-frameChild" type="radio" />
              </div>
            </div>
            <div className="container-form-comp-frameParent1">
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">Top-up fee</div>
                <div className="container-form-comp-div">9%</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Maximum ad accounts per month
                </div>
                <div className="container-form-comp-div">3</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Restricted ad account review service
                </div>
                <div className="container-form-comp-div">Yes</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-priorityInRequest">
                  Priority in request processing (Top-up, ad account, balance
                  transfer ...)
                </div>
                <div className="container-form-comp-div">Low</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-priorityInRequest">
                  Management of all advertising platforms (Meta, Google, TikTok,
                  Bing, Snapchat, Twitter…)
                </div>
                <div className="container-form-comp-div">Yes</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div
                  className="container-form-comp-topUpFee"
                >{`Live chat & Customer service`}</div>
                <div className="container-form-comp-div">Yes</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Personalized assistance and ongoing management
                </div>
                <div className="container-form-comp-div">No</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Full customization of the ad account name (no "wenlo" suffix)
                </div>
                <div className="container-form-comp-div">No</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Multi-user (Add your team members)
                </div>
                <div className="container-form-comp-div">No</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Total monthly top-up limit
                </div>
                <div className="container-form-comp-k">$10k</div>
              </div>
            </div>
          </div>
          <button className="container-form-comp-freeWrapper">
            <div className="container-form-comp-free">Free</div>
          </button>
        </div>
        <div className="container-form-comp-frameContainer">
          <div className="container-form-comp-frameParent3">
            <div className="container-form-comp-frameWrapper1">
              <div className="container-form-comp-starterPlanParent">
                <div className="container-form-comp-starterPlan">Standart Plan</div>
                <input className="container-form-comp-frameChild" type="radio" />
              </div>
            </div>
            <div className="container-form-comp-frameParent4">
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">Top-up fee</div>
                <div className="container-form-comp-div">9%</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Maximum ad accounts per month
                </div>
                <div className="container-form-comp-div">3</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Restricted ad account review service
                </div>
                <div className="container-form-comp-div">Yes</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-priorityInRequest">
                  Priority in request processing (Top-up, ad account, balance
                  transfer ...)
                </div>
                <div className="container-form-comp-div">Low</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-priorityInRequest">
                  Management of all advertising platforms (Meta, Google, TikTok,
                  Bing, Snapchat, Twitter…)
                </div>
                <div className="container-form-comp-div">Yes</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div
                  className="container-form-comp-topUpFee"
                >{`Live chat & Customer service`}</div>
                <div className="container-form-comp-div">Yes</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Personalized assistance and ongoing management
                </div>
                <div className="container-form-comp-div">No</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Full customization of the ad account name (no "wenlo" suffix)
                </div>
                <div className="container-form-comp-div">No</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Multi-user (Add your team members)
                </div>
                <div className="container-form-comp-div">No</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Total monthly top-up limit
                </div>
                <div className="container-form-comp-k">$10k</div>
              </div>
            </div>
          </div>
          <button className="container-form-comp-freeWrapper">
            <div className="container-form-comp-free">{pricingText}</div>
          </button>
        </div>
      </div>
      <div className="container-form-comp-frameGroup">
        <div className="container-form-comp-frameParent6" style={frameDiv3Style}>
          <div className="container-form-comp-frameDiv">
            <div className="container-form-comp-frameWrapper">
              <div className="container-form-comp-starterPlanParent">
                <div className="container-form-comp-starterPlan">Premium Plan</div>
                <input
                  className="container-form-comp-frameInner"
                  type="radio"
                  style={ellipseInputStyle}
                />
              </div>
            </div>
            <div className="container-form-comp-frameParent1">
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">Top-up fee</div>
                <div className="container-form-comp-div">9%</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Maximum ad accounts per month
                </div>
                <div className="container-form-comp-div">3</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Restricted ad account review service
                </div>
                <div className="container-form-comp-div">Yes</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-priorityInRequest">
                  Priority in request processing (Top-up, ad account, balance
                  transfer ...)
                </div>
                <div className="container-form-comp-div">Low</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-priorityInRequest">
                  Management of all advertising platforms (Meta, Google, TikTok,
                  Bing, Snapchat, Twitter…)
                </div>
                <div className="container-form-comp-div">Yes</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div
                  className="container-form-comp-topUpFee"
                >{`Live chat & Customer service`}</div>
                <div className="container-form-comp-div">Yes</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Personalized assistance and ongoing management
                </div>
                <div className="container-form-comp-div">No</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Full customization of the ad account name (no "wenlo" suffix)
                </div>
                <div className="container-form-comp-div">No</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Multi-user (Add your team members)
                </div>
                <div className="container-form-comp-div">No</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Total monthly top-up limit
                </div>
                <div className="container-form-comp-k">$10k</div>
              </div>
            </div>
          </div>
          <button className="container-form-comp-freeWrapper">
            <div className="container-form-comp-free">{pricingDescription}</div>
          </button>
        </div>
        <div className="container-form-comp-frameContainer">
          <div className="container-form-comp-frameParent3">
            <div className="container-form-comp-frameWrapper3" style={frameDiv4Style}>
              <div
                className="container-form-comp-enterpriseLevelPlanParent"
                style={frameDiv5Style}
              >
                <div className="container-form-comp-starterPlan">Enterprise-level Plan</div>
                <input className="container-form-comp-frameChild" type="radio" />
              </div>
            </div>
            <div className="container-form-comp-frameParent4">
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">Top-up fee</div>
                <div className="container-form-comp-div">9%</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Maximum ad accounts per month
                </div>
                <div className="container-form-comp-div">3</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Restricted ad account review service
                </div>
                <div className="container-form-comp-div">Yes</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-priorityInRequest">
                  Priority in request processing (Top-up, ad account, balance
                  transfer ...)
                </div>
                <div className="container-form-comp-div">Low</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-priorityInRequest">
                  Management of all advertising platforms (Meta, Google, TikTok,
                  Bing, Snapchat, Twitter…)
                </div>
                <div className="container-form-comp-div">Yes</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div
                  className="container-form-comp-topUpFee"
                >{`Live chat & Customer service`}</div>
                <div className="container-form-comp-div">Yes</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Personalized assistance and ongoing management
                </div>
                <div className="container-form-comp-div">No</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Full customization of the ad account name (no "wenlo" suffix)
                </div>
                <div className="container-form-comp-div">No</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Multi-user (Add your team members)
                </div>
                <div className="container-form-comp-div">No</div>
              </div>
              <div className="container-form-comp-topUpFeeParent">
                <div className="container-form-comp-topUpFee">
                  Total monthly top-up limit
                </div>
                <div className="container-form-comp-k">$10k</div>
              </div>
            </div>
          </div>
          <button className="container-form-comp-freeWrapper">
            <div className="container-form-comp-free">{pricingValue}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerForm;
