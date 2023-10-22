import { FunctionComponent } from 'react';
import styles from './SpendingIssuesFormContainer.module.css';

const SpendingIssuesFormContainer: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.whatIsYourAverageMonthlyAParent}>
          <div className={styles.whatIsYourContainer}>
            <span>
              What is your average monthly advertising budget for social media?
              (Facebook Ads, Google Adwords, TikTok Ads ….)
            </span>
            <span className={styles.span}>*</span>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.radioButtonParent}>
              <input
                className={styles.radioButton}
                checked={true}
                id="average"
                type="radio"
              />
              <div className={styles.kPerMonth}>$0 – $1k per month</div>
            </div>
            <div className={styles.radioButtonGroup}>
              <input className={styles.radioButton} id="average" type="radio" />
              <div className={styles.kPerMonth}>$1k - $10k per month</div>
            </div>
            <div className={styles.radioButtonGroup}>
              <input className={styles.radioButton} type="radio" />
              <div className={styles.kPerMonth}>$10k - $50k per month</div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <input className={styles.radioButton} type="radio" />
              <div className={styles.kPerMonth}>$50k – $200k per month</div>
            </div>
            <div className={styles.radioButtonParent1}>
              <input className={styles.radioButton} type="radio" />
              <div className={styles.kPerMonth}>$200k+ per month</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.doYouHaveExperienceWithAgParent}>
          <div className={styles.doYouHaveContainer}>
            <span>Do you have experience with agency ads accounts?</span>
            <span className={styles.span}>*</span>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.radioButtonParent}>
              <input
                className={styles.radioButton}
                checked={true}
                type="radio"
              />
              <div className={styles.kPerMonth}>Yes</div>
            </div>
            <div className={styles.radioButtonGroup}>
              <input className={styles.radioButton} type="radio" />
              <div className={styles.kPerMonth}>No</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.whatIsYourAverageMonthlyAParent}>
          <div className={styles.kPerMonth}>
            <span>
              What kind of issues do you have with online adverstising?
            </span>
            <span className={styles.span}>*</span>
          </div>
          <select className={styles.frameChild} />
        </div>
      </div>
    </div>
  );
};

export default SpendingIssuesFormContainer;
