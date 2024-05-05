import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.imgContainer}>
        <Image src="/contact.png" fill alt="contact image" className={styles.img} />
      </section>
      <section className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="first name and Surname" required/>
          <input type="text" placeholder="Email Address" required/>
          <input type="tel" placeholder="Phone number (Optional)" />
          <textarea 
          name="" 
          id="" 
          cols="30" 
          rows="10" 
          placeholder="Message"
          required >

          </textarea>
          <button>Send</button>
        </form>
      </section>
    </main>
  )
}

export default ContactPage