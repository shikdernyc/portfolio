import React from 'react'

const School = ({school}) =>{
    const {schoolName, gpa, major, courses, overview, startDate, graduationDate} = school
    return (
        <div className="card text-center mb-5 shadow-sm">
          <div className="card-header">
            {major}
          </div>
          <div className="card-body">
            <h5 className="card-title">{schoolName}</h5>
            <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item"><strong>GPA:</strong> {gpa}</li>
                <li className="list-group-item"><strong>Relevent Courses:</strong> {courses}</li>
            </ul>
            <p className="card-text">{overview}</p>
            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
          </div>
          <div className="card-footer text-muted">
            {startDate + " - " + graduationDate}
          </div>
        </div>
      );
}

const schools = [
    {
        schoolName: "Hunter College",
        gpa: "4.0",
        major: "Computer Science",
        courses: "Computer Archetecture, C++ Programming, Statistics",
        overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.",
        startDate: "August 2017",
        graduationDate: "May 2021"
    },
    {
        schoolName: "New York City College of Technology",
        gpa: "4.0",
        major: "Computer System Information",
        courses: "Computer Archetecture, C++ Programming, Statistics",
        overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially.",
        startDate: "August 2017",
        graduationDate: "May 2018"
    }
]

const menuItems = [
    {
        tab: "Overview",
        content: <div><p>改善 - Kaizen - Japanese philosophy for continuous improvement.</p><p>Hello, I’m Asif Shikder, a second year college student majoring in computer science, working to become an outstanding software engineer one day. I have a competitive 4.0 GPA along with various side projects associated with IBM, NYC Department of Health and NYC Public Health Laboratory. I enjoy Web Development, however, I am also knowledgeable in Android Development, Java, Python, Data Science, and Machine Learning. I am always looking for opportunities to gain more experience in the field of Computer Science in a professional work environment. I am also open to work on any externals or competitions revolving around programming.</p><p>Aside from my interest in programming, I also enjoy teaching, lifting, basketball and billiards. I have been tutoring people since the start of high school and I hope to continue helping those around me alongside my career.</p><p>Feel free to message me about any opportunities or just drop by and say hello. Always open to meet new people :)</p></div>
    },
    {
        tab: "Education",
        content: schools.map((schools, index)=>(
            <School school = {schools}/>
        ))
    },
    {
        tab: "Hobbies",
        content: ""
    },
    {
        tab: "Resume",
        content: ""
    }
]

export default menuItems