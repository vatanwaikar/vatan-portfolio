import React, { useState, useEffect } from "react";
import "./portfolio.css";

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const reveal = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) el.classList.add("visible");
      });
    };
    reveal();
    window.addEventListener("scroll", reveal);
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className={dark ? "main dark" : "main"} id="top">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Vatan Waikar</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#timeline">Timeline</a>
          <a href="#contact">Contact</a>

          <button className="toggle" onClick={() => setDark(!dark)}>
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content reveal">
          <img
            className="profile-img"
            src="https://i.ibb.co/4p7SppS/profile.webp"
            alt="Profile"
          />

          <h1 className="title">Java Backend Developer + React Full Stack Engineer</h1>
          <p className="subtitle reveal">
            Building scalable backend systems, microservices & modern React UIs
          </p>

          <div className="hero-buttons reveal">
            <a className="btn-primary" href="/resume.pdf" download>
              Download Resume
            </a>
            <a className="btn-outline" href="#contact">Contact Me</a>
          </div>

          <div className="tech-badges reveal">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>MySQL</span>
            <span>Redis</span>
            <span>Docker</span>
            <span>Kubernetes</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section reveal">
        <h2>About Me</h2>
        <p>
          Passionate backend developer focused on building reliable, scalable
          enterprise systems. Skilled in Spring Boot, REST APIs, JWT, MySQL,
          Redis, Docker, Kubernetes & modern DevOps workflows. Also experienced
          in React for full-stack application development.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section reveal">
        <h2>Skills</h2>

        <div className="skills-grid">
          <div className="skill-box">
            <h3>Backend</h3>
            <ul>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>Hibernate / JPA</li>
              <li>Microservices</li>
              <li>REST API Design</li>
              <li>MySQL</li>
              <li>Redis</li>
            </ul>
          </div>

          <div className="skill-box">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>React Hooks</li>
              <li>Axios</li>
              <li>Component Architecture</li>
              <li>Responsive UI</li>
            </ul>
          </div>

          <div className="skill-box">
            <h3>DevOps</h3>
            <ul>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>CI/CD Pipelines</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section reveal">
        <h2>Projects</h2>

        {/* PROJECT 1 */}
        <div className="project-card reveal">
          <div className="project-img">
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800"
              alt="Project"
            />
          </div>

          <div className="project-content">
            <h3>Vartman Nirnay – Online Test Series Platform</h3>
            <p>
              A full-scale test platform enabling paid tests, rank tracking,
              analytics & Razorpay payments. Built scalable backend using Spring
              Boot + Redis + HikariCP + Kubernetes.
            </p>

            <div className="tabs">
              <span>Architecture</span>
              <span>React UI</span>
              <span>Tech Stack</span>
            </div>

            <ul className="bullet-list">
              <li>JWT Auth + Layered backend architecture</li>
              <li>Redis caching improved performance 70%</li>
              <li>Docker + Kubernetes deployment</li>
            </ul>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project-card reveal">
          <div className="project-img">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800"
              alt="Project"
            />
          </div>

          <div className="project-content">
            <h3>Sales Management System</h3>
            <p>
              Full-stack CRM for tracking leads, clients & revenue. React UI +
              Spring Boot backend with JWT security and MySQL.
            </p>

            <div className="tabs">
              <span>Architecture</span>
              <span>React UI</span>
              <span>Tech Stack</span>
            </div>

            <ul className="bullet-list">
              <li>Lead management & CRM workflows</li>
              <li>React dashboard + charts</li>
              <li>Spring Boot REST APIs + MySQL</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="section reveal">
        <h2>Developer Journey</h2>

        <div className="timeline">
          <div className="t-item">
            <div className="dot" />
            <div className="t-content">
              <h3>2022 – Java Foundations</h3>
              <p>Learned OOP, DSA & fundamental Java development.</p>
            </div>
          </div>

          <div className="t-item">
            <div className="dot" />
            <div className="t-content">
              <h3>2023 – Spring Boot Mastery</h3>
              <p>Developed production-level REST APIs & JWT systems.</p>
            </div>
          </div>

          <div className="t-item">
            <div className="dot" />
            <div className="t-content">
              <h3>2024 – Microservices + DevOps</h3>
              <p>Worked with Docker, Kubernetes & scalable backend.</p>
            </div>
          </div>

          <div className="t-item">
            <div className="dot" />
            <div className="t-content">
              <h3>2025 – Full Stack Development</h3>
              <p>Combined React UI with strong Spring Boot backend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section reveal">
        <h2>Contact</h2>
        <p>📧 vatanwaikar@gmail.com</p>
        <p>📞 +91 7350200022</p>
        <p>LinkedIn: linkedin.com/in/vatanwaikar</p>
        <p>GitHub: github.com/vatanwaikar</p>
      </section>

      {/* FLOATING BUTTONS */}
      <div className="fab-box">
        <a href="#top" className="fab">↑</a>
        <a href="#contact" className="fab green">✉</a>
      </div>

      <footer className="footer">
        © {new Date().getFullYear()} Vatan Namdev Waikar
      </footer>
    </div>
  );
}
