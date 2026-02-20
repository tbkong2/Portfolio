import { useEffect, useState} from "react";
import './App.css';
import RibbonBackground from "./RibbonBackground";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "./Project";
import { ProjectModal } from "./ProjectModal";
import { ExperienceCard } from "./ExperienceCard";
import type { Experience } from "./Experience";
import { ExperienceModal } from "./ExperienceModal";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { MoreAboutMeModal } from "./MoreAboutMeModal";
function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isMoreAboutMeOpen, setIsMoreAboutMeOpen] = useState(false);
  const  projects: Project[] = [
      {
      id: "KesslerController",
      title: "Kessler AI controller",
      caption: "Trained AI model to survival ",
      imageURL: "images/bestkessvid.gif",
      videoURL: "videos/bestkessvid.mp4",
      description: "Trained an AI controller using the EasyGA genetic algorithm library to survive as long as possible in the Kessler Asteroid Game, a game where the player controls a satellite and must avoid colliding with asteroids. The AI was trained on a custom fitness function that rewarded survival time and penalized collisions, resulting in a model that can survive for extended periods of time in the game.",
      githubURL: "https://github.com/tbkong2/KesslerAsteroidGameController",
      tools: ["Python", "EasyGA", "Sci-kit fuzzy"]
    },
    {
      id: "emotilog",
      title: "EmotiLog",
      caption: "Easy to use mood tracking app",
      imageURL: "images/emovid.gif",
      videoURL: "videos/emovid.mp4",
      description: "Simple and easy application for tracking your mood anytime. Build using android studio in java, tracking the frequency 9 different moods and the time of day they were tracked. The app also includes a calendar view to visualize mood trends over time.",
      githubURL: "https://github.com/tbkong2/emotilog",
      tools: ["Java", "Android Studio", "Gradle", "Firebase"]
    },

    {
      id: "dragonshell",
      title: "DragonShell",
      caption: "Linux Shell Implementation",
      imageURL: "images/Dragonshell.gif",
      videoURL: "videos/Dragonshell.mp4",
      description: "A Fully functional Unix-style command-line shell in C that directly uses low level Linux system calls to masage processes and interprocess communication. The program supports built-in commands, execution of external programs, input/output redirection, piping, background execution, and job control. Basically a miniature version of bash that includes custom process tracking and signal handling.",
      githubURL: "https://github.com/tbkong2/DragonShell",
      tools: ["C", "Make", "Linux", "WSL"]
    }
  ];
  const experiences: Experience[] = [
    {
      id: "internship1",
      title: "Software Developer Co-op",
      caption: "Nanoscale Optics Lab",
      employmenttime: "January 2025 - August 2025",
      LogoURL: "images/nansclethick.png",
      pictureURL: "images/queensgroup.png",
      description: "Collaborated with an agile development team to design and deploy a GUI application in C# that automated five critical control subsystems of a physical vapor deposition machine, using Git for version control and code management. Built real-time data ingestion and live data visualization tool for sensor metrics of the PVD machine (pressure, current,RPM), enabling historical analysis and documentation. Created a C# Full-stack application to automate data capture and tracking from an industrial electronic balance, improving data logging performance by 55%.",
      tools: ["C#", ".NET", "Automation", "Git"]
    },
    {
      id: "internship2",
      title: "NSERC Researcher",
      caption: "University of Alberta",
      employmenttime: "May 2024 - August 2024",
      LogoURL: "images/uofalogogo.png",
      pictureURL: "images/publications.png",
      description: "Co-authored two peer-reviewed journal publications on thin-film optical characterization, applying quantitative data analysis, experimental validation, and technical documentation report within a research team. Collaborated on the development and refinement of the Standard Operating Procedure (SOP) for the industrial sputtering machine to enhance operational efficiency and safety protocols. Researched and applied advanced semiconductor fabrication techniques from academic journal publications to optimize thin film deposition processes.",
      tools: ["Data Analysis", "Academic Research", "Collaboration", "Technical Writing"]
    }
  ];

  useEffect(()=> {
    fetch("http://localhost:5000/api/hello")
    .then((response) => {
      return response.json();
    })
  
  }, [])
  return (
    <div>
      <RibbonBackground/>
      <div className="app-content">
        
        <header className="app-header">
          <div className="brand">My Portfolio</div>
          <nav className="navigation">
            <a href="#bio">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#workexperience">Experience</a>
            <a href="#contact">Contact</a>

          </nav>
        </header>
        <main>
          <section id="bio">
            <p className="intro">Hi, I'm Tony</p>
            <h1 className="name">Full-Stack Software <span>Developer</span><br /> & AI Enthusiast </h1>
            <p className="subtitle">I'm a 4th year Computer Engineering Student at the University of Alberta</p>
            <p className="subtitle2">I have a passion for developing software professionally and creating AI/ML projects on the side</p>
          </section>
          <button className="MoreAboutMe" onClick={() => setIsMoreAboutMeOpen(true)}>
            More About Me
          </button>
          {isMoreAboutMeOpen && (
            <MoreAboutMeModal onClose={() => setIsMoreAboutMeOpen(false)} />)}
            
          <section id="projects">
            <div className="section-header">
                <h2>Featured Projects</h2>
            </div>
            <div id="card-grid" className="card-grid">
              
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onClick = {setSelectedProject} />
              ))}
            </div>
            {selectedProject && (
              <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )}
          </section>
          <section id="workexperience">
              <div className="section-header">
                <h2>Work Experience</h2>
              </div>
              <div id="experience-grid" className="experience-grid">
                {experiences.map((experience) => (
                  <ExperienceCard key={experience.id} experience={experience} onClick={setSelectedExperience} />
                ))}
              </div>
              {selectedExperience && (
                <ExperienceModal
                  experience={selectedExperience}
                  onClose={() =>setSelectedExperience(null)}/>
              )}
          </section>
          <section id="contact">
            <div className="contact-section-header">
              <h2>Contact Me</h2>
            </div>
            <div className="contact-icons">
              <a href="https://www.linkedin.com/in/tonybkong/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={64} />
              </a>
              <a href="https://github.com/tbkong2" target="_blank" rel="noopener noreferrer">
                <FaGithub size={64} />
              </a>
              <a href="mailto:tony2002kong@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope size={64} />
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  
                

    
    
  );
}

export default App;