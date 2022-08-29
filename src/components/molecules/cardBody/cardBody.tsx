//libraries
import { ChangeEvent } from "react";
//components
import { Input, Image, Typography } from "components";
//utils
import { ImageTypes } from "utils/constants";
//styles
import styles from "./cardBody.module.scss";
import { Calendar } from "../calendar/calendar";

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
  
  function numberWithCommas() {
    return monthlyAmount.toString().replaceAll(/[^0-9.]/g, '').replaceAll(/(\..*)\./g,'').replaceAll(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  return (
    <div className={`${styles.cardBody} ${classname ? classname : ""}`}>
      <div className={styles.inputWithDescription}>
        <Typography classname={styles.description}>Total amount</Typography>
        <Input
          onChange={onMonthInputChange}
          value={numberWithCommas()}
          icon={<Image type={ImageTypes.dollar} />}
        />
      </div>
      <div className={styles.calendarWithDescription}>
        <Typography classname={styles.description}>Reach goal by</Typography>
        <div className={styles.calendar}>
          <Calendar />
        </div>
      </div>
    </div>
  );
};
