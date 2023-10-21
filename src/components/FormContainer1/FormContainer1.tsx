import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FormContainer1.css";

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
    <div className="form-container-1-comp-frameWrapper" style={frameDivStyle}>
      <div className="form-container-1-comp-frameContainer">
        <div
          className="form-container-1-comp-howDidYouHearAboutWenloParent"
          style={frameDiv1Style}
        >
          <div className="form-container-1-comp-howDidYouContainer">
            <span>{questionText}</span>
            <span className="form-container-1-comp-span">*</span>
          </div>
          <select
            className="form-container-1-comp-frameChild"
            required={isAnswered}
            form="comment2"
          />
        </div>
      </div>
    </div>
  );
};

export default FormContainer1;
