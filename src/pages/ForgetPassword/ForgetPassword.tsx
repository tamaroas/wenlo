import { FunctionComponent, useCallback } from "react";
import Container from "../../components/Container/Container";
import { useNavigate } from "react-router-dom";
import styles from "./ForgetPassword.module.css";

const ForgetPassword: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.forgetPassword}>
      <img className={styles.forgetPasswordChild} alt="" src="/group-1.svg" />
      <div className={styles.forgetPasswordItem} />
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
        <div className={styles.frameGroup}>
          <div className={styles.newPasswordParent}>
            <div className={styles.newPassword}>
              <span>New password</span>
              <span className={styles.span}>*</span>
            </div>
            <input
              className={styles.frameInput}
              placeholder="Enter your new password"
              type="text"
            />
            <div className={styles.oneCapitalLetterContainer}>
              <span>
                One capital letter required, one special character required, one
                number required
              </span>
              <span className={styles.span}>*</span>
            </div>
          </div>
          <div className={styles.newPasswordParent}>
            <div className={styles.newPassword}>
              <span>Confirm password</span>
              <span className={styles.span}>*</span>
            </div>
            <input
              className={styles.frameInput}
              placeholder="Confirm your new password"
              type="text"
            />
          </div>
        </div>
        <button className={styles.submitWrapper} onClick={onFrameButton1Click}>
          <div className={styles.submit}>Submit</div>
        </button>
      </div>
      <div className={styles.setNewPasswordParent}>
        <b className={styles.setNewPassword}>Set New Password</b>
        <div className={styles.pleaseSetA}>
          Please set a password for your account.
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
