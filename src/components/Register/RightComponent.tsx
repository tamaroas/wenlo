import React, { ChangeEvent, useCallback, useState } from 'react';
import FormInput, { FormInputProps } from './FormInput';
import { styled } from '@mui/material/styles';
import styles from './RightComponent.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Step,
  StepConnector,
  StepIconProps,
  StepLabel,
  Stepper,
  stepConnectorClasses,
} from '@mui/material';
import { FaCheck } from 'react-icons/fa';

const steps = [
  'Select campaign settings',
  'Create an ad group',
  'Create an ad',
];

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  })
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <FaCheck className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

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

  const [forgotPasswordIndex, setForgotPasswordIndex] = useState(0);
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

  const [stepperIndex, setStepperIndex] = useState(0);

  const inputsQuestion: FormInputProps[][] = [
    [
      {
        label: 'How did you hear about Wenlo?',
        onChange: handleChangeByTagName,
        name: 'code',
        size: 'large',
        type: 'email',
        value: form.code,
        required: true,
      },
    ],
    [
      {
        label: 'New password',
        placeholder: 'Enter your new pasword',
        onChange: handleChangeByTagName,
        name: 'password',
        size: 'large',
        type: 'password',
        required: true,
        value: form.password,
        advise:
          'One capital letter required, one special character required, one number required*',
      },
      {
        label: 'Confirm Password',
        placeholder: 'Confirm your new password',
        onChange: handleChangeByTagName,
        name: 'password',
        size: 'large',
        type: 'password',
        required: true,
        value: form.repassword,
      },
    ],
  ];

  const inputsForgotPassword: FormInputProps[][] = [
    [
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
    ],
    [
      {
        label: 'New password',
        placeholder: 'Enter your new pasword',
        onChange: handleChangeByTagName,
        name: 'password',
        size: 'large',
        type: 'password',
        required: true,
        value: form.password,
        advise:
          'One capital letter required, one special character required, one number required*',
      },
      {
        label: 'Confirm Password',
        placeholder: 'Confirm your new password',
        onChange: handleChangeByTagName,
        name: 'password',
        size: 'large',
        type: 'password',
        required: true,
        value: form.repassword,
      },
    ],
  ];

  const inputsActivateAccount: FormInputProps[] = [
    {
      label: 'Enter the activation code',
      required: true,
      placeholder: 'Enter the code you recieve by email',
      onChange: handleChangeByTagName,
      name: 'code',
      size: 'large',
      type: 'text',
      value: form.code,
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
        ) : location.pathname === '/login' ? (
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
        ) : location.pathname === '/register' ? (
          <>
            <h2 className={'font-32 font-800 color-black text-center'}>
              Forget Password
            </h2>
            <p className={'color-gray font-14 text-center'}>
              We have sent a confirmation code to {user.email}
            </p>
            <form className={styles.formContainer}>
              {inputsForgotPassword[forgotPasswordIndex].map((el, i) => {
                return <FormInput key={i} {...el} />;
              })}
            </form>
            <button
              className="btn-variant-2"
              onClick={() => {
                setForgotPasswordIndex(prev => (prev === 0 ? 1 : 0));
              }}
            >
              {forgotPasswordIndex === 0 ? 'Continue' : 'Submit'}
            </button>

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
        ) : location.pathname === '/activate-account' ? (
          <>
            <h2 className={'font-32 font-800 color-black text-center'}>
              Activate your account
            </h2>
            <p className={'color-gray font-14 text-center'}>
              Enter the activation code present in your mail
            </p>
            <form className={styles.formContainer}>
              {inputsActivateAccount.map((el, i) => {
                return <FormInput key={i} {...el} />;
              })}
            </form>
            <button className="btn-variant-2">Submit</button>

            <p className="font-14">
              <span className="color-gray">Didn't receive a mail,</span>
              <span
                className="color-blue pointer"
                onClick={() => console.log('resend mail')}
              >
                click here
              </span>
              <span className="color-gray"> and check your mailbox again.</span>
            </p>
          </>
        ) : (
          <>
            <Stepper
              alternativeLabel
              activeStep={stepperIndex}
              connector={<QontoConnector />}
            >
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            <form className={styles.formContainer}>
              {inputsQuestion[stepperIndex]?.map((el, i) => {
                return <FormInput key={i} {...el} />;
              })}
            </form>
            <div className={styles.buttonsContainer}>
              {stepperIndex !== 0 && (
                <button
                  className="btn-variant-3"
                  onClick={() =>
                    setStepperIndex(prev => (prev === 0 ? 0 : prev - 1))
                  }
                >
                  Previous
                </button>
              )}
              <button
                className="btn-variant-2"
                onClick={() =>
                  setStepperIndex(prev => (prev === 1 ? 0 : prev + 1))
                }
              >
                Submit
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RightComponent;
