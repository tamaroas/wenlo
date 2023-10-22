import { FunctionComponent } from "react";
import styles from "./StarterPlanContainer.module.css";

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
    <div className={styles.frameParent}>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.starterPlanParent}>
            <div className={styles.starterPlan}>{planName}</div>
            <div className={styles.frameItem} />
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.topUpFeeParent}>
            <div className={styles.topUpFee}>Top-up fee</div>
            <div className={styles.div}>9%</div>
          </div>
          <div className={styles.topUpFeeParent}>
            <div className={styles.topUpFee}>Maximum ad accounts per month</div>
            <div className={styles.div}>3</div>
          </div>
          <div className={styles.topUpFeeParent}>
            <div className={styles.topUpFee}>
              Restricted ad account review service
            </div>
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
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
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          </div>
          <div className={styles.topUpFeeParent}>
            <div
              className={styles.topUpFee}
            >{`Live chat & Customer service`}</div>
            <img
              className={styles.checkCircleIcon}
              alt=""
              src="/check-circle.svg"
            />
          </div>
          <div className={styles.topUpFeeParent}>
            <div className={styles.topUpFee}>
              Personalized assistance and ongoing management
            </div>
            <img className={styles.checkCircleIcon} alt="" src="/cancel.svg" />
          </div>
          <div className={styles.topUpFeeParent}>
            <div className={styles.topUpFee}>
              Full customization of the ad account name (no "wenlo" suffix)
            </div>
            <img className={styles.checkCircleIcon} alt="" src="/cancel.svg" />
          </div>
          <div className={styles.topUpFeeParent}>
            <div className={styles.topUpFee}>
              Multi-user (Add your team members)
            </div>
            <img className={styles.checkCircleIcon} alt="" src="/cancel.svg" />
          </div>
          <div className={styles.topUpFeeParent}>
            <div className={styles.topUpFee}>Total monthly top-up limit</div>
            <div className={styles.k}>$10k</div>
          </div>
        </div>
      </div>
      <div className={styles.freeWrapper}>
        <div className={styles.free}>{subscriptionInfo}</div>
      </div>
      <div className={styles.partyingFace}>
        <img className={styles.imageIcon} alt="" src={planIconUrl} />
      </div>
    </div>
  );
};

export default StarterPlanContainer;
