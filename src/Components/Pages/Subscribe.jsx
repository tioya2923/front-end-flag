import React, { useState } from 'react';
import '../Styles/subscribe.css';


const Subscribe = () => {


const [fullName, setFullName] = useState('');
const [email, setEmail] = useState ('');

const handleChange = (e) => {
  setFullName(e.target.value);
}

const handleEmailChange = (e) => {
  setEmail(e.target.value);
}

const handleSubmit=(e)=> {
  e.preventDefault();
}

  return (
    <div className='all-subscribe'>
      <div className="overlay-subscribe">
        <div >
          <h2 className="contact-subscribe">Contact us</h2>
          <div >
            <h2 className="subscribe-conversation">Let’s Start a Conversation</h2>
          </div>
          <div className="desc-subscribe">
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</h3>
          </div>

          <div className="subscrite-address">
            <div className="working-hours"><h2>Work Ours</h2>
            <div className='inline-subscribe'></div>
              <div className="day-subscribe"><h2>Monday To Friday</h2></div>
              <div className="subscribe-time"><h2>9:00 AM to 8:00 PM </h2></div>
              <div className="subscribe-suporte"><h2>Our Support Team is available 24/7</h2></div>
            </div>

            <div className="subscribe-contactUs"><h2>Contact us</h2>
            <div className='inline-subscribe'></div>
              <div className="subscribe-number">
                <h2>020 7993 2905</h2>
              </div>
              <div className="subscribelast-email"><h2>hello@finsweet.com</h2></div>
            </div>
          </div>
        </div>

        <div className="input-subscrive">
          <form onSubmit={(e) => {handleSubmit(e)}}>
            <input className='input-fullName' type='text' value={fullName} placeholder='Full Name' required onChange={(e) =>{handleChange(e)}}/>
            <input className='input-email' type='email' value={email} placeholder='Your Email' required onChange={(e) =>{handleEmailChange(e)}} />

            <input className='input-query' type="text" placeholder='Query Related' required/>
            <input className='input-message' type="text" placeholder='Message' required/>
            <input className='input-submit'  type="submit" value="Submit"/>
          </form>
        </div>
      </div>

      
      
    </div>
  )
}

export default Subscribe
