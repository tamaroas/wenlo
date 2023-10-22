/* eslint-disable jsx-a11y/anchor-is-valid */
import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PricingPlanContainer1 from "../../components/PricingPlanContainer1/PricingPlanContainer1";
import ContainerForm from "../../components/ContainerForm/ContainerForm";
import styles from "./PricingSwitchToAnnually.module.css";

const PricingSwitchToAnnually: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButton4Click = useCallback(() => {
    navigate("/question2");
  }, [navigate]);

  const onFrameContainer69Click = useCallback(() => {
    navigate("/pricing-payment-method");
  }, [navigate]);

  return (
    <div className={styles.pricingSwitchToAnnually}>
      <img
        className={styles.pricingSwitchToAnnuallyChild}
        alt=""
        src="/group-1.svg"
      />
      <img
        className={styles.pricingSwitchToAnnuallyItem}
        alt=""
        src="/group-1.svg"
      />
      <img className={styles.image1Icon} alt="" src="/image-12@2x.png" />
      <PricingPlanContainer1 />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.monthlyParent}>
              <div className={styles.monthly}>Monthly</div>
              <Link className={styles.ellipseParent} to="/pricing-default">
                <div className={styles.frameChild} />
                <div className={styles.frameItem} />
              </Link>
              <div className={styles.annually}>Annually</div>
            </div>
            <ContainerForm
              pricingText="$169/Ye"
              pricingDescription="$423/Ye"
              pricingValue="$679/Ye"
            />
          </div>
          <a className={styles.cantFindYourContainer} href="#">
            <span
              className={styles.cantFindYour}
            >{`Can’t find your best plan? 😵‍💫 `}</span>
            <span className={styles.customYourPlan}>
              Custom your plan instead
            </span>
          </a>
        </div>
        <div className={styles.frameDiv}>
          <button className={styles.backParent} onClick={onFrameButton4Click}>
            <div className={styles.back}>Back</div>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.groupItem} />
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupChild} />
              <div className={styles.groupItem} />
            </div>
          </button>
          <div className={styles.nextWrapper} onClick={onFrameContainer69Click}>
            <div className={styles.next}>Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSwitchToAnnually;
