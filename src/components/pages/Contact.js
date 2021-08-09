import React, { useState} from "react";
import "../../App.css";
import Footer from '../Footer'
import { db } from "../Firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
       
        alert("Thank you for your message! I'll get back to you soon :) ");
      })
      .catch((error) => {
        alert("Backend Error. Please contact me at harleenchaudhary16@gmail.com");
        
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return(
    <div className='contact-container' onSubmit={handleSubmit}> 
       <p className='contact-heading'> I'd love to hear from you.</p>
        
       <form className='form'> 
       <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        
      >
        Submit
      </button>


       </form>
       <Footer/> 
    </div>
    );

};

export default Contact;