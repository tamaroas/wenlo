import { FunctionComponent } from "react";
import PricingPlanContainer1 from "../../components/PricingPlanContainer1/PricingPlanContainer1"; 
import StarterPlanContainer from "../../components/StarterPlanContainer/StarterPlanContainer";
import PremiumPlanContainer from "../../components/PremiumPlanContainer/PremiumPlanContainer";
import styles from "./PricingDefaultV2.module.css";

const PricingDefaultV2: FunctionComponent = () => {
  return (
    <div className={styles.pricingDefaultV2}>
      <img className={styles.pricingDefaultV2Child} alt="" src="/group-1.svg" />
      <img className={styles.pricingDefaultV2Item} alt="" src="/group-1.svg" />
      <img className={styles.image1Icon} alt="" src="/image-12@2x.png" />
      <PricingPlanContainer1 />
      <div className={styles.frameParent}>
        <div className={styles.monthlyParent}>
          <div className={styles.monthly}>Monthly</div>
          <div className={styles.ellipseParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
          </div>
          <div className={styles.annually}>Annually</div>
          <div className={styles.save15Wrapper}>
            <div className={styles.save15}>Save 15%</div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <StarterPlanContainer
              planName="Starter Plan"
              subscriptionInfo="Free"
              planIconUrl="/image@2x.png"
            />
            <StarterPlanContainer
              planName="Standart Plan"
              subscriptionInfo="$199/Mo"
              planIconUrl="/1f929-starstruck-1024px-01-06-1@2x.png"
            />
          </div>
          <div className={styles.frameContainer}>
            <PremiumPlanContainer
              planName="Premium Plan"
              planIconUrl="/image1@2x.png"
              monthlyPrice="$499/Mo"
            />
            <PremiumPlanContainer
              planName="Enterprise-level Plan"
              planIconUrl="/image2@2x.png"
              monthlyPrice="$799/Mo"
            />
          </div>
        </div>
      </div>
      <div className={styles.cantFindYourContainer}>
        <span
          className={styles.cantFindYour}
        >{`Can’t find your best plan? 😵‍💫 `}</span>
        <span className={styles.customYourPlan}>Custom your plan instead</span>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.backParent}>
          <div className={styles.back}>Back</div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
          </div>
        </div>
        <div className={styles.nextWrapper}>
          <div className={styles.next}>Next</div>
        </div>
      </div>
    </div>
  );
};

export default PricingDefaultV2;
