//components
import { Title, Typography } from "components";
//styles
import styles from "./details.module.scss";

interface Props {
  classname?: string;
  timePeriod: number;
  monthlyAmount: number;
  goalDate: string;
}

export const Details = ({
  monthlyAmount,
  classname,
  timePeriod,
  goalDate,
}: Props) => {
  return (
    <div className={`${styles.details}  ${classname ? classname : ""}`}>
      <div className={styles.descriptionWithAmountPrice}>
        <Typography classname={styles.description}>Monthly amount</Typography>
        <Title classname={styles.monthlyAmount}>{`$ ${monthlyAmount || 0}`}</Title>
      </div>
      <div className={styles.detail}>
        You’re planning
        <b> {timePeriod} monthly deposits</b>
        {` `} to reach your <b>${monthlyAmount}</b>
        {` `} goal by <b>{goalDate}</b>
      </div>
    </div>
  );
};
