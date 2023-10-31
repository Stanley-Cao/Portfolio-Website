import React from 'react'
import '../styles/contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qcntcoo', 'template_ot7afjs', form.current, 'Ugd9O4zv8k37peZvN')
    
    e.target.reset()
  };
  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contactoptions">
          <article className="contactOption">
            <MdOutlineEmail className="mail"/>
            <h4>Email</h4>
            <h5>stanleycao24@gmail.com</h5>
            <a href="mailto:stanleycao24@gmail.com">Send a Message</a>
          </article>
          <article className="contactOption">
            <FaGithub className="mail"/>
            <h4>GitHub</h4>
            <h5>Stanley Cao</h5>
            <a href="https://github.com/Stanley-Cao" target="_blank">My Profile</a>
          </article>
          <article className="contactOption">
            <BsLinkedin className="mail"/>
            <h4>LinkedIn</h4>
            <h5>Stanley Cao</h5>
            <a href="https://www.linkedin.com/in/stanley-cao/" target="_blank">Let's Connect</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <h3>New Message <br></br> Feek free to say hi. I am always looking to meet new people or chat about opportunities.</h3>
          <input type="test" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact