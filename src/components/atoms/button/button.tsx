//styles
import styles from "./button.module.scss";

interface IProps {
  onClick: () => void;
  classname?: string;
  children: JSX.Element | JSX.Element[] | string;
}

export const Button = ({ onClick, children, classname }: IProps) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${classname ? classname : ""}`}
    >
      {children}
    </button>
  );
};
