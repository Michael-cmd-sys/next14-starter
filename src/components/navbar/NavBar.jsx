import Links from "./links/Links";
import styles from './navbar.module.css'

const NavBar = () => {
  return (
    <header className={styles.header}>
            <div className={styles.logo}>Alfafa</div>
            <nav>
                <Links />
            </nav>
    </header>
  )
}

export default NavBar