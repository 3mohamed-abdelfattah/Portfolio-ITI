import React, { Fragment } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollUpButton from './components/ScrollUpButton';
import './App.css';

const App = () => (
  <Fragment>
    <Navbar />
    <ScrollUpButton />
    <Home />
    <About />
    <Services />
    <Skills />
    <Work />
    <Contact />
    <Footer />
  </Fragment>
);

export default App;
