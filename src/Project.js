import React, {Component} from 'react'
import projects from './ProjectList'

const Project = ({project}) =>{
    const {key, title, img, technology, description, links, date} = project
    let button = links.map(({label, link}, index)=>((
        <a key={"proj-link-"+index} href={link} class="btn btn-primary col mx-1">{label}</a>
    )))

    return (
        <div key={key} className="card shadow text-center">
        <img className="card-img-top" src={img} alt="How the project looks"/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"><strong>Technology: </strong>{technology}</p>
          <p className="card-text">{description}</p>
          <div className="row">
            {button}
          </div>
        </div>
        <div class="card-footer text-muted">
            {date}
        </div>
      </div>
    )
}

class Projects extends Component{
    constructor(props){
        super(props)
        this.projPerRow = props.projPerRow;
    }

    render(){
        let projList = projects.map((project)=>(
            <Project project={project} />
        ))
        let dynProjList = [];

        for(let i = 0 ; i< projList.length ;i+= this.projPerRow){
            dynProjList.push(
                <div className="row mb-4">
                    {projList.slice(i,i+this.projPerRow)}
                </div>
            )
        }
        
        return(
            <div id="projects" className="my-5">
                <h2 className="text-center mb-4">Highlighted Projects</h2>
                <div className="card-deck">
                    {dynProjList}
                </div>
            </div>
        )
    }
}

export default Projects