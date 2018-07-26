import React, { Component } from 'react';
import './App.css';

//Components
import Navbar from './Navbar'
import Home from './Home'
import About from './About'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      navItems: [
        {name: 'About', href: '#about'},
        {name: 'Skills', href: '#skills'},
        {name: 'Projects', href: '#projects'},
        {name: 'Contact', href: '#contact'}
      ]
    }
  }
  
  render() {
    return ([
        <Navbar navItems={this.state.navItems}/>,
        <Home />,
        <div className="container">
          <About />
        </div>
    ]);
  }
}

export default App;
