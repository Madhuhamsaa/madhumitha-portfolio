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

  // Typing Animation Effect
  useEffect(() => {
    let timer
    const currentRole = roles[roleIndex]
    const speed = isDeleting ? 50 : 100

    if (!isDeleting && text === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1200)
    } else if (isDeleting && text === "") {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timer = setTimeout(() => {
        setText(
          currentRole.substring(
            0,
            text.length + (isDeleting ? -1 : 1)
          )
        )
      }, speed)
    }

    return () => clearTimeout(timer)
  }, [text, isDeleting, roleIndex])

  // Dark Mode Effect
  useEffect(() => {
    document.body.classList.toggle("light-mode", !darkMode)
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode((prev) => !prev)
  }

  // Close Modal on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setOpenProject(false)
      }
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <div>
      {/* Navbar */}
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

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1 className="gradient-text">Madhumitha Ezhumalai</h1>
          <p className="typing">{text}</p>

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

      {/* Stats Section */}
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

      {/* About Section */}
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
            insights and building clean, scalable applications.
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
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

      {/* Projects Section */}
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
                Developed a multilingual React Native application during
                internship at Strong-Node, implementing i18next for EN/FR/NL,
                navigation architecture, and responsive UI.
              </p>
              <p className="confidential-note">
                Note: Source code is proprietary.
              </p>
            </div>

            <div className="card">
              <h3>Power BI Benchmark Dashboard (Internship Project)</h3>
              <p>
                Designed KPI dashboards to benchmark mobile applications,
                performed trend analysis, and defined post-launch metrics.
              </p>
              <p className="confidential-note">
                Note: Dashboard and datasets are proprietary.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Modal */}
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

      {/* Contact */}
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