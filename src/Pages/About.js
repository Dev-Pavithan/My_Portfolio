import '../Assets/Style/About.css';
import Aboutimg from '../Assets/Images/about.jpeg';

const About = () => {
  return (
    <section id="about" className="about-section text-light py-5">
      <div className="container">
        <h2 className="text-gradient mb-4">About</h2>
        <div className="row align-items-center">
          <div className="col-md-6 d-flex align-items-center justify-content-center py-5">
            <div className="box-about">
              <div className="frame-about">
                <img
                  src={Aboutimg}
                  alt="At college with my friends"
                  className="aboutimg"
                />
              </div>
            </div>
          </div>
        
          <div className="col-md-6">
            <h2 className="my-4 text-gradient">Personal Details</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Date of Birth: </strong>2003.10.29
              </li>
              <li className="list-group-item">
                <strong>Nationality: </strong>Sri Lankan
              </li>
              <li className="list-group-item">
                <strong>City: </strong>Jaffna, Sri Lanka
              </li>
              <li className="list-group-item">
                <strong>Email: </strong>
                <a href="mailto:pavithanunenthiran29@gmail.com">
                  pavithanunenthiran29@gmail.com
                </a>
              </li>
            </ul>
            <p className="py-4" style={{ fontSize: "1.2rem"}}>
              I am <span className="text-primary">Pavithan Unenthiran</span>, a full-stack Web Developer based in <br/><span className="text-primary">Sri Lanka</span>.
            </p>
            <div className="about-text">
              <p>
                I am full-stack web developer with a strong focus on innovation and user-centric design. 
                I hava a keen interest in computer hardware and brings a growing expertise in crafting responsive, mobile-friendly websites that deliver exceptional user experiences. 
                I'm dedicated to optimizing website performance and implementing the latest technologies, ensuring every project I undertakes exceeds user expectations. 
                My combined passion for software development and computer hardware positions me as a promising talent in the tech industry.         
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
