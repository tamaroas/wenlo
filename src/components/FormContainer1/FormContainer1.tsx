import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FormContainer1.module.css";

type FormContainer1Type = {
  questionText?: string;
  isAnswered?: boolean;
  questionSubtitle?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
};

const FormContainer1: FunctionComponent<FormContainer1Type> = ({
  questionText,
  isAnswered,
  questionSubtitle,
  propWidth,
  propWidth1,
  propFlex,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      flex: propFlex,
    };
  }, [propWidth1, propFlex]);

  return (
    <div className={styles.frameWrapper} style={frameDivStyle}>
      <div className={styles.frameContainer}>
        <div
          className={styles.howDidYouHearAboutWenloParent}
          style={frameDiv1Style}
        >
          <div className={styles.howDidYouContainer}>
            <span>{questionText}</span>
            <span className={styles.span}>*</span>
          </div>
          <select
            className={styles.frameChild}
            required={isAnswered}
            form="comment2"
          />
        </div>
      </div>
    </div>
  );
};

export default FormContainer1;
