import React, { useRef, useState } from 'react'
import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import emailjs from 'emailjs-com';

const Contact = () => {

    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isDone, setIsDone] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_67oxe6b', 'template_bm46djo', formRef.current, '_utRiRPdlkOBTk4dy')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setIsDone(true);
    }
    
    return (
        <div className='c'>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className='c-title'>
                        Let's Discuss Your Project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img className='c-icon' src={Phone} alt="" />
                            <a href="tel:+1234567890">+1234567890</a>
                        </div>
                        
                    </div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img className='c-icon' src={Email} alt="" />
                            <a href="mailto:info@example.com">info@example.com</a>
                        </div>
                        
                    </div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img className='c-icon' src={Address} alt="" />
                            <a href="geo:latitude,longitude?q=Street%20Address">No 10, Main Road, Colombo 10.</a>
                        </div>
                        
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name...' name='user_name' required />

                        <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder='Subject...' name='user_subject' required />
                        
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email...' name='user_email' required />
                        
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message...' name="message" id="message" cols="30" rows="10"></textarea>
                        <button type='submit'>Submit</button>

                        {isDone && (<h2 className='done-msg'>Thank you...</h2>)}
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Contact