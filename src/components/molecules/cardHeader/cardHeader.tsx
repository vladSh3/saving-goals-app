//components
import { Image, Title, Typography } from "components";
//utils
import { ImageTypes } from "utils/constants";
//styles
import styles from "./cardHeader.module.scss";

interface Props {
  classname?: string;
}

export const CardHeader = ({ classname }: Props) => {
  return (
    <div className={`${styles.header} ${classname ? classname : ""}`}>
      <Image type={ImageTypes.house} />
      <div className={styles.wrapper}>
        <Title classname={styles.title}>Buy a house</Title>
        <Typography classname={styles.subtitle}>Saving goal</Typography>
      </div>
    </div>
  );
};
