import ProfileImg from '../files/pp.png'
import './profile.css'
import Navbar from '../Navbar';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";



export function Socials() {
  return (
    <div className="socialMedia">
      <a target="_blank" href="https://github.com/abizec-p">
        <FaGithub />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/abishek-pariyar-004b9b1a0/"
      >
        <FaLinkedin />
      </a>
      <a target='_blank' href="mailto:swaggyabii56@gmail.com">
        <CiMail />
      </a>
      <a target='_blank' href="https://www.instagram.com/pariyar_abizake/">
        <FaInstagramSquare />
      </a>
    </div>
  );
}

export default function Profile() {
    return (
      <section id='profileID' className="profile">
        <div>
          <div className="profileMain">
            <div className="profileImage">
              <img src={ProfileImg} alt="profile img" />
            </div>
            <div className="profileText">
              <h1>
                Hi,
                <br /> I am Abishek pariyar
              </h1>
              <p>
                <b>Web Developer | Graphic Designer | Tech Enthusiast</b>
              </p>
              <br />

              <p>
                I am a results-driven web developer with experience in building
                dynamic websites using HTML, CSS, ReactJs, and WordPress.
                Skilled in designing user-friendly applications, fixing bugs,
                and contributing to large projects. Proficient in graphic design
                tools like Figma, Adobe Photoshop, and Illustrator.
              </p>
              <br />
              <a
                href="/files/resume.pdf"
                download='resume.pdf'
                className="resume"
              >
                Resume <span></span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}


