import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.scss';

import HomePage from './Pages/homepage/homepage.component.jsx';
import AboutPage from './Pages/aboutpage/aboutpage.component';
import Navbar from './components/layouts/navbar/navbar.component.jsx';
import ProjectsPage from './Pages/projectspage/projectspage.component.jsx';
import ContactPage from './Pages/contactpage/contactpage.component';

function App() {
  return (
    <>
      <Navbar />
      <div className="loader">
        <div class="multi-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="main__container min-h-screen ">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
