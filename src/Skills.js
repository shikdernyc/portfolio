import React, {Component} from 'react'
import skills from './SkillList'

class Skills extends Component{
    render(){
        let skillList = skills.map(({icon, name}, index)=>{
            return <i class={icon}>{name}</i>
        })
        return skillList
    }
}

export default Skills