import { FunctionComponent, useCallback } from "react";
import Container from "../../components/Container/Container";
import WenloContainer from "../../components/WenloContainer/WenloContainer";
import FormContainer1 from "../../components/FormContainer1/FormContainer1"; 
import { useNavigate } from "react-router-dom";
import styles from "./Question.module.css";

const Question: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/question1");
  }, [navigate]);
  return (
    <div className={styles.question}>
      <img className={styles.questionChild} alt="" src="/group-1.svg" />
      <div className={styles.questionItem} />
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
      <WenloContainer />
      <div className={styles.frameParent}>
        <FormContainer1
          questionText="How did you hear about Wenlo?"
          isAnswered={true}
        />
        <div className={styles.frameGroup}>
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

export default Question;
