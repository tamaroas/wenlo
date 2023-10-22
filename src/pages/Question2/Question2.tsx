import { FunctionComponent, useCallback } from "react";
import Container from "../../components/Container/Container";
import SpendingIssuesFormContainer from "../../components/SpendingIssuesFormContainer/SpendingIssuesFormContainer";
import { useNavigate } from "react-router-dom";
import styles from "./Question2.module.css";

const Question2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer53Click = useCallback(() => {
    navigate("/question1");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/pricing-default");
  }, [navigate]);

  return (
    <div className={styles.question2}>
      <img className={styles.question2Child} alt="" src="/group-1.svg" />
      <div className={styles.question2Item} />
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
        <div className={styles.frameItem} />
        <div className={styles.frameItem} />
      </div>
      <Container />
      <div className={styles.image1Parent}>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <div className={styles.welcomeToWenlo}>Welcome to Wenlo 👋</div>
      </div>
      <div className={styles.vectorParent}>
        <img className={styles.vectorIcon} alt="" src="/vector-4141.svg" />
        <img className={styles.frameChild1} alt="" src="/vector-4141.svg" />
        <div className={styles.ellipseGroup}>
          <div className={styles.frameChild2} />
          <div className={styles.welcomeToWenlo}>Wenlo</div>
        </div>
        <div className={styles.ellipseContainer}>
          <div className={styles.frameChild2} />
          <div className={styles.welcomeToWenlo}>Business</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameChild4} />
          <div className={styles.welcomeToWenlo}>Advertising</div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <SpendingIssuesFormContainer />
        <div className={styles.frameGroup}>
          <div
            className={styles.previousWrapper}
            onClick={onFrameContainer53Click}
          >
            <div className={styles.previous}>Previous</div>
          </div>
          <button className={styles.nextWrapper} onClick={onFrameButton1Click}>
            <div className={styles.next}>Next</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question2;
