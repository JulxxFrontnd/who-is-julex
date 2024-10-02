import React, { useState } from "react";
import "./Contact.css";
import "../SameStyle.css";
import Swal from "sweetalert2";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "18593417-e8dd-4a90-8bfd-a772e1077269");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for contacting me!",
        icon: "success",
        confirmButtonColor: "#777777",
        confirmButtonText: "Okay",
      });
      setName("");
      setEmail("");
      setMessage("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "Please Try Again. Thank you!",
        confirmButtonColor: "#1a1a1a",
        confirmButtonText: "Okay",
      });
    }
  };

  // Message Formatter
  const handleMessageChange = (e) => {
    const input = e.target.value;
    const formattedMessage = input.replace(/(^\s*\w|[.!?]\s*\w)/g, (c) =>
      c.toUpperCase()
    );
    setMessage(formattedMessage);
  };

  return (
    <>
      <Header />
      <main className="contact-container">
        <div className="contact-wrap">
          <div className="title">
            <h1>Beep Me Up.</h1>
          </div>
          <div className="form-wrap">
            <form onSubmit={onSubmit}>
              <input
                type="hidden"
                name="subject"
                value="New Contact Message from your Website"
              />
              <label>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="What's your name?"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Email:</label>
              <input
                type="email"
                name="email"
                placeholder="How about your email?"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Message:</label>
              <textarea
                name="message"
                placeholder="Now, what would you like to tell me?"
                autoComplete="off"
                value={message}
                onChange={handleMessageChange} // Handles message capitalization
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <small>
            Thank you for contacting me. I hope to hear more from you. Have a
            good one!
          </small>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
