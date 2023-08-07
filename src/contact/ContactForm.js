import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgvnovz");
  if (state.succeeded) {
      return <p className='successMsg'>Thanks for contacting me!<br/>Your email has been successfully sent.</p>;
  }
  return (
      <form className='contactForm' onSubmit={handleSubmit}>
      <input
        id="name"
        type="text" 
        name="name"
        placeholder='Enter Fullname'
        required
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Email Address'
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='Message'
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='btn' type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>
  );
}

export default ContactForm;