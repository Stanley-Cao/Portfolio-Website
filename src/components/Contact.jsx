import React from 'react'
import '../styles/contact.css'
import {MdOutlineEmail} from 'react-icons/md'

const contact = () => {
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
            <h4>I am always looking to meet and talk with new people. <br></br>
            Feel Free to drop a message and say hi.</h4>
          </article>
        </div>
        <form action="">
          <h3>New Message</h3>
          <input type="test" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default contact