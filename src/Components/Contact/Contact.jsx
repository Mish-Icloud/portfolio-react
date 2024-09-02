import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "62477e39-2d97-4483-b915-25a9a1de3dbc");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                alert("Email Submitted Successfully");
                event.target.reset();
            } else {
                console.log("Error", data);
                alert(data.message);
            }
        } catch (error) {
            console.error("Error submitting the form", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects. Stay with me, stay safe and say no to weak software</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>misheckmunga36@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+254-798934136</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>Nairobi, Kenya</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' required />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' required />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
            {result && <p>{result}</p>}
        </div>
    )
}

export default Contact;
