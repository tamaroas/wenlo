import styles from './Content1-Main.module.scss';
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
            $3000 <small>/ 5000</small>
          </span>
          <span>Monthly top-up limit</span>
        </div>
        <div>{/* graph */}</div>
        <span>April, 2023</span>
        <select>
          <option>April</option>
        </select>
        {Section1DateRowList.map((item, index) => (
          <Section1DateRow key={index} text1={item.text1} text2={item.text2} />
        ))}
        <button>Section1DateRowList</button>
      </section>
      <section className={styles.section2}></section>
      <section className={styles.section3}></section>
    </div>
  );
};

export default Main;

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
