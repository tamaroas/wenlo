/* eslint-disable jsx-a11y/anchor-is-valid */
import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ContainerForm from "../../components/ContainerForm/ContainerForm";
import PricingPlanContainer1 from "../../components/PricingPlanContainer1/PricingPlanContainer1";
import styles from "./PricingDefault.module.css";

const PricingDefault: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameCheckboxClick = useCallback(() => {
    navigate("/pricing-switch-to-annually");
  }, [navigate]);

  const onFrameButton4Click = useCallback(() => {
    navigate("/question2");
  }, [navigate]);

  return (
    <div className={styles.pricingDefault}>
      <img className={styles.pricingDefaultChild} alt="" src="/group-1.svg" />
      <img className={styles.pricingDefaultItem} alt="" src="/group-1.svg" />
      <img className={styles.image1Icon} alt="" src="/image-12@2x.png" />
      <PricingPlanContainer1 />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.monthlyParent}>
              <div className={styles.monthly}>Monthly</div>
              <input
                className={styles.frameChild}
                disabled={true}
                type="checkbox"
                onClick={onFrameCheckboxClick}
              />
              <div className={styles.annually}>Annually</div>
            </div>
            <ContainerForm
              pricingText="$199/Mo"
              pricingDescription="$499/Mo"
              pricingValue="$799/Mo"
              yesBorder="1px solid #f2f2f2"
              personalizedAssistanceAndBorder="1px solid #b8b8b8"
              liveChatAlignSelf="stretch"
              yesWidth="unset"
              yesFlex="1"
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
          <div className={styles.nextWrapper}>
            <div className={styles.next}>Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingDefault;
