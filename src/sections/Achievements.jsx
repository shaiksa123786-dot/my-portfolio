import {
  Award,
  ExternalLink,
  Briefcase,
  Trophy,
  Code2,
} from "lucide-react";

const achievements = [
  {
    title: "2nd Prize — Brush & Beyond",
    description:
      "Secured 2nd Prize in the Brush & Beyond competition at Samskruthi Fest.",
    category: "Competition",
    icon: <Trophy />,
    link: "https://www.linkedin.com/posts/salma-shaik-9a7559324_samskruthi-brushandbeyond-secondprize-activity-7467089131479724032-_Scz",
  },
  {
    title: "Reverse Coding Competition",
    description:
      "Participated in the Reverse Coding competition at Samskruthi Fest.",
    category: "Coding Competition",
    icon: <Code2 />,
    link: "https://www.linkedin.com/posts/salma-shaik-9a7559324_reversecoding-samskruthi-btech-activity-7467138927632551936-AcXK",
  },
  {
    title: "Byte Blaze Coding Competition",
    description:
      "Participated in the Byte Blaze coding competition at Samskruthi Fest.",
    category: "Coding Competition",
    icon: <Code2 />,
    link: "https://www.linkedin.com/posts/salma-shaik-9a7559324_samskruthifest-byteblaze-codingcompetition-activity-7467148462871003138-y2ul",
  },
  {
    title: "LinkedIn Winner — IdeaLabs",
    description:
      "Recognized as a LinkedIn winner during the IdeaLabs learning journey.",
    category: "Recognition",
    icon: <Award />,
    link: "https://www.linkedin.com/posts/salma-shaik-9a7559324_idealabs-linkedinwinner-learningjourney-activity-7489287644296835072-FnM-",
  },
];

const certifications = [
  {
    title: "AI Deployment Internship",
    organization: "EduSkills",
    category: "Internship",
    link: "https://www.linkedin.com/posts/salma-shaik-9a7559324_internship-eduskills-aideployment-activity-7493295768523563009-6HuE",
  },
  {
    title: "MongoDB AI & Generative AI Learning",
    organization: "MongoDB",
    category: "AI & Database",
    link: "https://www.linkedin.com/posts/salma-shaik-9a7559324_mongodb-artificialintelligence-generativeai-activity-7483476535442735104-O3bf",
  },
  {
    title: "Web Development Internship",
    organization: "Cognifyz",
    category: "Internship",
    link: "https://www.linkedin.com/posts/salma-shaik-9a7559324_internship-cognifyz-webdevelopment-activity-7482344012352385027-lLpn",
  },
  {
    title: "Python & Java Learning",
    organization: "One Roadmap",
    category: "Programming",
    link: "https://www.linkedin.com/posts/salma-shaik-9a7559324_oneroadmap-python-java-activity-7477416466913488896-Lzeq",
  },
  {
    title: "Python",
    organization: "Analytics Vidhya",
    category: "Programming",
    link: "https://www.linkedin.com/posts/salma-shaik-9a7559324_python-analyticsvidhya-programming-activity-7477400141524684801-tz-u",
  },
  {
    title: "AI Learning",
    organization: "OpenAI Academy",
    category: "Artificial Intelligence",
    link: "https://www.linkedin.com/posts/salma-shaik-9a7559324_openai-openaiacademy-artificialintelligence-activity-7476651152974073856-zB0-",
  },
  {
    title: "Claude & AI Learning",
    organization: "Anthropic Learning",
    category: "Generative AI",
    link: "https://www.linkedin.com/posts/salma-shaik-9a7559324_anthropic-anthropiclearning-claudeai-activity-7475146281309458433-J2Bz",
  },
  {
    title: "Deep Learning",
    organization: "CognitiveClass / IBM",
    category: "Deep Learning",
    link: "https://www.linkedin.com/posts/salma-shaik-9a7559324_deeplearning-artificialintelligence-machinelearning-activity-7474772505547685889-lU9F",
  },
  {
    title: "Data Science",
    organization: "HP LIFE / HP Foundation",
    category: "Data Science",
    link: "https://www.linkedin.com/posts/salma-shaik-9a7559324_hplife-hpfoundation-datascience-activity-7473684785782120451-knFJ",
  },
  {
    title: "Prompt Engineering with GitHub Copilot",
    organization: "Microsoft / Simplilearn SkillUp",
    category: "AI & Development",
    link: "https://www.linkedin.com/posts/salma-shaik-9a7559324_microsoft-simplilearn-skillup-activity-7473015959805399040-N_v7",
  },
  {
    title: "Programming in Java",
    organization: "NPTEL",
    category: "Programming",
    link: "https://www.linkedin.com/posts/salma-shaik-9a7559324_nptel-programminginjava-javadeveloper-activity-7421730273161195520-rtJg",
  },
  {
    title: "Google Android Developers Virtual Internship",
    organization: "Google",
    category: "Internship",
    link: "https://www.linkedin.com/posts/salma-shaik-9a7559324_google-androiddevelopers-virtualinternship-activity-7409773046275928064-fosA",
  },
  {
    title: "AI & ML Virtual Internship",
    organization: "Google Android Developer Program",
    category: "Internship",
    link: "https://www.linkedin.com/posts/salma-shaik-9a7559324_achievement-aiml-googleandroid-activity-7409528120791248896-JUsv",
  },
  {
    title: "Artificial Intelligence Certification",
    organization: "Oracle",
    category: "Artificial Intelligence",
    link: "https://www.linkedin.com/posts/salma-shaik-9a7559324_oraclecertified-artificialintelligence-ai-activity-7399317405476429824--mml",
  },
];

function Achievements() {
  return (
    <section id="achievements" className="achievements-section">

      {/* Section Heading */}
      <div className="section-heading">
        <span>MY LEARNING JOURNEY</span>
        <h2>Achievements & Certifications</h2>
      </div>

      {/* Achievements */}
      <div className="achievement-title">
        <h3>🏆 Achievements</h3>
      </div>

      <div className="achievement-grid">
        {achievements.map((achievement, index) => (
          <div className="achievement-card" key={index}>

            <div className="achievement-icon">
              {achievement.icon}
            </div>

            <div className="achievement-content">
              <span className="achievement-category">
                {achievement.category}
              </span>

              <h3>{achievement.title}</h3>

              <p>{achievement.description}</p>

              <a
                href={achievement.link}
                target="_blank"
                rel="noreferrer"
                className="certificate-link"
              >
                View Achievement
                <ExternalLink size={15} />
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* Certifications */}
      <div id="certifications" className="achievement-title certification-heading">
        <h3>📜 Certifications</h3>
      </div>

      <div className="achievement-grid">
        {certifications.map((certificate, index) => (
          <div className="achievement-card" key={index}>

            <div className="achievement-icon">
              {certificate.category === "Internship" ? (
                <Briefcase />
              ) : (
                <Award />
              )}
            </div>

            <div className="achievement-content">
              <span className="achievement-category">
                {certificate.category}
              </span>

              <h3>{certificate.title}</h3>

              <p>{certificate.organization}</p>

              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="certificate-link"
              >
                View Certificate
                <ExternalLink size={15} />
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Achievements;