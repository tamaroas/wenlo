import React, { useState } from 'react';
import Emitter from '../../../utils/EventEmitter/EventEmitter';
import styles from './MainBalanceDeposit.module.scss';
import { FiCopy } from 'react-icons/fi';
import { CiImageOn } from 'react-icons/ci';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import imageService from '../../../utils/ImageService';
import { FaCircleCheck } from 'react-icons/fa6';

const images = imageService.getImages();
const emitter = new Emitter();
const eventsNames = {
  SET_BANK: 'SET_BANK',
  CLOSE_ALERT: 'CLOSE_ALERT',
  SET_ALERT_DATA: 'SET_ALERT_DATA',
};

type FormData = {
  bank: string;
  address: string;
  amount: string;
  reference: string;
  image: any;
};
const RenderBankNeededDetails = (bankvalue: string) => {
  switch (bankvalue) {
    case 'USDTTRC20':
      return <USDTTRC20Inputs />;
    case 'BankWire':
      return <BankWire />;
    case 'Payoneer':
      return <Payoneer />;
    case 'Wise':
      return <Wise />;
    case 'CreditCard':
      return <CreditCard />;
    default:
      return 'Yo';
  }
};

const banks = [
  {
    text: 'USDT TRC20',
    value: 'USDTTRC20',
  },
  {
    text: 'Bank Wire (USD)',
    value: 'BankWire',
  },
  {
    text: 'Payoneer',
    value: 'Payoneer',
  },
  {
    text: 'Wise',
    value: 'Wise',
  },
  {
    text: 'Credit Card',
    value: 'CreditCard',
  },
];

const USDTTRC20Inputs = () => {
  return (
    <>
      <span>USDT TRC20 Address</span>
      <div className={styles.bankAddressInputContainer}>
        <input type="text" />
        <FiCopy />
      </div>
    </>
  );
};

const BankWire = () => {
  return (
    <>
      <label>Beneficiery Name</label>
      <input type="text" placeholder="Enter your Beneficiery Name" />
      <label>Account Number</label>
      <input type="text" placeholder="Enter your Account Number" />
      <label>SWIFT Code</label>
      <input type="text" placeholder="Enter your SWIFT Code" />
      <label>Account Address</label>
      <input type="text" placeholder="Enter your Account Address" />
    </>
  );
};

const Payoneer = () => {
  return (
    <>
      <label>Payoneer Email address</label>
      <input type="email" placeholder="Enter your Email" />
    </>
  );
};

const Wise = () => {
  return (
    <>
      <label>Email</label>
      <input type="text" placeholder="Enter your Email" />
      <label>Bank Name</label>
      <input type="text" placeholder="Enter your Bank Name" />
      <label>Bank Address</label>
      <input type="text" placeholder="Enter your Bank Address" />
      <label>Routing (ABA)</label>
      <input type="text" placeholder="Enter your Routing (ABA)" />
      <label>Account Number</label>
      <input type="text" placeholder="Enter your Account Number" />
      <label>Account Type</label>
      <input type="text" placeholder="Enter your Account Type" />
      <label>Beneficiary Name</label>
      <input type="text" placeholder="Enter your Beneficiary Name" />
    </>
  );
};

const CreditCard = () => {
  return (
    <>
      <span>USDT TRC20 Address</span>
      <div className={styles.bankAddressInputContainer}>
        <input type="text" />
        <FiCopy />
      </div>
    </>
  );
};

const MainBalanceDeposit = () => {
  const [isAlertVisible, setIsAlertVisible] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    bank: 'USDTTRC20',
    address: '',
    amount: '',
    reference: '',
    image: undefined,
  });

  const handleSubmit = () => {
    emitter.emit(eventsNames.SET_ALERT_DATA, {
      state: 'success',
      title: 'Succesfully!',
      desc: 'Your deposit request was sent successfully',
    });
    setIsAlertVisible(true);
  };

  emitter.on(eventsNames.SET_BANK, (value: string) => {
    setFormData(prev => {
      let temp = { ...prev };
      temp.bank = value;
      return temp;
    });
  });

  emitter.on(eventsNames.CLOSE_ALERT, () => {
    setIsAlertVisible(false);
  });
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div>
            <div className={styles.logoContainer}>
              <img
                src={images['credit-card-plus']}
                alt="credit-card-plus"
                height={40}
                width={40}
              />
            </div>
            <h2>Deposit Balance</h2>
          </div>
          <span>
            Choosed payment method<span style={{ color: 'red' }}>*</span>
          </span>
          <div className={styles.section1}>
            <span>
              After choosed the payment method of your choice, make the payment
              according to the details displayed below.
            </span>
            <div className={styles.banksContainer}>
              {banks.map((el, idx) => {
                return (
                  <BlockRadio
                    key={'blockRadio-Bank' + idx}
                    {...el}
                    selected={formData.bank === el.value}
                  />
                );
              })}
            </div>
            {RenderBankNeededDetails(formData.bank)}
          </div>
          <span>
            Amount of the deposit in $<span style={{ color: 'red' }}>*</span>
          </span>
          <input type="number" placeholder="Enter your Amount" />
          <div>
            <span>
              Transaction reference<span style={{ color: 'red' }}>*</span>
            </span>
            <span>(Provide the transaction ID your payment)</span>
          </div>
          <input type="text" placeholder="Enter your transaction reference" />
          <span>Payment proof (Image or Pdf file)</span>
          <div className={styles.proofContainer}>
            <CiImageOn size={24} />
            <p>
              <span style={{ color: '#3949A1', cursor: 'pointer' }}>
                Click to Upload
              </span>{' '}
              or drag and drop <br />
              DOC, PDF, PNG or JPG (max 10mb)
            </p>
          </div>
          <span className={styles.warranty}>
            <AiOutlineExclamationCircle />
            Take a few secondes to verify filled informations, in order to avoid
            erros and request rejection !!
          </span>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      {isAlertVisible && <Alert />}
    </>
  );
};

type AlertState = {
  state: 'success';
  title: 'Succesfully!';
  desc: 'Your deposit request was sent successfully';
};

const Alert = () => {
  const [data, setData] = useState<AlertState>({
    state: 'success',
    title: 'Succesfully!',
    desc: 'Your deposit request was sent successfully',
  });

  emitter.on(eventsNames.SET_ALERT_DATA, (eventData: AlertState) => {
    setData(prev => eventData);
  });

  const handleGoBack = () => {
    emitter.emit(eventsNames.CLOSE_ALERT, undefined);
  };
  return (
    <div
      className={styles.alertContainer}
      onClick={e => {
        if (e.target === e.currentTarget) handleGoBack();
      }}
    >
      <div className={styles.alertSubContainer}>
        <FaCircleCheck size={80} color="#1CB465" />
        <span>{data.title}</span>
        <span>{data.desc}</span>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
    </div>
  );
};

const BlockRadio = ({
  text,
  value,
  selected,
}: {
  text: string;
  value: string;
  selected?: boolean;
}) => {
  const handleClick = () => {
    emitter.emit(eventsNames.SET_BANK, value);
  };
  return (
    <div
      className={
        selected
          ? styles.blockRadioContainerSelected
          : styles.blockRadioContainerNotSelected
      }
      onClick={handleClick}
    >
      <div
        className={
          selected ? styles.blockRadioSelected : styles.blockRadioNotSelected
        }
      ></div>
      <span>{text}</span>
    </div>
  );
};

export default MainBalanceDeposit;
