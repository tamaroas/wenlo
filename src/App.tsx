import { useEffect } from 'react';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from 'react-router-dom';
import Question from './pages/Question/Question';
import Frame from './pages/Frame/Frame';
import Frame1 from './pages/Frame1/Frame1'; 
import PricingPaymentMethod from './pages/PricingPaymentMethod/PricingPaymentMethod'; 
import PricingSelected from './pages/PricingSelected/PricingSelected';
import PricingDefaultV3 from './pages/PricingDefaultV3/PricingDefaultV3'; 
import PricingDefaultV2 from './pages/PricingDefaultV2/PricingDefaultV2'; 
import PricingSwitchToAnnually from './pages/PricingSwitchToAnnually/PricingSwitchToAnnually'; 
import PricingSelected1 from './pages/PricingSelected1/PricingSelected1';
import PricingDefault from './pages/PricingDefault/PricingDefault';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register'; 
import ForgetPassword from './pages/ForgetPassword/ForgetPassword'; 
import SetPassword from './pages/SetPassword/SetPassword';
import ActivateAccount from './pages/ActivateAccount/ActivateAccount'; 
import Question2 from './pages/Question2/Question2';
import Question1 from './pages/Question1/Question1'; 
import LoginRegister from './pages/LoginRegister';

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

    switch (pathname) {
      case '/':
        title = '';
        metaDescription = '';
        break;
      case '/frame-1000005585':
        title = '';
        metaDescription = '';
        break;
      case '/frame-1000005584':
        title = '';
        metaDescription = '';
        break;
      case '/pricing-payment-method':
        title = '';
        metaDescription = '';
        break;
      case '/pricing-selected':
        title = '';
        metaDescription = '';
        break;
      case '/pricing-default-v3':
        title = '';
        metaDescription = '';
        break;
      case '/pricing-default-v2':
        title = '';
        metaDescription = '';
        break;
      case '/pricing-switch-to-annually':
        title = '';
        metaDescription = '';
        break;
      case '/pricing-selected1':
        title = '';
        metaDescription = '';
        break;
      case '/pricing-default':
        title = '';
        metaDescription = '';
        break;
      case '/login':
        title = '';
        metaDescription = '';
        break;
      case '/register':
        title = '';
        metaDescription = '';
        break;
      case '/forget-password':
        title = '';
        metaDescription = '';
        break;
      case '/set-password':
        title = '';
        metaDescription = '';
        break;
      case '/activate-account':
        title = '';
        metaDescription = '';
        break;
      case '/question2':
        title = '';
        metaDescription = '';
        break;
      case '/question1':
        title = '';
        metaDescription = '';
        break;
    }

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
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/frame-1000005585" element={<Frame />} />
      <Route path="/frame-1000005584" element={<Frame1 />} />
      <Route
        path="/pricing-payment-method"
        element={<PricingPaymentMethod />}
      />
      <Route path="/pricing-selected" element={<PricingSelected />} />
      <Route path="/pricing-default-v3" element={<PricingDefaultV3 />} />
      <Route path="/pricing-default-v2" element={<PricingDefaultV2 />} />
      <Route
        path="/pricing-switch-to-annually"
        element={<PricingSwitchToAnnually />}
      />
      <Route path="/pricing-selected1" element={<PricingSelected1 />} />
      <Route path="/pricing-default" element={<PricingDefault />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<LoginRegister />} />
      <Route path="/register1" element={<Register />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/set-password" element={<SetPassword />} />
      <Route path="/activate-account" element={<ActivateAccount />} />
      <Route path="/question2" element={<Question2 />} />
      <Route path="/question1" element={<Question1 />} />
    </Routes>
  );
}
export default App;
