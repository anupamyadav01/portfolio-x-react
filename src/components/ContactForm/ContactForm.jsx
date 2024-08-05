import { useRef } from "react";
import PropTypes from "prop-types";
import "./ContactFormStyle.css";
import "react-toastify/dist/ReactToastify.css";

function ContactForm({ id }) {
  const form = useRef();

  return (
    <div className="contact-window" id={id}>
      <h1>Let&apos;s Get in Touch.</h1>
      <p>Discuss a project or just want to say Hi? My inbox is open for all.</p>
      <div className="contact-container">
        <form ref={form} className="contact-wrapper-right">
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email ID"
            required
          />
          <textarea
            id="message"
            name="message"
            rows="5"
            cols="15"
            placeholder="Share your thoughts and insights here; your feedback means a lot."
            required
          />
          <button className="btn" id="submitBtn" type="submit" value="Send">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

ContactForm.propTypes = {
  id: PropTypes.string,
};

export default ContactForm;
