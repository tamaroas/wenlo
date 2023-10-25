import React, { ChangeEvent, useCallback, useState } from 'react';
import FormInput, { FormInputProps } from './FormInput';
import styles from './RightComponent.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

const RightComponent = () => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repassword: '',
    code: '',
  });
  const user = {
    email: 'Renaldaaji123@gmail.com',
  };

  const handleChangeByTagName = useCallback((e: ChangeEvent) => {
    setForm(prev => {
      let temp = { ...prev };
      // @ts-ignore
      temp[e.target.name] = e.target.value;
      return temp;
    });
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const goTo = (route: string) => {
    navigate(route);
  };

  const inputsForgotPassword: FormInputProps[] = [
    {
      label: 'Confirmation code',
      placeholder: 'Enter your confirmation code',
      onChange: handleChangeByTagName,
      name: 'code',
      size: 'large',
      type: 'email',
      value: form.code,
      required: true,
    },
  ];

  const inputsLogin: FormInputProps[] = [
    {
      label: 'Email',
      placeholder: 'Enter your email',
      onChange: handleChangeByTagName,
      name: 'email',
      size: 'large',
      type: 'email',
      value: form.email,
    },
    {
      label: 'New password',
      placeholder: 'Enter your new pasword',
      onChange: handleChangeByTagName,
      name: 'password',
      size: 'large',
      type: 'password',
      value: form.password,
      advise:
        'One capital letter required, one special character required, one number required*',
    },
  ];
  const inputs: FormInputProps[] = [
    {
      label: 'First Name',
      placeholder: 'Enter your first name',
      onChange: handleChangeByTagName,
      name: 'firstname',
      size: 'medium',
      type: 'text',
      value: form.firstname,
    },
    {
      label: 'Last Name',
      placeholder: 'Enter your last name',
      onChange: handleChangeByTagName,
      name: 'lastname',
      size: 'medium',
      type: 'text',
      value: form.lastname,
    },
    {
      label: 'Email',
      placeholder: 'Enter your email',
      onChange: handleChangeByTagName,
      name: 'email',
      size: 'large',
      type: 'email',
      value: form.email,
    },
    {
      label: 'New password',
      placeholder: 'Enter your new pasword',
      onChange: handleChangeByTagName,
      name: 'password',
      size: 'medium',
      type: 'password',
      value: form.password,
      advise:
        'One capital letter required, one special character required, one number required*',
    },
    {
      label: 'Confirm password',
      placeholder: 'Confirm your new pasword',
      onChange: handleChangeByTagName,
      name: 'repassword',
      size: 'medium',
      type: 'password',
      value: form.repassword,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div>
          <img src="images/image-12@2x.png" alt="" />
          <p className="font-16 font-600 text-center">Welcome to Wenlo 👋</p>
        </div>

        {location.pathname === '/register' ? (
          <>
            <form className={styles.formContainer}>
              {inputs.map((el, i) => {
                return <FormInput key={i} {...el} />;
              })}
            </form>
            <button className="btn-variant-2">Next</button>
            <p className="font-14">
              <span className="color-gray">Already have an account? </span>
              <span
                className="color-blue pointer"
                onClick={() => navigate('/login')}
              >
                Sign in
              </span>
            </p>
          </>
        ) : location.pathname === '/register' ? (
          <>
            <form className={styles.formContainer}>
              {inputsLogin.map((el, i) => {
                return <FormInput key={i} {...el} />;
              })}
            </form>
            <span
              className={styles.left + ' color-blue pointer'}
              onClick={() => navigate('/forget-password')}
            >
              Forgot Password
            </span>
            <button className="btn-variant-2">Login</button>

            <p className="font-14">
              <span className="color-gray">Doesn’t have an account?</span>
              <span
                className="color-blue pointer"
                onClick={() => goTo('/register')}
              >
                Sign up
              </span>
            </p>
          </>
        ) : (
          <>
            <h2 className={'font-32 font-800 color-black text-center'}>
              Forget Password
            </h2>
            <p className={'color-gray font-14 text-center'}>
              We have sent a confirmation code to {user.email}
            </p>
            <form className={styles.formContainer}>
              {inputsForgotPassword.map((el, i) => {
                return <FormInput key={i} {...el} />;
              })}
            </form>
            <button className="btn-variant-2">Login</button>

            <p className="font-14">
              <span className="color-gray">Didn’t get a code?</span>
              <span
                className="color-blue pointer"
                onClick={() => console.log('code resend')}
              >
                Resend Code
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default RightComponent;
