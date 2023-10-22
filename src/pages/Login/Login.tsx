import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import ForgetPasswordForm from "../../components/ForgetPasswordForm/ForgetPasswordForm";
import ThemeColorIdentityDefaultIcon from "../../components/ThemeColorIdentityDefaultIcon/ThemeColorIdentityDefaultIcon";
import ContainerWithFormAndButtons from "../../components/ContainerWithFormAndButtons/ContainerWithFormAndButtons";

const Login: FunctionComponent = () => {
  return (
    <div className={styles.login}>
      <img className={styles.loginChild} alt="" src="/group-1.svg" />
      <img className={styles.loginItem} alt="" src="/group-1.svg" />
      <div className={styles.loginInner} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.image1Parent}>
            <img className={styles.image1Icon} alt="" src="/image-13@2x.png" />
            <div className={styles.welcomeToWenlo}>Welcome to Wenlo 👋</div>
          </div>
          <ForgetPasswordForm />
        </div>
        <div className={styles.frameContainer}>
          <button className={styles.loginWrapper}>
            <div className={styles.login1}>Login</div>
          </button>
          <Link className={styles.doesntHaveAnContainer} to="/register">
            <span
              className={styles.doesntHaveAn}
            >{`Doesn’t have an account? `}</span>
            <span className={styles.signUp}>Sign up</span>
          </Link>
        </div>
      </div>
      <div className={styles.ellipseParent}>
        <img className={styles.frameChild} alt="" src="/ellipse-3@2x.png" />
        <div className={styles.frameItem} />
        <div className={styles.frameItem} />
        <div className={styles.frameItem} />
      </div>
      <div className={styles.astronautParent}>
        <ThemeColorIdentityDefaultIcon
          themeColorIdentityDefault="/astronaut.svg"
          themeColorIdentityDefaultWidth="120px"
          themeColorIdentityDefaultHeight="120px"
          themeColorIdentityDefaultPosition="relative"
          themeColorIdentityDefaultFlexShrink="0"
        />
        <div className={styles.frameDiv}>
          <div className={styles.image1Parent}>
            <b className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </b>
            <div className={styles.sedDoEiusmod}>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </div>
          </div>
          <ContainerWithFormAndButtons />
        </div>
      </div>
    </div>
  );
};

export default Login;
