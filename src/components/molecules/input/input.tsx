//libraries
import { ChangeEvent, ReactElement } from "react";
//styles
import styles from "./input.module.scss";

interface IProps {
  icon: ReactElement;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type: "text" | "number";
  maxLength: number;
}

export const Input = ({ icon, onChange, value, type, maxLength }: IProps) => {
  return (
    <label className={styles.amountInput}>
      {icon}
      <input
        type={type}
        className={styles.input}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
        max={15}
      />
    </label>
  );
};
