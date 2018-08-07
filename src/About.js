import React, {Component} from 'react'
import menuItems from './AboutMeData'

class About extends Component{
  constructor(props){
      super(props)
      this.setAboutContent= props.setAboutContent
      this.defaultContent = menuItems[0].content
  }

  handleTabClick = function(e){
    let vTabs = document.getElementsByClassName('v-tab')
    for(let tab of vTabs){
      tab.classList.remove('active')
    }
    const tab = e.target
    tab.classList.add('active')

    const newContent = menuItems.find(function(element){return element.tab===tab.innerHTML}).content
    this.setAboutContent(newContent)
  }

  componentDidMount(){
    const vTabs = document.getElementsByClassName('v-tab')
    vTabs[0].classList.add('active')
  }
  
  render(){
    const tabs = menuItems.map(({tab}, index)=>{
      return <a key={'vtab-'+index} className="nav-link v-tab" href="#about-content" onClick={this.handleTabClick.bind(this)}>{tab}</a>
    })
    console.log('Re-Rendering about')
    return (
      <section id="about" className="my-5">
        <div className="container">
          <h1 className="text-center mb-4">Hi I'm Asif</h1>
          <div className="row">
            <div className="col-3">
              <div className="nav flex-column nav-tabs" id="v-tab" role="tablist" aria-orientation="vertical">
                {tabs}
              </div>
            </div>
            <div className="col-9 shadow">
              <div className="tab-content" id="v-tab-content">
                {this.props.content==="" ? this.defaultContent : this.props.content}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About