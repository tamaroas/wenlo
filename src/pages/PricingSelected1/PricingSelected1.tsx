import { FunctionComponent } from "react";
import PricingPlanContainer1 from "../../components/PricingPlanContainer1/PricingPlanContainer1";
import CardContainer from "../../components/CardContainer/CardContainer";
import styles from "./PricingSelected1.module.css";

const PricingSelected1: FunctionComponent = () => {
  return (
    <div className={styles.pricingSelected}>
      <img className={styles.pricingSelectedChild} alt="" src="/group-1.svg" />
      <img className={styles.pricingSelectedItem} alt="" src="/group-1.svg" />
      <img className={styles.image1Icon} alt="" src="/image-12@2x.png" />
      <PricingPlanContainer1 />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.monthlyParent}>
              <div className={styles.monthly}>Monthly</div>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameItem} />
              </div>
              <div className={styles.annually}>Annually</div>
            </div>
            <div className={styles.frameDiv}>
              <CardContainer
                planName="Starter Plan"
                subscriptionType="Free"
                pricingPlanName="Standart Plan"
                monthlyPrice="$199/Mo"
              />
              <CardContainer
                planName="Premium Plan"
                subscriptionType="$499/Mo"
                pricingPlanName="Enterprise-level Plan"
                monthlyPrice="$799/Mo"
                frameDivBorder="1px solid #3949a1"
                frameDivBoxShadow="0px 4px 56px rgba(0, 0, 0, 0.12)"
                noBorder="6px solid #3949a1"
              />
            </div>
          </div>
          <div className={styles.cantFindYourContainer}>
            <span
              className={styles.cantFindYour}
            >{`Can’t find your best plan? 😵‍💫 `}</span>
            <span className={styles.customYourPlan}>
              Custom your plan instead
            </span>
          </div>
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
    </div>
  );
};

export default PricingSelected1;
