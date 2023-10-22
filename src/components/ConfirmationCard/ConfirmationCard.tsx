import { FunctionComponent } from "react";
import styles from "./ConfirmationCard.module.css";

type ConfirmationCardType = {
  activationCodeInput?: string;
  confirmationCodeInput?: string;
};

const ConfirmationCard: FunctionComponent<ConfirmationCardType> = ({
  activationCodeInput,
  confirmationCodeInput,
}) => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameContainer}>
        <div className={styles.confirmationCodeParent}>
          <div className={styles.confirmationCode}>
            <span>{activationCodeInput}</span>
            <span className={styles.span}>*</span>
          </div>
          <input
            className={styles.frameChild}
            placeholder={confirmationCodeInput}
            type="number"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationCard;
