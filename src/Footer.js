import React, {Component} from 'react'
import contactLinks from './ContactLinks'
import ScrollReveal from 'scrollreveal'
const MediaLink = ({icon, link}) =>(
  <a href={link} rel="noopener noreferrer" target="_blank"><i className={icon + " fa-lg white-text fa-2x mx-4"}></i></a>
)

class Footer extends Component{
    componentDidMount(){
      ScrollReveal().reveal('#footer .container, .footer-copyright a', {duration: 1000, interval: 100})
      ScrollReveal().reveal('#footer', {duration: 600})
    }
  
    render(){
        let socialMedia = contactLinks.map(({icon, link}, index)=>(<MediaLink key={"medialink-"+index} icon={icon} link={link} />))

        return (
          <footer id="footer" className="text-light">
            <div className="py-5 bg-dark text-center">
              <div className="container">
                {socialMedia}
              </div>
            </div>
            <div className="footer-copyright text-center py-2 bg-dark">© 2018 Copyright:
              <a href="http://www.shikdertech.io"> ShikderTECH.io</a>
            </div>
          </footer>
        );
    }
}

export default Footer