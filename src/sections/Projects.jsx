import {
  ExternalLink,
  Sparkles,
  Brain,
  Code2,
  Mail,
  Calculator,
  CheckSquare,
  CalendarDays,
} from "lucide-react";
const projects = [
  {
    title: "GenQuery-AI",
    description:
      "AI-powered application using RAG, Gemini, APIs and modern web technologies.",
    technologies: ["RAG", "Gemini", "Django", "React"],
    icon: <Sparkles />,
    github: "https://github.com/shaiksa123786-dot/GenQuery-AI",
  },
  {
    title: "CareerGenie AI",
    description:
      "AI-powered career guidance platform designed to help students discover suitable career paths.",
    technologies: ["React", "AI", "Supabase", "Vite"],
    icon: <Brain />,
    github: "https://github.com/shaiksa123786-dot/CareerGenie.git",
  },
  {
    title: "QuizMaster",
    description:
      "Interactive quiz application with a deployed web experience.",
    technologies: ["Flutter", "Firebase"],
    icon: <Code2 />,
    live: "https://quizmaster-4bdbb.web.app/",
  },
  {
    title: "Email Generator",
    description:
      "A project focused on generating emails through a simple application interface.",
    technologies: ["Python"],
    github: "https://github.com/shaiksa123786-dot/EmailGenrator.git",
    icon: <Mail />,
  },
  {
    title: "Calculator using Python",
    description:
      "A simple calculator application built using Python.",
    technologies: ["Python"],
    github:
      "https://github.com/shaiksa123786-dot/Calculator-using-PYTHON",
    icon: <Calculator />,
  },
  {
    title: "To-Do List",
    description:
      "Task management application built with ReactJS and deployed online.",
    technologies: ["ReactJS"],
    github:
      "https://github.com/shaiksa123786-dot/TO-DO-list-using-ReactJS.git",
    live: "https://todolistbysalma.bytexl.live/",
    icon: <CheckSquare />,
  },
  {
    title: "Future Farming Is Here",
    description:
      "A deployed web development project created as part of practical development work.",
    technologies: ["Web Development"],
    live: "https://level2task2bysalma.bytexl.live/",
    icon: <Code2 />,
  },
  {
    title: "AI/ML Timetable",
    description:
      "A timetable project created for an AI/ML-focused academic workflow.",
    technologies: ["Web Development", "AI/ML"],
    live: "https://timetableaimlb.bytexl.live/",
    icon: <CalendarDays />,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <span>WHAT I'VE BUILT</span>
        <h2>Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon">
              {project.icon}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tags">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="project-buttons">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  <span>GitHub</span>
                  GitHub
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn live-btn"
                >
                  <ExternalLink size={17} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;