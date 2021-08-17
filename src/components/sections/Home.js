import React from "react";
import { Link } from "react-router-dom";
import Typed from 'react-typed'

function Home() {
  return <section >
    <div className="container " style={{
      minHeight:'100vh',
      display:'flex'
    }}>
      <div className="content " style={{
        width:"500px",
        textAlign:'center',
        margin:'auto'
      }}>

      
        <h2 className="home__title__1">Hi, I'am a</h2>
        <h1 className="home__title__2">
          <Typed 
            strings= {["Freelancer", "Creative","Developer"]}
            typeSpeed= {40}
            loop = {true}
            cursorChar= {"|"}
            startDelay = {200}
            backSpeed = {20} 
            backDelay = {3000}
          />
        </h1>
        <Link to="/projects" className="_btn _btn--main btn--animated">View My Works</Link>
      </div>
    </div>
  </section>;
}

export default Home;
