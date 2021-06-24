import React from "react";

function Footer() {
  return (
    <footer>
        <div className="contact">
        <h2>Contact Me</h2>
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

                <li class="top-el">
                    <a href="#top">Back to Top</a>
                </li>
        </div>

      Created By: <br></br>
        <a href="https://github.com/JXIong15" target="_blank">Jou Xiong</a>
        <p>© 2021 Trilogy, Northwestern Coding Bootcamp</p>
    </footer>
  );
}

export default Footer;