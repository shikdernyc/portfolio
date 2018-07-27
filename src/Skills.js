import React, {Component} from 'react'
import skills from './SkillList'

class Skills extends Component{
    render(){
        let skillList = skills.map(({icon, title, desc}, index)=>(
          <div key={index} className="card shadow">
            <i className={icon + " text-center fa-5x mt-2"}/>
            <div className="card-body">
              <h5 className="card-title text-center">{title}</h5>
              <p className="card-text">{desc}</p>
            </div>
          </div>
        ))
        
        
        return(
            <div id="skills" className="my-5">
                <h2 className="text-center mb-4">My Skills</h2>
                <div className="card-deck">
                    <div className="row mb-3">
                        {skillList.slice(0,4)}
                    </div>
                    <div className="row">
                        {skillList.slice(4)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Skills