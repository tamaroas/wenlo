import { FunctionComponent } from "react";
import Footer from "../../components/Footer/Footer";
import InvoiceFormContainer from "../../components/InvoiceFormContainer/InvoiceFormContainer";
import styles from "./PricingPaymentMethod.module.css";

const PricingPaymentMethod: FunctionComponent = () => {
  return (
    <div className={styles.pricingPaymentMethod}>
      <img
        className={styles.pricingPaymentMethodChild}
        alt=""
        src="/group-1.svg"
      />
      <div className={styles.pricingPaymentMethodInner}>
        <div className={styles.image1Parent}>
          <img className={styles.image1Icon} alt="" src="/image-11@2x.png" />
          <div className={styles.choosePaymentMethodParent}>
            <b className={styles.choosePaymentMethod}>Choose Payment Method</b>
            <div className={styles.sedDoEiusmod}>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.backParent}>
          <div className={styles.back}>Back</div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
          </div>
        </div>
        <div className={styles.payNowWrapper}>
          <div className={styles.payNow}>Pay Now</div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameParent1}>
              <div className={styles.premiumPlanParent}>
                <div className={styles.premiumPlan}>Premium Plan</div>
                <div className={styles.saveUpTo15Wrapper}>
                  <div className={styles.saveUpTo}>Save up to 15%</div>
                </div>
              </div>
              <div className={styles.sedDoEiusmod1}>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.parent}>
                <div className={styles.premiumPlan}>$14.99</div>
                <div className={styles.nextRenew24}>
                  (Next renew 24 April 2024)
                </div>
              </div>
            </div>
          </div>
          <div className={styles.choosedPaymentMethodParent}>
            <div className={styles.choosedPaymentMethodContainer}>
              <span>Choosed payment method</span>
              <span className={styles.span}>*</span>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.afterChoosedThePaymentMethParent}>
                <div className={styles.choosedPaymentMethodContainer}>
                  After choosed the payment method of your choice, make the
                  payment according to the details displayed below.
                </div>
                <div className={styles.tab}>
                  <div className={styles.item}>
                    <div className={styles.debitCardParent}>
                      <div className={styles.premiumPlan}>Debit Card</div>
                      <img
                        className={styles.stripeIcon}
                        alt=""
                        src="/stripe.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.afterChoosedThePaymentMethParent}>
                  <div className={styles.choosedPaymentMethodContainer}>
                    {" "}
                    Card holdername
                  </div>
                  <div className={styles.gabrielaHudgesParent}>
                    <div className={styles.saveUpTo}>Gabriela Hudges</div>
                    <img
                      className={styles.copy01Icon}
                      alt=""
                      src="/copy01.svg"
                    />
                  </div>
                </div>
                <div className={styles.afterChoosedThePaymentMethParent}>
                  <div className={styles.choosedPaymentMethodContainer}>
                    {" "}
                    Card number
                  </div>
                  <div className={styles.group}>
                    <div className={styles.saveUpTo}>4591 6456 5666 5645</div>
                    <img
                      className={styles.copy01Icon}
                      alt=""
                      src="/copy01.svg"
                    />
                    <img className={styles.visa11} alt="" src="/visa-1-1.svg" />
                  </div>
                </div>
                <div className={styles.frameParent4}>
                  <Footer
                    paymentCardExpirationDate="Expiration date"
                    cardExpirationDate="10/27"
                  />
                  <Footer
                    paymentCardExpirationDate="CVC"
                    cardExpirationDate="123"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.overlayWrapper}>
        <div className={styles.overlay} />
      </div>
      <InvoiceFormContainer />
    </div>
  );
};

export default PricingPaymentMethod;
