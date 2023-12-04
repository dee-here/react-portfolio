import { useState } from "react";
import emailjs from 'emailjs-com';

export default function ContactsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //use emailjs to send message
    emailjs.sendForm('service_j857s32', 'contact_form', e.target, 'PsjyMK4LUivNyeySV')
    .then((result) => {
      console.log("Message Sent.",result.text);
    }, (error) => {
      console.log(error.text);
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contacts-page">
      <p>Contact</p>
      <div className="contacts-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

