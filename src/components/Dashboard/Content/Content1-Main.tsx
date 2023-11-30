import { useRef, useState } from 'react';
import { FaTiktok } from 'react-icons/fa';
import { IoMdOpen } from 'react-icons/io';
import { MdOutlineInfo, MdOutlineRecentActors } from 'react-icons/md';
import Line from '../../Line';
import styles from './Content1-Main.module.scss';
import imageService from '../../../utils/ImageService';

const section10Rows = [
  {
    platform: 'Facebook',
    adIdAccount: '3424121248AR',
    adAccountName: 'Amazon',
    dateOfCreation: '26 April 2023',
    timeOfCreation: '10:00 AM',
    domainWebsite: 'Amazon.com',
    timeZone: '(GMT-5:00) Guadalajara, Mexico City, Monterrey (CDT)',
    spendLimits: '$73.60',
    actions: ['transfert', 'add', 'download'],
  },
  {
    platform: 'Facebook',
    adIdAccount: '3424121248AR',
    adAccountName: 'Amazon',
    dateOfCreation: '26 April 2023',
    timeOfCreation: '10:00 AM',
    domainWebsite: 'Amazon.com',
    timeZone: '(GMT-5:00) Guadalajara, Mexico City, Monterrey (CDT)',
    spendLimits: '$73.60',
    actions: ['transfert', 'add', 'download'],
  },
  {
    platform: 'TikTok',
    adIdAccount: '3424121248AR',
    adAccountName: 'Amazon',
    dateOfCreation: '26 April 2023',
    timeOfCreation: '10:00 AM',
    domainWebsite: 'Amazon.com',
    timeZone: '(GMT-5:00) Guadalajara, Mexico City, Monterrey (CDT)',
    spendLimits: '$73.60',
    actions: ['transfert', 'add', 'download'],
  },
  {
    platform: 'Google',
    adIdAccount: '3424121248AR',
    adAccountName: 'Amazon',
    dateOfCreation: '26 April 2023',
    timeOfCreation: '10:00 AM',
    domainWebsite: 'Amazon.com',
    timeZone: '(GMT-5:00) Guadalajara, Mexico City, Monterrey (CDT)',
    spendLimits: '$73.60',
    actions: ['transfert', 'add', 'download'],
  },
  {
    platform: 'Facebook',
    adIdAccount: '3424121248AR',
    adAccountName: 'Amazon',
    dateOfCreation: '26 April 2023',
    timeOfCreation: '10:00 AM',
    domainWebsite: 'Amazon.com',
    timeZone: '(GMT-5:00) Guadalajara, Mexico City, Monterrey (CDT)',
    spendLimits: '$73.60',
    actions: ['transfert', 'add', 'download'],
  },
  {
    platform: 'TikTok',
    adIdAccount: '3424121248AR',
    adAccountName: 'Amazon',
    dateOfCreation: '26 April 2023',
    timeOfCreation: '10:00 AM',
    domainWebsite: 'Amazon.com',
    timeZone: '(GMT-5:00) Guadalajara, Mexico City, Monterrey (CDT)',
    spendLimits: '$73.60',
    actions: ['transfert', 'add', 'download'],
  },
  {
    platform: 'Facebook',
    adIdAccount: '3424121248AR',
    adAccountName: 'Amazon',
    dateOfCreation: '26 April 2023',
    timeOfCreation: '10:00 AM',
    domainWebsite: 'Amazon.com',
    timeZone: '(GMT-5:00) Guadalajara, Mexico City, Monterrey (CDT)',
    spendLimits: '$73.60',
    actions: ['transfert', 'add', 'download'],
  },
  {
    platform: 'Google',
    adIdAccount: '3424121248AR',
    adAccountName: 'Amazon',
    dateOfCreation: '26 April 2023',
    timeOfCreation: '10:00 AM',
    domainWebsite: 'Amazon.com',
    timeZone: '(GMT-5:00) Guadalajara, Mexico City, Monterrey (CDT)',
    spendLimits: '$73.60',
    actions: ['transfert', 'add', 'download'],
  },
];

const section9Rows: {
  requestId: string;
  requestDate: string;
  requestTime: string;
  type: string;
  amount: string;
  paymentMethod: string;
  status: string;
  sender?: string;
  receiver?: string;
  reason?: string;
}[] = [
  {
    requestId: '#712921RT',
    requestDate: '26 April 2023',
    requestTime: '10:00 AM',
    type: 'Deposit',
    amount: '$73.60',
    paymentMethod: 'Payoneer',
    status: 'In Progress',
  },
  {
    requestId: '#712921RT',
    requestDate: '26 April 2023',
    requestTime: '10:00 AM',
    type: 'Deposit',
    amount: '$73.60',
    paymentMethod: 'Bank Wine',
    status: 'In Progress',
  },
  {
    requestId: '#712921RT',
    requestDate: '26 April 2023',
    requestTime: '10:00 AM',
    type: 'Deposit',
    amount: '$73.60',
    paymentMethod: 'USDT',
    status: 'In Progress',
  },
  {
    requestId: '#712921RT',
    requestDate: '26 April 2023',
    requestTime: '10:00 AM',
    type: 'Deposit',
    amount: '$73.60',
    paymentMethod: 'Payoneer',
    status: 'In Progress',
  },
  {
    requestId: '#712921RT',
    requestDate: '26 April 2023',
    requestTime: '10:00 AM',
    type: 'Deposit',
    amount: '$73.60',
    paymentMethod: 'Bank Wine',
    status: 'Rejected',
    sender: 'Stripe',
    receiver: '$182231.32',
    reason:
      `Your deposit request has been <span class="${styles.textRed}">Rejected</span> due to insufficient balance`,
  },
  {
    requestId: '#712921RT',
    requestDate: '26 April 2023',
    requestTime: '10:00 AM',
    type: 'Deposit',
    amount: '$73.60',
    paymentMethod: 'USDT',
    status: 'In Progress',
  },
  {
    requestId: '#712921RT',
    requestDate: '26 April 2023',
    requestTime: '10:00 AM',
    type: 'Deposit',
    amount: '$73.60',
    paymentMethod: 'Payoneer',
    status: 'In Progress',
  },
  {
    requestId: '#712921RT',
    requestDate: '26 April 2023',
    requestTime: '10:00 AM',
    type: 'Deposit',
    amount: '$73.60',
    paymentMethod: 'Bank Wine',
    status: 'In Progress',
  },
  {
    requestId: '#712921RT',
    requestDate: '26 April 2023',
    requestTime: '10:00 AM',
    type: 'Deposit',
    amount: '$73.60',
    paymentMethod: 'USDT',
    status: 'In Progress',
  },
];

const section8Rows = [
  {
    requestedAt: '3424121248AR',
    addAccountRecharged: 'Gabriela Hudges',
    amount: '$73.60',
    paymentMethod: 'USDT',
    amountRecharged: '$73.60',
    status: 'On Review',
    actions: 'On Review',
  },
  {
    requestedAt: '3424121248AR',
    addAccountRecharged: 'Gabriela Hudges',
    amount: '$73.60',
    paymentMethod: 'Payoneer',
    amountRecharged: '$73.60',
    status: 'On Review',
    actions: 'On Review',
  },
  {
    requestedAt: '3424121248AR',
    addAccountRecharged: 'Gabriela Hudges',
    amount: '$73.60',
    paymentMethod: 'Bank Wine',
    amountRecharged: '$73.60',
    status: 'On Review',
    actions: 'On Review',
  },
  {
    requestedAt: '3424121248AR',
    addAccountRecharged: 'Gabriela Hudges',
    amount: '$73.60',
    paymentMethod: 'USDT',
    amountRecharged: '$73.60',
    status: 'On Review',
    actions: 'On Review',
  },
  {
    requestedAt: '3424121248AR',
    addAccountRecharged: 'Gabriela Hudges',
    amount: '$73.60',
    paymentMethod: 'Bank Wine',
    amountRecharged: '$73.60',
    status: 'On Review',
    actions: 'On Review',
  },
  {
    requestedAt: '3424121248AR',
    addAccountRecharged: 'Gabriela Hudges',
    amount: '$73.60',
    paymentMethod: 'Bank Wine',
    amountRecharged: '$73.60',
    status: 'On Review',
    actions: 'On Review',
  },
  {
    requestedAt: '3424121248AR',
    addAccountRecharged: 'Gabriela Hudges',
    amount: '$73.60',
    paymentMethod: 'USDT',
    amountRecharged: '$73.60',
    status: 'On Review',
    actions: 'On Review',
  },
  {
    requestedAt: '3424121248AR',
    addAccountRecharged: 'Gabriela Hudges',
    amount: '$73.60',
    paymentMethod: 'Payoneer',
    amountRecharged: '$73.60',
    status: 'On Review',
    actions: 'On Review',
  },
  {
    requestedAt: '3424121248AR',
    addAccountRecharged: 'Gabriela Hudges',
    amount: '$73.60',
    paymentMethod: 'Bank Wine',
    amountRecharged: '$73.60',
    status: 'On Review',
    actions: 'On Review',
  },
  {
    requestedAt: '3424121248AR',
    addAccountRecharged: 'Gabriela Hudges',
    amount: '$73.60',
    paymentMethod: 'USDT',
    amountRecharged: '$73.60',
    status: 'On Review',
    actions: 'On Review',
  },
  {
    requestedAt: '3424121248AR',
    addAccountRecharged: 'Gabriela Hudges',
    amount: '$73.60',
    paymentMethod: 'Payoneer',
    amountRecharged: '$73.60',
    status: 'On Review',
    actions: 'On Review',
  },
  {
    requestedAt: '3424121248AR',
    addAccountRecharged: 'Gabriela Hudges',
    amount: '$73.60',
    paymentMethod: 'USDT',
    amountRecharged: '$73.60',
    status: 'On Review',
    actions: 'On Review',
  },
  {
    requestedAt: '3424121248AR',
    addAccountRecharged: 'Gabriela Hudges',
    amount: '$73.60',
    paymentMethod: 'Payoneer',
    amountRecharged: '$73.60',
    status: 'On Review',
    actions: 'On Review',
  },
  {
    requestedAt: '3424121248AR',
    addAccountRecharged: 'Gabriela Hudges',
    amount: '$73.60',
    paymentMethod: 'Bank Wine',
    amountRecharged: '$73.60',
    status: 'On Review',
    actions: 'On Review',
  },
  {
    requestedAt: '3424121248AR',
    addAccountRecharged: 'Gabriela Hudges',
    amount: '$73.60',
    paymentMethod: 'USDT',
    amountRecharged: '$73.60',
    status: 'On Review',
    actions: 'On Review',
  },
  {
    requestedAt: '3424121248AR',
    addAccountRecharged: 'Gabriela Hudges',
    amount: '$73.60',
    paymentMethod: 'Bank Wine',
    amountRecharged: '$73.60',
    status: 'On Review',
    actions: 'On Review',
  },
  {
    requestedAt: '3424121248AR',
    addAccountRecharged: 'Gabriela Hudges',
    amount: '$73.60',
    paymentMethod: 'Payoneer',
    amountRecharged: '$73.60',
    status: 'On Review',
    actions: 'On Review',
  },
  {
    requestedAt: '3424121248AR',
    addAccountRecharged: 'Gabriela Hudges',
    amount: '$73.60',
    paymentMethod: 'USDT',
    amountRecharged: '$73.60',
    status: 'On Review',
    actions: 'On Review',
  },
];

const Section1DateRowList = [
  {
    text1: '25 April, 2023',
    text2: '$130',
  },
  {
    text1: '25 April, 2023',
    text2: '$130',
  },
  {
    text1: '25 April, 2023',
    text2: '$130',
  },
];

const Section3RowList = [
  {
    icon1: <FaTiktok color="#000000" size={14} />,
    text1: 'Tiktok',
    text2: 'Amazon',
    text3: '#712921',
    icon2: <IoMdOpen color="#26283F" size={12} />,
  },
  {
    icon1: <FaTiktok color="#000000" size={14} />,
    text1: 'Tiktok',
    text2: 'Amazon',
    text3: '#712921',
    icon2: <IoMdOpen color="#26283F" size={12} />,
  },
  {
    icon1: <FaTiktok color="#000000" size={14} />,
    text1: 'Tiktok',
    text2: 'Amazon',
    text3: '#712921',
    icon2: <IoMdOpen color="#26283F" size={12} />,
  },
  {
    icon1: <FaTiktok color="#000000" size={14} />,
    text1: 'Tiktok',
    text2: 'Amazon',
    text3: '#712921',
    icon2: <IoMdOpen color="#26283F" size={12} />,
  },
  {
    icon1: <FaTiktok color="#000000" size={14} />,
    text1: 'Tiktok',
    text2: 'Amazon',
    text3: '#712921',
    icon2: <IoMdOpen color="#26283F" size={12} />,
  },
  {
    icon1: <FaTiktok color="#000000" size={14} />,
    text1: 'Tiktok',
    text2: 'Amazon',
    text3: '#712921',
    icon2: <IoMdOpen color="#26283F" size={12} />,
  },
];

const Main = () => {
  return (
    <div className={styles.container}>
      <h2>My Dashboard</h2>
      <section className={styles.section1}>
        <div>
          <span>$3000</span> <span>This month</span>
        </div>
        <div>
          <span>
            $3000 <small>/ $5000</small>
          </span>
          <span>Monthly top-up limit</span>
        </div>
        <div className={styles.lineChart1Container}>
          <Line />
        </div>
        <span>April, 2023</span>
        <select>
          <option>April</option>
        </select>
        {Section1DateRowList.map((item, index) => (
          <Section1DateRow key={index} text1={item.text1} text2={item.text2} />
        ))}
        <button>See all</button>
      </section>
      <section className={styles.section2}>
        <span>Life time top-up</span>
        <span>Ad Account</span>
        <span>Balance</span>
        <span>$3000</span>
        <span>$3000</span>
        <span>$3000</span>
      </section>

      <section className={styles.section3}>
        <div>
          <span>
            <MdOutlineRecentActors color="#3B51A1" size={24} /> Latest ad
            accounts opened
          </span>
          <select>
            <option defaultChecked>Sort by</option>
          </select>
        </div>

        <div>
          <span>My accounts</span>
          {Section3RowList.map((item, index) => (
            <Section3Row
              key={index}
              icon1={item.icon1}
              text1={item.text1}
              text2={item.text2}
              text3={item.text3}
              icon2={item.icon2}
            />
          ))}
        </div>
        <button>See all</button>
      </section>
      <section className={styles.section4}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 11V15M18 9V13M17 4C19.4487 4 20.7731 4.37476 21.4321 4.66544C21.5199 4.70415 21.5638 4.72351 21.6904 4.84437C21.7663 4.91682 21.9049 5.12939 21.9405 5.22809C22 5.39274 22 5.48274 22 5.66274V16.4111C22 17.3199 22 17.7743 21.8637 18.0079C21.7251 18.2454 21.5914 18.3559 21.3319 18.4472C21.0769 18.5369 20.562 18.438 19.5322 18.2401C18.8114 18.1017 17.9565 18 17 18C14 18 11 20 7 20C4.55129 20 3.22687 19.6252 2.56788 19.3346C2.48012 19.2958 2.43624 19.2765 2.3096 19.1556C2.23369 19.0832 2.09512 18.8706 2.05947 18.7719C2 18.6073 2 18.5173 2 18.3373L2 7.58885C2 6.68009 2 6.2257 2.13628 5.99214C2.2749 5.75456 2.40859 5.64412 2.66806 5.55281C2.92314 5.46305 3.43803 5.56198 4.46783 5.75985C5.18862 5.89834 6.04348 6 7 6C10 6 13 4 17 4ZM14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
              stroke="#3B51A1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div>
          <span>Main Balance</span>
          <button>
            <IoMdOpen color="#26283F" size={12} />
          </button>
          <span>
            0 <small>Request</small>
          </span>
        </div>

        <div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <mask
                id="mask0_1_17147"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="16"
                height="16"
              >
                <rect width="16" height="16" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1_17147)">
                <path
                  d="M12.6667 6.00033L11.8334 4.16699L10.0001 3.33366L11.8334 2.50033L12.6667 0.666992L13.5001 2.50033L15.3334 3.33366L13.5001 4.16699L12.6667 6.00033ZM12.6667 15.3337L11.8334 13.5003L10.0001 12.667L11.8334 11.8337L12.6667 10.0003L13.5001 11.8337L15.3334 12.667L13.5001 13.5003L12.6667 15.3337ZM6.00008 13.3337L4.33342 9.66699L0.666748 8.00033L4.33342 6.33366L6.00008 2.66699L7.66675 6.33366L11.3334 8.00033L7.66675 9.66699L6.00008 13.3337Z"
                  fill="#1D8F1B"
                />
              </g>
            </svg>
            Under review
          </span>
          <span>2</span>
        </div>
      </section>

      <section className={styles.section5}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 17L12 20M12 20L15 17M12 20V13M22 9H2M5.5 18H5.2C4.0799 18 3.51984 18 3.09202 17.782C2.71569 17.5903 2.40973 17.2843 2.21799 16.908C2 16.4802 2 15.9201 2 14.8V7.2C2 6.0799 2 5.51984 2.21799 5.09202C2.40973 4.71569 2.7157 4.40973 3.09202 4.21799C3.51984 4 4.0799 4 5.2 4H18.8C19.9201 4 20.4802 4 20.908 4.21799C21.2843 4.40974 21.5903 4.7157 21.782 5.09202C22 5.51984 22 6.0799 22 7.2V14.8C22 15.9201 22 16.4802 21.782 16.908C21.5903 17.2843 21.2843 17.5903 20.908 17.782C20.4802 18 19.9201 18 18.8 18H18.5"
              stroke="#3A4CA1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div>
          <span>Ad account recharge</span>
          <button>
            <IoMdOpen color="#26283F" size={12} />
          </button>
          <span>
            0 <small>Request</small>
          </span>
        </div>
        <div>
          <Section456Row
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <mask
                  id="mask0_1_17147"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_17147)">
                  <path
                    d="M12.6667 6.00033L11.8334 4.16699L10.0001 3.33366L11.8334 2.50033L12.6667 0.666992L13.5001 2.50033L15.3334 3.33366L13.5001 4.16699L12.6667 6.00033ZM12.6667 15.3337L11.8334 13.5003L10.0001 12.667L11.8334 11.8337L12.6667 10.0003L13.5001 11.8337L15.3334 12.667L13.5001 13.5003L12.6667 15.3337ZM6.00008 13.3337L4.33342 9.66699L0.666748 8.00033L4.33342 6.33366L6.00008 2.66699L7.66675 6.33366L11.3334 8.00033L7.66675 9.66699L6.00008 13.3337Z"
                    fill="#1D8F1B"
                  />
                </g>
              </svg>
            }
            text1={'Request approved'}
            text2={'(0)'}
          />
          <Section456Row
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <mask
                  id="mask0_1_17156"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_17156)">
                  <path
                    d="M8.00008 10.667C8.83342 10.667 9.54175 10.3753 10.1251 9.79199C10.7084 9.20866 11.0001 8.50033 11.0001 7.66699C11.0001 6.83366 10.7084 6.12533 10.1251 5.54199C9.54175 4.95866 8.83342 4.66699 8.00008 4.66699C7.16675 4.66699 6.45842 4.95866 5.87508 5.54199C5.29175 6.12533 5.00008 6.83366 5.00008 7.66699C5.00008 8.50033 5.29175 9.20866 5.87508 9.79199C6.45842 10.3753 7.16675 10.667 8.00008 10.667ZM8.00008 9.46699C7.50008 9.46699 7.07508 9.29199 6.72508 8.94199C6.37508 8.59199 6.20008 8.16699 6.20008 7.66699C6.20008 7.16699 6.37508 6.74199 6.72508 6.39199C7.07508 6.04199 7.50008 5.86699 8.00008 5.86699C8.50008 5.86699 8.92508 6.04199 9.27508 6.39199C9.62508 6.74199 9.80008 7.16699 9.80008 7.66699C9.80008 8.16699 9.62508 8.59199 9.27508 8.94199C8.92508 9.29199 8.50008 9.46699 8.00008 9.46699ZM8.00008 12.667C6.37786 12.667 4.90008 12.2142 3.56675 11.3087C2.23341 10.4031 1.26675 9.18921 0.666748 7.66699C1.26675 6.14477 2.23341 4.93088 3.56675 4.02533C4.90008 3.11977 6.37786 2.66699 8.00008 2.66699C9.6223 2.66699 11.1001 3.11977 12.4334 4.02533C13.7667 4.93088 14.7334 6.14477 15.3334 7.66699C14.7334 9.18921 13.7667 10.4031 12.4334 11.3087C11.1001 12.2142 9.6223 12.667 8.00008 12.667Z"
                    fill="#4440EE"
                  />
                </g>
              </svg>
            }
            text1={'Request reviewed'}
            text2={'(0)'}
          />
          <Section456Row
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <mask
                  id="mask0_1_17165"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_17165)">
                  <path
                    d="M1.33325 4.66699V1.33366H2.33325V2.68366C3.11103 2.05033 3.98047 1.55588 4.94159 1.20033C5.9027 0.84477 6.92214 0.666992 7.99992 0.666992C9.84436 0.666992 11.3555 1.09199 12.5333 1.94199C13.711 2.79199 14.4221 3.70033 14.6666 4.66699H13.6166C13.361 4.00033 12.7583 3.33366 11.8083 2.66699C10.8583 2.00033 9.58881 1.66699 7.99992 1.66699C6.98881 1.66699 6.03603 1.84477 5.14159 2.20033C4.24714 2.55588 3.44436 3.04477 2.73325 3.66699H4.66658V4.66699H1.33325ZM7.46658 15.3337C7.26658 15.3337 7.06381 15.2975 6.85825 15.2253C6.6527 15.1531 6.48881 15.0559 6.36659 14.9337L3.33325 11.7503L3.88325 11.1837C3.96103 11.1059 4.0527 11.0503 4.15825 11.017C4.26381 10.9837 4.3777 10.9781 4.49992 11.0003L6.66658 11.5003V4.33366C6.66658 4.05588 6.76381 3.81977 6.95825 3.62533C7.1527 3.43088 7.38881 3.33366 7.66658 3.33366C7.94436 3.33366 8.18047 3.43088 8.37492 3.62533C8.56936 3.81977 8.66658 4.05588 8.66658 4.33366V8.33366H9.26659C9.35547 8.33366 9.45547 8.34477 9.56658 8.36699C9.6777 8.38921 9.7777 8.42255 9.86658 8.46699L12.5999 9.83366C12.8555 9.95588 13.0499 10.1475 13.1833 10.4087C13.3166 10.6698 13.361 10.9392 13.3166 11.217L12.8999 14.1837C12.8444 14.517 12.6944 14.792 12.4499 15.0087C12.2055 15.2253 11.9166 15.3337 11.5833 15.3337H7.46658ZM7.03325 14.0003H11.2999L11.9333 10.367L9.16658 9.00033H7.99992V5.00033C7.99992 4.90033 7.96936 4.81977 7.90825 4.75866C7.84714 4.69755 7.76658 4.66699 7.66658 4.66699C7.56659 4.66699 7.48603 4.69755 7.42492 4.75866C7.36381 4.81977 7.33325 4.90033 7.33325 5.00033V12.067L4.49992 11.467L7.03325 14.0003ZM7.03325 14.0003L4.49992 11.467L7.33325 12.067V5.00033C7.33325 4.90033 7.36381 4.81977 7.42492 4.75866C7.48603 4.69755 7.56659 4.66699 7.66658 4.66699C7.76658 4.66699 7.84714 4.69755 7.90825 4.75866C7.96936 4.81977 7.99992 4.90033 7.99992 5.00033V9.00033H9.16658L11.9333 10.367L11.2999 14.0003H7.03325Z"
                    fill="#DA1D28"
                  />
                </g>
              </svg>
            }
            text1={'Request rejected'}
            text2={'(0)'}
          />
        </div>
      </section>

      <section className={styles.section6}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 15.5H7.5C6.10444 15.5 5.40665 15.5 4.83886 15.6722C3.56045 16.06 2.56004 17.0605 2.17224 18.3389C2 18.9067 2 19.6044 2 21M19 21V15M16 18H22M14.5 7.5C14.5 9.98528 12.4853 12 10 12C7.51472 12 5.5 9.98528 5.5 7.5C5.5 5.01472 7.51472 3 10 3C12.4853 3 14.5 5.01472 14.5 7.5Z"
              stroke="#3B51A1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div>
          <span>Ad account recharge</span>
          <button>
            <IoMdOpen color="#26283F" size={12} />
          </button>
          <span>
            0 <small>Request</small>
          </span>
        </div>
        <div>
          <Section456Row
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <mask
                  id="mask0_1_17147"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_17147)">
                  <path
                    d="M12.6667 6.00033L11.8334 4.16699L10.0001 3.33366L11.8334 2.50033L12.6667 0.666992L13.5001 2.50033L15.3334 3.33366L13.5001 4.16699L12.6667 6.00033ZM12.6667 15.3337L11.8334 13.5003L10.0001 12.667L11.8334 11.8337L12.6667 10.0003L13.5001 11.8337L15.3334 12.667L13.5001 13.5003L12.6667 15.3337ZM6.00008 13.3337L4.33342 9.66699L0.666748 8.00033L4.33342 6.33366L6.00008 2.66699L7.66675 6.33366L11.3334 8.00033L7.66675 9.66699L6.00008 13.3337Z"
                    fill="#1D8F1B"
                  />
                </g>
              </svg>
            }
            text1={'Request approved'}
            text2={'(0)'}
          />
          <Section456Row
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <mask
                  id="mask0_1_17156"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_17156)">
                  <path
                    d="M8.00008 10.667C8.83342 10.667 9.54175 10.3753 10.1251 9.79199C10.7084 9.20866 11.0001 8.50033 11.0001 7.66699C11.0001 6.83366 10.7084 6.12533 10.1251 5.54199C9.54175 4.95866 8.83342 4.66699 8.00008 4.66699C7.16675 4.66699 6.45842 4.95866 5.87508 5.54199C5.29175 6.12533 5.00008 6.83366 5.00008 7.66699C5.00008 8.50033 5.29175 9.20866 5.87508 9.79199C6.45842 10.3753 7.16675 10.667 8.00008 10.667ZM8.00008 9.46699C7.50008 9.46699 7.07508 9.29199 6.72508 8.94199C6.37508 8.59199 6.20008 8.16699 6.20008 7.66699C6.20008 7.16699 6.37508 6.74199 6.72508 6.39199C7.07508 6.04199 7.50008 5.86699 8.00008 5.86699C8.50008 5.86699 8.92508 6.04199 9.27508 6.39199C9.62508 6.74199 9.80008 7.16699 9.80008 7.66699C9.80008 8.16699 9.62508 8.59199 9.27508 8.94199C8.92508 9.29199 8.50008 9.46699 8.00008 9.46699ZM8.00008 12.667C6.37786 12.667 4.90008 12.2142 3.56675 11.3087C2.23341 10.4031 1.26675 9.18921 0.666748 7.66699C1.26675 6.14477 2.23341 4.93088 3.56675 4.02533C4.90008 3.11977 6.37786 2.66699 8.00008 2.66699C9.6223 2.66699 11.1001 3.11977 12.4334 4.02533C13.7667 4.93088 14.7334 6.14477 15.3334 7.66699C14.7334 9.18921 13.7667 10.4031 12.4334 11.3087C11.1001 12.2142 9.6223 12.667 8.00008 12.667Z"
                    fill="#4440EE"
                  />
                </g>
              </svg>
            }
            text1={'Request reviewed'}
            text2={'(0)'}
          />
          <Section456Row
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <mask
                  id="mask0_1_17165"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="16"
                  height="16"
                >
                  <rect width="16" height="16" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1_17165)">
                  <path
                    d="M1.33325 4.66699V1.33366H2.33325V2.68366C3.11103 2.05033 3.98047 1.55588 4.94159 1.20033C5.9027 0.84477 6.92214 0.666992 7.99992 0.666992C9.84436 0.666992 11.3555 1.09199 12.5333 1.94199C13.711 2.79199 14.4221 3.70033 14.6666 4.66699H13.6166C13.361 4.00033 12.7583 3.33366 11.8083 2.66699C10.8583 2.00033 9.58881 1.66699 7.99992 1.66699C6.98881 1.66699 6.03603 1.84477 5.14159 2.20033C4.24714 2.55588 3.44436 3.04477 2.73325 3.66699H4.66658V4.66699H1.33325ZM7.46658 15.3337C7.26658 15.3337 7.06381 15.2975 6.85825 15.2253C6.6527 15.1531 6.48881 15.0559 6.36659 14.9337L3.33325 11.7503L3.88325 11.1837C3.96103 11.1059 4.0527 11.0503 4.15825 11.017C4.26381 10.9837 4.3777 10.9781 4.49992 11.0003L6.66658 11.5003V4.33366C6.66658 4.05588 6.76381 3.81977 6.95825 3.62533C7.1527 3.43088 7.38881 3.33366 7.66658 3.33366C7.94436 3.33366 8.18047 3.43088 8.37492 3.62533C8.56936 3.81977 8.66658 4.05588 8.66658 4.33366V8.33366H9.26659C9.35547 8.33366 9.45547 8.34477 9.56658 8.36699C9.6777 8.38921 9.7777 8.42255 9.86658 8.46699L12.5999 9.83366C12.8555 9.95588 13.0499 10.1475 13.1833 10.4087C13.3166 10.6698 13.361 10.9392 13.3166 11.217L12.8999 14.1837C12.8444 14.517 12.6944 14.792 12.4499 15.0087C12.2055 15.2253 11.9166 15.3337 11.5833 15.3337H7.46658ZM7.03325 14.0003H11.2999L11.9333 10.367L9.16658 9.00033H7.99992V5.00033C7.99992 4.90033 7.96936 4.81977 7.90825 4.75866C7.84714 4.69755 7.76658 4.66699 7.66658 4.66699C7.56659 4.66699 7.48603 4.69755 7.42492 4.75866C7.36381 4.81977 7.33325 4.90033 7.33325 5.00033V12.067L4.49992 11.467L7.03325 14.0003ZM7.03325 14.0003L4.49992 11.467L7.33325 12.067V5.00033C7.33325 4.90033 7.36381 4.81977 7.42492 4.75866C7.48603 4.69755 7.56659 4.66699 7.66658 4.66699C7.76658 4.66699 7.84714 4.69755 7.90825 4.75866C7.96936 4.81977 7.99992 4.90033 7.99992 5.00033V9.00033H9.16658L11.9333 10.367L11.2999 14.0003H7.03325Z"
                    fill="#DA1D28"
                  />
                </g>
              </svg>
            }
            text1={'Request rejected'}
            text2={'(0)'}
          />
        </div>
      </section>

      <h3 className={styles.h3}>Main Balance and Ad Account Recharges</h3>
      <Section7 />

      <h3 className={styles.h3}>Last transaction request</h3>

      <Section8 />
      <Section9 />
      <Section10 />
    </div>
  );
};

export default Main;

export const Section10 = () => {
  return (
    <div className={styles.section10}>
      <span>Advertising Account Requests </span>
      <div>
        <Search />
        <div>
          <span>01 Mar 2023 - 31 Mar 2023</span>
          <input type="date" hidden />

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M12.25 5.83366H1.75M9.33333 1.16699V3.50033M4.66667 1.16699V3.50033M4.55 12.8337H9.45C10.4301 12.8337 10.9201 12.8337 11.2945 12.6429C11.6238 12.4751 11.8915 12.2074 12.0593 11.8781C12.25 11.5038 12.25 11.0138 12.25 10.0337V5.13366C12.25 4.15357 12.25 3.66352 12.0593 3.28918C11.8915 2.95989 11.6238 2.69218 11.2945 2.5244C10.9201 2.33366 10.4301 2.33366 9.45 2.33366H4.55C3.56991 2.33366 3.07986 2.33366 2.70552 2.5244C2.37623 2.69218 2.10852 2.95989 1.94074 3.28918C1.75 3.66352 1.75 4.15357 1.75 5.13366V10.0337C1.75 11.0138 1.75 11.5038 1.94074 11.8781C2.10852 12.2074 2.37623 12.4751 2.70552 12.6429C3.07986 12.8337 3.56991 12.8337 4.55 12.8337Z"
                stroke="#26283F"
                stroke-width="1.16667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <select>
          <option>Time Zone</option>
        </select>
        <button>Apply</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Platform</th>
            <th>Ad Id Account</th>
            <th>Ad Account name</th>
            <th>Date of Creation</th>
            <th>Domain/Website</th>
            <th>Time Zone</th>
            <th>Spend Limits</th>
            <th>Actions</th>
          </tr>
        </thead>
        {section10Rows.map((row, idx) => {
          return (
            <tr key={idx}>
              <td>
                {getSection10LogoIcon(row.platform)} <span>{row.platform}</span>
              </td>
              <td>{row.adIdAccount}</td>
              <td>{row.adAccountName}</td>
              <td>
                {row.dateOfCreation} <small>{row.timeOfCreation}</small>
              </td>
              <td>{row.domainWebsite}</td>
              <td>{row.timeZone}</td>
              <td>{row.spendLimits}</td>
              <td>
                {row.actions.map((el, idx) => {
                  return getSection10ActionIcon(el, idx);
                })}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

const getSection10ActionIcon = (state: string, idx: any) => {
  switch (state) {
    case 'transfert':
      return (
        <button key={idx} className={styles[state]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M10 8.5H2M2 8.5L4 6.5M2 8.5L4 10.5M2 3.5H10M10 3.5L8 1.5M10 3.5L8 5.5"
              stroke="#3A4CA1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      );
    case 'add':
      return (
        <button key={idx} className={styles[state]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M9.5 10.5V7.5M8 9H11M11 5H1M11 6V4.1C11 3.53995 11 3.25992 10.891 3.04601C10.7951 2.85785 10.6422 2.70487 10.454 2.60899C10.2401 2.5 9.96005 2.5 9.4 2.5H2.6C2.03995 2.5 1.75992 2.5 1.54601 2.60899C1.35785 2.70487 1.20487 2.85785 1.10899 3.04601C1 3.25992 1 3.53995 1 4.1V7.9C1 8.46005 1 8.74008 1.10899 8.95399C1.20487 9.14215 1.35785 9.29513 1.54601 9.39101C1.75992 9.5 2.03995 9.5 2.6 9.5H6"
              stroke="#147A3D"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      );
    default:
      return (
        <button key={idx} className={styles[state]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M4.5 8.5L6 10M6 10L7.5 8.5M6 10V6.5M11 4.5H1M2.75 9H2.6C2.03995 9 1.75992 9 1.54601 8.89101C1.35785 8.79513 1.20487 8.64215 1.10899 8.45399C1 8.24008 1 7.96005 1 7.4V3.6C1 3.03995 1 2.75992 1.10899 2.54601C1.20487 2.35785 1.35785 2.20487 1.54601 2.10899C1.75992 2 2.03995 2 2.6 2H9.4C9.96005 2 10.2401 2 10.454 2.10899C10.6422 2.20487 10.7951 2.35785 10.891 2.54601C11 2.75992 11 3.03995 11 3.6V7.4C11 7.96005 11 8.24008 10.891 8.45399C10.7951 8.64215 10.6422 8.79513 10.454 8.89101C10.2401 9 9.96005 9 9.4 9H9.25"
              stroke="#D23D28"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      );
  }
};

const getSection10LogoIcon = (state: string) => {
  switch (state) {
    case 'Facebook':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clip-path="url(#clip0_1_17708)">
            <path
              d="M9.237 16V8.70218H11.6856L12.053 5.85725H9.237V4.04118C9.237 3.21776 9.46472 2.65661 10.6468 2.65661L12.1521 2.65599V0.111384C11.8918 0.0775563 10.9982 0 9.95822 0C7.78654 0 6.29977 1.32557 6.29977 3.75942V5.85725H3.84375V8.70218H6.29977V16H9.237Z"
              fill="#3C5A9A"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_17708">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 'TikTok':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clip-path="url(#clip0_1_17713)">
            <path
              d="M6.34123 6.37579V5.75157C6.12456 5.71726 5.9057 5.69847 5.68635 5.69532C3.56266 5.69079 1.68251 7.06702 1.04476 9.09268C0.407018 11.1183 1.1598 13.3234 2.90296 14.5363C2.26374 13.8522 1.83619 12.9977 1.67191 12.0759C1.50764 11.1542 1.61366 10.2046 1.97718 9.34175C2.3407 8.47893 2.94619 7.73976 3.72055 7.21347C4.49491 6.68719 5.40504 6.39628 6.34109 6.37586L6.34123 6.37579Z"
              fill="#25F4EE"
            />
            <path
              d="M6.45872 13.4495C7.64609 13.4478 8.62208 12.5124 8.67408 11.3262V0.740574H10.6079C10.5685 0.519377 10.5496 0.294993 10.5517 0.0703125L7.90656 0.0703125V10.6457C7.86257 11.838 6.88424 12.7824 5.69121 12.7843C5.33468 12.7813 4.98398 12.6936 4.66797 12.5285C4.87278 12.8123 5.14175 13.0436 5.45295 13.2037C5.76416 13.3637 6.10878 13.4479 6.45872 13.4495ZM14.22 4.33216V3.74379C13.5083 3.74407 12.8124 3.53405 12.2196 3.14011C12.7392 3.74421 13.4414 4.16266 14.22 4.33216Z"
              fill="#25F4EE"
            />
            <path
              d="M12.2192 3.14299C11.6353 2.47805 11.3133 1.62325 11.3136 0.738281H10.6075C10.6987 1.22757 10.8887 1.69314 11.1658 2.10658C11.4429 2.52003 11.8013 2.87267 12.2192 3.14299ZM5.68572 8.34627C5.1905 8.34879 4.71034 8.51679 4.32156 8.82355C3.93279 9.13032 3.65773 9.55825 3.5401 10.0393C3.42248 10.5204 3.46905 11.0269 3.6724 11.4785C3.87576 11.93 4.22423 12.3007 4.66241 12.5314C4.42284 12.2006 4.27937 11.81 4.24786 11.4028C4.21635 10.9956 4.29802 10.5876 4.48385 10.2239C4.66969 9.86018 4.95245 9.55492 5.30089 9.34184C5.64934 9.12876 6.04991 9.01615 6.45834 9.01646C6.68038 9.01937 6.90087 9.05393 7.11316 9.1191V6.42764C6.89637 6.39514 6.67755 6.37805 6.45834 6.3765H6.34061V8.42298C6.1272 8.36574 5.90658 8.3399 5.68572 8.34627Z"
              fill="#FE2C55"
            />
            <path
              d="M14.2236 4.33594V6.3825C12.906 6.37993 11.6226 5.96287 10.5552 5.19038V10.5676C10.5495 13.2508 8.3728 15.423 5.68964 15.423C4.69313 15.4248 3.72061 15.1173 2.90625 14.543C3.57031 15.2573 4.43408 15.755 5.38505 15.9714C6.33602 16.1877 7.3301 16.1127 8.23781 15.756C9.14552 15.3994 9.92479 14.7776 10.4741 13.9718C11.0234 13.1659 11.3173 12.2133 11.3176 11.238V5.87601C12.3885 6.64341 13.6735 7.05503 14.991 7.05276V4.41761C14.7331 4.41684 14.4759 4.38947 14.2236 4.33594Z"
              fill="#FE2C55"
            />
            <path
              d="M10.5542 10.5667V5.18948C11.6248 5.95757 12.91 6.36927 14.2277 6.36623V4.31974C13.4492 4.15535 12.7453 3.74234 12.2221 3.14299C11.8042 2.87267 11.4458 2.52003 11.1687 2.10658C10.8916 1.69314 10.7016 1.22757 10.6104 0.738281H8.6766V11.3292C8.65777 11.7902 8.4958 12.2339 8.21321 12.5986C7.93061 12.9633 7.54142 13.231 7.09972 13.3643C6.65802 13.4977 6.18576 13.4901 5.74855 13.3427C5.31135 13.1953 4.93093 12.9153 4.66015 12.5417C4.22189 12.311 3.87335 11.9404 3.66994 11.4888C3.46653 11.0373 3.41994 10.5306 3.53757 10.0495C3.6552 9.56842 3.9303 9.14046 4.31913 8.83368C4.70796 8.5269 5.18819 8.35893 5.68346 8.35647C5.90558 8.35845 6.12621 8.39294 6.33835 8.45883V6.41227C5.39726 6.42823 4.48115 6.71766 3.70171 7.24527C2.92228 7.77289 2.31319 8.51589 1.94872 9.38368C1.58425 10.2515 1.48014 11.2066 1.64909 12.1325C1.81804 13.0584 2.25275 13.9152 2.90021 14.5984C3.72257 15.1538 4.69647 15.4415 5.68863 15.4221C8.37179 15.4221 10.5485 13.2499 10.5542 10.5667Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_17713">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <mask
            id="mask0_1_17728"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="16"
          >
            <path
              d="M15.814 6.54545H8.18605V9.63636H12.5767C12.1674 11.6 10.4558 12.7273 8.18605 12.7273C5.50698 12.7273 3.34884 10.6182 3.34884 8C3.34884 5.38182 5.50698 3.27273 8.18605 3.27273C9.33953 3.27273 10.3814 3.67274 11.2 4.32728L13.5814 2C12.1302 0.763636 10.2698 0 8.18605 0C3.64651 0 0 3.56364 0 8C0 12.4364 3.64651 16 8.18605 16C12.2791 16 16 13.0909 16 8C16 7.52727 15.9256 7.01818 15.814 6.54545Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_1_17728)">
            <path
              d="M-0.744141 12.728V3.27344L5.58144 8.00071L-0.744141 12.728Z"
              fill="#FBBC05"
            />
          </g>
          <mask
            id="mask1_1_17728"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="16"
          >
            <path
              d="M15.814 6.54545H8.18605V9.63636H12.5767C12.1674 11.6 10.4558 12.7273 8.18605 12.7273C5.50698 12.7273 3.34884 10.6182 3.34884 8C3.34884 5.38182 5.50698 3.27273 8.18605 3.27273C9.33953 3.27273 10.3814 3.67274 11.2 4.32728L13.5814 2C12.1302 0.763636 10.2698 0 8.18605 0C3.64651 0 0 3.56364 0 8C0 12.4364 3.64651 16 8.18605 16C12.2791 16 16 13.0909 16 8C16 7.52727 15.9256 7.01818 15.814 6.54545Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask1_1_17728)">
            <path
              d="M-0.744141 3.27344L5.58144 8.00071L8.18609 5.78254L17.1163 4.36435V-0.726562H-0.744141V3.27344Z"
              fill="#EA4335"
            />
          </g>
          <mask
            id="mask2_1_17728"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="16"
          >
            <path
              d="M15.814 6.54545H8.18605V9.63636H12.5767C12.1674 11.6 10.4558 12.7273 8.18605 12.7273C5.50698 12.7273 3.34884 10.6182 3.34884 8C3.34884 5.38182 5.50698 3.27273 8.18605 3.27273C9.33953 3.27273 10.3814 3.67274 11.2 4.32728L13.5814 2C12.1302 0.763636 10.2698 0 8.18605 0C3.64651 0 0 3.56364 0 8C0 12.4364 3.64651 16 8.18605 16C12.2791 16 16 13.0909 16 8C16 7.52727 15.9256 7.01818 15.814 6.54545Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask2_1_17728)">
            <path
              d="M-0.744141 12.728L10.4187 4.36435L13.3582 4.72798L17.1163 -0.726562V16.728H-0.744141V12.728Z"
              fill="#34A853"
            />
          </g>
          <mask
            id="mask3_1_17728"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="16"
          >
            <path
              d="M15.814 6.54545H8.18605V9.63636H12.5767C12.1674 11.6 10.4558 12.7273 8.18605 12.7273C5.50698 12.7273 3.34884 10.6182 3.34884 8C3.34884 5.38182 5.50698 3.27273 8.18605 3.27273C9.33953 3.27273 10.3814 3.67274 11.2 4.32728L13.5814 2C12.1302 0.763636 10.2698 0 8.18605 0C3.64651 0 0 3.56364 0 8C0 12.4364 3.64651 16 8.18605 16C12.2791 16 16 13.0909 16 8C16 7.52727 15.9256 7.01818 15.814 6.54545Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask3_1_17728)">
            <path
              d="M17.117 16.728L5.58212 8.00071L4.09375 6.9098L17.117 3.27344V16.728Z"
              fill="#4285F4"
            />
          </g>
        </svg>
      );
  }
};

export const Section9 = () => {
  return (
    <div className={styles.section9}>
      <span>Ad Account Recharge Requests </span>
      <div>
        <Search />
        <div>
          <span>01 Mar 2023 - 31 Mar 2023</span>
          <input type="date" hidden />

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M12.25 5.83366H1.75M9.33333 1.16699V3.50033M4.66667 1.16699V3.50033M4.55 12.8337H9.45C10.4301 12.8337 10.9201 12.8337 11.2945 12.6429C11.6238 12.4751 11.8915 12.2074 12.0593 11.8781C12.25 11.5038 12.25 11.0138 12.25 10.0337V5.13366C12.25 4.15357 12.25 3.66352 12.0593 3.28918C11.8915 2.95989 11.6238 2.69218 11.2945 2.5244C10.9201 2.33366 10.4301 2.33366 9.45 2.33366H4.55C3.56991 2.33366 3.07986 2.33366 2.70552 2.5244C2.37623 2.69218 2.10852 2.95989 1.94074 3.28918C1.75 3.66352 1.75 4.15357 1.75 5.13366V10.0337C1.75 11.0138 1.75 11.5038 1.94074 11.8781C2.10852 12.2074 2.37623 12.4751 2.70552 12.6429C3.07986 12.8337 3.56991 12.8337 4.55 12.8337Z"
                stroke="#26283F"
                stroke-width="1.16667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <select>
          <option>Status</option>
        </select>
        <select>
          <option>Type</option>
        </select>
        <select>
          <option>Select Payment Method</option>
        </select>
        <button>Apply</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Requested Date</th>
            <th>Type</th>
            <th>Amount {'($)'}</th>
            <th>Payment method</th>
            <th>Status</th>
          </tr>
        </thead>
        {section9Rows.map((row, idx) => {
          return <Section9StatusCell key={idx} row={row} />;
        })}
      </table>
    </div>
  );
};

type Section9StatusCellProps = {
  row: {
    requestId: string;
    requestDate: string;
    requestTime: string;
    type: string;
    amount: string;
    paymentMethod: string;
    status: string;
    sender?: string;
    receiver?: string;
    reason?: string;
  };
};

const Section9StatusCell = ({ row }: Section9StatusCellProps) => {
  const popupRef = useRef<HTMLDivElement>(null);
  return (
    <tr className={styles.Section9StatusRow}>
      <td>{row.requestId}</td>
      <td>
        {row.requestDate}, <small>{row.requestTime}</small>
      </td>
      <td>{row.type}</td>
      <td>{row.amount}</td>
      <td>
        {getSection8PayementIcon(row.paymentMethod)}
        {row.paymentMethod}
      </td>
      <td>
        <button className={styles.Section9StatusCell}>
          {row.status === 'Rejected' && (
            <div
              ref={popupRef}
              className={styles.Section9StatusCellPopUp + ' ' + styles.hide}
            >
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M11.0832 12.2503V8.75033M9.33317 10.5003H12.8332M12.8332 5.83366H1.1665M12.8332 7.00033V4.78366C12.8332 4.13027 12.8332 3.80357 12.706 3.554C12.5942 3.33448 12.4157 3.156 12.1962 3.04415C11.9466 2.91699 11.6199 2.91699 10.9665 2.91699H3.03317C2.37978 2.91699 2.05308 2.91699 1.80352 3.04415C1.58399 3.156 1.40552 3.33448 1.29366 3.554C1.1665 3.80357 1.1665 4.13026 1.1665 4.78366V9.21699C1.1665 9.87039 1.1665 10.1971 1.29366 10.4466C1.40552 10.6662 1.58399 10.8446 1.80351 10.9565C2.05308 11.0837 2.37978 11.0837 3.03317 11.0837H6.99984"
                    stroke="#3A4CA1"
                    stroke-width="1.16667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{' '}
                Deposit
              </p>
              <span>Sender:</span>
              <span>
                {getSection8PayementIcon(row.sender)} {row.sender}
              </span>
              <span>Receiver:</span>
              <span>{row.receiver}</span>
              <p dangerouslySetInnerHTML={{ __html: row.reason as string }} />
            </div>
          )}
          {row.status}{' '}
          {row.status === 'Rejected' && (
            <MdOutlineInfo
              onMouseEnter={e => {
                popupRef.current?.classList.remove(styles.hide);
                popupRef.current?.classList.add(styles.show);
              }}
              onMouseLeave={e => {
                popupRef.current?.classList.add(styles.hide);
                popupRef.current?.classList.remove(styles.show);
              }}
              size={12}
            />
          )}
        </button>
      </td>
    </tr>
  );
};

export const Section8 = () => {
  return (
    <div className={styles.section8}>
      <span>Ad Account Recharge Requests </span>
      <div>
        <Search />
        <div>
          <span>01 Mar 2023 - 31 Mar 2023</span>
          <input type="date" hidden />

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M12.25 5.83366H1.75M9.33333 1.16699V3.50033M4.66667 1.16699V3.50033M4.55 12.8337H9.45C10.4301 12.8337 10.9201 12.8337 11.2945 12.6429C11.6238 12.4751 11.8915 12.2074 12.0593 11.8781C12.25 11.5038 12.25 11.0138 12.25 10.0337V5.13366C12.25 4.15357 12.25 3.66352 12.0593 3.28918C11.8915 2.95989 11.6238 2.69218 11.2945 2.5244C10.9201 2.33366 10.4301 2.33366 9.45 2.33366H4.55C3.56991 2.33366 3.07986 2.33366 2.70552 2.5244C2.37623 2.69218 2.10852 2.95989 1.94074 3.28918C1.75 3.66352 1.75 4.15357 1.75 5.13366V10.0337C1.75 11.0138 1.75 11.5038 1.94074 11.8781C2.10852 12.2074 2.37623 12.4751 2.70552 12.6429C3.07986 12.8337 3.56991 12.8337 4.55 12.8337Z"
                stroke="#26283F"
                stroke-width="1.16667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <select>
          <option>All Status</option>
        </select>
        <select>
          <option>Select Payment Method</option>
        </select>
        <button>Apply</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Request At</th>
            <th>Ad Account Recharged</th>
            <th>Amount</th>
            <th>Payment method</th>
            <th>Amount Recharged</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        {section8Rows.map((row, idx) => {
          return (
            <tr key={idx}>
              <td>{row.requestedAt}</td>
              <td>{row.addAccountRecharged}</td>
              <td>{row.amount}</td>
              <td>
                {getSection8PayementIcon(row.paymentMethod)}
                {row.paymentMethod}
              </td>
              <td>{row.amountRecharged}</td>
              <td>
                <button>{row.status}</button>
              </td>
              <td>
                <button>{row.actions}</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

const getSection8PayementIcon = (state?: string) => {
  switch (state) {
    case 'Stripe':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M1.07698 2.38803C0.75 3.02976 0.75 3.86984 0.75 5.55V6.45C0.75 8.13016 0.75 8.97024 1.07698 9.61197C1.3646 10.1765 1.82354 10.6354 2.38803 10.923C3.02976 11.25 3.86984 11.25 5.55 11.25H6.45C8.13016 11.25 8.97024 11.25 9.61197 10.923C10.1765 10.6354 10.6354 10.1765 10.923 9.61197C11.25 8.97024 11.25 8.13016 11.25 6.45V5.55C11.25 3.86984 11.25 3.02976 10.923 2.38803C10.6354 1.82354 10.1765 1.3646 9.61197 1.07698C8.97024 0.75 8.13016 0.75 6.45 0.75H5.55C3.86984 0.75 3.02976 0.75 2.38803 1.07698C1.82354 1.3646 1.3646 1.82354 1.07698 2.38803Z"
            fill="url(#paint0_linear_1_18181)"
          />
          <path
            d="M0.849458 3.10464C0.75 3.66987 0.75 4.41986 0.75 5.5498V6.4498C0.75 8.12996 0.75 8.97004 1.07698 9.61177C1.3646 10.1763 1.82354 10.6352 2.38803 10.9228C3.02976 11.2498 3.86984 11.2498 5.55 11.2498H6.45C8.13016 11.2498 8.97024 11.2498 9.61197 10.9228C10.1765 10.6352 10.6354 10.1763 10.923 9.61177C11.25 8.97004 11.25 8.12996 11.25 6.4498V5.5498C11.25 3.86964 11.25 3.02956 10.923 2.38783C10.6454 1.84298 10.2082 1.39646 9.67051 1.10742L0.849458 3.10464Z"
            fill="url(#paint1_linear_1_18181)"
          />
          <path
            d="M11.1414 8.94531C11.0932 9.19872 11.0235 9.41474 10.923 9.61201C10.6354 10.1765 10.1765 10.6354 9.61198 10.9231C8.98945 11.2403 8.18026 11.2497 6.5986 11.25H6.02197V10.0638L11.1414 8.94531Z"
            fill="url(#paint2_linear_1_18181)"
          />
          <path
            d="M6.45011 0.75H5.55011C5.22324 0.75 4.92816 0.75 4.66016 0.752408V2.23894L9.66964 1.10709C9.65058 1.09686 9.63139 1.08682 9.61209 1.07698C9.25582 0.895456 8.83843 0.814705 8.25011 0.778784C7.77869 0.75 7.19752 0.75 6.45011 0.75Z"
            fill="url(#paint3_linear_1_18181)"
          />
          <path
            d="M11.25 6.51461C11.2499 7.6417 11.2479 8.38464 11.1413 8.94486L9.36084 9.33388V6.68054L11.25 6.24121V6.51461Z"
            fill="url(#paint4_linear_1_18181)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.60278 5.01647C5.60278 4.77546 5.79982 4.68277 6.12617 4.68277C6.59415 4.68277 7.18527 4.8249 7.65324 5.07826V3.62606C7.14217 3.42213 6.63725 3.3418 6.12617 3.3418C4.87619 3.3418 4.04492 3.99683 4.04492 5.09062C4.04492 6.79619 6.38479 6.52429 6.38479 7.25966C6.38479 7.54392 6.13849 7.63662 5.79367 7.63662C5.28259 7.63662 4.62989 7.42651 4.11265 7.14225V8.61299C4.68531 8.86017 5.26412 8.96523 5.79367 8.96523C7.07443 8.96523 7.95496 8.32873 7.95496 7.22258C7.94881 5.38106 5.60278 5.70858 5.60278 5.01647Z"
            fill="white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_18181"
              x1="0.75"
              y1="0.75"
              x2="4.19874"
              y2="3.18828"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#392993" />
              <stop offset="1" stop-color="#4B47B9" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_18181"
              x1="1.1454"
              y1="3.21523"
              x2="8.75873"
              y2="9.49516"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#594BB9" />
              <stop offset="1" stop-color="#60A8F2" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1_18181"
              x1="6.02197"
              y1="10.1078"
              x2="11.25"
              y2="11.2501"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#61A2EF" />
              <stop offset="1" stop-color="#58E6FD" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1_18181"
              x1="4.66016"
              y1="1.49686"
              x2="11.2501"
              y2="0.75"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#534EBE" />
              <stop offset="1" stop-color="#6875E2" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_1_18181"
              x1="9.36084"
              y1="6.70251"
              x2="11.25"
              y2="8.96506"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#71A5F3" />
              <stop offset="1" stop-color="#6CC3FA" />
            </linearGradient>
          </defs>
        </svg>
      );
    case 'USDT':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <g clip-path="url(#clip0_1_17401)">
            <path
              d="M7 0C10.8656 0 14 3.13444 14 7C14 10.8656 10.8656 14 7 14C3.13444 14 0 10.8675 0 7C0 3.1325 3.13444 0 7 0Z"
              fill="#26A17B"
            />
            <path
              d="M7.98694 6.21873V5.17651H10.3689V3.58984H3.88417V5.17651H6.26611V6.21873C4.33139 6.30818 2.875 6.69123 2.875 7.15012C2.875 7.60901 4.33139 7.99207 6.26611 8.08151V11.4162H7.98889V8.08151C9.92167 7.99207 11.3742 7.60901 11.3742 7.15012C11.3722 6.69123 9.91972 6.30818 7.98694 6.21873ZM7.98889 7.79957C7.94028 7.80151 7.69139 7.81707 7.13528 7.81707C6.69 7.81707 6.37889 7.8054 6.26806 7.79957V7.80151C4.55889 7.72568 3.28139 7.42818 3.28139 7.07234C3.28139 6.71651 4.55694 6.41901 6.26806 6.34318V7.50207C6.38083 7.50984 6.69972 7.52929 7.14306 7.52929C7.67389 7.52929 7.94028 7.5079 7.99083 7.50207V6.33929C9.69806 6.41512 10.9717 6.71262 10.9717 7.06846C10.9678 7.42429 9.69417 7.72179 7.98889 7.79957Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_17401">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case 'Bank Wine':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M2.91667 5.25042V9.91709M5.54167 5.25042V9.91709M8.45833 5.25042V9.91709M11.0833 5.25042V9.91709M1.75 10.8504L1.75 11.3171C1.75 11.6438 1.75 11.8071 1.81358 11.9319C1.86951 12.0417 1.95874 12.1309 2.06851 12.1868C2.19329 12.2504 2.35664 12.2504 2.68333 12.2504H11.3167C11.6434 12.2504 11.8067 12.2504 11.9315 12.1868C12.0413 12.1309 12.1305 12.0417 12.1864 11.9319C12.25 11.8071 12.25 11.6438 12.25 11.3171V10.8504C12.25 10.5237 12.25 10.3604 12.1864 10.2356C12.1305 10.1258 12.0413 10.0366 11.9315 9.98067C11.8067 9.91709 11.6434 9.91709 11.3167 9.91709H2.68333C2.35664 9.91709 2.19329 9.91709 2.06851 9.98067C1.95874 10.0366 1.86951 10.1258 1.81358 10.2356C1.75 10.3604 1.75 10.5237 1.75 10.8504ZM6.79753 1.79541L2.48087 2.75467C2.22008 2.81262 2.08969 2.8416 1.99235 2.91172C1.9065 2.97357 1.83909 3.05761 1.79734 3.15483C1.75 3.26506 1.75 3.39863 1.75 3.66578L1.75 4.31708C1.75 4.64378 1.75 4.80713 1.81358 4.93191C1.86951 5.04167 1.95874 5.13091 2.06851 5.18684C2.19329 5.25042 2.35664 5.25042 2.68333 5.25042H11.3167C11.6434 5.25042 11.8067 5.25042 11.9315 5.18684C12.0413 5.13091 12.1305 5.04167 12.1864 4.93191C12.25 4.80713 12.25 4.64378 12.25 4.31709V3.66578C12.25 3.39863 12.25 3.26506 12.2027 3.15483C12.1609 3.05761 12.0935 2.97357 12.0076 2.91172C11.9103 2.8416 11.7799 2.81262 11.5191 2.75467L7.20247 1.79541C7.12691 1.77862 7.08913 1.77023 7.05096 1.76688C7.01705 1.76391 6.98295 1.76391 6.94904 1.76688C6.91087 1.77023 6.87309 1.77862 6.79753 1.79541Z"
            stroke="#3A4CA1"
            stroke-width="1.16667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    default:
      return (
        <img
          height={14}
          width={14}
          src={imageService.getImages().RectanglePayoneer}
          alt=""
        />
      );
  }
};

const Search = () => {
  return (
    <div className={styles.search}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M12.25 12.25L10.2084 10.2083M11.6667 6.70833C11.6667 9.44675 9.44675 11.6667 6.70833 11.6667C3.96992 11.6667 1.75 9.44675 1.75 6.70833C1.75 3.96992 3.96992 1.75 6.70833 1.75C9.44675 1.75 11.6667 3.96992 11.6667 6.70833Z"
          stroke="#939393"
          stroke-width="1.16667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <input type="text" placeholder="Search" />
    </div>
  );
};

export const Section7 = () => {
  const [period, setPeriod] = useState(0);
  return (
    <section className={styles.section7}>
      <div>
        <div>
          <span>Current balance</span>
          <span>
            $819232<small>.98</small>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M6 10V2M6 2L3 5M6 2L9 5"
                stroke="#2E8D0C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            4.28%
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0 0 4 4"
            fill="none"
          >
            <circle cx="2" cy="2" r="2" fill="#C7C7C7" />
          </svg>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <mask
                id="mask0_1_17255"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="12"
                height="12"
              >
                <rect width="12" height="12" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1_17255)">
                <path
                  d="M5.48745 10.975C4.85412 10.9083 4.26453 10.7313 3.7187 10.4438C3.17287 10.1562 2.69995 9.78958 2.29995 9.34375C1.89995 8.89792 1.58537 8.3875 1.3562 7.8125C1.12703 7.2375 1.01245 6.62917 1.01245 5.9875C1.01245 4.69583 1.43953 3.57708 2.2937 2.63125C3.14787 1.68542 4.21662 1.14167 5.49995 1V2C4.49162 2.14167 3.65828 2.58958 2.99995 3.34375C2.34162 4.09792 2.01245 4.97917 2.01245 5.9875C2.01245 6.99583 2.34162 7.87708 2.99995 8.63125C3.65828 9.38542 4.48745 9.83333 5.48745 9.975V10.975ZM5.98745 8.5L3.47495 5.975L4.18745 5.2625L5.48745 6.5625V3.5H6.48745V6.5625L7.77495 5.275L8.48745 6L5.98745 8.5ZM6.48745 10.975V9.975C6.84578 9.925 7.18953 9.82917 7.5187 9.6875C7.84787 9.54583 8.15412 9.36667 8.43745 9.15L9.16245 9.875C8.77078 10.1833 8.34995 10.4313 7.89995 10.6188C7.44995 10.8063 6.97912 10.925 6.48745 10.975ZM8.46245 2.825C8.17078 2.60833 7.86037 2.42917 7.5312 2.2875C7.20203 2.14583 6.85828 2.05 6.49995 2V1C6.99162 1.05 7.46245 1.16875 7.91245 1.35625C8.36245 1.54375 8.77912 1.79167 9.16245 2.1L8.46245 2.825ZM9.86245 9.15L9.16245 8.4375C9.37912 8.15417 9.55412 7.84792 9.68745 7.51875C9.82078 7.18958 9.91245 6.84583 9.96245 6.4875H10.9875C10.9208 6.97917 10.7958 7.45208 10.6125 7.90625C10.4291 8.36042 10.1791 8.775 9.86245 9.15ZM9.96245 5.4875C9.91245 5.12917 9.82078 4.78542 9.68745 4.45625C9.55412 4.12708 9.37912 3.82083 9.16245 3.5375L9.86245 2.825C10.1791 3.2 10.4333 3.61458 10.625 4.06875C10.8166 4.52292 10.9375 4.99583 10.9875 5.4875H9.96245Z"
                  fill="#A78736"
                />
              </g>
            </svg>
            On pending $2398.12
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <mask
                id="mask0_1_17259"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="12"
                height="12"
              >
                <rect width="12" height="12" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1_17259)">
                <path
                  d="M2.5 10.5C2.225 10.5 1.98958 10.4021 1.79375 10.2063C1.59792 10.0104 1.5 9.775 1.5 9.5V2.5C1.5 2.225 1.59792 1.98958 1.79375 1.79375C1.98958 1.59792 2.225 1.5 2.5 1.5H6V2.5H2.5V9.5H9.5V6H10.5V9.5C10.5 9.775 10.4021 10.0104 10.2063 10.2063C10.0104 10.4021 9.775 10.5 9.5 10.5H2.5ZM4.85 7.85L4.15 7.15L8.8 2.5H7V1.5H10.5V5H9.5V3.2L4.85 7.85Z"
                  fill="#A78736"
                />
              </g>
            </svg>
          </span>
        </div>
        <div>
          <div>
            {['1D', '1W', '1M', '3M', '6M', '1Y'].map((item, index) => (
              <span
                key={index}
                onClick={() => setPeriod(prev => index)}
                className={period === index ? styles.section7SpanActive : ''}
              >
                {item}
              </span>
            ))}
          </div>
          <select>
            <option>Main Balance</option>
          </select>
        </div>
      </div>
      <div className={styles.Section7lineChart1Container}>
        <Line />
      </div>
      <div>
        <div className={styles.Section7lineChart1SuperContainer2}>
          <div>
            <span>Total Deposit</span>
            <span>
              $819232<small>.98</small>
            </span>
            <span>View</span>
          </div>
          <div className={styles.Section7lineChart1Container2}>
            <Line noAxis={[false, true]} />
          </div>
        </div>
        <div className={styles.Section7lineChart1SuperContainer2}>
          <div>
            <span>Total Deposit</span>
            <span>
              $819232<small>.98</small>
            </span>
            <span>View</span>
          </div>
          <div className={styles.Section7lineChart1Container2}>
            <Line noAxis={[false, true]} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Section456Row = ({
  icon,
  text1,
  text2,
}: {
  icon: JSX.Element;
  text1: string;
  text2: string;
}) => {
  return (
    <div className={styles.section456Row}>
      {icon}
      <span>{text1}</span>
      <span>{text2}</span>
    </div>
  );
};

type Section3RowProps = {
  icon1: JSX.Element;
  text1: string;
  text2: string;
  text3: string;
  icon2: JSX.Element;
};

const Section3Row = ({
  icon1,
  text1,
  text2,
  text3,
  icon2,
}: Section3RowProps) => {
  return (
    <div className={styles.Section3RowContainer}>
      <span>{icon1}</span>
      <span>{text1}</span>
      <button>{text2}</button>
      <button>{text3}</button>
      <button>{icon2}</button>
    </div>
  );
};

const Section1DateRow = ({
  text1,
  text2,
}: {
  text1: string;
  text2: string;
}) => (
  <div className={styles.section1DateRow}>
    <span>{text1}</span>
    <span>{text2}</span>
  </div>
);

// end of content-1-Main of dashboard
