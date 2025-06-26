import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/img/msg-icon.png';
import mail_icon from '../../assets/img/mail-icon.png';
import phone_icon from '../../assets/img/phone-icon.png';
import location_icon from '../../assets/img/location-icon.png';
import white_arrow from '../../assets/img/white-arrow.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c8d96096-af55-4ac1-897d-8c119ad73345");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="Message Icon" /></h3>
        <p>
          Have questions or feedback? We'd love to hear from you! Fill out the form below, and our team will get back to you as soon as possible. Your input is valuable to us, and we appreciate your interest in GuruCool.
        </p>
        <ul>
          <li><img src={mail_icon} alt="Mail Icon" /> Contact@GuruCool.dev</li>
          <li><img src={phone_icon} alt="Phone Icon" /> +91 8810645234</li>
          <li><img src={location_icon} alt="Location Icon" /> 224-A E-Tower Assotech Society, Crossing Republic, Ghaziabad</li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your mobile number" required />

          <label htmlFor="message">Write your message here</label>
          <textarea id="message" name="message" rows="6" placeholder="Enter your message here" required></textarea>

          <button type="submit" className="btn dark-btn">Submit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
