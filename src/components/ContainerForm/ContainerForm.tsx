import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ContainerForm.module.css";

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
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper}>
              <div className={styles.starterPlanParent}>
                <div className={styles.starterPlan}>Starter Plan</div>
                <input className={styles.frameChild} type="radio" />
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>Top-up fee</div>
                <div className={styles.div}>9%</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Maximum ad accounts per month
                </div>
                <div className={styles.div}>3</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Restricted ad account review service
                </div>
                <div className={styles.div}>Yes</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.priorityInRequest}>
                  Priority in request processing (Top-up, ad account, balance
                  transfer ...)
                </div>
                <div className={styles.div}>Low</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.priorityInRequest}>
                  Management of all advertising platforms (Meta, Google, TikTok,
                  Bing, Snapchat, Twitter…)
                </div>
                <div className={styles.div}>Yes</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div
                  className={styles.topUpFee}
                >{`Live chat & Customer service`}</div>
                <div className={styles.div}>Yes</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Personalized assistance and ongoing management
                </div>
                <div className={styles.div}>No</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Full customization of the ad account name (no "wenlo" suffix)
                </div>
                <div className={styles.div}>No</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Multi-user (Add your team members)
                </div>
                <div className={styles.div}>No</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Total monthly top-up limit
                </div>
                <div className={styles.k}>$10k</div>
              </div>
            </div>
          </div>
          <button className={styles.freeWrapper}>
            <div className={styles.free}>Free</div>
          </button>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameParent3}>
            <div className={styles.frameWrapper1}>
              <div className={styles.starterPlanParent}>
                <div className={styles.starterPlan}>Standart Plan</div>
                <input className={styles.frameChild} type="radio" />
              </div>
            </div>
            <div className={styles.frameParent4}>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>Top-up fee</div>
                <div className={styles.div}>9%</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Maximum ad accounts per month
                </div>
                <div className={styles.div}>3</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Restricted ad account review service
                </div>
                <div className={styles.div}>Yes</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.priorityInRequest}>
                  Priority in request processing (Top-up, ad account, balance
                  transfer ...)
                </div>
                <div className={styles.div}>Low</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.priorityInRequest}>
                  Management of all advertising platforms (Meta, Google, TikTok,
                  Bing, Snapchat, Twitter…)
                </div>
                <div className={styles.div}>Yes</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div
                  className={styles.topUpFee}
                >{`Live chat & Customer service`}</div>
                <div className={styles.div}>Yes</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Personalized assistance and ongoing management
                </div>
                <div className={styles.div}>No</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Full customization of the ad account name (no "wenlo" suffix)
                </div>
                <div className={styles.div}>No</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Multi-user (Add your team members)
                </div>
                <div className={styles.div}>No</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Total monthly top-up limit
                </div>
                <div className={styles.k}>$10k</div>
              </div>
            </div>
          </div>
          <button className={styles.freeWrapper}>
            <div className={styles.free}>{pricingText}</div>
          </button>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameParent6} style={frameDiv3Style}>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper}>
              <div className={styles.starterPlanParent}>
                <div className={styles.starterPlan}>Premium Plan</div>
                <input
                  className={styles.frameInner}
                  type="radio"
                  style={ellipseInputStyle}
                />
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>Top-up fee</div>
                <div className={styles.div}>9%</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Maximum ad accounts per month
                </div>
                <div className={styles.div}>3</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Restricted ad account review service
                </div>
                <div className={styles.div}>Yes</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.priorityInRequest}>
                  Priority in request processing (Top-up, ad account, balance
                  transfer ...)
                </div>
                <div className={styles.div}>Low</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.priorityInRequest}>
                  Management of all advertising platforms (Meta, Google, TikTok,
                  Bing, Snapchat, Twitter…)
                </div>
                <div className={styles.div}>Yes</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div
                  className={styles.topUpFee}
                >{`Live chat & Customer service`}</div>
                <div className={styles.div}>Yes</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Personalized assistance and ongoing management
                </div>
                <div className={styles.div}>No</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Full customization of the ad account name (no "wenlo" suffix)
                </div>
                <div className={styles.div}>No</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Multi-user (Add your team members)
                </div>
                <div className={styles.div}>No</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Total monthly top-up limit
                </div>
                <div className={styles.k}>$10k</div>
              </div>
            </div>
          </div>
          <button className={styles.freeWrapper}>
            <div className={styles.free}>{pricingDescription}</div>
          </button>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameParent3}>
            <div className={styles.frameWrapper3} style={frameDiv4Style}>
              <div
                className={styles.enterpriseLevelPlanParent}
                style={frameDiv5Style}
              >
                <div className={styles.starterPlan}>Enterprise-level Plan</div>
                <input className={styles.frameChild} type="radio" />
              </div>
            </div>
            <div className={styles.frameParent4}>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>Top-up fee</div>
                <div className={styles.div}>9%</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Maximum ad accounts per month
                </div>
                <div className={styles.div}>3</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Restricted ad account review service
                </div>
                <div className={styles.div}>Yes</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.priorityInRequest}>
                  Priority in request processing (Top-up, ad account, balance
                  transfer ...)
                </div>
                <div className={styles.div}>Low</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.priorityInRequest}>
                  Management of all advertising platforms (Meta, Google, TikTok,
                  Bing, Snapchat, Twitter…)
                </div>
                <div className={styles.div}>Yes</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div
                  className={styles.topUpFee}
                >{`Live chat & Customer service`}</div>
                <div className={styles.div}>Yes</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Personalized assistance and ongoing management
                </div>
                <div className={styles.div}>No</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Full customization of the ad account name (no "wenlo" suffix)
                </div>
                <div className={styles.div}>No</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Multi-user (Add your team members)
                </div>
                <div className={styles.div}>No</div>
              </div>
              <div className={styles.topUpFeeParent}>
                <div className={styles.topUpFee}>
                  Total monthly top-up limit
                </div>
                <div className={styles.k}>$10k</div>
              </div>
            </div>
          </div>
          <button className={styles.freeWrapper}>
            <div className={styles.free}>{pricingValue}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContainerForm;
