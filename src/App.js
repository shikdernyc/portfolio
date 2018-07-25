import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      navItems: [
        {name: 'Home', href: "#home"},
        {name: 'About', href: '#about'},
        {name: 'Skills', href: '#skills'},
        {name: 'Projects', href: '#projects'},
        {name: 'Contact', href: '#contact'}
      ]
    }
  }
  
  render() {
    return (
      <div>
        <Navbar navItems={this.state.navItems}/>
      </div>
    );
  }
}

export default App;
