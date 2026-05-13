import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h1>Contact Me</h1>

      <p>
        <FaEnvelope className="icon" />
        deepanshujsndelhi@gmail.com
      </p>

      <div className="social-links">
        <a
          href="https://github.com/deepanshujoshi36"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="social-icon" />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/deepanshu-joshi-469088281"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="social-icon" />
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;
