import React, {Component} from 'react'
import contactLinks from './ContactLinks'

const MediaLink = ({icon, link}) =>(
    <a href={link}><i className={icon + " fa-lg white-text fa-2x mx-5"}></i></a>
)

class Footer extends Component{
    render(){
        let socialMedia = contactLinks.map(({icon, link})=>(<MediaLink icon={icon} link={link} />))

        return (
            <footer className="text-center text-light">
              <div className="py-5 bg-dark">
                {socialMedia}
              </div>
              <div className="footer-copyright text-center py-2 bg-dark">© 2018 Copyright:
                <a href="#"> ShikderNYC.github.io</a>
              </div>
            </footer>
          );
    }
}

export default Footer