import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

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
      about:{
        content: ""
      },
      projects: {
        projPerRow: 2
      },
      skills: {
        skillPerRow: 4
      }
    }
    this.setAboutContent = this.setAboutContent.bind(this)
  }

  setAboutContent(newContent){
    const newState = {
      about:
      {
        content: newContent
      },
    }
    // console.log(newState)
    this.setState(newState)
  }
  
  render() {
    console.log(this.state.about.content)
    return ([
        <Navbar navItems={this.state.navItems}/>,
        <Home />,
        <About setAboutContent={this.setAboutContent} content={this.state.about.content}/>,
        <Skills skillPerRow={this.state.skills.skillPerRow}/>,
        <Projects projPerRow={this.state.projects.projPerRow}/>,
        <Contact />,
        <Footer />
    ]);
  }
}

export default App;
