//libraries
import { useEffect, useState } from "react";
//bll
import { setDateDiff, setGoalDate } from "bll/slices/amount";
//components
import { Image } from "components";
//hooks
import { useAppDispatch } from "hooks/useTypedDispatch";
//utils
import { ImageTypes, months } from "utils/constants";
//styles
import styles from "./calendar.module.scss";

let date = new Date();

export const Calendar = () => {
  const [month, setMonth] = useState(date.getMonth());

  const currentMonth = months.find((item, index) => index === month);

  const currentYear = date.getFullYear();

  const dispatch = useAppDispatch();

  const monthDiff = (d1: Date, d2: Date) => {
    let diff;
    diff = (d2.getFullYear() - d1.getFullYear()) * 12;
    diff -= d1.getMonth();
    diff += d2.getMonth();
    return diff <= 0 ? 0 : diff;
  };

  const onMonthChange = (step: number) => () => {
    setMonth(step);
  };

  useEffect(() => {
    date.setMonth(month);
    if (month > 11) {
      setMonth(0);
    }
    if (month > 12) {
      date.setFullYear(date.getFullYear() + 1);
    }
    if (month < 0) {
      setMonth(11);
    }
    const dateDiff = monthDiff(new Date(), date);
    dispatch(setDateDiff(dateDiff));
    dispatch(setGoalDate(`${currentMonth} ${currentYear}`));
  }, [month, dispatch, currentMonth, currentYear]);

  return (
    <div className={styles.calendarBody}>
      <button
        className={styles.button}
        disabled={new Date() > date}
        onClick={onMonthChange(month - 1)}
      >
        <Image type={ImageTypes.arrow} />
      </button>
      <div className={styles.dateSection}>
        <p className={styles.dateMonth}>{currentMonth}</p>
        <p className={styles.dateYear}>{currentYear}</p>
      </div>
      <button className={styles.button} onClick={onMonthChange(month + 1)}>
        <Image type={ImageTypes.arrowRight} />
      </button>
    </div>
  );
};
