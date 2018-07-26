import React, {Component} from 'react'

const vTab = ({tabContents})=>{
  let vtabs = tabContents.map((item, index)=>(item.tab))
  return(
        <div className="nav flex-column nav-tabs" id="v-tab" role="tablist" aria-orientation="vertical">
          {vtabs}
        </div>
    )
}

const vContent = ({tabContents}) =>{
  
}

class About extends Component{
    // constructor(props){
    //     super(props)
    // }
    
    getTabWithContent(tabName, content){
      const tabID = "v-" + tabName + '-tab'
      const contentID = "v-"+tabName
      return{
          tab: <a className="nav-link" id={tabID} data-toggle="tab" href={"#" + contentID} role="tab" aria-controls={contentID} aria-selected="true">{tabName}</a>,
          content: <div className="tab-pane fade" id={contentID} role="tabpanel" aria-labelledby={tabID}>{content}</div>
        }
    }
    
    render(){
      return (
        <div className="row">
          <div className="col-3">
            <div className="nav flex-column nav-tabs" id="v-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active" id="v-pills-home-tab" data-toggle="tab" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Overview</a>
              <a className="nav-link" id="v-pills-profile-tab" data-toggle="tab" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Education</a>
              <a className="nav-link" id="v-pills-messages-tab" data-toggle="tab" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Hobbies</a>
              <a className="nav-link" id="v-pills-settings-tab" data-toggle="tab" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Resume</a>
            </div>
          </div>
          <div className="col-9">
            <div className="tab-content" id="v-tab-content">
              <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Overview Content</div>
              <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Education Content</div>
              <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Hobbies Content</div>
              <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">Resume</div>
            </div>
          </div>
        </div>
      );
    }
}

export default About