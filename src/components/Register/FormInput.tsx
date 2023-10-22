import React, { ChangeEvent, useState } from 'react';
import styles from './FormInput.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
/**
 * @param type is the type of the input
 */
export type FormInputProps = {
  type: 'text' | 'password' | 'email';
  placeholder: string;
  label: string;
  size: 'medium' | 'large';
  advise?: string;
  onChange: (e: ChangeEvent) => void;
  value: string;
  name: string;
};

const FormInput = ({
  type,
  label,
  onChange,
  value,
  advise,
  placeholder,
  size,
  name,
}: FormInputProps) => {
  const [isShown, setIsShown] = useState(false);

  const handleToggleShown = () => {
    setIsShown(prev => !prev);
  };
  return (
    <div
      className={
        styles.container +
        ' ' +
        (size === 'medium' ? styles.medium : styles.large)
      }
    >
      <p className={styles.paragraphs + ' font-14 color-gray'}>{label}</p>
      <input
        className={styles.input}
        name={name}
        type={type === 'password' && isShown ? 'text' : type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {advise && (
        <p className={styles.paragraphs + ' font-12 color-gray'}>{advise}</p>
      )}
      {type === 'password' && (
        <span onClick={handleToggleShown} className={styles.eye}>
          {isShown ? <FaEye /> : <FaEyeSlash />}
        </span>
      )}
    </div>
  );
};

export default FormInput;
