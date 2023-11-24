import {
  MdOutlineAutoAwesome,
  MdOutlineRecentActors,
  MdSwipeLeft,
  MdVisibility,
} from 'react-icons/md';
import Line from '../../Line';
import styles from './Content1-Main.module.scss';
import { IoMdOpen } from 'react-icons/io';
import { FaTiktok } from 'react-icons/fa';
import { LiaMoneyBillWaveSolid } from 'react-icons/lia';
import { useState } from 'react';

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
    </div>
  );
};

export default Main;

const Section7 = () => {
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
            <Line noAxis={[false ,true]}/>
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
            <Line noAxis={[false ,true]}/>
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
