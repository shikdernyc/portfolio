import React, {Component} from 'react'
import skills from './SkillList'

const Skill = ({skill}) =>{
    const {icon, title, desc, key} = skill
    return (
        <div key={key} className="card shadow">
        <i className={icon + " text-center fa-5x mt-2"}/>
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    )
}

class Skills extends Component{
    constructor(props){
        super(props)
        this.skillPerRow = props.skillPerRow
    }

    render(){
        let skillList = skills.map((skill)=>(
            <Skill skill={skill} />
        ))

        let dynSkillList = [];

        for(let i = 0 ; i< skillList.length ;i+= this.skillPerRow){
            dynSkillList.push(
                <div className="row mb-4">
                    {skillList.slice(i,i+this.skillPerRow)}
                </div>
            )
        }
        
        
        return(
            <section id="skills" className="my-5">
                <div className="container">
                    <h2 className="text-center mb-4">My Skills</h2>
                    <div className="card-deck">
                        {dynSkillList}
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills