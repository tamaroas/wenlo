import { FunctionComponent } from "react";
import PricingPlanContainer from "../../components/PricingPlanContainer/PricingPlanContainer";
import PriceContainer from "../../components/PriceContainer/PriceContainer";
import styles from "./PricingDefaultV3.module.css";

const PricingDefaultV3: FunctionComponent = () => {
  return (
    <div className={styles.pricingDefaultV3}>
      <img className={styles.pricingDefaultV3Child} alt="" src="/group-1.svg" />
      <PricingPlanContainer />
      <PriceContainer
        price="$8.99"
        priceText="$8.99"
        itemPrice="$8.99"
        itemPriceText="$8.99"
        frameDivBorder="1px solid #f2f2f2"
        frameDivBorder1="1px solid #b8b8b8"
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

export default PricingDefaultV3;
