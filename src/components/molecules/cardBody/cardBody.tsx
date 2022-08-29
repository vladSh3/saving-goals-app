//libraries
import { ChangeEvent } from "react";
//components
import { Input, Image, Typography, Calendar } from "components";
//utils
import { ImageTypes } from "utils/constants";
import { setNumbersWithCommas } from "utils/helpers";
//styles
import styles from "./cardBody.module.scss";

interface Props {
  classname?: string;
  onMonthInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  monthlyAmount: string;
}

export const CardBody = ({
  classname,
  onMonthInputChange,
  monthlyAmount,
}: Props) => {
  return (
    <div className={`${styles.cardBody} ${classname ? classname : ""}`}>
      <div className={styles.inputWithDescription}>
        <Typography classname={styles.description}>Total amount</Typography>
        <Input
          type={"text"}
          onChange={onMonthInputChange}
          value={setNumbersWithCommas(monthlyAmount.toString())}
          icon={<Image type={ImageTypes.dollar} />}
          maxLength={12}
        />
      </div>
      <div className={styles.calendarWithDescription}>
        <Typography classname={styles.description}>Reach goal by</Typography>
        <Calendar />
      </div>
    </div>
  );
};
