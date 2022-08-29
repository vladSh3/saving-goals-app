//libraries
import { ChangeEvent, useMemo, useState } from "react";
//components
import { CardBody, CardHeader, Details, Button } from "components";
//styles
import styles from "./card.module.scss";
import { useSelector } from "react-redux";

export const Card = () => {
  const [totalAmount, setTotalAmount] = useState<number>();

  const onMonthInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTotalAmount(+(e.target.value.replaceAll(/[a-zA-Z]/g, "").replaceAll(",", "")));
   
  };

//@ts-ignore
  const dateDiff = useSelector(state => state.amount.dateDiff)
//@ts-ignore
  const goalDate = useSelector(state => state.amount.goalDate)

  console.log(2,totalAmount);
  
  const monthlyAmount = totalAmount ? (dateDiff > 0 ? (totalAmount / dateDiff).toFixed(2) : totalAmount / 1) : 0 ; 

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
        monthlyAmount={+monthlyAmount}
        goalDate={goalDate}
      />
      <div className={styles.button}>
        <Button onClick={() => {}}>Confirm</Button>
      </div>
    </div>
  );
};
