/* eslint-disable jsx-a11y/anchor-is-valid */
import { FunctionComponent } from "react";
import styles from "./ActivateAccount.module.css";
import Container from "../../components/Container/Container";
import ConfirmationCard from "../../components/ConfirmationCard/ConfirmationCard";

const ActivateAccount: FunctionComponent = () => {
  return (
    <div className={styles.activateAccount}>
      <img className={styles.activateAccountChild} alt="" src="/group-1.svg" />
      <div className={styles.activateAccountItem} />
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
          activationCodeInput="Enter the activation code"
          confirmationCodeInput="334b86"
        />
        <div className={styles.frameGroup}>
          <button className={styles.submitWrapper}>
            <div className={styles.submit}>Submit</div>
          </button>
          <a className={styles.didntReceiveAContainer} href="#">
            <span
              className={styles.didntReceiveA}
            >{`Didn’t receive a mail, `}</span>
            <span className={styles.clickHere}>click here</span>
            <span className={styles.didntReceiveA}>
              {" "}
              and check your mailbox again.
            </span>
          </a>
        </div>
      </div>
      <div className={styles.activateYourAccountParent}>
        <b className={styles.activateYourAccount}>Activate your account</b>
        <div className={styles.enterTheActivation}>
          Enter the activation code present in your mail
        </div>
      </div>
    </div>
  );
};

export default ActivateAccount;
