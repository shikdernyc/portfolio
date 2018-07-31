const projects = [
    {
        key: "proj-0",
        title: "ShikderTECH.io",
        img: "https://s3.us-east-2.amazonaws.com/shikdernyc-portfolio/images/shikdertechio.jpg",
        technology: "React, JS, HTML, CSS, NPM, Heroku, Git",
        description: "A static website to host my portfolio. This website contains a list of my skills, projects, educational background and other CV related to my professional life. The website is currently being hosted on Heroku under the domain shikdertech.io (Will soon migrate to AWS EB) and it will be a central hub for hosting my future projects.",
        links: [
            {
                label: "Source Code",
                link: "https://github.com/shikdernyc/portfolio"
            },
            {
                label: "Preview",
                link: "http://shikdertech.io"
            }
        ],
        date: "Summer 2018"
    },
    {
        key: "proj-1",
        img: "https://s3.us-east-2.amazonaws.com/shikdernyc-portfolio/images/SGS.jpg",
        title: "Smart Genome Sequencing",
        technology: "Python, NumPy, Pandas, SciKit Learn",
        description: "Using Python Machine Learning libraries to automate Whole Genome Sequencing. This program will be able to parse a .fastq file and determine the outcome of any sequence based on CDC's previous analysis result.",
        links: [
            {
                label: "Source Code",
                link: "https://github.com/shikdernyc/Smart-Genome-Sequencing"
            }
        ],
        date: "Spring 2018 - Current"
    },
    {
        key: "proj-2",
        img: "https://s3.us-east-2.amazonaws.com/shikdernyc-portfolio/images/drone-ai.jpg",
        title: "Drone AI",
        technology: "React, JS, NPM, Express",
        description: "Measure the performance of various AI Path Finding Algorithms. Given a start and end node with various intermediate nodes, a simulated drone is able to determine the shortest path by utlilzing algorithms such as Bredth First Search, Depth First Search, Dijkstra and AStar.",
        links: [
            {
                label: "Source Code",
                link: "https://github.com/shikdernyc/Drone-AI"
            }
        ],
        date: "Spring 2018"
    },
    {
        key: "proj-3",
        img: "https://s3.us-east-2.amazonaws.com/shikdernyc-portfolio/images/house-quest.jpg",
        title: "House Quest",
        technology: "Node, Express, Mongoose, Body-Parser, HTML, and CSS",
        description: "Create an app that allows users to discover houses to buy from exploring a desire neighborhood.",
        links: [
            {
                label: "Source Code",
                link: "https://github.com/shikdernyc/HackGotham2018"
            }
        ],
        date: "Spring 2018"
    },
    {
        key: "proj-3",
        img: "https://s3.us-east-2.amazonaws.com/shikdernyc-portfolio/images/Poker.jpg",
        title: "Poker / Messenger",
        technology: "Java, WebSocket",
        description: "Created a lobby system for users to connect and chat for a Poker Game. Implemented most of poker logic as well.",
        links: [
            {
                label: "Source Code",
                link: "https://github.com/shikdernyc/PokerServerV1"
            }
        ],
        date: "Spring 2017"
    },
    {
        key: "proj-3",
        img: "https://s3.us-east-2.amazonaws.com/shikdernyc-portfolio/images/Eleven.jpg",
        title: "Project Title",
        technology: "React, JS, NPM, Express",
        description: "Implemented the popular card game Eleven. User is able to interact with a GUI and play a randomized Eleven game.",
        links: [
            {
                label: "Elevent",
                link: "https://github.com/shikdernyc/Eleven"
            }
        ],
        date: "Spring 2017"
    }
]

export default projects