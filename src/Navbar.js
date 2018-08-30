import React, {Component} from 'react'
import ScrollReveal from 'scrollreveal'
import './Navbar.css';

function handleSmoothScroll(event){
  event.preventDefault()
  const scrollToID = event.target.getAttribute('href').substr(1)
  const element = document.getElementById(scrollToID)
  element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

const NavItem = ({item}) =>{
    // TODO: Return Nav Item
    const {name, href} = item
    return(
          <li className="nav-item">
            <a className="nav-link" onClick={handleSmoothScroll} href={href}>{name}</a>
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
      // ScrollReveal().reveal('.nav-item', {distance: '200px', origin: 'right', interval: 100})
      ScrollReveal().reveal('#nav', {distance: '3000px', origin: 'bottom', duration: 750})
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
        nav.classList.add('navbar-dark')
        nav.classList.remove('nav-transparent')
        nav.classList.remove('navbar-light')
      }
      else{
        nav.classList.remove('nav-dark')
        nav.classList.remove('navbar-dark')
        nav.classList.add('nav-transparent')
        nav.classList.add('navbar-light')
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
          <nav id="nav" ref="table" className="navbar fixed-top navbar-expand-lg navbar-light bg-transparent">
            <div className="container">
              <a id="nav-title" className="navbar-brand" href="#home" onClick={handleSmoothScroll}>ShikderTECH</a>
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