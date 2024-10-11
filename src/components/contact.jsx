import "./contact.css";
import { Socials } from "./profile";

export default function Contact() {
  return (
    <section id="contactID" className="contact">
      <div className="contactHeading">
        <h1>Leave me a Message!  </h1>
        <p>
          <i>
            "Feel free to reach out for any inquiries or collaborations—I’d love
            to hear from you! Whether you have a project in mind or just want to
            connect, don't hesitate to get in touch."
          </i>
        </p>
      </div>
      <div className="contactContainer">
        <div className="contactTextPart">
          <h1>Contact details</h1>
          <li>+1(437)665-1393</li>
          <li>swaggyabii56@gmail.com</li>
          <li>Mississauga, ON, Canada</li>
          <div className="contactSocial">
            <Socials />
          </div>
        </div>
        <div className="contactForm">
          <form className="contactFormContainer" action="">
            <h1>Contact me</h1>
            <br />
            <input placeholder="Your name" type="text" />
            <input placeholder="Your email" type="text" />
            <textarea
              name="message"
              placeholder="your message"
              id=""
            ></textarea>
            <button className="contactSendButton">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
 