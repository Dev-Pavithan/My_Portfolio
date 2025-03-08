import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import TechEW from '../assets/images/project1.jpeg';
import TechEC from '../assets/images/project4.jpeg';
import TechEV from '../assets/images/project2.jpeg';
import TechEM from '../assets/images/project3.png';
import Weather from '../assets/images/weather.jpeg';
import imageslider from '../assets/images/imageslider.jpeg';
import Clock from '../assets/images/clock.jpeg';
import Capcha from '../assets/images/capcha.jpeg';
import TextToSpeech from '../assets/images/texttospeech.jpeg';
import Hangman from '../assets/images/hangman.jpeg';
import RabbitRun from '../assets/images/rabbit run.jpeg';
import AiImage from '../assets/images/aiimagegenerator.jpeg';
import Light from '../assets/images/light.jpeg';
import Calculator from '../assets/images/calculator.jpeg';
import Login from '../assets/images/login.jpeg';
import Impress from '../assets/images/impress.jpeg';
import Movie from '../assets/images/movie.jpeg';
import EliteMart from '../assets/images/elitemart.png';
type Project = {
  title: string;
  description?: string;
  image: string;
  source: string;
  techStack?: string[]; // Optional techStack property
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Tech-E Website",
      description: "Tech-E web application AI chatbot with 3 packages",
      image: TechEW,
      source: "https://tech-e-website-frontend.vercel.app/",
    },
    {
      title: "Tech-E AI Chatbot",
      description: "An AI chat app that gives quick, smart replies through text",
      image: TechEC,
      source: "https://tech-e-voice-frontend-1srb.vercel.app/",
    },
    {
      title: "Tech-E AI Voice Chatbot",
      description: "An AI chat app allows users to engage through text or voice input.",
      image: TechEV,
      source: "https://tech-e-voice-frontend.vercel.app/",
    },
    {
      title: "Tech-E AI Avatar Model Chatbot",
      description: "An chat app features a 3D avatar with emotional interactions. The avatar responds with both voice and lip-syncing actions.",
      image: TechEM,
      source: "https://dev-pavithan-tech-e-model-frontend.vercel.app/",
    },
    {
      title: "EliteMart Mutli Products selling ecommerce website",
      description: "Multi Products selling ecommerce website, with 3 users including customers, suppliers, admin with online payment",
      image: EliteMart,
      source: "https://github.com/Dev-Pavithan/EliteMart_FrontEnd-",
      techStack: ["React", "Node.js", "MongoDB"], // Example tech stack
    },
    {
      title: "Weather app",
      description: "Weather app featured temperature, climate condition, visibility, humidity, wind rate",
      image: Weather,
      source: "https://current-weather-45.vercel.app/",
    },
    {
      title: "Image Slider",
      image: imageslider,
      source: "https://image-gallery-carousel.vercel.app/",
    },
    {
      title: "Text-to-speech",
      image: TextToSpeech,
      source: "https://speech-to-speech-basic-systems.vercel.app/",
    },
    {
      title: "Movie Search",
      image: Movie,
      source: "https://movie-search-app-rho-cyan.vercel.app/",
    },
    {
      title: "Capcha Generator",
      image: Capcha,
      source: "https://dev-pavithan.github.io/captcha/",
    },
    {
      title: "Digital Clock",
      image: Clock,
      source: "https://d-igital-clock-umber.vercel.app/",
    },
    {
      title: "Rabbit Run Game",
      image: RabbitRun,
      source: "https://rabbit-run.vercel.app/",
    },
    {
      title: "AI Image Generator",
      image: AiImage,
      source: "https://image-generator-ai-gamma.vercel.app/",
    },
    {
      title: "Hangman Game",
      image: Hangman,
      source: "https://hangman-game-eta-one.vercel.app/",
    },
    {
      title: "Light Brightness",
      image: Light,
      source: "https://lamp-brightness.vercel.app/",
    },
    {
      title: "Calculator",
      image: Calculator,
      source: "https://calculator-tau-snowy-34.vercel.app/",
    },
    {
      title: "Login Page",
      image: Login,
      source: "https://uix-login.vercel.app/",
    },
    {
      title: "Impress Your Partner",
      image: Impress,
      source: "https://impress-your-partner.vercel.app/",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#1A1A1A] pt-24 pb-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12">
          <h1 className="mb-6 text-4xl font-bold">Projects</h1>
          <div className="h-1 w-12 bg-yellow-400"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-[#2A2A2A]"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-gray-300">{project.description}</p>

                {/* Render tech stack only if it exists */}
                {project.techStack && project.techStack.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full bg-[#333333] px-3 py-1 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-sm text-yellow-400 hover:text-yellow-300"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source Code</span>
                  </a>
                  <a
                    href={project.source}
                    className="flex items-center space-x-2 text-sm text-yellow-400 hover:text-yellow-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
