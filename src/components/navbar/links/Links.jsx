'use client'
import Link from "next/link"
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
        <button onClick={() => setOpen((prev) => !prev)} className={styles.menu_button}>
            <Link href="/menu" alt="" fill width={50} height={50}></Link>
        </button>
        {
            open && <div className={styles.mobile_links}>
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