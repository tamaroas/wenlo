import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PriceContainer.module.css";

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
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.starterPlanParent}>
                <div className={styles.starterPlan}>Starter Plan</div>
                <div className={styles.frameChild} />
              </div>
              <div
                className={styles.sedDoEiusmod}
              >{`Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut `}</div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.saveUpTo15Wrapper}>
                <div className={styles.saveUpTo}>Save up to 15%</div>
              </div>
              <div className={styles.parent}>
                <div className={styles.starterPlan}>{price}</div>
                <div className={styles.month}>/Month</div>
              </div>
            </div>
          </div>
          <div className={styles.getStartedParent}>
            <div className={styles.saveUpTo}>Get Started</div>
            <img
              className={styles.arrowNarrowRightIcon}
              alt=""
              src="/arrownarrowright.svg"
            />
          </div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent4}>
              <div className={styles.starterPlanParent}>
                <div className={styles.topUpFee}>Top-up fee</div>
                <div className={styles.yes}>9%</div>
              </div>
              <div className={styles.starterPlanParent}>
                <div className={styles.maximumAdAccountsContainer}>
                  <p
                    className={styles.maximumAdAccounts}
                  >{`Maximum ad accounts `}</p>
                  <p className={styles.maximumAdAccounts}>per month</p>
                </div>
                <div className={styles.yes}>3</div>
              </div>
              <div className={styles.starterPlanParent}>
                <div className={styles.maximumAdAccountsContainer}>
                  Restricted ad account review service
                </div>
                <div className={styles.yes}>Yes</div>
              </div>
              <div className={styles.starterPlanParent}>
                <div className={styles.maximumAdAccountsContainer}>
                  Priority in request processing (Top-up, ad account, balance
                  transfer ...)
                </div>
                <div className={styles.yes}>Low</div>
              </div>
              <div className={styles.starterPlanParent}>
                <div className={styles.maximumAdAccountsContainer}>
                  Management of all advertising platforms (Meta, Google, TikTok,
                  Bing, Snapchat, Twitter…)
                </div>
                <div className={styles.yes}>Yes</div>
              </div>
            </div>
          </div>
          <div className={styles.seeCompareParent}>
            <div className={styles.saveUpTo}>See Compare</div>
            <img
              className={styles.arrowNarrowRightIcon}
              alt=""
              src="/arrowcircleright.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.starterPlanParent}>
                <div className={styles.starterPlan}>Standart Plan</div>
                <div className={styles.frameChild} />
              </div>
              <div
                className={styles.sedDoEiusmod}
              >{`Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut `}</div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.saveUpTo15Wrapper}>
                <div className={styles.saveUpTo}>Save up to 15%</div>
              </div>
              <div className={styles.parent}>
                <div className={styles.starterPlan}>{priceText}</div>
                <div className={styles.month}>/Month</div>
              </div>
            </div>
          </div>
          <div className={styles.getStartedParent}>
            <div className={styles.saveUpTo}>Get Started</div>
            <img
              className={styles.arrowNarrowRightIcon}
              alt=""
              src="/arrownarrowright.svg"
            />
          </div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent4}>
              <div className={styles.starterPlanParent}>
                <div className={styles.topUpFee}>Top-up fee</div>
                <div className={styles.yes}>9%</div>
              </div>
              <div className={styles.starterPlanParent}>
                <div className={styles.maximumAdAccountsContainer}>
                  <p
                    className={styles.maximumAdAccounts}
                  >{`Maximum ad accounts `}</p>
                  <p className={styles.maximumAdAccounts}>per month</p>
                </div>
                <div className={styles.yes}>3</div>
              </div>
              <div className={styles.starterPlanParent}>
                <div className={styles.maximumAdAccountsContainer}>
                  Restricted ad account review service
                </div>
                <div className={styles.yes}>Yes</div>
              </div>
              <div className={styles.starterPlanParent}>
                <div className={styles.maximumAdAccountsContainer}>
                  Priority in request processing (Top-up, ad account, balance
                  transfer ...)
                </div>
                <div className={styles.yes}>Low</div>
              </div>
              <div className={styles.starterPlanParent}>
                <div className={styles.maximumAdAccountsContainer}>
                  Management of all advertising platforms (Meta, Google, TikTok,
                  Bing, Snapchat, Twitter…)
                </div>
                <div className={styles.yes}>Yes</div>
              </div>
            </div>
          </div>
          <div className={styles.seeCompareParent}>
            <div className={styles.saveUpTo}>See Compare</div>
            <img
              className={styles.arrowNarrowRightIcon}
              alt=""
              src="/arrowcircleright.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameParent12} style={frameDiv2Style}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.starterPlanParent}>
                <div className={styles.starterPlan}>Premium Plan</div>
                <div className={styles.frameInner} style={ellipseDivStyle} />
              </div>
              <div
                className={styles.sedDoEiusmod}
              >{`Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut `}</div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.saveUpTo15Wrapper}>
                <div className={styles.saveUpTo}>Save up to 15%</div>
              </div>
              <div className={styles.parent}>
                <div className={styles.starterPlan}>{itemPrice}</div>
                <div className={styles.month}>/Month</div>
              </div>
            </div>
          </div>
          <div className={styles.getStartedParent}>
            <div className={styles.saveUpTo}>Get Started</div>
            <img
              className={styles.arrowNarrowRightIcon}
              alt=""
              src="/arrownarrowright.svg"
            />
          </div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent4}>
              <div className={styles.starterPlanParent}>
                <div className={styles.topUpFee}>Top-up fee</div>
                <div className={styles.yes}>9%</div>
              </div>
              <div className={styles.starterPlanParent}>
                <div className={styles.maximumAdAccountsContainer}>
                  <p
                    className={styles.maximumAdAccounts}
                  >{`Maximum ad accounts `}</p>
                  <p className={styles.maximumAdAccounts}>per month</p>
                </div>
                <div className={styles.yes}>3</div>
              </div>
              <div className={styles.starterPlanParent}>
                <div className={styles.maximumAdAccountsContainer}>
                  Restricted ad account review service
                </div>
                <div className={styles.yes}>Yes</div>
              </div>
              <div className={styles.starterPlanParent}>
                <div className={styles.maximumAdAccountsContainer}>
                  Priority in request processing (Top-up, ad account, balance
                  transfer ...)
                </div>
                <div className={styles.yes}>Low</div>
              </div>
              <div className={styles.starterPlanParent}>
                <div className={styles.maximumAdAccountsContainer}>
                  Management of all advertising platforms (Meta, Google, TikTok,
                  Bing, Snapchat, Twitter…)
                </div>
                <div className={styles.yes}>Yes</div>
              </div>
            </div>
          </div>
          <div className={styles.seeCompareParent}>
            <div className={styles.saveUpTo}>See Compare</div>
            <img
              className={styles.arrowNarrowRightIcon}
              alt=""
              src="/arrowcircleright.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.starterPlanParent}>
                <div className={styles.starterPlan}>Enterprise-level Plan</div>
                <div className={styles.frameChild} />
              </div>
              <div
                className={styles.sedDoEiusmod}
              >{`Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut `}</div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.saveUpTo15Wrapper}>
                <div className={styles.saveUpTo}>Save up to 15%</div>
              </div>
              <div className={styles.parent}>
                <div className={styles.starterPlan}>{itemPriceText}</div>
                <div className={styles.month}>/Month</div>
              </div>
            </div>
          </div>
          <div className={styles.getStartedParent}>
            <div className={styles.saveUpTo}>Get Started</div>
            <img
              className={styles.arrowNarrowRightIcon}
              alt=""
              src="/arrownarrowright.svg"
            />
          </div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent4}>
              <div className={styles.starterPlanParent}>
                <div className={styles.topUpFee}>Top-up fee</div>
                <div className={styles.yes}>9%</div>
              </div>
              <div className={styles.starterPlanParent}>
                <div className={styles.maximumAdAccountsContainer}>
                  <p
                    className={styles.maximumAdAccounts}
                  >{`Maximum ad accounts `}</p>
                  <p className={styles.maximumAdAccounts}>per month</p>
                </div>
                <div className={styles.yes}>3</div>
              </div>
              <div className={styles.starterPlanParent}>
                <div className={styles.maximumAdAccountsContainer}>
                  Restricted ad account review service
                </div>
                <div className={styles.yes}>Yes</div>
              </div>
              <div className={styles.starterPlanParent}>
                <div className={styles.maximumAdAccountsContainer}>
                  Priority in request processing (Top-up, ad account, balance
                  transfer ...)
                </div>
                <div className={styles.yes}>Low</div>
              </div>
              <div className={styles.starterPlanParent}>
                <div className={styles.maximumAdAccountsContainer}>
                  Management of all advertising platforms (Meta, Google, TikTok,
                  Bing, Snapchat, Twitter…)
                </div>
                <div className={styles.yes}>Yes</div>
              </div>
            </div>
          </div>
          <div className={styles.seeCompareParent}>
            <div className={styles.saveUpTo}>See Compare</div>
            <img
              className={styles.arrowNarrowRightIcon}
              alt=""
              src="/arrowcircleright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceContainer;
