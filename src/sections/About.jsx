import { GraduationCap, Brain, Code2, Rocket } from "lucide-react";

function About() {
  return (
    <section id="about" className="about-section">

      <div className="section-heading">
        <span>GET TO KNOW ME</span>
        <h2>About Me</h2>
      </div>

      <div className="about-container">

        {/* Left Side */}
        <div className="about-text">

          <p className="about-intro">
            I'm a passionate <strong>AI/ML student</strong> who enjoys
            turning ideas into practical technology.
          </p>

          <p>
            Currently pursuing my B.Tech in Artificial Intelligence
            and Machine Learning, I'm exploring Artificial Intelligence,
            Generative AI, RAG systems, Python, SQL and software
            development.
          </p>

          <p>
            I enjoy learning by building projects, participating in
            hackathons and working with teams to solve real-world
            problems.
          </p>

          <div className="about-buttons">
            <a href="#projects">Explore My Work →</a>
          </div>

        </div>

        {/* Right Side */}
        <div className="about-cards">

          <div className="info-card">
            <GraduationCap size={28} />
            <div>
              <h3>B.Tech — AI & ML</h3>
              <p>Currently pursuing</p>
            </div>
          </div>

          <div className="info-card">
            <Brain size={28} />
            <div>
              <h3>AI & Generative AI</h3>
              <p>Learning & building projects</p>
            </div>
          </div>

          <div className="info-card">
            <Code2 size={28} />
            <div>
              <h3>Development</h3>
              <p>Python • React • SQL</p>
            </div>
          </div>

          <div className="info-card">
            <Rocket size={28} />
            <div>
              <h3>Career Goal</h3>
              <p>AI/ML Engineer</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;