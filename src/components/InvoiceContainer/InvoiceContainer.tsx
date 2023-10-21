import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./InvoiceContainer.css";

type InvoiceContainerType = {
  requestStatusMessage?: string;
  requestStatusIcon?: string;

  /** Style props */
  buttonColor?: CSSProperties["color"];
};

const InvoiceContainer: FunctionComponent<InvoiceContainerType> = ({
  requestStatusMessage,
  requestStatusIcon,
  buttonColor,
}) => {
  const supportingTextStyle: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  return (
    <div className="invoice-container-comp-header">
      <div className="invoice-container-comp-textAndSupportingText">
        <div className="invoice-container-comp-title">
          <b className="invoice-container-comp-text">{`Invoice `}</b>
          <div className="invoice-container-comp-text1">#8FB28438-0001</div>
        </div>
        <div className="invoice-container-comp-emergencyHomeParent">
          <img
            className="invoice-container-comp-emergencyHomeIcon"
            alt=""
            src={requestStatusMessage}
          />
          <div className="invoice-container-comp-supportingText" style={supportingTextStyle}>
            {requestStatusIcon}
          </div>
        </div>
      </div>
      <div className="invoice-container-comp-button">
        <img className="invoice-container-comp-xCloseIcon" alt="" src="images/xclose.svg" />
      </div>
    </div>
  );
};

export default InvoiceContainer;
