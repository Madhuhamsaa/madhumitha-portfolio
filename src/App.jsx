import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const roles = [
  "Data & Software Developer",
  "Power BI Developer",
  "Python Developer",
  "JavaScript Developer"
]

function App() {
  const [text, setText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [openProject, setOpenProject] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle("light-mode")
  }
  useEffect(() => {
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 50 : 100

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1))
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200)
        }
      } else {
        setText(currentRole.substring(0, text.length - 1))
        if (text === "") {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [text, isDeleting, roleIndex])

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Madhumitha</div>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button onClick={toggleTheme} className="theme-btn">
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </nav>

      <section className="hero">
        <div className="container hero-content">
          <h1 className="gradient-text">Madhumitha Ezhumalai</h1>
          <p>Data & Software Developer | Power BI | Python | JavaScript</p>

          <div className="hero-buttons">
            <a
              href="https://github.com/Madhuhamsaa"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/madhumitha-ezhumalai/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              LinkedIn
            </a>
            <a href="/resume.pdf" className="btn" download>
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section className="section stats">
        <div className="container stats-grid">
          <div className="stat">
            <h3>3+</h3>
            <p>Major Projects</p>
          </div>

          <div className="stat">
            <h3>5+</h3>
            <p>Technologies Used</p>
          </div>

          <div className="stat">
            <h3>1</h3>
            <p>International Internship</p>
          </div>
        </div>
      </section>

      <motion.section
        id="about"
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <h2>About Me</h2>
          <p>
            I am a Data & Software Developer with experience in Power BI,
            Python, JavaScript and React Native. I enjoy transforming data into
            insights and building clean, functional applications.
          </p>
        </div>
      </motion.section>

      <section id="skills" className="section">
        <div className="container">
          <h2>Technical Skills</h2>

          <div className="skill">
            <span>JavaScript</span>
            <div className="progress">
              <div className="progress-bar js"></div>
            </div>
          </div>

          <div className="skill">
            <span>Python</span>
            <div className="progress">
              <div className="progress-bar python"></div>
            </div>
          </div>

          <div className="skill">
            <span>Power BI</span>
            <div className="progress">
              <div className="progress-bar powerbi"></div>
            </div>
          </div>

        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2>Projects</h2>

          <div className="projects-grid">

            <div className="card" onClick={() => setOpenProject(true)}>
              <h3>Password Validator</h3>
              <p>HTML, CSS, JavaScript password validation tool.</p>
            </div>

            <div className="card">
              <h3>Multilingual Fitness Application (Internship Project)</h3>
              <p>
                Developed a multilingual React Native application during internship at
                Strong-Node, implementing i18next for language switching (EN/FR/NL),
                navigation architecture, state management, and responsive UI.
                Contributed to feature implementation, performance improvements,
                and testing.
              </p>
              <p className="confidential-note">
                Note: Source code is proprietary.
              </p>
            </div>

            <div className="card">
              <h3>Power BI Benchmark Dashboard (Internship Project)</h3>
              <p>
                Designed and developed KPI dashboards during internship at Strong-Node
                to benchmark mobile applications. Performed trend analysis,
                user behavior insights, and defined post-launch KPIs to measure
                retention and feature usage.
              </p>
              <p className="confidential-note">
                Note: Dashboard and datasets are proprietary.
              </p>
            </div>

          </div>
        </div>
      </section>

      {openProject && (
        <div className="modal" onClick={() => setOpenProject(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Password Validator</h3>
            <p>
              Built using HTML, CSS, JavaScript.
              Features regex validation, dictionary word detection,
              and real-time DOM updates.
            </p>
            <a
              href="https://github.com/Madhuhamsaa/passwordvalidator"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View on GitHub
            </a>
          </div>
        </div>
      )}

      <section id="contact" className="section">
        <div className="container">
          <h2>Contact</h2>
          <p>Email: madhuaarvi@gmail.com</p>
        </div>
      </section>
    </div>
  )
}

export default App