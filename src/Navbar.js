import React, {Component} from 'react'

const NavItem = ({key, item}) =>{
    // TODO: Return Nav Item
    const {name, href} = item
    return(
          <li className="nav-item">
            <a className="nav-link text-light" href={href}>{name}</a>
          </li>
        )
    
}

class Navbar extends Component{
    constructor(props){
        super(props)
        this.navItems = props.navItems
    }
    
    render(){
        let navList = this.navItems.map((item, index)=>(
            <NavItem item={item} key={index}/>
        ))
        return (
          <nav id="nav" className="navbar fixed-top navbar-expand-lg navbar-dark bg-transparent">
            <div className="container">
              <a id="nav-title" className="navbar-brand" href="#home">AS</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
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