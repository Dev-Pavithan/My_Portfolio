import { Link } from "react-router-dom";
import '../Assets/Style/Style.css';
import Profile from '../Assets/Images/Profile.jpeg';
import Project1 from '../Assets/Images/project1.jpeg';
import Project2 from '../Assets/Images/project2.jpeg';
import Project3 from '../Assets/Images/project3.jpeg';


const Home = () => {
  const projects = [
    {
      image: Project1,
      title: "Tech-E AI Chatbot",
      description: "An AI chat app that gives quick, smart replies through text.",
    },
    {
      image: Project2,
      title: "Tech-E AI Voice Chatbot",
      description: "An AI chat app allows users to engage through text or voice input.",
    },
    {
      image: Project3,
      title: "Tech-E AI Avatar Model Chatbot",
      description:"An chat app features a 3D avatar with emotional interactions. The avatar responds with both voice and lip-syncing actions.",
    },
  ];

  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Python",
    "Bootstrap5",
    "CSS3",
    "React",
    "TailwindCSS",
    "Node JS",
    "Mongo DB",
    "Express",
    "Data Science",
    "Git",
    "Blender",
    "Zoom",
    "Canva",
    "Google Products",
  ];

  const personalskills = [
    "Leadership",
    "Team Work",
    "Flexibility",
    "Communication",
    "Public Speech",
    "Adaptability",
    "Presentation",
  ]

  return (
    <>
      {/* Home */}
      <section id="home" className="d-flex vh-50 text-light py-5 my-5 home">
        <div className="container">
          <div className="row align-items-center h-100">

            <div className="col-md-6 text-start">
              <h1 className="display-4 mb-3">
                Hello!
              </h1>
              <h2 className="fw-bold py-3">
                I am <span className="text-gradient">Pavithan Unenthiran</span>
              </h2>
              <p className="lead mt-3 mb-4">
              Enthusiastic and resourceful<br/> <span className="text-gradient">Full-stack Web Developer</span> <br/> passionate about crafting seamless user experiences.              </p>
              <Link to="/about" className="btn-global d-inline-flex align-items-center p-3">
                <i className="bi bi-person-circle me-2"></i> More about me
              </Link>
            </div>


            <div className="col-md-6 d-flex justify-content-center">
              <div class="box">
                <div class="frame">
                  <img
                    src={Profile}
                    alt="Profile"
                    className="myphoto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="text-light py-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="text-start text-gradient">Featured Projects</h2>
            <div>
            <button
              className="btn btn-outline-light me-4 py-2"
              onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1Gj1ws6crbcp3Hf0EtgUVb-dJ1zblRdmb/view?usp=sharing',
                '_blank',
                'noopener,noreferrer'
               )
               }
              >  
              Resume
            </button>
              <a className="btn-global d-inline-flex align-items-center p-2"
              style={{ cursor: 'pointer' }}
              onClick={() =>
                window.open(
                  'https://github.com/Dev-Pavithan',
                  '_blank',
                  'noopener,noreferrer'
                 )
              }
              >View all</a>
            </div>
          </div>

          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card text-light shadow h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-3">
                   <img
                    src={project.image} 
                    alt={project.title}
                    className="me-4"
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%', 
                      objectFit: 'cover', 
                    }}
                   />
                   <h5 className="card-title m-0">{project.title}</h5>
                  </div>
                  <p className="card-text">{project.description}</p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="text-light py-5">
       <div className="container">
        <h2 className="text-start text-gradient mb-4">Technical Skills</h2>

        <div className="d-flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span key={index} className="badge skill-badge">
              {skill}<i class="bi bi-plus ms-2"></i>
            </span>
          ))}
        </div>

        <h2 className="text-end text-gradient pt-5 mb-4">Personal Skills</h2>

         <div className="d-flex flex-wrap gap-3 justify-content-end">
          {personalskills.map((skill, index) => (
            <span key={index} className="badge skill-badge">
              {skill}<i class="bi bi-plus ms-2"></i>
            </span>
          ))}
        </div>
       </div>
      </section>

    </>
  );
};

export default Home;
