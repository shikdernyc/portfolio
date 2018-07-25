import React, {Component} from 'react'

const NavItem = ({key, item}) =>{
    // TODO: Return Nav Item
    const {name, href} = item
    return(<a href={href}><li key={key}>{name}</li></a>)
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
        return [
                <ul>{navList}</ul>
            ]
    }
}

export default Navbar