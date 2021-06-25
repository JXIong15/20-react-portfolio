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

            <Form />

            <ul>
                <li>
                    <span>Email: </span> <a href="mailto: jouxiong15@gmail.com">jouxiong15@gmail.com</a>
                </li>
                <li>
                    <span>Phone: </span>414-630-8549
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jou-xiong-109035112/" target="_blank">LinkedIn</a>
                </li>
                <li>
                    <a href="./Assets/Coding-Resume.pdf" download="Xiong, Jou - Resume">Resume</a>
                </li>
            </ul>
        </section>
    );
}

export default Contact;

