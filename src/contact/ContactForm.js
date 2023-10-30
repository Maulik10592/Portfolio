import React from 'react';
import { useForm } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgvnovz");
  
  console.log(state);
  if (state.succeeded) {
      return <p className='successMsg'>Thanks for contacting me!<br/>Your email has been successfully sent.</p>;
  }

  return (
    <form className='contactForm' autoComplete='off' onSubmit={handleSubmit}>
      <input
        id="name"
        type="text" 
        name="name"
        placeholder='Enter Fullname'
        required
      />

      <input    
        id="email"
        type="email" 
        name="email"
        placeholder='Email Address'
        required
      />

      <textarea
        id="message"
        name="message"
        placeholder='Message'
        required
      />

      <button className='btn' type="submit" disabled={state.submitting}>
        Send
      </button>
    </form>

    // <form className='contactForm' autoComplete='off' onSubmit={handleSubmit}>
    //   <input
    //     {...state("name", {
    //       required: "Please enter the fullname",
    //       minLength: {
    //         value: 3,
    //         message: "Enter name must be atleast 3 characters long"
    //       },
    //       maxLength: {
    //         value: 30,
    //         message: "Enter name must be almost 30 characters long"
    //       }
    //     })}
    //     id="name"
    //     type="text" 
    //     name="name"
    //     placeholder='Enter Fullname'
    //   />
    //   <p>{state.error.name?.message}</p>

    //   <input
    //     {...state("email", {
    //       required: "Please enter the email address",
    //       pattern: {
    //         value: /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/,
    //         message: "Enter the proper email"
    //       }
    //     })}      
    //     id="email"
    //     type="email" 
    //     name="email"
    //     placeholder='Email Address'
    //   />
    //   <p>{state.error.email?.message}</p>

    //   <textarea
    //     {...state("message", {
    //       required: "Please enter the message"
    //     })}
    //     id="message"
    //     name="message"
    //     placeholder='Message'
    //   />
    //   <p>{state.error.message?.message}</p>

    //   <button className='btn' type="submit" disabled={state.submitting}>
    //     Send
    //   </button>
    // </form>
  );
}

export default ContactForm;