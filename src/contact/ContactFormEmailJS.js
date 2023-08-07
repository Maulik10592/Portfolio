import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactFrom = () => {
  const form = useRef();
  var successMsg = "Your Email Has Been Successfully Sent.";
  var errorMsg = "Something Went Wrong Try Again.";
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1oflf17', 'template_h4quj3n', form.current, '0Ma5OBOz4golJ-SX5')
      .then((result) => {
          console.log(result.status);
          // (successMsg).css("display", "block");
          alert(successMsg);
      }, (error) => {
          console.log(error);
          // (errorMsg).css("display", "block");
          alert(errorMsg);
      });
      
      e.target.reset();
  };

  return (
    <form className='contactForm' ref={form} onSubmit={sendEmail}>
      <input placeholder='Full Name' type="text" name="user_name" required />
      <input placeholder='Your Email' type="email" name="user_email" required />
      <textarea placeholder='Your Message' name="message" rows={4} required />
      <input className='btn btnHover' type="submit" value="Send" />
      {/* <p className='successMsg'>{successMsg}</p>
      <p className='errorMsg'>{errorMsg}</p> */}
    </form>
  );
};