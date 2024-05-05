import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <main className={styles.container}> 
      <section className={styles.textContainer}>
        <h1 className={styles.title}>About agency</h1>
        <h2 className={styles.subtitle}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h2>
        <p className={styles.description}>
          We create digital brands that are bigger, bolder, braver andn better. We believe in good ideas, flexibility and precision. We&apos;re world&apos;s leaders with a special team in consulting and finance solutions provider dealing with a wide range of web and software development services.
        </p>
        <section className={styles.boxes}>
          <div className={styles.box}>
            <strong>10 K+</strong>
            <p>Years of experience.</p>
          </div>
          <div className={styles.box}>
            <strong>10 K+</strong>
            <p>Years of experience.</p>
          </div>
          <div className={styles.box}>
            <strong>10 K+</strong>
            <p>Years of experience.</p>
          </div>
        </section>
      </section>
      <section className={styles.imgContainer}>
        <Image 
          src="/about.png"
          alt="About image"
          fill
          className={styles.img}
        />
      </section>
    </main>
  )
}

export default AboutPage;