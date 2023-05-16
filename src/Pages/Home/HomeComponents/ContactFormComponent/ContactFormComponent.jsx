import social from './contactData'

function ContactFormComponent() {
  return (
    <section className="contact-form">
      <div className="left">
        <div className="location">
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            veritatis. Distinctio repellendus nulla corporis consectetur nemo,
            minus soluta reprehenderit molestias! Eius deleniti consequuntur
            itaque numquam reprehenderit repellat id, necessitatibus omnis.
          </p>
        </div>
        <div className="social-links">
          <strong>Travelers</strong>
          <div className="icons">
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
      <div className="right">
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
