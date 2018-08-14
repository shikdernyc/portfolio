import React, {Component} from 'react'
import ScrollReveal from 'scrollreveal'
import "./Home.css"
import avatar from "./avatar.jpg"

class Home extends Component{
  constructor(props){
      super(props)
      this.title = "Asif Shikder"
      this.subTitle = "Student Programmer"
      this.avatarUrl = "./avatar.jpg"
  }
  
  componentDidMount(){
    ScrollReveal().reveal('#avatar, #subtitle', {duration: 2000});
    ScrollReveal().reveal('#title', {duration: 3000 });
    ScrollReveal().reveal('.icon-scroll', {duration: 5000 });
  }
  
  render(){
      return (
        <header id="home" className="masthead">
          <div className="container d-flex h-100 align-items-center">
            <div className="mx-auto text-center">
              <img id="avatar" src={avatar} alt='avatar'/>
              <h1 id="title"  className="text-uppercase text-dark mx-auto mt-2">{this.title}</h1>
              <h2 id="subtitle" className="text-muted mx-auto mt-1 mb-2">{this.subTitle}</h2>
              <div className='icon-scroll'></div>
            </div>
          </div>
        </header>
      );
  }
}

export default Home