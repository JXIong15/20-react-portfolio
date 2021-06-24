import React from "react";

function Bio() {
  return (
    <section id="about" class="layout">
      <div class="container1">
        <h2>About Me</h2>
        <img src="./Assets/headshot.jpg" alt="headshot" />
      </div>

      <div class="split"></div>

      
        <p>
          <ul>
            <li><span>Hometown: </span>Milwaukee, WI</li>
            <li><span>Currently Residing: </span>Milwaukee, WI</li>
            <li><span>Desired Locations: </span></li>
            <ul class="sub">
              <li>Milwaukee, WI</li>
              <li>San Jose, CA</li>
            </ul>
          </ul>
          <ul>
            <li><span>Education: </span>Stanford University, 2019</li>
            <ul class="sub">
              <li><a href="https://symsys.stanford.edu/"><span>Major: </span>Symbolic Systems</a></li>
            </ul>
          </ul>
        </p>
        <p>
            Applicable problem-solving has always been an interest of mine I enjoy. After
            some time solely in education, I am ready to get back into STEM through software engineering.
            Developing applications and webpages are
            equally challenging and rewarding. I hope to gain more experience in my technology field to some day
            combine both my passions of education and coding.
        </p>
        <p>
              My background is in application. I majored in Symbolic Systems at Stanford University, which
              involved me studying computer systems. After taking Java and
              C++ classes, my interest in coding applications developed. I have always loved STEM and mathematics,
              though there is only so much to do with applied
              mathematics. Since learning about coding languages, I see the problem solving aspect that I love in
              mathermatics in coding too. I hope to better develop my
              coding skills to be able to design and implement more applications in a professional setting.
          </p>
        </section>
            );
}

            export default Bio;