import { Section7, Section9 } from './Content1-Main';
import styles from './Content2-Main.module.scss';

const Balance = () => {
  return (
    <div className={styles.container}>
      <h2>Main Balance Management</h2>
      <Section7 />
      <Section9 />
    </div>
  );
};

export default Balance;
