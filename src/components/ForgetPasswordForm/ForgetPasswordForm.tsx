import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./ForgetPasswordForm.module.css";

const ForgetPasswordForm: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <input
        className={styles.frameChild}
        name="email"
        id="email"
        value="Enter your email"
        placeholder="Email"
        type="email"
        defaultValue="Enter your email"
      />
      <input
        className={styles.frameChild}
        name="password"
        id="pasword"
        value="Enter your Password"
        placeholder="Password"
        type="password"
        defaultValue="Enter your Password"
      />
      <Link className={styles.forgetPassword} to="/forget-password">
        Forget Password
      </Link>
    </div>
  );
};

export default ForgetPasswordForm;
