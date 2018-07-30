import React, {Component} from 'react'
import './Navbar.css';

const NavItem = ({item}) =>{
    // TODO: Return Nav Item
    const {name, href} = item
    return(
          <li className="nav-item">
            <a className="nav-link" href={href}>{name}</a>
          </li>
        )
    
}

class Navbar extends Component{
    constructor(props){
        super(props)
        this.navItems = props.navItems
    }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
    
    handleScroll(e) {
      let homeHeight = document.getElementById('home').clientHeight;
      let currentHeight = window.scrollY;
      let nav = document.getElementById('nav')
      if(currentHeight >= homeHeight * .6)
      {
        nav.classList.add('nav-dark')
        nav.classList.remove('nav-transparent')
      }
      else{
        nav.classList.remove('nav-dark')
        nav.classList.add('nav-transparent')
      }
      console.log()
    }
  
    toggleResponsive(e){
      document.getElementById("navbarResponsive").classList.toggle('d-block')
    }
    
    render(){
        let navList = this.navItems.map((item, index)=>(
            <NavItem item={item} key={"navitem-"+index}/>
        ))
        return (
          <nav id="nav" ref="table" className="navbar fixed-top navbar-expand-lg navbar-dark bg-transparent">
            <div className="container">
              <a id="nav-title" className="navbar-brand" href="#home">ShikderTECH</a>
              <button className="navbar-toggler" type="button" onClick={this.toggleResponsive}>
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    {navList}
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}

export default Navbar