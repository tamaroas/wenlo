import { useState } from 'react';
import { FaBell, FaChevronDown, FaSearch } from 'react-icons/fa';
import imageService from '../../../utils/ImageService';
import styles from './Header.module.scss';
const images = imageService.getImages();

const notifications: Notification[] = [
  {
    title: 'Withdrawal',
    date: '3 May 2023',
    id: '#712921',
    state: 'approved',
    icon: images['credit-card-plus'],
  },
  {
    title: 'Withdrawal',
    date: '3 May 2023',
    id: '#712921',
    state: 'rejected',
    icon: images['credit-card-plus'],
  },
  {
    title: 'Withdrawal',
    date: '3 May 2023',
    id: '#712921',
    state: 'rejected',
    icon: images['credit-card-plus'],
  },
  {
    title: 'Withdrawal',
    date: '3 May 2023',
    id: '#712921',
    state: 'onHold',
    icon: images['credit-card-plus'],
  },
  {
    title: 'Withdrawal',
    date: '3 May 2023',
    id: '#712921',
    state: 'approved',
    icon: images['credit-card-plus'],
  },
];
const Header = () => {
  const [isNotifVisible, setIsNotifVisible] = useState(false);
  const handleNotificationDisplay = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setIsNotifVisible(prev => !prev);
  };
  return (
    <div className={styles.container}>
      <p>👋 Welcome back, Gabriela</p>
      <div>
        <button>
          <FaSearch />
        </button>
        <button onClick={handleNotificationDisplay}>
          <FaBell />
        </button>
        <img src={images.profile} height={32} width={32} alt="profile" />
        <span>Gabriela Hudges</span>
        <span>Premium Plan</span>
        <FaChevronDown size={14} />
      </div>
      {isNotifVisible && <Notifs notifications={notifications} />}
    </div>
  );
};

const NotifRaw = ({ icon, title, date, state, id }: Notification) => {
  const getStateText = () => {
    switch (state) {
      case 'rejected':
        return (
          <p>
            Your deposit withdrawal is{' '}
            <span className={styles['red-text']}>Rejected</span>
          </p>
        );
      case 'approved':
        return (
          <p>
            Your deposit request has been{' '}
            <span className={styles['green-text']}>Approved</span>
          </p>
        );
      case 'onHold':
        return (
          <p>
            Your deposit request is{' '}
            <span className={styles['yellow-text']}>On hold</span>
          </p>
        );
    }
  };
  return (
    <div className={styles.notifRawContainer}>
      <div>
        <img src={icon} alt="" />
      </div>
      <span>{title}</span>
      {getStateText()}
      <span>
        <img src={images.schedule} alt="clock" />
        {date}
      </span>
      <span>{id}</span>
    </div>
  );
};

type Notification = {
  icon: string;
  title: string;
  date: string;
  state: 'approved' | 'rejected' | 'onHold';
  id: string;
};

const Notifs = ({ notifications }: { notifications?: Notification[] }) => {
  return (
    <div className={styles.notifsContainer}>
      <p>Notification</p>
      <div className={styles.notifsSubContainer}>
        {notifications ? (
          notifications.map((el, idx) => {
            return <NotifRaw {...el} />;
          })
        ) : (
          <p>Nothing now</p>
        )}
      </div>
      <button>See all notifications</button>
    </div>
  );
};
export default Header;
