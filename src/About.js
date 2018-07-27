import React, {Component} from 'react'
import menuItems from './AboutMeData'

const VTab = ({tab})=>{
  return (
    <a className={(tab==="Overview") ? 'nav-link active':"nav-link"} id={"vtab-" + tab + "-tab"} data-toggle="tab" href={"#vtab-"+tab} role="tab" aria-controls={"vtab-"+tab} aria-selected="false">{tab}</a>
  )
}

const VContent = ({tab, content}) =>{
  return(
    <div className={(tab==="Overview")?"tab-pane fade show active":"tab-pane fade"} id={"vtab-"+tab} role="tabpanel" aria-labelledby={"v-tab-" + tab + "-tab"}>{content}</div>
  )
}

const VTabMenu = ({menuItems}) =>{
  const tabs = menuItems.map((item, index)=>(<VTab key={index*10} tab={item.tab}/>))
  const contents = menuItems.map((item, index)=>(<VContent key={index} tab={item.tab} content={item.content}/>))
  return (
    <div className="row">
      <div className="col-3">
        <div className="nav flex-column nav-tabs" id="v-tab" role="tablist" aria-orientation="vertical">
          {tabs}
        </div>
      </div>
      <div className="col-9 shadow">
        <div className="tab-content mx-2" id="v-tab-content">
          {contents}
        </div>
      </div>
    </div>
  )
}

class About extends Component{
  // constructor(props){
  //     super(props)
  // }
  
  render(){
    return (
      <div id="about" className="my-5">
        <h2 className="text-center mb-4">Hi, I'm Asif</h2>
          <VTabMenu menuItems={menuItems}/>
      </div>
    );
  }
}

export default About