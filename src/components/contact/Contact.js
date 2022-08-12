import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import {useRef, useContext} from "react";
import emailjs from '@emailjs/browser';
import React, { useState } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef =useRef();

    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
  const darkMode= theme.state.darkMode;

    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm(
        'service_pmcstjl', 
        'template_lwxrg22', 
        formRef.current, 
        'hTOVovrj99Do1DbZp')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    }

    return(
        <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
        <div className="c-left">
        <h1 className="c-title">Lets discuss your project</h1>
        <div className="c-info">
        
        <div className="c-info-item">
        <img src={Phone} alt="" className="c-icon"/> 
        +91 9763054918
        </div>
        
        <div className="c-info-item">
        <img src={Email} alt="" className="c-icon"/> 
        sahilnarvekar8@gmail.com
        </div>

        <div className="c-info-item">
        <img src={Address} alt="" className="c-icon"/>
         HNo.211 Near Ganapati Temple Sasmolem Baina Vasco-Da-Gama, Goa
        </div>
        
        </div>
        </div>
        <div className="c-right">
        <p className="c-desc">
        <b>Whats your story?</b> Get in touch. 
        Always freelancing if the right project comes along.me
        </p>

        <form ref={formRef} onSubmit={handleSubmit}>
        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"/>
        <button>Submit</button>

        {done && "Thank You ..."}

        </form>
        
        </div>
        </div>
        </div>
    );
}

export default Contact;