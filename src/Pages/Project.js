import '../Assets/Style/Blog.css';
import TechEW from '../Assets/Images/project1.jpeg';
import TechEC from '../Assets/Images/project4.jpeg';
import TechEV from '../Assets/Images/project2.jpeg';
import TechEM from '../Assets/Images/project3.jpeg';
import Weather from '../Assets/Images/weather.jpeg';
import ImageSlider from '../Assets/Images/imageslider.jpeg';
import Clock from '../Assets/Images/clock.jpeg';
import Capcha from '../Assets/Images/capcha.jpeg';
import TextToSpeech from '../Assets/Images/texttospeech.jpeg';
import Hangman from '../Assets/Images/hangman.jpeg';
import RabbitRun from '../Assets/Images/rabbit run.jpeg';
import AiImage from '../Assets/Images/aiimagegenerator.jpeg';
import Light from '../Assets/Images/light.jpeg';
import Calculator from '../Assets/Images/calculator.jpeg';
import Login from '../Assets/Images/login.jpeg';
import Impress from '../Assets/Images/impress.jpeg';
import Movie from '../Assets/Images/movie.jpeg';


const Project = () => {

    const projects = [
        {
          title: "Tech-E Website",
          description: "Tech-E web application AI chatbot with 3 packages",
          icon: TechEW, 
          source: "https://tech-e-website-frontend.vercel.app/",
        },
        {
          title: "Tech-E AI Chatbot",
          description: "An AI chat app that gives quick, smart replies through text",
          icon: TechEC,
          source: "https://tech-e-voice-frontend-1srb.vercel.app/",
        },
        {
          title: "Tech-E AI Voice Chatbot",
          description: "An AI chat app allows users to engage through text or voice input.",
          icon: TechEV, 
          source: "https://tech-e-voice-frontend.vercel.app/",
        },
        {
          title: "Tech-E AI Avatar Model Chatbot",
          description: "An chat app features a 3D avatar with emotional interactions. The avatar responds with both voice and lip-syncing actions.",
          icon: TechEM,
          source: "https://dev-pavithan-tech-e-model-frontend.vercel.app/",
        },
        {
          title: "EliteMart Mutli Products selling ecommerce website",
          description: "Mutli Products selling ecommerce website, with 3 users including customers, supplires, admin with online payment",
          icon: "https://via.placeholder.com/50",
          source: "https://github.com/Dev-Pavithan/EliteMart_FrontEnd-",
        },
        {
          title: "Weather app",
          description: "Weather app featured temperature, climate condition, visibility, humidity, wind rate",
          icon: Weather,
          source: "https://current-weather-45.vercel.app/",
        },
        {
          title: "ToDo app",
          description: "ToDo app featured tasks add, edit, and delete tasks seamlessly while keeping track of their progress",
          icon: "https://via.placeholder.com/50",
          source: "",
        },
        {
          title: "Image Slider",
          icon: ImageSlider,
          source: "https://image-gallery-carousel.vercel.app/",
        },
        {
          title: "Text-to-speech",
          icon: TextToSpeech,
          source: "https://speech-to-speech-basic-systems.vercel.app/",
        },
        {
          title: "Movie Search",
          icon: Movie,
          source: "https://movie-search-app-rho-cyan.vercel.app/",
        },
        {
          title: "Capcha Generator",
          icon: Capcha,
          source: "https://dev-pavithan.github.io/captcha/",
        },
        {
          title: "Digital Clock",
          icon: Clock,
          source: "https://d-igital-clock-umber.vercel.app/",
        },
        {
          title: "Rabbit Run Game",
          icon: RabbitRun,
          source: "https://rabbit-run.vercel.app/",
        },
        {
          title: "AI Image Generator",
          icon: AiImage,
          source: "https://image-generator-ai-gamma.vercel.app/",
        },
        {
          title: "Hangman Game",
          icon: Hangman,
          source: "https://hangman-game-eta-one.vercel.app/",
        },
        {
          title: "Light Brightness",
          icon: Light,
          source: "https://lamp-brightness.vercel.app/",
        },
        {
          title: "Calculator",
          icon: Calculator,
          source: "https://calculator-tau-snowy-34.vercel.app/",
        },
        {
          title: "Login Page",
          icon: Login,
          source: "https://uix-login.vercel.app/",
        },
        {
          title: "Impress Your Partner",
          icon: Impress,
          source: "https://impress-your-partner.vercel.app/",
        },
    ];
  
  return (
    <>
    <div className="container my-5">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-gradient" style={{fontSize: '2.5rem'}}>Projects</h1>
        <button
          className="btn btn-outline-light py-2"
          onClick={() => window.open('https://github.com/Dev-Pavithan', '_blank', 'noopener,noreferrer')}
        >
          More Projects
        </button>
      </div>

      <div className="input-group">
        <input
          type="text"
          className="form-control text-white custom-input"
          placeholder="Search projects..."
          aria-label="Search projects"
          style={{
            background: 'transparent',
            border: 'none',
            boxShadow: '0 0 10px #88A4E6',
          }}
        />
        <button 
          className="btn btn-dark border-secondary" 
          type="button"
          style={{
            background: 'transparent',
            boxShadow: '0 0 10px #88A4E6',
          }}
          >
          <i className="bi bi-search text-light"></i>
        </button>
      </div>
    </div>

    <div className="container my-5">
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-sm-12 col-md-6 col-lg-4" key={index}>
            <div className="card bg-dark text-light h-100 border-secondary">
              <div className="card-body d-flex align-items-start">
                <img
                  src={project.icon}
                  alt={project.title}
                  className="me-3"
                  style={{ width: "90px", height: "70px" }}
                />
                <div>
                  <h5 className="card-title text-info mb-2">
                  <a 
                  href={project.source || '#'}
                  target={project.source ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', textDecoration: 'none' }}
                  onClick={(e) => {
                    if (!project.source) {
                      e.preventDefault();
                    }
                  }}
                >
                  <i className="bi bi-link-45deg me-2"></i>
                </a>
                    {project.title}</h5>
                  <p className="card-text text-white small" style={{textAlign: 'justify'}}>
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

</>
  );
};

export default Project;
