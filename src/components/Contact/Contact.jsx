import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div
      className="contact text-white container d-flex flex-column align-items-center justify-content-center gap-4 mb-5"
      id="contact"
      
    >
      <p className="text-primary">What's Next?</p>
      <h1>Get In Touch</h1>
      <p className="text-center text-muted">
        I’m currently looking for any new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </p>
      <a
        href="mailto:robertquartey7@gmail.com"
        className="btn btn-outline-primary"
      >
        Say Hello
      </a>
    </div>
  );
}

export default Contact;
