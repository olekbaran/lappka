import React from 'react';

import styles from 'styles/components/inputCheckbox.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputCheckbox: React.FunctionComponent<InputProps> = ({
  label,
  name,
  ...props
}) => (
  <div className={styles.checkbox}>
    <input
      type="checkbox"
      id={name}
      className={styles.checkbox__field}
      {...props}
    />
    <label htmlFor={name} className={styles.checkbox__label}>
      {label}
    </label>
  </div>
);
