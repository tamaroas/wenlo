import React, { ChangeEvent, useCallback, useState } from 'react';
import FormInput, { FormInputProps } from './FormInput';
import styles from './RightComponent.module.css';
const RightComponent = () => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repassword: '',
  });

  const handleChangeByTagName = useCallback((e: ChangeEvent) => {
    setForm(prev => {
      let temp = { ...prev };
      // @ts-ignore
      temp[e.target.name] = e.target.value;
      return temp;
    });
  }, []);

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
        <form className={styles.formContainer}>
          {inputs.map((el, i) => {
            return <FormInput key={i} {...el} />;
          })}
        </form>
        <button className="btn-variant-2">Next</button>
        <p className="font-14">
          <span className="color-gray">Already have an account? </span>
          <span className="color-blue pointer">Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default RightComponent;
