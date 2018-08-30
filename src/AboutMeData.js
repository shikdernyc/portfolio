import React from 'react'

const hobbies = [
    "Billards",
    "Basketball",
    "Lifting",
    "Coding (0bviously)",
    "Reading (Recently) (Always looking for new recommendation)",
    "Talking about life and philosophy"
]

const schools = [
    {
        schoolName: "Hunter College",
        gpa: "4.0",
        major: "Computer Science",
        courses: "Computer Archetecture, C++ Programming, Statistics",
        overview: "I am a transfer student at Hunter College, starting the Fall of 2018. I will be majoring in Computer Science and hoping to get involved in various side projects and research programs they offer there.",
        startDate: "August 2017",
        graduationDate: "May 2021"
    },
    {
        schoolName: "New York City College of Technology",
        gpa: "4.0",
        major: "Computer System Information",
        courses: "Computer Archetecture, C++ Programming, Statistics",
        overview: "I have been a student at New York City College of Technology for two semester. Over that time period, I have managed to maintain a strong achedemic experience, receiving offers from various honors programs and received a Dean's Honor Award.",
        startDate: "August 2017",
        graduationDate: "May 2018"
    }
]

const School = ({school}) =>{
    const {schoolName, gpa, major, courses, overview, startDate, graduationDate} = school
    return (
        <div className="card text-center shadow-sm my-3">
          <div className="card-header">
            {major}
          </div>
          <div className="card-body">
            <h5 className="card-title">{schoolName}</h5>
            <p><strong>GPA:</strong> {gpa}</p>
            <p><strong>Relevent Courses:</strong> {courses}</p>
            <p className="card-text">{overview}</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
          <div className="card-footer text-muted">
            {startDate + " - " + graduationDate}
          </div>
        </div>
      );
}

const Hobbies = ({hobbies})=>{
    const hobbyList = hobbies.map((hobby, index)=>(
        <li className="list-group-item" key={'hobby-'+index}>{hobby}</li>
    ))

    return (
        <ul className="list-group list-group-flush">
            {hobbyList}
        </ul>
    )
}

// First Item will be the default item that will always be displayed
const menuItems = [
    {
        tab: "Overview",
        content: <div><p>改善 - Kaizen - Japanese philosophy for continuous improvement.</p><p>Hello, I’m Asif Shikder, a second year college student majoring in computer science, working to become an outstanding software engineer one day. I have a competitive 4.0 GPA along with various side projects associated with IBM, NYC Department of Health and NYC Public Health Laboratory. I enjoy Web Development, however, I am also knowledgeable in Android Development, Java, Python, Data Science, and Machine Learning. I am always looking for opportunities to gain more experience in the field of Computer Science in a professional work environment. I am also open to work on any externals or competitions revolving around programming.</p><p>Aside from my interest in programming, I also enjoy teaching, lifting, basketball and billiards. I have been tutoring people since the start of high school and I hope to continue helping those around me alongside my career.</p><p>Feel free to message me about any opportunities or just drop by and say hello. Always open to meet new people :)</p></div>
    },
    {
        tab: "Education",
        content: schools.map((schools, index)=>(
            <School key={"school-"+index} school = {schools}/>
        ))
    },
    {
        tab: "Hobbies",
        content: <Hobbies hobbies={hobbies}/>
    },
    {
        tab: "Resume",
        content: <p>Resume has been updated on July 2018: <a href="https://drive.google.com/open?id=0B5DvzYyeO1rwWXZWQXNzQjZNanVfUGVjMTl4WmdlSWpwUWw4" rel="noopener noreferrer" target="_blank">Google Drive</a></p>
    }
]

export default menuItems