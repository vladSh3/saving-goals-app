//libraries
import { ChangeEvent, ReactElement } from "react";
//styles
import styles from "./input.module.scss";

interface IProps {
  icon: ReactElement;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Input = ({ icon, onChange, value }: IProps) => {

  return (
    <label className={styles.amountInput}>
      {icon}
      <input
      type={'text'}
        className={styles.input}
        onChange={onChange}
        value={value}
        maxLength={15}
      />
    </label>
  );
};
