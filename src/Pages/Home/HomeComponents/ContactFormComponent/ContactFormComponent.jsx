import social from './contactData'
import styles from './ContactFormComponent.module.css'

function ContactFormComponent() {
  return (
    <section className={styles.contact_form}>
      <div className={styles.left}>
        <div className={styles.location}>
          <h1>Still have questions?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            veritatis. Distinctio repellendus nulla corporis consectetur nemo,
            minus soluta reprehenderit molestias! Eius deleniti consequuntur
            itaque numquam reprehenderit repellat id, necessitatibus omnis.
          </p>
        </div>
        <div className={styles.social_links}>
          <strong>Travelers</strong>
          <div className={styles.icons}>
            {social.map((item) => {
              return (
                <a href={item.link} key={item.id}>
                  {item.icon}
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
          <textarea cols="30" rows="10" placeholder="Your message"></textarea>
          <button>Submit</button>
        </form>
      </div>
    </section>
  )
}
export default ContactFormComponent
