import styles from "./postUSer.module.css"


const PostUser = () => {
  return (
    <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>Bruce Wayne</span>
    </div>
  )
}

export default PostUser