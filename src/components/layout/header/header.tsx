//components
import { Image, Logo } from "components";
//utils
import { ImageTypes, Routing } from "utils/constants";
//styles
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo path={Routing.home}>
        <Image type={ImageTypes.logo} />
      </Logo>
    </header>
  );
};
