import { Mail, Send } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="section-heading">
        <span>LET'S CONNECT</span>
        <h2>Get In Touch</h2>
      </div>

      <div className="contact-container">

        <div className="contact-text">
          <h3>Let's build something meaningful.</h3>

          <p>
            I'm always interested in learning, collaborating,
            building AI projects and exploring new opportunities.
            Feel free to connect with me.
          </p>

          <div className="contact-links">

            <a href="mailto:your-email@gmail.com">
              <Mail size={20} />
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span>in</span>
              LinkedIn
            </a>

            <a
              href="https://github.com/shaiksa123786-dot"
              target="_blank"
              rel="noreferrer"
            >
              <span>GH</span>
              GitHub
            </a>

          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! Your message has been submitted.");
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">
            Send Message
            <Send size={17} />
          </button>
        </form>

      </div>

    </section>
  );
}

export default Contact;