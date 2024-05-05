import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        alfafa-dev
      </div>
      <div className={styles.text}>
        Alfafa creative thoughts agency &copy; All rights reserved.
      </div>
    </footer>
  )
}

export default Footer