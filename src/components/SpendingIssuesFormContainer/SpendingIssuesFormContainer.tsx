import { FunctionComponent } from 'react';
import './SpendingIssuesFormContainer.css';

const SpendingIssuesFormContainer: FunctionComponent = () => {
  return (
    <div className="spending-issues-form-container-comp-frameParent">
      <div className="spending-issues-form-container-comp-frameWrapper">
        <div className="spending-issues-form-container-comp-whatIsYourAverageMonthlyAParent">
          <div className="spending-issues-form-container-comp-whatIsYourContainer">
            <span>
              What is your average monthly advertising budget for social media?
              (Facebook Ads, Google Adwords, TikTok Ads ….)
            </span>
            <span className="spending-issues-form-container-comp-span">*</span>
          </div>
          <div className="spending-issues-form-container-comp-frameGroup">
            <div className="spending-issues-form-container-comp-radioButtonParent">
              <input
                className="spending-issues-form-container-comp-radioButton"
                checked={true}
                id="average"
                type="radio"
              />
              <div className="spending-issues-form-container-comp-kPerMonth">
                $0 – $1k per month
              </div>
            </div>
            <div className="spending-issues-form-container-comp-radioButtonGroup">
              <input
                className="spending-issues-form-container-comp-radioButton"
                id="average"
                type="radio"
              />
              <div className="spending-issues-form-container-comp-kPerMonth">
                $1k - $10k per month
              </div>
            </div>
            <div className="spending-issues-form-container-comp-radioButtonGroup">
              <input
                className="spending-issues-form-container-comp-radioButton"
                type="radio"
              />
              <div className="spending-issues-form-container-comp-kPerMonth">
                $10k - $50k per month
              </div>
            </div>
          </div>
          <div className="spending-issues-form-container-comp-frameGroup">
            <div className="spending-issues-form-container-comp-frameDiv">
              <input
                className="spending-issues-form-container-comp-radioButton"
                type="radio"
              />
              <div className="spending-issues-form-container-comp-kPerMonth">
                $50k – $200k per month
              </div>
            </div>
            <div className="spending-issues-form-container-comp-radioButtonParent1">
              <input
                className="spending-issues-form-container-comp-radioButton"
                type="radio"
              />
              <div className="spending-issues-form-container-comp-kPerMonth">
                $200k+ per month
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spending-issues-form-container-comp-frameWrapper1">
        <div className="spending-issues-form-container-comp-doYouHaveExperienceWithAgParent">
          <div className="spending-issues-form-container-comp-doYouHaveContainer">
            <span>Do you have experience with agency ads accounts?</span>
            <span className="spending-issues-form-container-comp-span">*</span>
          </div>
          <div className="spending-issues-form-container-comp-frameParent1">
            <div className="spending-issues-form-container-comp-radioButtonParent">
              <input
                className="spending-issues-form-container-comp-radioButton"
                checked={true}
                type="radio"
              />
              <div className="spending-issues-form-container-comp-kPerMonth">
                Yes
              </div>
            </div>
            <div className="spending-issues-form-container-comp-radioButtonGroup">
              <input
                className="spending-issues-form-container-comp-radioButton"
                type="radio"
              />
              <div className="spending-issues-form-container-comp-kPerMonth">
                No
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spending-issues-form-container-comp-frameWrapper1">
        <div className="spending-issues-form-container-comp-whatIsYourAverageMonthlyAParent">
          <div className="spending-issues-form-container-comp-kPerMonth">
            <span>
              What kind of issues do you have with online adverstising?
            </span>
            <span className="spending-issues-form-container-comp-span">*</span>
          </div>
          <select className="spending-issues-form-container-comp-frameChild" />
        </div>
      </div>
    </div>
  );
};

export default SpendingIssuesFormContainer;
