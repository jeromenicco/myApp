import React from 'react'
import emailjs from 'emailjs-com';

import './EmailMe.css'

const EmailMe = ({state}) => {


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f5uqk0a', 'template_xsav6l9', e.target, 'user_TRqGXzTvobl62QdvkOHBo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  }

  return (

    <div className={state ? 'email-container' : 'email-container-hidden'}>
      <form onSubmit={sendEmail}>
        <div className='list-container'>
          <div>
            <input type='text' placeholder='name' name='name' />
          </div>
          <div>
          <input type='email' placeholder='email' name='email' />
          </div>
          <div>
            <input type='text' placeholder='subject' name='subject' />
          </div>
          <div>
            <textarea className='text-area' type='text' placeholder='your message' name='message' cols='30' rows='8'/>
          </div>
          <div>
            <input className='send-button' type='submit' placeholder='subject' value='send' />
          </div>
        </div>
      </form>
    </div>
  )
}

export default EmailMe
