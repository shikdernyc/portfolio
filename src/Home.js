import React, {Component} from 'react'
import "./Home.css"

class Home extends Component{
    constructor(props){
        super(props)
        this.title = "Asif Shikder"
        this.subTitle = "Student Programmer"
        // this.coverUrl = props.coverUrl
        // this.avatarUrl = props.avatarUrl
    }
    
    render(){
        return (
          <header className="masthead">
            <div className="container d-flex h-100 align-items-center">
              <div className="mx-auto text-center">
                <img id="avatar" src='https://s3.us-east-2.amazonaws.com/shikdernyc-portfolio/avatar.jpg' alt='avatar'/>
                <h1 className="text-white mx-auto mt-2">{this.title}</h1>
                <h2 className="text-white mx-auto mt-1 mb-2">{this.subTitle}</h2>
              </div>
            </div>
          </header>
        );
    }
}

export default Home