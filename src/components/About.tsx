import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Code2, Layout, Github, Linkedin } from 'lucide-react';
import { FaMediumM } from 'react-icons/fa';
import MyProfileImage from '../assets/images/about.jpeg';
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    };

    handleResize(); // Apply the rule immediately
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const services = [
    {
      title: 'Web Design',
      icon: Layout,
      description: 'Modern, high-quality designs focused on user experience and functionality. Utilizing the latest trends, each project is tailored for accessibility, scalability, and brand impact.'
    },
    {
      title: 'Web Development',
      icon: Code2,
      description: 'Specializing in both front-end and back-end development, creating seamless, scalable websites with optimal performance. Focused on responsive design, smooth user experiences, and robust functionality for long-term growth.'
    }
  ];

  const contactInfo = [
    {
      label: 'EMAIL',
      value: 'pavithanunenthiran29@gmail.com',
      icon: Mail
    },
    {
      label: 'PHONE',
      value: '075 042 9863',
      icon: Phone
    },
    {
      label: 'LOCATION',
      value: 'Jaffna, Sri Lanka',
      icon: MapPin
    }
  ];

  const socialLinks = [
    { icon: Github, link: 'https://github.com/Dev-Pavithan' },
    { icon: Linkedin, link: 'https://www.linkedin.com/in/pavithan-unenthiran/' },
    { icon: FaMediumM, link: 'https://medium.com/@pavithanunenthiran29' }
  ];

  return (
    <section id="about" className=" bg-[#1A1A1A] mt-10 py-10 overflow-hidden">
      <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-4"
        >
          <div className="rounded-3xl bg-[#2A2A2A] p-8">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-3xl bg-[#333333]">
                <img
                  src={MyProfileImage}
                  alt="Pavithan Unenthiran"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* <h2 className="mb-2 text-2xl font-bold">Pavithan Unenthiran</h2> */}
              <h2 className="mb-2 text-2xl font-bold text-white">
                {['P', 'a', 'v', 'i', 't', 'h', 'a', 'n', ' ',].map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block transition-all duration-300 hover:text-yellow-400 hover:animate-glow"
                  >
                    {letter}
                  </span>
                ))}{[' ']}
                {['U', 'n', 'e', 'n', 't', 'h', 'i', 'r', 'a', 'n'].map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block transition-all duration-300 hover:text-yellow-400 hover:animate-glow"
                  >
                    {letter}
                  </span>
                ))}
              </h2>
              <div className="inline-block rounded-full bg-[#333333] px-4 py-1 text-sm">
                Full Stack Developer
              </div>

              <div className="flex justify-center mt-4 space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border-2 border-yellow-400 transition-all hover:shadow-xl hover:shadow-yellow-400"
                  >
                    <social.icon className="w-5 h-5 text-white hover:text-yellow-400" />
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-xs text-gray-500">{info.label}</p>
                  <div className="flex items-center space-x-3">
                    <info.icon className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm text-gray-300">{info.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-8"
        >
          <div className="mb-12">
            <h1 className="mb-6 text-4xl font-bold">About Me</h1>
            <div className="w-12 h-1 bg-yellow-400"></div>
            <p className="mt-6 text-gray-300">
              I am Pavithan Unenthiran, a full-stack Web Developer based in Sri Lanka.
              I have a keen interest in computer hardware and bring a growing expertise in crafting
              responsive, mobile-friendly websites that deliver exceptional user experiences.
              My combined passion for software development and computer hardware positions me as a promising talent in the tech industry.
            </p>
          </div>

          <div>
            <h2 className="mb-8 text-2xl font-bold">What I'm Doing</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-[#2A2A2A] p-6"
                >
                  <service.icon className="w-8 h-8 mb-4 text-yellow-400" />
                  <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}