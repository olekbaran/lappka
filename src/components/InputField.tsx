import React from 'react';

import styles from 'styles/components/inputField.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: JSX.Element;
  isEmpty: boolean;
}

export const InputField: React.FunctionComponent<InputProps> = ({
  icon,
  isEmpty,
  ...props
}) => (
  <div className={styles.input}>
    <div className={styles.input__label}>{icon}</div>
    <input
      className={`${styles.input__field} ${
        isEmpty === true ? styles['input__field--error'] : ''
      }`}
      {...props}
    />
  </div>
);
