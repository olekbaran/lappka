import React from 'react';
import { useField } from 'formik';

import styles from 'styles/components/inputCheckbox.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const FormInputCheckbox: React.FunctionComponent<InputProps> = ({
  name,
  label,
  ...props
}) => {
  const [field] = useField(name);
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={name}
        className={styles.checkbox__field}
        {...field}
        {...props}
      />
      <label htmlFor={name} className={styles.checkbox__label}>
        {label}
      </label>
    </div>
  );
};
