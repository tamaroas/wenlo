import { FunctionComponent, useCallback } from "react";
import { Link } from "react-router-dom";
import ConfirmPasswordForm from "../../components/ConfirmPasswordForm/ConfirmPasswordForm";
import ThemeColorIdentityDefaultIcon from "../../components/ThemeColorIdentityDefaultIcon/ThemeColorIdentityDefaultIcon";
import ContainerCardForm from "../../components/ContainerCardForm/ContainerCardForm";
import styles from "./Register.module.css";

const Register: FunctionComponent = () => {
  const onAlreadyHaveAnClick = useCallback(() => {
    window.open("/login");
  }, []);

  return (
    <div className={styles.register}>
      <img className={styles.registerChild} alt="" src="/group-1.svg" />
      <img className={styles.registerItem} alt="" src="/group-1.svg" />
      <section className={styles.registerInner} />
      <div className={styles.frameParent}>
        <div className={styles.image1Parent}>
          <img className={styles.image1Icon} alt="" src="/image-11@2x.png" />
          <h4 className={styles.welcomeToWenlo}>Welcome to Wenlo 👋</h4>
        </div>
        <ConfirmPasswordForm />
      </div>
      <div className={styles.frameGroup}>
        <button className={styles.nextWrapper}>
          <div className={styles.next}>Next</div>
        </button>
        <Link
          className={styles.alreadyHaveAnContainer}
          to="/login"
          onClick={onAlreadyHaveAnClick}
        >
          <span
            className={styles.alreadyHaveAn}
          >{`Already have an account? `}</span>
          <span className={styles.signIn}>Sign in</span>
        </Link>
      </div>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
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
        <div className={styles.frameContainer}>
          <div className={styles.image1Parent}>
            <h1 className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
            <h6 className={styles.sedDoEiusmod}>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </h6>
          </div>
          <ContainerCardForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
