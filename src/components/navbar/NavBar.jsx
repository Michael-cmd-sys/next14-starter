import Links from "./links/Links";
import styles from './navbar.module.css'

const NavBar = () => {
  return (
    <header className={styles.header}>
            <section className={styles.logo}>Logo</section>
            <nav>
                <Links />
            </nav>
    </header>
  )
}

export default NavBar