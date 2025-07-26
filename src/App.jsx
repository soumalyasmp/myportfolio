import React from 'react';
import { Github, Linkedin, Mail, Code2, Palette, Brain, ExternalLink } from 'lucide-react';
import './App.css'
function App() {
  return (
    <div>
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="profile-container">
            <div className="profile-image">
              <img 
                src="https://res.cloudinary.com/dasgiv1pa/image/upload/v1742673460/1668245814354_NEW_bx63ki.jpg" 
                alt="Soumalya Sinhamahapatra"
              />
            </div>
          </div>
          <h1 className="hero-title">SOUMALYA SINHAMAHAPATRA</h1>
          <p className="hero-subtitle">
            MERN Stack Developer | Graphic Designer | Problem Solver
          </p>
          <div className="social-links">
            <a href="https://github.com/soumalyasmp" className="social-link">
              <Github size={28} />
            </a>
            <a href="www.linkedin.com/in/soumalya-sinhamahapatra-822b73254" className="social-link">
              <Linkedin size={28} />
            </a>
            <a href="soumalyasmp184@gmail.com" className="social-link">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="contact-text">
            I'm a passionate MERN Stack Developer with a creative edge in graphic design and a strong foundation in problem-solving. 
            With expertise in building full-stack applications and creating stunning visual experiences, I bring a unique blend of 
            technical prowess and artistic vision to every project.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <Code2 className="skill-icon blue" />
            <h3 className="skill-title">MERN Stack Development</h3>
            <ul className="skill-list">
              <li>• MongoDB & Express.js</li>
              <li>• React.js & Node.js</li>
              <li>• Full-Stack Development</li>
            </ul>
          </div>
          <div className="skill-card">
            <Palette className="skill-icon purple" />
            <h3 className="skill-title">Graphic Design</h3>
            <ul className="skill-list">
              <li>• UI/UX Design</li>
              <li>• Brand Identity</li>
              <li>• Visual Design</li>
              <li>• Digital Artwork</li>
              <li>• Creative Solutions</li>
            </ul>
          </div>
          <div className="skill-card">
            <Brain className="skill-icon green" />
            <h3 className="skill-title">Problem Solving</h3>
            <ul className="skill-list">
              <li>• Java Programming</li>
              <li>• Data Structures</li>
              <li>• Algorithms</li>
              <li>• System Design</li>
              <li>• Code Optimization</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div 
              className="project-image" 
              style={{backgroundImage: "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80')"}}
            ></div>
            <div className="project-content">
              <h3 className="project-title">Alumni Tracking Platform</h3>
              <p className="project-description">
              </p>
            </div>
          </div>
          <div className="project-card">
            <div 
              className="project-image" 
              style={{backgroundImage: "url('./src/assets/Screenshot 2025-07-26 235418.png')"}}
            ></div>
            <div className="project-content">
              <h3 className="project-title">Online Polling System</h3>
              <p className="project-description">
              </p>
              <a href="https://quickpoll-delta.vercel.app/" className="project-link">
                View Project <ExternalLink size={16} style={{marginLeft: '0.5rem'}} />
              </a>
            </div>
          </div>
          <div className="project-card">
            <div 
              className="project-image" 
              style={{backgroundImage: "url('./src/assets/Screenshot 2025-07-26 234713.png')"}}
            ></div>
            <div className="project-content">
              <h3 className="project-title">File Transfer System</h3>
              <p className="project-description">
              </p>
              <a href="https://transferanything.vercel.app/" className="project-link">
                View Project <ExternalLink size={16} style={{marginLeft: '0.5rem'}} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="contact-content">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-text">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a href="mailto:contact@example.com" className="contact-button">
            <Mail size={20} />
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Soumalya Sinhamahapatra. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default App;
