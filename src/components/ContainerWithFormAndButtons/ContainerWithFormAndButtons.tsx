import { FunctionComponent } from 'react';
import './ContainerWithFormAndButtons.css';
import FormContainer from '../FormContainer/FormContainer';

const ContainerWithFormAndButtons: FunctionComponent = () => {
  return (
    <div className="container-with-form-and-buttons-comp-frameParent">
      <div className="container-with-form-and-buttons-comp-frameGroup">
        <div className="container-with-form-and-buttons-comp-frameContainer">
          <div className="container-with-form-and-buttons-comp-amountDueParent">
            <div className="container-with-form-and-buttons-comp-amountDue">
              Amount Due
            </div>
            <div className="container-with-form-and-buttons-comp-invoicesAreIssued">
              Invoices are issued between the 1st and 5th of each month and are
              due 30 days later.
            </div>
          </div>
          <img
            className="container-with-form-and-buttons-comp-moreVertIcon"
            alt=""
            src="images/more-vert.svg"
          />
        </div>
        <div className="container-with-form-and-buttons-comp-parent">
          <b className="container-with-form-and-buttons-comp-b">$26,667.73</b>
          <button className="container-with-form-and-buttons-comp-payNowWrapper">
            <div className="container-with-form-and-buttons-comp-payNow">
              Pay now
            </div>
          </button>
        </div>
        <div className="container-with-form-and-buttons-comp-frameDiv">
          <div className="container-with-form-and-buttons-comp-frameDiv">
            <div className="container-with-form-and-buttons-comp-b">
              <span className="container-with-form-and-buttons-comp-accountSpendingLimit">{`Account Spending Limit: `}</span>
              <b>$27,810.00</b>
            </div>
            <div className="container-with-form-and-buttons-comp-frameWrapper">
              <div className="container-with-form-and-buttons-comp-rectangleWrapper">
                <div className="container-with-form-and-buttons-comp-frameChild" />
              </div>
            </div>
          </div>
          <div className="container-with-form-and-buttons-comp-ellipseParent">
            <div className="container-with-form-and-buttons-comp-frameItem" />
            <div className="container-with-form-and-buttons-comp-spent2781000Container">
              <span className="container-with-form-and-buttons-comp-accountSpendingLimit">{`$26,667.73 spent / `}</span>
              <span className="container-with-form-and-buttons-comp-available">
                $27,810.00 available
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-with-form-and-buttons-comp-frameParent1">
        <div className="container-with-form-and-buttons-comp-frameContainer">
          <div className="container-with-form-and-buttons-comp-amountDueParent">
            <div className="container-with-form-and-buttons-comp-amountDue">
              Amount Due
            </div>
            <div className="container-with-form-and-buttons-comp-invoicesAreIssued">
              Invoices are issued between the 1st and 5th of each month and are
              due 30 days later.
            </div>
          </div>
          <img
            className="container-with-form-and-buttons-comp-moreVertIcon"
            alt=""
            src="images/more-vert.svg"
          />
        </div>
        <div className="container-with-form-and-buttons-comp-group">
          <b className="container-with-form-and-buttons-comp-b">$26,667.73</b>
          <div className="container-with-form-and-buttons-comp-payNowContainer">
            <div className="container-with-form-and-buttons-comp-payNow1">
              Pay now
            </div>
          </div>
        </div>
        <div className="container-with-form-and-buttons-comp-frameDiv">
          <div className="container-with-form-and-buttons-comp-frameDiv">
            <div className="container-with-form-and-buttons-comp-b">
              <span className="container-with-form-and-buttons-comp-accountSpendingLimit">{`Account Spending Limit: `}</span>
              <b>$27,810.00</b>
            </div>
            <div className="container-with-form-and-buttons-comp-frameWrapper">
              <div className="container-with-form-and-buttons-comp-rectangleContainer">
                <div className="container-with-form-and-buttons-comp-frameChild" />
              </div>
            </div>
          </div>
          <div className="container-with-form-and-buttons-comp-ellipseParent">
            <div className="container-with-form-and-buttons-comp-frameItem" />
            <div className="container-with-form-and-buttons-comp-spent2781000Container">
              <span className="container-with-form-and-buttons-comp-accountSpendingLimit">{`$26,667.73 spent / `}</span>
              <span className="container-with-form-and-buttons-comp-available">
                $27,810.00 available
              </span>
            </div>
          </div>
        </div>
      </div>
      <FormContainer />
    </div>
  );
};

export default ContainerWithFormAndButtons;
