import { useState } from 'react';
import Emitter from '../../../../../utils/EventEmitter/EventEmitter';
import AdAccountsNav from '../nav';
import style from './style.module.scss';
import TableView from '../tableView';
import { capitalize } from '../../../../../functions/Strings';
import { Search } from '../../Content1-Main';
import { useNavigate } from 'react-router-dom';

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

export const adAccountFacebookEmitter = new Emitter();

export const adAccountFacebookEmitterEvents = {
  SET_ACTUAL: 'SET_ACTUAL',
};

function AdAccountsFacebook() {
  const [actual, setActual] = useState(0);
  adAccountFacebookEmitter.on(
    adAccountFacebookEmitterEvents.SET_ACTUAL,
    (index: number) => {
      setActual(prev => index);
    }
  );
  return (
    <div>
      <AdAccountsNav
        actual={actual}
        emitter={adAccountFacebookEmitter}
        eventName={adAccountFacebookEmitterEvents.SET_ACTUAL}
      />
      <div className={style.main}>
        {actual === 0 ? (
          <MyRequest comp="facebook" />
        ) : (
          <Advertising comp="facebook" />
        )}
      </div>
    </div>
  );
}

type MyRequestProps = {
  comp: string;
};

export const MyRequest = ({ comp }: MyRequestProps) => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate('request')
  }
  return (
    <div className={style.myRequestContainer}>
      <h2>Manage {capitalize(comp)} Ad Accounts Request</h2>
      <button onClick={handleClick}>Request {comp} ad account</button>
      <TableView />
    </div>
  );
};
export const Advertising = ({ comp }: { comp: string }) => {
  return (
    <div className={style.advertisingContainer}>
      <h2>Manage {capitalize(comp)} Ad Accounts</h2>
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
                  {getSection10LogoIcon(row.platform)}{' '}
                  <span>{row.platform}</span>
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
    </div>
  );
};

const getSection10ActionIcon = (state: string, idx: any) => {
  switch (state) {
    case 'transfert':
      return (
        <button key={idx} className={style[state]}>
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
        <button key={idx} className={style[state]}>
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
        <button key={idx} className={style[state]}>
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

export default AdAccountsFacebook;
