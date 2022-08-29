//libraries
import { ChangeEvent, useCallback } from "react";
//components
import { CardBody, CardHeader, Details, Button } from "components";
//hooks
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useTypedDispatch";
//bll
import {
  selectDateDiff,
  selectGoalDate,
  selectTotalAmount,
  setTotalAmount,
} from "bll/slices/amount";
//utils
import { replaceCharacters } from "utils/helpers";
//styles
import styles from "./card.module.scss";

export const Card = () => {
  const dispatch = useAppDispatch();
  const dateDiff = useAppSelector(selectDateDiff);
  const goalDate = useAppSelector(selectGoalDate);
  const totalAmount = useAppSelector(selectTotalAmount);

  const onMonthInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTotalAmount(replaceCharacters(e.target.value)));
  };
  const monthlyAmount = totalAmount
    ? dateDiff > 0
      ? (totalAmount / dateDiff).toFixed(2)
      : totalAmount
    : 0;

  const onConfirm = useCallback(() => {
    alert(
      `You’re planning ${dateDiff} monthly deposits to reach your ${monthlyAmount} goal by ${goalDate}`
    );
  }, [dateDiff, monthlyAmount, goalDate]);

  return (
    <div className={styles.card}>
      <CardHeader classname={styles.header} />
      <CardBody
        classname={styles.body}
        onMonthInputChange={onMonthInputChange}
        monthlyAmount={totalAmount?.toString() || ""}
      />
      <Details
        classname={styles.details}
        timePeriod={dateDiff}
        monthlyAmount={monthlyAmount.toLocaleString()}
        goalDate={goalDate}
      />
      <div className={styles.button}>
        <Button onClick={onConfirm}>Confirm</Button>
      </div>
    </div>
  );
};
