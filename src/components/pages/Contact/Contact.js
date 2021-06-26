import React from "react";
import Form from "./Form";

function Contact() {
    return (
        <section className="contact">
            <h2>Get In Touch With Me!</h2>
            <p>
                If you like what I do, or your interested, I'd love to chat! Else, I am always eager to converse
                on my hobbies, interests, and any future development ideas. Just send a message my way!
            </p>

            <div className="icons">
                <p> 📧 </p>
                <p> 📞 </p>
                <p> 💬 </p>
            </div>

            <div className="contact-form row">
                <Form />
                <ul className="col-sm-12 col-md-4">
                    <li>
                        <span>Email: </span> <a href="mailto: jouxiong15@gmail.com">jouxiong15@gmail.com</a>
                    </li>
                    <li>
                        <span>Phone: </span>414-630-8549
                    </li>
                    <li>
                        Visit <a href="https://www.linkedin.com/in/jou-xiong-109035112/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        Download <a href="./Assets/Coding-Resume.pdf" download="Xiong, Jou - Resume">Resume</a>
                    </li>
                    <a href="https://formspree.io/" target="_blank" rel="noreferrer"><img src="./Assets/form.png" alt="formspree logo" /></a>
                </ul>

            </div>
        </section>
    );
}

export default Contact;

