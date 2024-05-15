import Image from "next/image"
import styles from "./singlePost.module.css"

const SinglePostPage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.imgContainer}>
        <Image 
        src="/post.jpg" 
        alt=""
        className={styles.img} 
        fill/>
      </section>
      <section className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image src="/noavatar.png"
          alt="user avatar"
          width={50}
          height={50}
          className={styles.avatar} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Bruce Wayne</span>
          </div>
          <div className={styles.detailText}>

            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>21.05.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem illo placeat libero sed non blanditiis rem voluptatibus? Quo illo beatae natus, sed, delectus laboriosam quae tempore, blanditiis in ipsam possimus.
        </div>
      </section>
    </main>
  )
}

export default SinglePostPage