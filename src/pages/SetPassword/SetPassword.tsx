import { FunctionComponent, useCallback } from "react";
import Container from "../../components/Container/Container";
import ConfirmationCard from "../../components/ConfirmationCard/ConfirmationCard";
import { useNavigate } from "react-router-dom";
import styles from "./SetPassword.module.css";

const SetPassword: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/forget-password");
  }, [navigate]);

  return (
    <div className={styles.setPassword}>
      <img className={styles.setPasswordChild} alt="" src="/group-1.svg" />
      <div className={styles.setPasswordItem} />
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
      <div className={styles.frameParent}>
        <ConfirmationCard
          activationCodeInput="Confirmation code"
          confirmationCodeInput="Enter your confirmation code"
        />
        <div className={styles.frameGroup}>
          <button
            className={styles.continueWrapper}
            onClick={onFrameButton1Click}
          >
            <div className={styles.continue}>Continue</div>
          </button>
          <div className={styles.didntGetAContainer}>
            <span className={styles.didntGetA}>{`Didn’t get a code? `}</span>
            <span className={styles.resendCode}>Resend Code</span>
          </div>
        </div>
      </div>
      <div className={styles.forgetPasswordParent}>
        <b className={styles.forgetPassword}>Forget Password</b>
        <div className={styles.weHaveSent}>
          We have sent a confirmation code to Renaldaaji123@gmail.com
        </div>
      </div>
    </div>
  );
};

export default SetPassword;
