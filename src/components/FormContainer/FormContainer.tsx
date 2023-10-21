import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FormContainer.css";

type FormContainerType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propZIndex?: CSSProperties["zIndex"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  propWidth,
  propZIndex,
  propBorderRadius,
  propWidth1,
  propWidth2,
}) => {
  const frameDiv7Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      zIndex: propZIndex,
    };
  }, [propWidth, propZIndex]);

  const frameDiv8Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      width: propWidth1,
    };
  }, [propBorderRadius, propWidth1]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className="form-container-comp-frameParent" style={frameDiv7Style}>
      <div className="form-container-comp-frameGroup">
        <div className="form-container-comp-amountDueParent">
          <div className="form-container-comp-amountDue">Amount Due</div>
          <div className="form-container-comp-invoicesAreIssued">
            Invoices are issued between the 1st and 5th of each month and are
            due 30 days later.
          </div>
        </div>
        <img className="form-container-comp-moreVertIcon" alt="" src="images/more-vert.svg" />
      </div>
      <div className="form-container-comp-parent">
        <b className="form-container-comp-b">$26,667.73</b>
        <div className="form-container-comp-payNowWrapper">
          <div className="form-container-comp-payNow">Pay now</div>
        </div>
      </div>
      <div className="form-container-comp-frameContainer">
        <div className="form-container-comp-frameContainer">
          <div className="form-container-comp-b">
            <span
              className="form-container-comp-accountSpendingLimit"
            >{`Account Spending Limit: `}</span>
            <b>$27,810.00</b>
          </div>
          <div className="form-container-comp-frameWrapper">
            <div className="form-container-comp-rectangleParent" style={frameDiv8Style}>
              <div className="form-container-comp-frameChild" style={rectangleDivStyle} />
              <div className="form-container-comp-frameItem" />
            </div>
          </div>
        </div>
        <div className="form-container-comp-ellipseParent">
          <div className="form-container-comp-frameInner" />
          <div className="form-container-comp-spent2781000Container">
            <span
              className="form-container-comp-accountSpendingLimit"
            >{`$26,667.73 spent / `}</span>
            <span className="form-container-comp-available">$27,810.00 available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
