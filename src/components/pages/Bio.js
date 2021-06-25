import React from "react";

function Bio() {
  return (
    <section>
      <h2>About Me</h2>
      <div className="about">
        <img src="./Assets/headshot.jpg" alt="headshot" />
        <ul>
          <li><span>Hometown: </span>Milwaukee, WI</li>
          <li><span>Currently Residing: </span>Milwaukee, WI</li>
          <li><span>Desired Locations: </span></li>
          <ul>
            <li>Milwaukee, WI</li>
            <li>San Jose, CA</li>
            <li>Chicago, IL</li>
            <li>Seattle, WA</li>
          </ul>
          <li><span>Education: </span></li>
          <ul>
            <li><span>Northwestern University Coding Bootcamp</span>, 2021</li>
            <ul>
              <li><span>Certificate of Completion</span> in Full-Stack Web Development</li>
            </ul>
            <li><span>Stanford University</span>, 2019</li>
              <ul>
                <li><span>Bachelors of Science</span> in <a href="https://symsys.stanford.edu/">Symbolic Systems</a></li>
              </ul>
          </ul>
        </ul>
      </div>

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

      <div>
        <img src="./Assets/collage.jpg" alt="collage of my likes" className="collage" />
        <p className="caption">
          (I value my family, friends, and significant other. I love my pup. My lifelong hobbies involve
          Pokemon and sports. Being from Wisconsin, my favorite sports teams are the Miilwaukee Bucks and the
          Green Bay Packers.)
        </p>
      </div>
    </section>
  );
}

export default Bio;