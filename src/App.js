import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Memo from './pages/Memo';
import Cmsmart from './pages/Cmsmart';
import Edocument from './pages/Edocument';
import Certificates from './pages/Certificates';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/certificates">
            <Certificates />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/memo">
            <Memo />
          </Route>
          <Route path="/cmsmart">
            <Cmsmart />
          </Route>
          <Route path="/edocument">
            <Edocument />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
