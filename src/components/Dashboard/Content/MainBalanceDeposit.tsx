import React, { useState } from 'react';
import Emitter from '../../../utils/EventEmitter/EventEmitter';
import styles from './MainBalanceDeposit.module.scss';
import { FiCopy } from 'react-icons/fi';
import { CiImageOn } from 'react-icons/ci';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import imageService from '../../../utils/ImageService';

const images = imageService.getImages();
const emitter = new Emitter();
const eventsNames = {
  SET_BANK: 'SET_BANK',
};

type FormData = {
  bank: string;
  address: string;
  amount: string;
  reference: string;
  image: any;
};

const banks = [
  {
    text: 'USDT TRC20',
    value: 'USDT TRC20',
  },
  {
    text: 'Bank Wire (USD)',
    value: 'Bank Wire (USD)',
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
    value: 'Credit Card',
  },
];
const MainBalanceDeposit = () => {
  const [formData, setFormData] = useState<FormData>({
    bank: '',
    address: '',
    amount: '',
    reference: '',
    image: undefined,
  });

  emitter.on(eventsNames.SET_BANK, (value: string) => {
    setFormData(prev => {
      let temp = { ...prev };
      temp.bank = value;
      return temp;
    });
  });
  return (
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
          <span>USDT TRC20 Address</span>
          <div className={styles.bankAddressInputContainer}>
            <input type="text" />
            <FiCopy />
          </div>
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
        <button>Submit</button>
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
