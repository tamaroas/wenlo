import { FunctionComponent } from "react";
import styles from "./PricingPlanContainer.module.css";

const PricingPlanContainer: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.image1Parent}>
        <img className={styles.image1Icon} alt="" src="/image-11@2x.png" />
        <div className={styles.pricingPlanParent}>
          <b className={styles.pricingPlan}>Pricing plan</b>
          <div className={styles.sedDoEiusmod}>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip.
          </div>
        </div>
      </div>
      <div className={styles.monthlyParent}>
        <div className={styles.monthly}>Monthly</div>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
        </div>
        <div className={styles.annually}>Annually</div>
      </div>
    </div>
  );
};

export default PricingPlanContainer;
