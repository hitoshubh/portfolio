import React from "react";
import './contact.css';
import {SiGmail} from 'react-icons/si';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const  Contact=()=>{

    const from = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_a581fhn', 'template_dhpjpj3', from.current, '39OdUOqOi7ISKIfEa')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
          }, (error) => {
              console.log(error.text);
              e.target.reset();
          });
      };


    return(
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <SiGmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        {/* <h5>shubham.jauhari699@gmail.com</h5> */}
                        <a href='mailto:shubham.jauhari699@gmail.com'>Send a message</a>
                    </article>
                </div>

                <form ref={from} onSubmit={sendEmail}>
                    <input type="text" name='name' required placeholder="Your Full Name" />
                    <input type="email" name='email' required placeholder="Your Email" />
                    <textarea name='message' row='7' placeholder="Your message" required />
                    <button type='submit' className="btn btn-primary">Send</button>
                </form>

            </div>
        </section>     
    )
}

export default Contact;