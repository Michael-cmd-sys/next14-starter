'use client'
import NavLink from './navLink/navLink'
import styles from './links.module.css'
import { useState } from 'react'
import Image from "next/image"

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
    const isAdmin = false;

  return (
    <div className={styles.container}>
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
            <Image 
             src="/menu.png"
             alt="menu button"
             width={30} 
             height={30} 
             onClick={() => setOpen((prev) => !prev)}
            className={styles.menuButton}
             />
        {
            open && <div className={styles.mobileLinks}>
                 {
            linksArray.map(
                link => (
                    <NavLink item={link} key={link.title}/>
                )
                ) 
                }
            </div>
        }

    </div>
  )
};

export default Links;