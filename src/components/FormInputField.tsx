import React from 'react';
import { useField } from 'formik';

import styles from 'styles/components/inputField.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: JSX.Element;
}

export const FormInputField: React.FunctionComponent<InputProps> = ({
  name,
  icon,
  ...props
}) => {
  const [field, meta] = useField(name);
  return (
    <div className={styles.input}>
      <div className={styles.input__label}>{icon}</div>
      <input
        className={`${styles.input__field} ${
          meta.error && meta.touched ? styles['input__field--error'] : ''
        }`}
        {...field}
        {...props}
      />
    </div>
  );
};
