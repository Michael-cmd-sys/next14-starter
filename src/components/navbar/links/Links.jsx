'use client'
import NavLink from './navLink/navLink'
import styles from './links.module.css'
import { useState } from 'react'

const linksArray = [
    { 
        "title": "Home",
        "path": "/"
    },
    { 
        "title": "Blog",
        "path": "/blog"
    },
    { 
        "title": "About",
        "path": "/about"
    },
    { 
        "title": "Contact",
        "path": "/contact"
    }
]

const Links = () => {
   const [open, setOpen] = useState(false)

    const session = true;
    const isAdmin = true;

  return (
    <div className={styles.menu}>
        <div className={styles.links}>
            {
            linksArray.map(
                link => (
                    <NavLink item={link} key={link.title}/>
                )
                ) 
            }{
                session ? (
                    <>
                    {isAdmin && <NavLink item={{ title:'Admin', path:'/admin'}} />}
                    <button className={styles.logout}>Logout</button>
                    </>
                ): (
                    <NavLink item={{ title:'Login', path:'/login'}} />
                )
            }
        </div>
    </div>
  )
}

export default Links