import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency</h1>
      <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, explicabo provident est repudiandae ex quam magni nobis aliquam fuga maiores eaque veritatis voluptates, sapiente quod libero placeat magnam ullam? Deserunt?</p>

      <div className={styles.buttons}>
        <button className={styles.button}>Learn more</button>
        <button className={styles.button}>Contact</button>
      </div>

      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
      </div>
    </div>
    <div className={styles.imageContainer}>
      <Image src="/hero.gif" fill alt="" className={styles.heroImg} />
    </div>
  </div>;
};

export default Home;