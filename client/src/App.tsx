import { useEffect, useState} from "react";
import './App.css';
import RibbonBackground from "./RibbonBackground";
function App() {
  const [message, setMessage] = useState("");
  const [flipped, setFlipped] = useState(false);
  function handleFlip() {
    setFlipped(!flipped);
  }
  useEffect(()=> {
    fetch("http://localhost:5000/api/hello")
    .then((response) => {
      return response.json();
    })
    .then((data)=> {
      setMessage(data.message);
    });
  }, [])
  return (
    <div>
      <RibbonBackground/>
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
      </main>




    </div>
  
                

    
    
  );
}

export default App;