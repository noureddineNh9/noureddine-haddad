import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/sections/Home";
import About from "../components/sections/About";
import Resume from "../components/sections/Resume";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Header from "../components/Header";

function HomePage() {
  return (
    <div className="all-wrap">
      <Header />
      <div className="main">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default HomePage;
