import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateName = () => {
    let isValid = true;
    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }
    return isValid;
  };

  function checkEmail(email) {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  }

  const validateEmail = () => {
    let isValid = true;
    if (!checkEmail(email)) {
      setEmailError("Enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }
    return isValid;
  };

  const validateMessage = () => {
    let isValid = true;
    if (message.trim() === "") {
      setMessageError("Message is required");
      isValid = false;
    } else {
      setMessageError("");
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // clear form fields only after validating
    if (validateName() && validateEmail() && validateMessage()) {
      emailjs
        .sendForm(
          "service_qabx47h",
          "contact_form",
          e.target,
          "PsjyMK4LUivNyeySV"
        )
        .then(
          (result) => {
            console.log("Message Sent.", result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      setName("");
      setEmail("");
      setMessage("");
      console.log("Message sent !");
    }
  };

  return (
    <div className="contacts-page page-container">
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
            onBlur={() => validateName()}
          />
          <div className="error-message">
            {nameError && <span>{nameError}</span>}
          </div>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => validateEmail()}
          />
          <div className="error-message">
            {emailError && <span>{emailError}</span>}
          </div>

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => validateMessage()}
          ></textarea>
          <div className="error-message">
            {messageError && <span>{messageError}</span>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
