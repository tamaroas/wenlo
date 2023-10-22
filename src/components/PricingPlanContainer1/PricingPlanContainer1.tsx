import { FunctionComponent } from "react";
import styles from "./PricingPlanContainer1.module.css";

const PricingPlanContainer1: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.groupWrapper}>
        <div className={styles.moneyWithWingsWrapper}>
          <div className={styles.moneyWithWings}>
            <img
              className={styles.f4b8MoneywithwingsMod0101Icon}
              alt=""
              src="/1f4b8-moneywithwings-mod-01-01-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.pricingPlanParent}>
        <b className={styles.pricingPlan}>Pricing plan</b>
        <div className={styles.sedDoEiusmod}>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip.
        </div>
      </div>
    </div>
  );
};

export default PricingPlanContainer1;
