import React, { Component } from 'react';
import './App.css';

//Components
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Project';
import Contact from './Contact';
import Footer from "./Footer"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      navItems: [
        {name: 'About', href: '#about'},
        {name: 'Skills', href: '#skills'},
        {name: 'Projects', href: '#projects'},
        {name: 'Contact', href: '#contact'}
      ],
      projects: {
        projPerRow: 2
      },
      skills: {
        skillPerRow: 4
      }
    }
  }
  
  render() {
    return ([
        <Navbar navItems={this.state.navItems}/>,
        <Home />,
        <About />,
        <Skills skillPerRow={this.state.skills.skillPerRow}/>,
        <Projects projPerRow={this.state.projects.projPerRow}/>,
        <Contact />,
        <Footer />
    ]);
  }
}

export default App;
