import React from "react";

function About() {

  var x = 1;
  return <section>
      <div className="container " style={{
        minHeight:'100vh',
        display:'flex'
      }}>
        <div className="content " style={{
          margin:'auto 30px'
        }}>
            <p> Hi! 👋 I'm a <strong>Full-stack JavaScript Developer</strong> based on Morocco. 
            Skilled in ES6+, NodeJS and ReactJS, 
            eager to join your team to provide both frontend and backend 
             solutions to your projects and products.
          </p>
          <p> I started coding seriously around 2018. I love to create new things, through technology,
            especially things that are really helpful to people.
            But, as much as I can, I do not reinvent the wheel,
            I utilize existing technology and tools in order to produce high-quality applications.  
          </p>
          <p>
            <strong>When I'm not in front of a computer screen </strong>, I'm probably in the Gym 🏋 or playing video Games 🎮
          </p>
        </div>
    </div>

  </section>;
}

export default About;
