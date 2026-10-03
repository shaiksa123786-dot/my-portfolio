import { ArrowRight } from "lucide-react";
import profileImage from "../assets/profile.jpg";

function Hero() {
  const goToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-badge">
          AI • ML • GENAI
        </p>

        <p className="hello">
          Hi, I'm
        </p>

        <h1>
          <span>Salma</span> Shaik
        </h1>

        <h2>
          AI/ML Engineer 
        </h2>

        <p className="hero-description">
          I build intelligent solutions using Artificial Intelligence,
          Generative AI, RAG and modern technologies.
        </p>

        <button
          className="primary-btn"
          onClick={goToProjects}
        >
          View Projects
          <ArrowRight size={18} />
        </button>

      </div>

      <div className="hero-image-container">
        <img
          src={profileImage}
          alt="Salma Shaik"
          className="profile-image"
        />
      </div>

    </section>
  );
}

export default Hero;