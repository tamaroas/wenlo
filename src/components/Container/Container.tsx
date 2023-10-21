import { FunctionComponent } from "react";
import "./Container.css";
import ThemeColorIdentityDefaultIcon from "../ThemeColorIdentityDefaultIcon/ThemeColorIdentityDefaultIcon";

const Container: FunctionComponent = () => {
  return (
    <div className="container-comp-astronautParent">
      <ThemeColorIdentityDefaultIcon
        themeColorIdentityDefault="/images/astronaut.svg"
        themeColorIdentityDefaultWidth="120px"
        themeColorIdentityDefaultHeight="120px"
        themeColorIdentityDefaultPosition="relative"
        themeColorIdentityDefaultFlexShrink="0"
      />
      <div className="container-comp-frameParent">
        <div className="container-comp-loremIpsumDolorSitAmetCoParent">
          <b className="container-comp-loremIpsumDolor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </b>
          <div className="container-comp-sedDoEiusmod">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat
          </div>
        </div>
        <div className="container-comp-frameGroup">
          <div className="container-comp-frameContainer">
            <div className="container-comp-frameDiv">
              <div className="container-comp-amountDueParent">
                <div className="container-comp-amountDue">Amount Due</div>
                <div className="container-comp-invoicesAreIssued">
                  Invoices are issued between the 1st and 5th of each month and
                  are due 30 days later.
                </div>
              </div>
              <img
                className="container-comp-moreVertIcon"
                alt=""
                src="images/more-vert.svg"
              />
            </div>
            <div className="container-comp-parent">
              <b className="container-comp-b">$26,667.73</b>
              <button className="container-comp-payNowWrapper">
                <div className="container-comp-payNow">Pay now</div>
              </button>
            </div>
            <div className="container-comp-accountSpendingLimit2781Parent">
              <div className="container-comp-accountSpendingLimit2781Parent">
                <div className="container-comp-b">
                  <span
                    className="container-comp-accountSpendingLimit"
                  >{`Account Spending Limit: `}</span>
                  <b>$27,810.00</b>
                </div>
                <div className="container-comp-groupWrapper">
                  <div className="container-comp-rectangleParent">
                    <div className="container-comp-groupChild" />
                    <div className="container-comp-groupItem" />
                  </div>
                </div>
              </div>
              <div className="container-comp-ellipseParent">
                <div className="container-comp-frameChild" />
                <div className="container-comp-spent2781000Container">
                  <span
                    className="container-comp-accountSpendingLimit"
                  >{`$26,667.73 spent / `}</span>
                  <span className="container-comp-available">$27,810.00 available</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container-comp-frameParent2">
            <div className="container-comp-frameDiv">
              <div className="container-comp-amountDueParent">
                <div className="container-comp-amountDue">Amount Due</div>
                <div className="container-comp-invoicesAreIssued">
                  Invoices are issued between the 1st and 5th of each month and
                  are due 30 days later.
                </div>
              </div>
              <img
                className="container-comp-moreVertIcon"
                alt=""
                src="images/more-vert.svg"
              />
            </div>
            <div className="container-comp-group">
              <b className="container-comp-b">$26,667.73</b>
              <div className="container-comp-payNowContainer">
                <div className="container-comp-payNow1">Pay now</div>
              </div>
            </div>
            <div className="container-comp-accountSpendingLimit2781Parent">
              <div className="container-comp-accountSpendingLimit2781Parent">
                <div className="container-comp-b">
                  <span
                    className="container-comp-accountSpendingLimit"
                  >{`Account Spending Limit: `}</span>
                  <b>$27,810.00</b>
                </div>
                <div className="container-comp-groupWrapper">
                  <div className="container-comp-rectangleGroup">
                    <div className="container-comp-groupInner" />
                    <div className="container-comp-groupItem" />
                  </div>
                </div>
              </div>
              <div className="container-comp-ellipseParent">
                <div className="container-comp-frameChild" />
                <div className="container-comp-spent2781000Container">
                  <span
                    className="container-comp-accountSpendingLimit"
                  >{`$26,667.73 spent / `}</span>
                  <span className="container-comp-available">$27,810.00 available</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container-comp-frameParent5">
            <div className="container-comp-frameDiv">
              <div className="container-comp-amountDueParent">
                <div className="container-comp-amountDue">Amount Due</div>
                <div className="container-comp-invoicesAreIssued">
                  Invoices are issued between the 1st and 5th of each month and
                  are due 30 days later.
                </div>
              </div>
              <img
                className="container-comp-moreVertIcon"
                alt=""
                src="images/more-vert.svg"
              />
            </div>
            <div className="container-comp-group">
              <b className="container-comp-b">$26,667.73</b>
              <div className="container-comp-payNowContainer">
                <div className="container-comp-payNow1">Pay now</div>
              </div>
            </div>
            <div className="container-comp-accountSpendingLimit2781Parent">
              <div className="container-comp-accountSpendingLimit2781Parent">
                <div className="container-comp-b">
                  <span
                    className="container-comp-accountSpendingLimit"
                  >{`Account Spending Limit: `}</span>
                  <b>$27,810.00</b>
                </div>
                <div className="container-comp-groupWrapper">
                  <div className="container-comp-rectangleContainer">
                    <div className="container-comp-groupChild1" />
                    <div className="container-comp-groupItem" />
                  </div>
                </div>
              </div>
              <div className="container-comp-ellipseParent">
                <div className="container-comp-frameChild" />
                <div className="container-comp-spent2781000Container">
                  <span
                    className="container-comp-accountSpendingLimit"
                  >{`$26,667.73 spent / `}</span>
                  <span className="container-comp-available">$27,810.00 available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
