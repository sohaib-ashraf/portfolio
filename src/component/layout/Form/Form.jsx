

import React, {useRef, useState} from 'react'
import './Form.css'
import emailjs from '@emailjs/browser';




const Result = () => {
    return(
        <p>
            Your message send Successfully.
        </p>
    )
}

const Form = () => {

    const [result,showResult] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_m0r0bgf', 'template_9ehvegf', form.current, 'XtbVqveqsHwQqc28g')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
        showResult(true)
    };

    setTimeout(() => {
        showResult(false)
    }, 5000);

  return (
    <form ref={form} className='form' onSubmit={sendEmail}>
    <div className='form_input'>
    <input type="text" placeholder='Your Name' name='user_name' required='true'/>
    </div>
    <div className='form_input'>
    <input type="email" placeholder='Your Email' name='user_email' required='true'/>
    </div>
    <div className='form_input'>
    <textarea  id=""  rows="4" placeholder='Your message' name='message' required='true'></textarea>
    </div>
      <button className="submit_btn btn" type='submit' value='send'>Submit</button>
      <div className='success_msg'>
       { result ? <Result /> : null}
      </div>
    </form>
  )
}

export default Form