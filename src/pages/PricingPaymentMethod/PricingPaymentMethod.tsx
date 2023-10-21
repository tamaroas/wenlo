import { FunctionComponent } from 'react';
import './PricingPaymentMethod.css';
import Footer from '../../components/Footer/Footer';
import InvoiceFormContainer from '../../components/InvoiceFormContainer/InvoiceFormContainer';

const PricingPaymentMethod: FunctionComponent = () => {
  return (
    <div className="pricing-payment-method-pricingPaymentMethod">
      <img
        className="pricing-payment-method-pricingPaymentMethodChild"
        alt=""
        src="images/group-1.svg"
      />
      <div className="pricing-payment-method-pricingPaymentMethodInner">
        <div className="pricing-payment-method-image1Parent">
          <img
            className="pricing-payment-method-image1Icon"
            alt=""
            src="images/image-11@2x.png"
          />
          <div className="pricing-payment-method-choosePaymentMethodParent">
            <b className="pricing-payment-method-choosePaymentMethod">
              Choose Payment Method
            </b>
            <div className="pricing-payment-method-sedDoEiusmod">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-payment-method-frameParent">
        <div className="pricing-payment-method-backParent">
          <div className="pricing-payment-method-back">Back</div>
          <div className="pricing-payment-method-rectangleParent">
            <div className="pricing-payment-method-groupChild" />
            <div className="pricing-payment-method-groupItem" />
          </div>
          <div className="pricing-payment-method-rectangleGroup">
            <div className="pricing-payment-method-groupChild" />
            <div className="pricing-payment-method-groupItem" />
          </div>
        </div>
        <div className="pricing-payment-method-payNowWrapper">
          <div className="pricing-payment-method-payNow">Pay Now</div>
        </div>
      </div>
      <div className="pricing-payment-method-frameDiv">
        <div className="pricing-payment-method-frameGroup">
          <div className="pricing-payment-method-frameContainer">
            <div className="pricing-payment-method-frameParent1">
              <div className="pricing-payment-method-premiumPlanParent">
                <div className="pricing-payment-method-premiumPlan">
                  Premium Plan
                </div>
                <div className="pricing-payment-method-saveUpTo15Wrapper">
                  <div className="pricing-payment-method-saveUpTo">
                    Save up to 15%
                  </div>
                </div>
              </div>
              <div className="pricing-payment-method-sedDoEiusmod1">
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </div>
            </div>
            <div className="pricing-payment-method-frameWrapper">
              <div className="pricing-payment-method-parent">
                <div className="pricing-payment-method-premiumPlan">$14.99</div>
                <div className="pricing-payment-method-nextRenew24">
                  (Next renew 24 April 2024)
                </div>
              </div>
            </div>
          </div>
          <div className="pricing-payment-method-choosedPaymentMethodParent">
            <div className="pricing-payment-method-choosedPaymentMethodContainer">
              <span>Choosed payment method</span>
              <span className="pricing-payment-method-span">*</span>
            </div>
            <div className="pricing-payment-method-frameParent2">
              <div className="pricing-payment-method-afterChoosedThePaymentMethParent">
                <div className="pricing-payment-method-choosedPaymentMethodContainer">
                  After choosed the payment method of your choice, make the
                  payment according to the details displayed below.
                </div>
                <div className="pricing-payment-method-tab">
                  <div className="pricing-payment-method-item">
                    <div className="pricing-payment-method-debitCardParent">
                      <div className="pricing-payment-method-premiumPlan">
                        Debit Card
                      </div>
                      <img
                        className="pricing-payment-method-stripeIcon"
                        alt=""
                        src="images/stripe.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pricing-payment-method-frameParent3">
                <div className="pricing-payment-method-afterChoosedThePaymentMethParent">
                  <div className="pricing-payment-method-choosedPaymentMethodContainer">
                    {' '}
                    Card holdername
                  </div>
                  <div className="pricing-payment-method-gabrielaHudgesParent">
                    <div className="pricing-payment-method-saveUpTo">
                      Gabriela Hudges
                    </div>
                    <img
                      className="pricing-payment-method-copy01Icon"
                      alt=""
                      src="images/copy01.svg"
                    />
                  </div>
                </div>
                <div className="pricing-payment-method-afterChoosedThePaymentMethParent">
                  <div className="pricing-payment-method-choosedPaymentMethodContainer">
                    {' '}
                    Card number
                  </div>
                  <div className="pricing-payment-method-group">
                    <div className="pricing-payment-method-saveUpTo">
                      4591 6456 5666 5645
                    </div>
                    <img
                      className="pricing-payment-method-copy01Icon"
                      alt=""
                      src="images/copy01.svg"
                    />
                    <img
                      className="pricing-payment-method-visa11"
                      alt=""
                      src="images/visa-1-1.svg"
                    />
                  </div>
                </div>
                <div className="pricing-payment-method-frameParent4">
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
      <div className="pricing-payment-method-overlayWrapper">
        <div className="pricing-payment-method-overlay" />
      </div>
      <InvoiceFormContainer />
    </div>
  );
};

export default PricingPaymentMethod;
