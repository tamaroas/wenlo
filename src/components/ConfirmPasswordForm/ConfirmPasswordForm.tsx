import { FunctionComponent } from "react";
import styles from "./ConfirmPasswordForm.module.css";

const ConfirmPasswordForm: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.firstNameParent}>
          <h5 className={styles.firstName}>First name</h5>
          <input className={styles.frameChild} name="name" type="text" />
        </div>
        <div className={styles.firstNameParent}>
          <h5 className={styles.firstName}>Last name</h5>
          <input className={styles.frameChild} name="lastname" type="text" />
        </div>
      </div>
      <div className={styles.emailParent}>
        <h5 className={styles.firstName}>Email</h5>
        <input className={styles.frameInner} name="email" type="email" />
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.firstNameParent}>
          <h5 className={styles.firstName}>New password</h5>
          <div className={styles.frameWrapper}>
            <input
              className={styles.frameInput}
              type="password"
              minLength={4}
            />
          </div>
          <h6 className={styles.oneCapitalLetterContainer}>
            <span>
              One capital letter required, one special character required, one
              number required
            </span>
            <span className={styles.span}>*</span>
          </h6>
        </div>
        <div className={styles.firstNameParent}>
          <h5 className={styles.firstName}>Confirm password</h5>
          <div className={styles.frameWrapper}>
            <input
              className={styles.frameInput}
              type="password"
              minLength={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPasswordForm;
