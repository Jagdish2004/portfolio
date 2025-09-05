import { Link } from "react-router-dom";
import { CTA } from "../components";
import { arrow } from "../assets/icons";
// import tripsy from "../assets/images/tripsy.png";
// import projectsImage from "../assets/images/projects.png";
// import portfolioImage from "../assets/images/portfolioImage.png";
import naamsiddhi from "../assets/images/naamsiddhi.png";
import aifitpro from "../assets/images/aifitpro.png";
import aiagent from "../assets/images/aiagent.png";


const projects = [
  {
  iconUrl: aiagent,
  theme: 'btn-back-blue',
  name: "AI Agent",
  date: "Aug 2025",
  description: "AI Agent to automate database operations and send mails using natural language.",
  points: [
    "Developed an AI Agent using N8N and integrated it with a full-stack web application.",
   "Agent can execute any query on the database, with certain operations intentionally restricted to prevent SQL injection",
   "Built an automation pipeline in N8N: fetch table → build schema → generate query from user input → execute query → maintain logs.",
    "Integrated email functionality via Google SMTP server for automated mail delivery.",
    "Integrated N8N with the full-stack project to maintain logs, chats, and sessions, ensuring proper database relationships."
  ],
  tech: "React • Node.js • PostgreSQL • N8N • Gemini API • Ollama OSS 20B • Ngrok • Docker • Webhooks",
  githubLink: "https://github.com/Jagdish2004/Analyst-n8n-backend", 
  liveLink: "https://www.linkedin.com/posts/jagdish2004_ai-automation-database-activity-7367884548497502208-r6nX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-K8j4BqZkOJdjqptf5y6jKutScDrDIYkY"
},
  {
  iconUrl: aifitpro,
  theme: 'btn-back-orange',
  name: "AIFitPro",
  date: "July 2025",
  description: "Fitness tracking web application with AI-generated personalized suggestions.",
  points: [
    "Developed using Java Spring Boot microservices architecture to ensure scalability.",
    "Implemented secure communication between microservices with an authenticated gateway using stateless Keycloak auth (PKCE flow).",
    "Integrated asynchronous AI suggestion generation via RabbitMQ messaging queues.",
    "Achieved seamless integration of frontend and backend, making the application deployment-ready."
  ],
  tech: "React • Java Spring Boot • PostgreSQL • MongoDB • Keycloak Auth (PKCE) • RabbitMQ • Microservices • Async Processing • Gemini API • Docker",
  githubLink: "https://github.com/Jagdish2004/AIFitPro",
  liveLink: "https://www.linkedin.com/posts/jagdish2004_ai-microservices-architecture-activity-7362788864089845760-0J1n?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-K8j4BqZkOJdjqptf5y6jKutScDrDIYkY"
}
,
{
  iconUrl: naamsiddhi,
  theme: 'btn-back-blue',
  name: "Naamsiddhi",
  date: "Nov 2024 - Dec 2024",
  description: "Prototype developed for MP Police during Smart India Hackathon 2024.",
  points: [
    "Developed a research-oriented MVC prototype for fuzzy and phonetic Hindi name matching, addressing transliteration, spelling variations, and phonetic similarities.",
    "Designed a hybrid string-matching flow combining phonetic algorithms (Modified Indic Soundex) with fuzzy matching (Levenshtein) and external field based scoring, achieving over 98% (accuracy measured on sample data by mp police) accuracy in searches.",
    "Reduced query time from minutes to milliseconds by integrating B-tree indexing with phonetic code matching for optimized database lookups.",
    "Built full CRUD operations, managed many-to-many relationships in MongoDB documents, and integrated bilingual (English/Hindi) support with voice-to-text functionality for enhanced accessibility."
  ],
  tech: "Node.js • Express • MongoDB Atlas • MVC Architecture • EJS • Tailwind CSS • Cloudinary • Axios • Vercel • Custom Algorithms",
  githubLink: "https://github.com/Jagdish2004/NaamSiddhi",
  liveLink: "https://naam-siddhi1.vercel.app/"
},
];

const ProjectCard = ({ project }) => {
  return (
    <div className="journey-card flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
      {/* Left side: Content - Full width on mobile, 2/3 width on desktop */}
      <div className="w-full md:w-2/3 p-6">
        <div className="project-header mb-4">
          <h3 className="project-title font-grotesk text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
            {project.name}
          </h3>
          <span className="project-date font-mono text-sm text-gray-600 dark:text-gray-400">
            {project.date}
          </span>
        </div>

        <p className="project-description font-jakarta text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <ul className="project-points space-y-2 mb-4">
          {project.points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
              <span className="text-blue-500">•</span>
              {point}
            </li>
          ))}
        </ul>

        <p className="tech-stack font-mono text-sm text-gray-600 dark:text-gray-400">
          {project.tech}
        </p>
      </div>

      {/* Right side: Image and Buttons - Full width on mobile, 1/3 width on desktop */}
      <div className="w-full md:w-1/3 p-6 flex flex-col justify-between bg-gray-50 dark:bg-gray-800/50">
        <div className="w-full h-48 md:h-40 mb-4 overflow-hidden rounded-lg">
          <img 
            src={project.iconUrl} 
            alt={project.name}
            className="w-full h-full object-cover transform transition-all duration-500 hover:scale-110"
          />
        </div>
        
        <div className="flex flex-col gap-3">
          <Link 
            to={project.liveLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Demo
            <img src={arrow} alt="arrow" className="w-4 h-4" />
          </Link>
          <Link 
            to={project.githubLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            View Code
            <img src={arrow} alt="arrow" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My Development <span className='blue-gradient_text'>Journey</span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        Each project represents a milestone in my development journey, 
        showcasing growth and mastery over different technologies and concepts.
      </p>

      <div className="mt-12 flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>

      <hr className='border-slate-200 mt-16' />
      <CTA />
    </section>
  );
};

export default Projects;
