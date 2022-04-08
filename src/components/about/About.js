import "./About.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={require("../../assets/about.jpg")} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="white"
              glarePosition="all"
              glareBorderRadius="1rem"
            >
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </article>
            </Tilt>
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="white"
              glarePosition="all"
              glareBorderRadius="1rem"
            >
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>300+ Clients</small>
              </article>
            </Tilt>
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.1}
              glareColor="white"
              glarePosition="all"
              glareBorderRadius="1rem"
            >
              <article className="about__card">
                <VscFolderLibrary className="about__icon" />
                <h5>Projects</h5>
                <small>80+ projects</small>
              </article>
            </Tilt>
          </div>
          <p>
            I am a Full Stack Web Developer with a passion for creating web and
            mobile applications, I have a strong background in web development
            and have worked with a wide range of technologies.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
