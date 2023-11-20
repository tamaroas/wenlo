import { FaBell, FaChevronDown, FaSearch } from 'react-icons/fa';
import imageService from '../../../utils/ImageService';
import styles from './Header.module.scss';
const images = imageService.getImages();
const Header = () => {
  return (
    <div className={styles.container}>
      <p>👋 Welcome back, Gabriela</p>
      <div>
        <button>
          <FaSearch />
        </button>
        <button>
          <FaBell />
        </button>
        <img src={images.profile} height={32} width={32} alt="profile" />
        <span>Gabriela Hudges</span>
        <span>Premium Plan</span>
        <FaChevronDown size={14} />
      </div>
    </div>
  );
};

export default Header;
