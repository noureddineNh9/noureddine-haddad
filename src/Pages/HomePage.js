import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/sections/Home';
import About from '../components/sections/About';
import Resume from '../components/sections/Resume';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import Header from '../components/Header';
import Sidebar from '../components/layouts/Sidebar';

function HomePage() {
  return (
    <div className="all-wrap">
      <Sidebar />
      <Header />
      <div className="main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/noureddine-haddad">
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
