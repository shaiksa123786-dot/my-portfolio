import {
  Code2,
  Brain,
  Sparkles,
  Globe,
  Database,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 />,
    skills: ["Python","Java","C", "JavaScript", "DSA"],
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain />,
    skills: ["Machine Learning", "AI", "Data Analysis"],
  },
  {
    title: "Generative AI",
    icon: <Sparkles />,
    skills: ["GenAI", "RAG", "LLMs", "Prompt Engineering"],
  },
  {
    title: "Development",
    icon: <Globe />,
    skills: ["React","HTML","CSS","JavaScript", "Vite", "Flutter", "Django"],
  },
  {
    title: "Database",
    icon: <Database />,
    skills: ["SQL", "MySQL", "Firebase", "Supabase"],
  },
  {
    title: "Tools",
    icon: <Wrench />,
    skills: ["Git", "GitHub", "VS Code", "APIs"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="section-heading">
        <span>WHAT I WORK WITH</span>
        <h2>Skills & Technologies</h2>
      </div>

      <div className="skills-grid">

        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {category.icon}
            </div>

            <h3>{category.title}</h3>

            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;