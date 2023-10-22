import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CardContainer.module.css";

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
    <div className={styles.frameParent}>
      <div className={styles.frameGroup} style={frameDiv6Style}>
        <div className={styles.frameContainer}>
          <div className={styles.frameWrapper}>
            <div className={styles.starterPlanParent}>
              <div className={styles.starterPlan}>{planName}</div>
              <div className={styles.frameChild} style={ellipseDiv1Style} />
            </div>
          </div>
          <div className={styles.frameDiv}>
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
              <div className={styles.topUpFee}>Total monthly top-up limit</div>
              <div className={styles.k}>$10k</div>
            </div>
          </div>
        </div>
        <div className={styles.freeWrapper}>
          <div className={styles.free}>{subscriptionType}</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameWrapper}>
            <div className={styles.starterPlanParent}>
              <div className={styles.starterPlan}>{pricingPlanName}</div>
              <div className={styles.frameChild} />
            </div>
          </div>
          <div className={styles.frameDiv}>
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
              <div className={styles.topUpFee}>Total monthly top-up limit</div>
              <div className={styles.k}>$10k</div>
            </div>
          </div>
        </div>
        <div className={styles.freeWrapper}>
          <div className={styles.free}>{monthlyPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
