import { FunctionComponent } from "react";
import styles from "./Container.module.css";
import ThemeColorIdentityDefaultIcon from "../ThemeColorIdentityDefaultIcon/ThemeColorIdentityDefaultIcon";

const Container: FunctionComponent = () => {
  return (
    <div className={styles.astronautParent}>
      <ThemeColorIdentityDefaultIcon
        themeColorIdentityDefault="/astronaut.svg"
        themeColorIdentityDefaultWidth="120px"
        themeColorIdentityDefaultHeight="120px"
        themeColorIdentityDefaultPosition="relative"
        themeColorIdentityDefaultFlexShrink="0"
      />
      <div className={styles.frameParent}>
        <div className={styles.loremIpsumDolorSitAmetCoParent}>
          <b className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </b>
          <div className={styles.sedDoEiusmod}>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.amountDueParent}>
                <div className={styles.amountDue}>Amount Due</div>
                <div className={styles.invoicesAreIssued}>
                  Invoices are issued between the 1st and 5th of each month and
                  are due 30 days later.
                </div>
              </div>
              <img
                className={styles.moreVertIcon}
                alt=""
                src="/more-vert.svg"
              />
            </div>
            <div className={styles.parent}>
              <b className={styles.b}>$26,667.73</b>
              <button className={styles.payNowWrapper}>
                <div className={styles.payNow}>Pay now</div>
              </button>
            </div>
            <div className={styles.accountSpendingLimit2781Parent}>
              <div className={styles.accountSpendingLimit2781Parent}>
                <div className={styles.b}>
                  <span
                    className={styles.accountSpendingLimit}
                  >{`Account Spending Limit: `}</span>
                  <b>$27,810.00</b>
                </div>
                <div className={styles.groupWrapper}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.groupChild} />
                    <div className={styles.groupItem} />
                  </div>
                </div>
              </div>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <div className={styles.spent2781000Container}>
                  <span
                    className={styles.accountSpendingLimit}
                  >{`$26,667.73 spent / `}</span>
                  <span className={styles.available}>$27,810.00 available</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameDiv}>
              <div className={styles.amountDueParent}>
                <div className={styles.amountDue}>Amount Due</div>
                <div className={styles.invoicesAreIssued}>
                  Invoices are issued between the 1st and 5th of each month and
                  are due 30 days later.
                </div>
              </div>
              <img
                className={styles.moreVertIcon}
                alt=""
                src="/more-vert.svg"
              />
            </div>
            <div className={styles.group}>
              <b className={styles.b}>$26,667.73</b>
              <div className={styles.payNowContainer}>
                <div className={styles.payNow1}>Pay now</div>
              </div>
            </div>
            <div className={styles.accountSpendingLimit2781Parent}>
              <div className={styles.accountSpendingLimit2781Parent}>
                <div className={styles.b}>
                  <span
                    className={styles.accountSpendingLimit}
                  >{`Account Spending Limit: `}</span>
                  <b>$27,810.00</b>
                </div>
                <div className={styles.groupWrapper}>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.groupInner} />
                    <div className={styles.groupItem} />
                  </div>
                </div>
              </div>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <div className={styles.spent2781000Container}>
                  <span
                    className={styles.accountSpendingLimit}
                  >{`$26,667.73 spent / `}</span>
                  <span className={styles.available}>$27,810.00 available</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.frameDiv}>
              <div className={styles.amountDueParent}>
                <div className={styles.amountDue}>Amount Due</div>
                <div className={styles.invoicesAreIssued}>
                  Invoices are issued between the 1st and 5th of each month and
                  are due 30 days later.
                </div>
              </div>
              <img
                className={styles.moreVertIcon}
                alt=""
                src="/more-vert.svg"
              />
            </div>
            <div className={styles.group}>
              <b className={styles.b}>$26,667.73</b>
              <div className={styles.payNowContainer}>
                <div className={styles.payNow1}>Pay now</div>
              </div>
            </div>
            <div className={styles.accountSpendingLimit2781Parent}>
              <div className={styles.accountSpendingLimit2781Parent}>
                <div className={styles.b}>
                  <span
                    className={styles.accountSpendingLimit}
                  >{`Account Spending Limit: `}</span>
                  <b>$27,810.00</b>
                </div>
                <div className={styles.groupWrapper}>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.groupChild1} />
                    <div className={styles.groupItem} />
                  </div>
                </div>
              </div>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <div className={styles.spent2781000Container}>
                  <span
                    className={styles.accountSpendingLimit}
                  >{`$26,667.73 spent / `}</span>
                  <span className={styles.available}>$27,810.00 available</span>
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
