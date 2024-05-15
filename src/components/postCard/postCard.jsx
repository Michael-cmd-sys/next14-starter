import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = () => {
  return (
    <article className={styles.container}>
        <section className={styles.top} >
            <div className={styles.imgContainer}>
                <Image src="/post.jpg" 
                 fill  
                 alt="some random post"  
                 className={styles.img} />
            </div>
            <span className={styles.date}>21.05.2024</span>
        </section>
        <section className={styles.bottom}>
            <strong className={styles.title}>Title</strong>
            <p className={styles.description}>Desc</p>
            <Link className={styles.link}href="/blog/post">READ MORE</Link>
        </section>
    </article>
  )
}

export default PostCard