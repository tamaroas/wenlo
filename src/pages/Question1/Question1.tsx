import { FunctionComponent, useCallback } from "react";
import Container from "../../components/Container/Container";
import FormContainer1 from "../../components/FormContainer1/FormContainer1";
import { useNavigate } from "react-router-dom";
import styles from "./Question1.module.css";

const Question1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/question2");
  }, [navigate]);

  return (
    <div className={styles.question1}>
      <img className={styles.question1Child} alt="" src="/group-1.svg" />
      <div className={styles.question1Item} />
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
        <img className={styles.frameChild1} alt="" src="/vector-414.svg" />
        <div className={styles.ellipseGroup}>
          <div className={styles.frameChild2} />
          <div className={styles.welcomeToWenlo}>Wenlo</div>
        </div>
        <div className={styles.ellipseContainer}>
          <div className={styles.frameChild3} />
          <div className={styles.welcomeToWenlo}>Business</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameChild4} />
          <div className={styles.welcomeToWenlo}>Advertising</div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <FormContainer1
            questionText="What is the size of your business?"
            propWidth="unset"
            propWidth1="unset"
            propFlex="1"
          />
          <FormContainer1
            questionText="What type of business are you doing?"
            questionSubtitle="texeter"
            propWidth="unset"
            propWidth1="unset"
            propFlex="1"
          />
        </div>
        <div className={styles.frameContainer}>
          <button
            className={styles.previousWrapper}
            onClick={onFrameButton1Click}
          >
            <div className={styles.previous}>Previous</div>
          </button>
          <button className={styles.nextWrapper} onClick={onFrameButton2Click}>
            <div className={styles.next}>Next</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question1;
