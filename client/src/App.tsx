import { useEffect, useState} from "react";
import './App.css';
import RibbonBackground from "./RibbonBackground";
import { ProjectCard } from "./ProjectCard";
import type { Project } from "./Project";
import { ProjectModal } from "./ProjectModal";


function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const  projects: Project[] = [
    {
      id: "emotilog",
      title: "EmotiLog",
      caption: "Easy to use mood tracking app",
      imageURL: "images/emovid.gif",
      description: "Simple and easy application for tracking your mood anytime. Build using android studio in java, tracking the frequency 9 different moods and the time of day they were tracked.",
      githubURL: "https://github.com/tbkong2/emotilog",
      tools: ["Java", "Android Studio", "Gradle", "Firebase"]
    },
    {
      id: "pvd-control",
      title: "PVD Control System",
      caption: "Industrial sputtering automation platform",
      imageURL: "images/skateris.png",
      description: "Designed a modular full-stack system controlling 5 hardware subsystems.",
      githubURL: "https://github.com/tbkong2/mnist-digits-tuner",
      tools: ["Python", "Flask", "React", "Arduino"]
    },

    {
      id: "ai-chatbot",
      title: "AI Support Bot",
      caption: "LLM-powered automation assistant",
      imageURL: "images/skateris.png",
      description: "Built an AI-driven assistant integrating embeddings and automation workflows.",
      githubURL: "https://github.com/tbkong2/Hackathon-JONT",
      tools: ["Python", "LangChain", "OpenAI API"]
    },
    {
      id: "ai-chatbot2",
      title: "AI Support Bot",
      caption: "LLM-powered automation assistant",
      imageURL: "images/skateris.png",
      description: "Built an AI-driven assistant integrating embeddings and automation workflows.",
      githubURL: "https://github.com/tbkong2/Hackathon-JONT"
      ,tools: ["Python", "LangChain", "OpenAI API"]
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
        </main>
      </div>
    </div>
  
                

    
    
  );
}

export default App;