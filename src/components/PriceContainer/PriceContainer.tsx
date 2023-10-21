import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./PriceContainer.css";

type PriceContainerType = {
  price?: string;
  priceText?: string;
  itemPrice?: string;
  itemPriceText?: string;

  /** Style props */
  frameDivBorder?: CSSProperties["border"];
  frameDivBorder1?: CSSProperties["border"];
};

const PriceContainer: FunctionComponent<PriceContainerType> = ({
  price,
  priceText,
  itemPrice,
  itemPriceText,
  frameDivBorder,
  frameDivBorder1,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      border: frameDivBorder,
    };
  }, [frameDivBorder]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      border: frameDivBorder1,
    };
  }, [frameDivBorder1]);

  return (
    <div className="price-container-comp-frameParent">
      <div className="price-container-comp-frameGroup">
        <div className="price-container-comp-frameContainer">
          <div className="price-container-comp-frameDiv">
            <div className="price-container-comp-frameParent1">
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-starterPlan">Starter Plan</div>
                <div className="price-container-comp-frameChild" />
              </div>
              <div
                className="price-container-comp-sedDoEiusmod"
              >{`Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut `}</div>
            </div>
            <div className="price-container-comp-frameParent2">
              <div className="price-container-comp-saveUpTo15Wrapper">
                <div className="price-container-comp-saveUpTo">Save up to 15%</div>
              </div>
              <div className="price-container-comp-parent">
                <div className="price-container-comp-starterPlan">{price}</div>
                <div className="price-container-comp-month">/Month</div>
              </div>
            </div>
          </div>
          <div className="price-container-comp-getStartedParent">
            <div className="price-container-comp-saveUpTo">Get Started</div>
            <img
              className="price-container-comp-arrowNarrowRightIcon"
              alt=""
              src="images/arrownarrowright.svg"
            />
          </div>
        </div>
        <div className="price-container-comp-frameParent3">
          <div className="price-container-comp-frameWrapper">
            <div className="price-container-comp-frameParent4">
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-topUpFee">Top-up fee</div>
                <div className="price-container-comp-yes">9%</div>
              </div>
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-maximumAdAccountsContainer">
                  <p
                    className="price-container-comp-maximumAdAccounts"
                  >{`Maximum ad accounts `}</p>
                  <p className="price-container-comp-maximumAdAccounts">per month</p>
                </div>
                <div className="price-container-comp-yes">3</div>
              </div>
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-maximumAdAccountsContainer">
                  Restricted ad account review service
                </div>
                <div className="price-container-comp-yes">Yes</div>
              </div>
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-maximumAdAccountsContainer">
                  Priority in request processing (Top-up, ad account, balance
                  transfer ...)
                </div>
                <div className="price-container-comp-yes">Low</div>
              </div>
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-maximumAdAccountsContainer">
                  Management of all advertising platforms (Meta, Google, TikTok,
                  Bing, Snapchat, Twitter…)
                </div>
                <div className="price-container-comp-yes">Yes</div>
              </div>
            </div>
          </div>
          <div className="price-container-comp-seeCompareParent">
            <div className="price-container-comp-saveUpTo">See Compare</div>
            <img
              className="price-container-comp-arrowNarrowRightIcon"
              alt=""
              src="images/arrowcircleright.svg"
            />
          </div>
        </div>
      </div>
      <div className="price-container-comp-frameGroup">
        <div className="price-container-comp-frameContainer">
          <div className="price-container-comp-frameDiv">
            <div className="price-container-comp-frameParent1">
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-starterPlan">Standart Plan</div>
                <div className="price-container-comp-frameChild" />
              </div>
              <div
                className="price-container-comp-sedDoEiusmod"
              >{`Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut `}</div>
            </div>
            <div className="price-container-comp-frameParent2">
              <div className="price-container-comp-saveUpTo15Wrapper">
                <div className="price-container-comp-saveUpTo">Save up to 15%</div>
              </div>
              <div className="price-container-comp-parent">
                <div className="price-container-comp-starterPlan">{priceText}</div>
                <div className="price-container-comp-month">/Month</div>
              </div>
            </div>
          </div>
          <div className="price-container-comp-getStartedParent">
            <div className="price-container-comp-saveUpTo">Get Started</div>
            <img
              className="price-container-comp-arrowNarrowRightIcon"
              alt=""
              src="images/arrownarrowright.svg"
            />
          </div>
        </div>
        <div className="price-container-comp-frameParent3">
          <div className="price-container-comp-frameWrapper">
            <div className="price-container-comp-frameParent4">
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-topUpFee">Top-up fee</div>
                <div className="price-container-comp-yes">9%</div>
              </div>
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-maximumAdAccountsContainer">
                  <p
                    className="price-container-comp-maximumAdAccounts"
                  >{`Maximum ad accounts `}</p>
                  <p className="price-container-comp-maximumAdAccounts">per month</p>
                </div>
                <div className="price-container-comp-yes">3</div>
              </div>
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-maximumAdAccountsContainer">
                  Restricted ad account review service
                </div>
                <div className="price-container-comp-yes">Yes</div>
              </div>
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-maximumAdAccountsContainer">
                  Priority in request processing (Top-up, ad account, balance
                  transfer ...)
                </div>
                <div className="price-container-comp-yes">Low</div>
              </div>
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-maximumAdAccountsContainer">
                  Management of all advertising platforms (Meta, Google, TikTok,
                  Bing, Snapchat, Twitter…)
                </div>
                <div className="price-container-comp-yes">Yes</div>
              </div>
            </div>
          </div>
          <div className="price-container-comp-seeCompareParent">
            <div className="price-container-comp-saveUpTo">See Compare</div>
            <img
              className="price-container-comp-arrowNarrowRightIcon"
              alt=""
              src="images/arrowcircleright.svg"
            />
          </div>
        </div>
      </div>
      <div className="price-container-comp-frameParent12" style={frameDiv2Style}>
        <div className="price-container-comp-frameContainer">
          <div className="price-container-comp-frameDiv">
            <div className="price-container-comp-frameParent1">
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-starterPlan">Premium Plan</div>
                <div className="price-container-comp-frameInner" style={ellipseDivStyle} />
              </div>
              <div
                className="price-container-comp-sedDoEiusmod"
              >{`Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut `}</div>
            </div>
            <div className="price-container-comp-frameParent2">
              <div className="price-container-comp-saveUpTo15Wrapper">
                <div className="price-container-comp-saveUpTo">Save up to 15%</div>
              </div>
              <div className="price-container-comp-parent">
                <div className="price-container-comp-starterPlan">{itemPrice}</div>
                <div className="price-container-comp-month">/Month</div>
              </div>
            </div>
          </div>
          <div className="price-container-comp-getStartedParent">
            <div className="price-container-comp-saveUpTo">Get Started</div>
            <img
              className="price-container-comp-arrowNarrowRightIcon"
              alt=""
              src="images/arrownarrowright.svg"
            />
          </div>
        </div>
        <div className="price-container-comp-frameParent3">
          <div className="price-container-comp-frameWrapper">
            <div className="price-container-comp-frameParent4">
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-topUpFee">Top-up fee</div>
                <div className="price-container-comp-yes">9%</div>
              </div>
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-maximumAdAccountsContainer">
                  <p
                    className="price-container-comp-maximumAdAccounts"
                  >{`Maximum ad accounts `}</p>
                  <p className="price-container-comp-maximumAdAccounts">per month</p>
                </div>
                <div className="price-container-comp-yes">3</div>
              </div>
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-maximumAdAccountsContainer">
                  Restricted ad account review service
                </div>
                <div className="price-container-comp-yes">Yes</div>
              </div>
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-maximumAdAccountsContainer">
                  Priority in request processing (Top-up, ad account, balance
                  transfer ...)
                </div>
                <div className="price-container-comp-yes">Low</div>
              </div>
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-maximumAdAccountsContainer">
                  Management of all advertising platforms (Meta, Google, TikTok,
                  Bing, Snapchat, Twitter…)
                </div>
                <div className="price-container-comp-yes">Yes</div>
              </div>
            </div>
          </div>
          <div className="price-container-comp-seeCompareParent">
            <div className="price-container-comp-saveUpTo">See Compare</div>
            <img
              className="price-container-comp-arrowNarrowRightIcon"
              alt=""
              src="images/arrowcircleright.svg"
            />
          </div>
        </div>
      </div>
      <div className="price-container-comp-frameGroup">
        <div className="price-container-comp-frameContainer">
          <div className="price-container-comp-frameDiv">
            <div className="price-container-comp-frameParent1">
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-starterPlan">Enterprise-level Plan</div>
                <div className="price-container-comp-frameChild" />
              </div>
              <div
                className="price-container-comp-sedDoEiusmod"
              >{`Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut `}</div>
            </div>
            <div className="price-container-comp-frameParent2">
              <div className="price-container-comp-saveUpTo15Wrapper">
                <div className="price-container-comp-saveUpTo">Save up to 15%</div>
              </div>
              <div className="price-container-comp-parent">
                <div className="price-container-comp-starterPlan">{itemPriceText}</div>
                <div className="price-container-comp-month">/Month</div>
              </div>
            </div>
          </div>
          <div className="price-container-comp-getStartedParent">
            <div className="price-container-comp-saveUpTo">Get Started</div>
            <img
              className="price-container-comp-arrowNarrowRightIcon"
              alt=""
              src="images/arrownarrowright.svg"
            />
          </div>
        </div>
        <div className="price-container-comp-frameParent3">
          <div className="price-container-comp-frameWrapper">
            <div className="price-container-comp-frameParent4">
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-topUpFee">Top-up fee</div>
                <div className="price-container-comp-yes">9%</div>
              </div>
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-maximumAdAccountsContainer">
                  <p
                    className="price-container-comp-maximumAdAccounts"
                  >{`Maximum ad accounts `}</p>
                  <p className="price-container-comp-maximumAdAccounts">per month</p>
                </div>
                <div className="price-container-comp-yes">3</div>
              </div>
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-maximumAdAccountsContainer">
                  Restricted ad account review service
                </div>
                <div className="price-container-comp-yes">Yes</div>
              </div>
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-maximumAdAccountsContainer">
                  Priority in request processing (Top-up, ad account, balance
                  transfer ...)
                </div>
                <div className="price-container-comp-yes">Low</div>
              </div>
              <div className="price-container-comp-starterPlanParent">
                <div className="price-container-comp-maximumAdAccountsContainer">
                  Management of all advertising platforms (Meta, Google, TikTok,
                  Bing, Snapchat, Twitter…)
                </div>
                <div className="price-container-comp-yes">Yes</div>
              </div>
            </div>
          </div>
          <div className="price-container-comp-seeCompareParent">
            <div className="price-container-comp-saveUpTo">See Compare</div>
            <img
              className="price-container-comp-arrowNarrowRightIcon"
              alt=""
              src="images/arrowcircleright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceContainer;
