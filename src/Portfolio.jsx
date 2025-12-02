import React, { useState, useEffect } from "react";
import "./portfolio.css";

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);

  // Scroll reveal animation
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

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">Vatan Waikar</div>

        <div className={`nav-links ${menu ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenu(false)}>About</a>
          <a href="#skills" onClick={() => setMenu(false)}>Skills</a>
          <a href="#system" onClick={() => setMenu(false)}>System Design</a>
          <a href="#projects" onClick={() => setMenu(false)}>Projects</a>
          <a href="#whyme" onClick={() => setMenu(false)}>Why Hire Me?</a>
          <a href="#contact" onClick={() => setMenu(false)}>Contact</a>

          <button className="toggle" onClick={() => setDark(!dark)}>
            {dark ? "Light" : "Dark"}
          </button>
        </div>

        <div className="hamburger" onClick={() => setMenu(!menu)}>
          <span />
          <span />
          <span />
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-content reveal">
          {/* <img
            className="profile-img"
            src="https://i.ibb.co/4p7SppS/profile.webp"
            alt="Profile"
          /> */}

          <h1 className="title">
            Backend Engineer (Java • Spring Boot)
            <br />
            <span className="highlight">Distributed Systems • React Full-Stack</span>
          </h1>

          <p className="subtitle">
            I build scalable, secure, high-performance backend systems & clean modern UIs.
          </p>

          <div className="hero-buttons">
            <a className="btn-primary" href="/vatan-portfolio/c:\Users\hp\Downloads\Vresume.pdf.pdf" download>
              Download Resume
            </a>
            <a className="btn-outline" href="#contact">Get In Touch</a>
          </div>

          <div className="tech-badges">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>Microservices</span>
            <span>React</span>
            <span>Redis</span>
            <span>MySQL</span>
            <span>Docker</span>
            <span>Kubernetes</span>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section reveal">
        <h2>About Me</h2>
        <p>
          I'm a Backend Engineer with strong experience in building scalable, production-grade systems using 
          <b> Java + Spring Boot, distributed architecture, Redis caching, Docker, Kubernetes </b>
          and clean REST API design.
          <br /><br />
          I also build modern, fast, reusable frontend architectures using React + Vite.
        </p>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section reveal">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          <div className="skill-box">
            <h3>Backend Engineering</h3>
            <ul>
              <li>Java 17+</li>
              <li>Spring Boot</li>
              <li>REST APIs</li>
              <li>Microservices</li>
              <li>Hibernate / JPA</li>
              <li>Redis</li>
              <li>MySQL Optimization</li>
            </ul>
          </div>

          <div className="skill-box">
            <h3>Frontend</h3>
            <ul>
              <li>React + Hooks</li>
              <li>Component Architecture</li>
              <li>Axios</li>
              <li>Responsive UI</li>
              <li>Vite</li>
            </ul>
          </div>

          <div className="skill-box">
            <h3>DevOps & Cloud</h3>
            <ul>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>GitHub Actions</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>

        {/* Skill Bars */}
        <div className="skill-bar">
          <p>Java</p><div className="bar"><span style={{width:"95%"}}></span></div>

          <p>Spring Boot</p><div className="bar"><span style={{width:"92%"}}></span></div>

          <p>Microservices</p><div className="bar"><span style={{width:"88%"}}></span></div>

          <p>React</p><div className="bar"><span style={{width:"82%"}}></span></div>
        </div>
      </section>

      {/* ================= SYSTEM DESIGN ================= */}
      <section id="system" className="section reveal">
        <h2>System Design Experience</h2>

        <div className="sys-grid">
          <div className="sys-box">
            <h3>Scalable REST APIs</h3>
            <p>Layered architecture • Stateless services</p>
          </div>

          <div className="sys-box">
            <h3>Redis Caching</h3>
            <p>Latency reduced by 40% using caching strategies</p>
          </div>

          <div className="sys-box">
            <h3>Database Optimization</h3>
            <p>Indexes • Joins • Query optimization (50% faster)</p>
          </div>

          <div className="sys-box">
            <h3>CI/CD + Containers</h3>
            <p>Docker • Kubernetes • GitHub Actions</p>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section reveal">
        <h2>Projects</h2>

        <div className="project-card reveal">
          <div className="project-img">
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800" />
          </div>

          <div className="project-content">
            <h3>Vartman Nirnay – Online Test Platform</h3>
            <p>
              Full-scale test series system with analytics, ranking, payments,
              and JWT-secured backend.
            </p>

            <ul className="bullet-list">
              <li>Improved response time by 70% with Redis caching</li>
              <li>Microservice-style architecture</li>
              <li>Docker + Kubernetes deployment</li>
            </ul>
          </div>
        </div>

        <div className="project-card reveal">
          <div className="project-img">
            <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800" />
          </div>

          <div className="project-content">
            <h3>Sales Management System</h3>
            <p>
              CRM system with React dashboard, lead tracking, JWT-secured backend.
            </p>

            <ul className="bullet-list">
              <li>Interactive React UI with charts</li>
              <li>Spring Boot REST APIs</li>
              <li>MySQL performance tuning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= WHY HIRE ME ================= */}
      <section id="whyme" className="section reveal">
        <h2>Why Hire Me?</h2>

        <div className="why-box">
          <ul>
            <li>✔ Strong backend foundations in Java & Spring Boot</li>
            <li>✔ Proven experience building scalable systems</li>
            <li>✔ Clean architecture & best coding practices</li>
            <li>✔ Real DevOps experience: Docker, K8s, CI/CD</li>
            <li>✔ Fast learner + strong debugging + problem solving</li>
          </ul>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="contact-section reveal">
        <h2 className="contact-title">Get In Touch</h2>

        <div className="contact-box">
          <div className="contact-item">
            <span className="c-icon">📧</span>
            <a href="mailto:vatanwaikar@gmail.com">vatanwaikar@gmail.com</a>
          </div>

          <div className="contact-item">
            <span className="c-icon">📞</span>
            <a href="tel:+917350200022">+91 7350200022</a>
          </div>

          <div className="contact-item">
            <span className="c-icon">🔗</span>
            <a href="https://linkedin.com/in/vatanwaikar" target="_blank">
              linkedin.com/in/vatanwaikar
            </a>
          </div>

          <div className="contact-item">
            <span className="c-icon">💻</span>
            <a href="https://github.com/vatanwaikar" target="_blank">
              github.com/vatanwaikar
            </a>
          </div>
        </div>

        <div className="contact-buttons">
          <a className="c-btn primary" href="mailto:vatanwaikar@gmail.com">Email Me</a>
          <a
            className="c-btn outline"
            href="https://wa.me/917350200022"
            target="_blank"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* ================= FLOATING BUTTONS ================= */}
      <div className="fab-box">
        <a href="#top" className="fab">↑</a>
        <a href="#contact" className="fab green">✉</a>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
  <div className="footer-line"></div>

  <p className="footer-main">
    © {new Date().getFullYear()} Vatan Waikar
  </p>

  <p className="footer-sub">
    Built with React • Deployed on GitHub Pages
  </p>
</footer>

    </div>
  );
}
