import { useEffect } from 'react';
import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from 'react-router-dom';
import LoginRegister from './pages/LoginRegister';
import Pricing from './pages/Pricing/Index';
import Dashboard from './pages/Dashboard';
import ChatBot from './components/ChatBot';
import styles from './App.module.scss'

const LoginRegisterContainer = [
  '/',
  '/login',
  '/register',
  '/forget-password',
  '/activate-account',
  '/question',
].map((el, i) => <Route path={el} key={i} element={<LoginRegister />} />);

const PricingContainer = ['/pricing', 'pricing-annuel'].map((el, i) => (
  <Route path={el} key={i} element={<Pricing />} />
));

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = '';
    let metaDescription = '';

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
    <div className={styles.ChatBot}>
    <ChatBot />
    </div>
      <Routes>
        {LoginRegisterContainer}
        {PricingContainer}

        {/* Add your routes below, as easy as you had done before! */}
        <Route path="/Dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
}
export default App;
