//components
import { Card, Title } from "components";
//styles
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <Title classname={styles.title}>
          <>
            Let`s plan your <span className={styles.bold}>saving goal.</span>
          </>
        </Title>
        <Card />
      </section>
    </main>
  );
};
