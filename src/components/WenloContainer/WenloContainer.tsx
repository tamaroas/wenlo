import { FunctionComponent } from "react";
import styles from "./WenloContainer.module.css";

const WenloContainer: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.ellipseParent}>
        <div className={styles.frameChild} />
        <div className={styles.wenlo}>Wenlo</div>
      </div>
      <div className={styles.ellipseGroup}>
        <div className={styles.frameItem} />
        <div className={styles.wenlo}>Business</div>
      </div>
      <div className={styles.ellipseContainer}>
        <div className={styles.frameItem} />
        <div className={styles.wenlo}>Advertising</div>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector-414.svg" />
      <img className={styles.frameChild1} alt="" src="/vector-414.svg" />
    </div>
  );
};

export default WenloContainer;
