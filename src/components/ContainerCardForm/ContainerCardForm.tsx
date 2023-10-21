import { FunctionComponent } from 'react';
import './ContainerCardForm.css';
import FormContainer from '../FormContainer/FormContainer';

const ContainerCardForm: FunctionComponent = () => {
  return (
    <div className="container-card-form-comp-frameParent">
      <div className="container-card-form-comp-frameGroup">
        <div className="container-card-form-comp-frameContainer">
          <div className="container-card-form-comp-amountDueParent">
            <h5 className="container-card-form-comp-amountDue">Amount Due</h5>
            <h6 className="container-card-form-comp-invoicesAreIssued">
              Invoices are issued between the 1st and 5th of each month and are
              due 30 days later.
            </h6>
          </div>
          <img
            className="container-card-form-comp-moreVertIcon"
            alt=""
            src="images/more-vert.svg"
          />
        </div>
        <div className="container-card-form-comp-parent">
          <h4 className="container-card-form-comp-h4">$26,667.73</h4>
          <button className="container-card-form-comp-payNowWrapper">
            <div className="container-card-form-comp-payNow">Pay now</div>
          </button>
        </div>
        <div className="container-card-form-comp-frameDiv">
          <div className="container-card-form-comp-frameDiv">
            <h4 className="container-card-form-comp-accountSpendingLimitContainer">
              <span className="container-card-form-comp-accountSpendingLimit">{`Account Spending Limit: `}</span>
              <b>$27,810.00</b>
            </h4>
            <div className="container-card-form-comp-groupWrapper">
              <div className="container-card-form-comp-rectangleParent">
                <div className="container-card-form-comp-groupChild" />
                <div className="container-card-form-comp-groupItem" />
              </div>
            </div>
          </div>
          <div className="container-card-form-comp-ellipseParent">
            <div className="container-card-form-comp-frameChild" />
            <h5 className="container-card-form-comp-spent2781000Container">
              <span className="container-card-form-comp-accountSpendingLimit">{`$26,667.73 spent / `}</span>
              <span className="container-card-form-comp-available">
                $27,810.00 available
              </span>
            </h5>
          </div>
        </div>
      </div>
      <FormContainer
        propWidth="408px"
        propZIndex="1"
        propBorderRadius="unset"
        propWidth1="368px"
        propWidth2="368px"
      />
      <FormContainer
        propWidth="376px"
        propZIndex="0"
        propBorderRadius="unset"
        propWidth1="336px"
        propWidth2="336px"
      />
    </div>
  );
};

export default ContainerCardForm;
