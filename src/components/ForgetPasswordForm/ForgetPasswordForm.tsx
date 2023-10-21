import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './ForgetPasswordForm.css';

const ForgetPasswordForm: FunctionComponent = () => {
  return (
    <div className="forget-password-form-comp-frameParent">
      <input
        className="forget-password-form-comp-frameChild"
        name="email"
        id="email"
        value="Enter your email"
        placeholder="Email"
        type="email"
        defaultValue="Enter your email"
      />
      <input
        className="forget-password-form-comp-frameChild"
        name="password"
        id="pasword"
        value="Enter your Password"
        placeholder="Password"
        type="password"
        defaultValue="Enter your Password"
      />
      <Link
        className="forget-password-form-comp-forgetPassword"
        to="/forget-password"
      >
        Forget Password
      </Link>
    </div>
  );
};

export default ForgetPasswordForm;
