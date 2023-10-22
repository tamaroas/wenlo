import { FunctionComponent } from "react";
import PricingPlanContainer from "../../components/PricingPlanContainer/PricingPlanContainer";
import PriceContainer from "../../components/PriceContainer/PriceContainer";
import styles from "./PricingSelected.module.css";

const PricingSelected: FunctionComponent = () => {
  return (
    <div className={styles.pricingSelected}>
      <img className={styles.pricingSelectedChild} alt="" src="/group-1.svg" />
      <PricingPlanContainer />
      <PriceContainer
        price="$6.99"
        priceText="$10.99"
        itemPrice="$14.99"
        itemPriceText="$20.99"
      />
      <div className={styles.frameParent}>
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

export default PricingSelected;
