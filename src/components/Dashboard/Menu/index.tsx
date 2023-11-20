import { useEffect, useState } from 'react';
import { BiTransfer } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import { FaRegCreditCard } from 'react-icons/fa6';
import {
  MdOutlineAccountBalanceWallet,
  MdOutlineSpaceDashboard,
} from 'react-icons/md';
import { TbUser, TbUserPlus, TbUserUp, TbUsers } from 'react-icons/tb';
import Emitter from '../../../utils/EventEmitter/EventEmitter';
import imageService from '../../../utils/ImageService';
import styles from './Menu.module.scss';
import { BsClock, BsCurrencyDollar, BsMoon } from 'react-icons/bs';
import { Switch } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
const images = imageService.getImages();

const DashboardMenuEmitter = new Emitter();

const DashboardMenuEventsList = {
  SET_ITEM_SELECTED: 'SET_ITEM_SELECTED',
};

const MenuItemList: {
  title: string;
  icon: JSX.Element;
  route: string;
  type?: string;
}[] = [
  {
    title: 'Dashboard',
    icon: <MdOutlineSpaceDashboard />,
    route: '',
  },
  {
    title: 'Main balance',
    icon: <MdOutlineAccountBalanceWallet />,
    route: 'main-balance',
  },
  {
    title: 'My Ad Accounts',
    icon: <TbUserPlus />,
    route: 'ad-accounts',
    type: 'subMenu',
  },
  {
    title: 'Top-Up & Billings',
    icon: <FaRegCreditCard />,
    route: 'top-up-billings',
  },
  {
    title: 'Balance Transfer',
    icon: <BiTransfer />,
    route: 'balance-transfer',
  },
  {
    title: 'Manage ad account access',
    icon: <TbUserUp />,
    route: 'manage-ad-account-access',
  },
  {
    title: 'People & Business records',
    icon: <TbUsers />,
    route: 'people-business-records',
  },
  {
    title: 'Profile',
    icon: <TbUser />,
    route: 'profile',
  },
];

const DashboardMenu = () => {
  const [itemSelected, setItemSelected] = useState(0);
  DashboardMenuEmitter.on(
    DashboardMenuEventsList.SET_ITEM_SELECTED,
    (idx: number) => {
      setItemSelected(prev => idx);
    }
  );
  return (
    <div className={styles.container}>
      <img
        src={images['wenlo-logo']}
        height={24 * 0.75}
        width={82 * 0.75}
        alt="wenlo-logo"
      />
      <div className={styles.section1}>
        <span>Main Balances</span>
        <span>
          <FaPlus />
        </span>
        <span className="font-800 font-14">$819232.98</span>
      </div>
      <div className={styles.menu}>
        <span className={styles.menuTitle}>menu</span>
        <div className={styles.menuItemsList}>
          {MenuItemList.map((item, index) => (
            <MenuItem
              key={index}
              title={item.title}
              icon={item.icon}
              type={item.type}
              route={item.route}
              // active={index === itemSelected}
              idx={index}
            />
          ))}
        </div>
        <div></div>
        <div className={styles.section2}>
          <p>Premium Plan</p>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut{' '}
          </p>
          <span>
            <BsCurrencyDollar /> Price :
          </span>
          <span>
            $14.99 <small>/ Mo</small>
          </span>
          <span>
            <BsClock /> Expired :
          </span>
          <span>Nov 5, 2023</span>
          <div>
            <button>Change Plan</button>
          </div>
        </div>
        <div className={styles.section3}>
          <span>
            <BsMoon /> Light Mode
          </span>{' '}
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;

type MenuItemProps = {
  title: string;
  icon: JSX.Element;
  type?: string;
  route: string;
  idx: number;
};
const MenuItem = ({ title, icon, route, type, idx }: MenuItemProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    // DashboardMenuEmitter.emit(DashboardMenuEventsList.SET_ITEM_SELECTED, idx);
    navigate(route);
  };
  const [active, setActive] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (route === '') {
      location.pathname === '/dashboard' ? setActive(true) : setActive(false);
    } else {
      location.pathname.includes(`/dashboard/${route}`)
        ? setActive(true)
        : setActive(false);
    }
  }, [location.pathname, route]);

  return (
    <div
      className={styles.menuItem + ' ' + (active ? styles.menuItemActive : '')}
      onClick={handleClick}
    >
      {icon}
      <span className={'font-400'}>{title}</span>
    </div>
  );
};
