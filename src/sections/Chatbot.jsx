import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! 👋 I'm Salma's portfolio assistant. Ask me about her skills, projects, education, achievements, or career goals.",
    },
  ]);

  const getAnswer = (question) => {
  const q = question.toLowerCase().trim();

  // 👩 About Salma
  if (
    q.includes("who is salma") ||
    q.includes("about salma") ||
    q.includes("tell me about salma") ||
    q.includes("who are you")
  ) {
    return "Salma Shaik is a B.Tech student specializing in Artificial Intelligence and Machine Learning. She is passionate about AI, Generative AI, RAG systems, software development and building practical projects.";
  }

  // 👋 Greetings
  if (
    q === "hi" ||
    q === "hii" ||
    q === "hello" ||
    q === "hey" ||
    q.includes("good morning") ||
    q.includes("good evening")
  ) {
    return "Hi! 👋 Nice to meet you! I'm Salma's portfolio assistant. You can ask me about her skills, projects, education, achievements, certifications or career goals.";
  }

  // 🎓 Education
  if (
    q.includes("education") ||
    q.includes("college") ||
    q.includes("study") ||
    q.includes("degree") ||
    q.includes("btech")
  ) {
    return "Salma is currently pursuing her B.Tech in Artificial Intelligence and Machine Learning at Malineni Lakshmaiah Women's Engineering College.";
  }

  // 💻 Skills
  if (
    q.includes("skill") ||
    q.includes("technologies") ||
    q.includes("technology") ||
    q.includes("programming") ||
    q.includes("tech stack")
  ) {
    return "Salma's skills include Python, Java, C, JavaScript, DSA, Machine Learning, Generative AI, RAG, LLMs, React, Vite, Django, SQL, MySQL, Firebase, Supabase, Git, GitHub and APIs.";
  }

  // 🚀 Projects
  if (
    q.includes("project") ||
    q.includes("built") ||
    q.includes("developed") ||
    q.includes("portfolio projects")
  ) {
    return "Salma has worked on projects including GenQuery-AI, CareerGenie AI, QuizMaster, Email Generator, Calculator using Python, To-Do List, Future Farming Is Here and an AI/ML Timetable.";
  }

  // 🤖 GenQuery
  if (
    q.includes("genquery") ||
    q.includes("gen query")
  ) {
    return "GenQuery-AI is an AI-powered application built using RAG, Gemini, Django, React and APIs. It focuses on retrieving and generating useful responses from information.";
  }

  // 🧠 CareerGenie
  if (
    q.includes("careergenie") ||
    q.includes("career genie")
  ) {
    return "CareerGenie AI is an AI-powered career guidance platform designed to help students discover suitable career paths, identify skills and follow personalized learning roadmaps.";
  }

  // 🏆 Achievements
  if (
    q.includes("achievement") ||
    q.includes("awards") ||
    q.includes("award") ||
    q.includes("prize") ||
    q.includes("competition")
  ) {
    return "Salma's achievements include securing 2nd Prize in the Brush & Beyond competition, participating in Reverse Coding and Byte Blaze competitions, and being recognized as a LinkedIn Winner during the IdeaLabs learning journey.";
  }

  // 📜 Certification count
  if (
    q.includes("how many certification") ||
    q.includes("number of certification") ||
    q.includes("certification count") ||
    q.includes("certifications")
  ) {
    return "Salma has earned 14 certifications and internship-related credentials listed in her portfolio. 🎓";
  }

  // 📜 Certification details
  if (
    q.includes("certificate") ||
    q.includes("certification") ||
    q.includes("certified")
  ) {
    return "Salma's certifications include AI Deployment, MongoDB AI & Generative AI, Web Development, Python, Java, Artificial Intelligence, Deep Learning, Data Science, Prompt Engineering, NPTEL Java and virtual internship credentials.";
  }

  // 🎯 Career
  if (
    q.includes("career") ||
    q.includes("goal") ||
    q.includes("future") ||
    q.includes("dream job")
  ) {
    return "Salma's career goal is to become an AI/ML Engineer and continue building practical AI and Generative AI solutions.";
  }

  // 🐙 GitHub
  if (
    q.includes("github") ||
    q.includes("source code") ||
    q.includes("repositories")
  ) {
    return "You can explore Salma's projects and source code on her GitHub profile: github.com/shaiksa123786-dot";
  }

  // 💼 LinkedIn
  if (
    q.includes("linkedin") ||
    q.includes("profile")
  ) {
    return "You can connect with Salma on LinkedIn through the link available in the Contact section of this portfolio.";
  }

  // 📧 Contact
  if (
    q.includes("contact") ||
    q.includes("email") ||
    q.includes("connect")
  ) {
    return "You can contact Salma through the Email, LinkedIn and GitHub links available in the Contact section.";
  }

  // 👋 Bye
  if (
    q === "bye" ||
    q === "goodbye" ||
    q.includes("see you")
  ) {
    return "Goodbye! 👋 Thanks for visiting Salma's portfolio. Keep exploring! 🚀";
  }

  // ❓ Default
  return "I'm Salma's portfolio assistant 🤖. You can ask me things like: 'What are Salma's skills?', 'How many certifications does she have?', 'Tell me about GenQuery-AI', 'What projects has she built?', or 'What is her career goal?'";
};
  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    const botMessage = {
      sender: "bot",
      text: getAnswer(message),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        className="chatbot-button"
        onClick={() => setOpen(!open)}
        aria-label="Open chatbot"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {open && (
        <div className="chatbot-window">

          <div className="chatbot-header">
            <div>
              <h3>Salma's AI Assistant</h3>
              <span>Ask me about Salma</span>
            </div>

            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Ask about Salma..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <button onClick={sendMessage}>
              <Send size={18} />
            </button>
          </div>

        </div>
      )}
    </>
  );
}

export default Chatbot;