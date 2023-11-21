import { MdOutlineAutoAwesome, MdOutlineRecentActors } from 'react-icons/md';
import Line from '../../Line';
import styles from './Content1-Main.module.scss';
import { IoMdOpen } from 'react-icons/io';
import { FaTiktok } from 'react-icons/fa';
import { LiaMoneyBillWaveSolid } from 'react-icons/lia';

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
          <LiaMoneyBillWaveSolid color={'#3B51A1'} size={24} />
        </button>
        <div>
          <span>Main Balance</span>
          <button>
            <IoMdOpen color="#26283F" size={12} />
          </button>
        </div>
        <span>
          0 <small>Request</small>
        </span>
        <div>
          <span>
            <MdOutlineAutoAwesome />
          </span>
          <span>2</span>
        </div>
      </section>
    </div>
  );
};

export default Main;

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
