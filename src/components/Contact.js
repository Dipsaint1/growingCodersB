import React from 'react';
import "./Contact.css";
import image from "../images/Rectangle.png";

function Contact() {
  return (
    <section id="contact">
      <h4 className="contact-header">GET IN TOUCH</h4>
      <div className="contact-text-container">
        <p className="contact-text">
          Add your details to learn more about the Ventrae difference: high-performing teams delivering exceptional client service.
        </p>
      </div>
      <img src={image} class="contact-bg-image" alt="" />

      <form>
        <input type="text" name="name" id="name" placeholder="Name" />
        <select name="" id="">
          <option value="service-required">Service Required</option>
        </select>
        <input type="text" name="name" id="name" placeholder="Subject" />
        <textarea name="textarea" className="textarea" placeholder="Message"></textarea>
        <button className='form-btn'>SEND <i class="fa fa-chevron-right" aria-hidden="true"></i></button>
      </form>
      
    </section>
  )
}

export default Contact;