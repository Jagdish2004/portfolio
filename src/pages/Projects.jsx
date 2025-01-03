import { Link } from "react-router-dom";
import { CTA } from "../components";
import { arrow } from "../assets/icons";
import tripsy from "../assets/images/tripsy.png";
import naamsiddhi from "../assets/images/naamsiddhi.png";
import projectsImage from "../assets/images/projects.png";
import portfolioImage from "../assets/images/portfolioImage.png";

const projects = [
  {
    iconUrl: portfolioImage,
    theme: 'btn-back-blue',
    name: "Portfolio",
    date: "Jan 2025",
    description: "Personal Portfolio Web Application",
    points: [
        "Developed a responsive and interactive personal portfolio website",
        "Showcased projects using 3D GLB models for enhanced visual appeal",
        "Implemented seamless navigation and user-friendly UI",
        "Impl email functionality"
    ],
    tech: "React • Three.js • Tailwind CSS • Framer Motion • 3D Models",
    githubLink: "https://github.com/Jagdish2004/portfolio",
    liveLink: "#"
  },
  {
    iconUrl: naamsiddhi,
    theme: 'btn-back-blue',
    name: "Naamsiddhi",
    date: "Nov 2024 - Dec 2024",
    description: "Fuzzy Name Conversion of Hindi Names",
    points: [
      "Developed a robust solution for fuzzy and phonetic matching of Hindi names",
      "Utilized Modified Indic Soundex and Levenshtein Distance Algorithm",
      "Implemented RESTful APIs with CRUD operations",
      "Integrated database suggestions via API calls",
      "Provided bilingual support for English and Hindi",
      "voice to bilingualtext functionality",
      "Implemented indexing for faster and efficient record searching"
    ],
    tech: " MVC architecture • Node.js • Cloudinary • Express • EJS • Axios API • Mongo Atlas • Tailwind CSS • Vercel",
    githubLink: "https://github.com/Jagdish2004/NaamSiddhi",
    liveLink: "https://naam-siddhi1.vercel.app/"
  },
  
  {
    iconUrl: tripsy,
    theme: 'btn-back-orange',
    name: "Tripsy",
    date: "Jul 2024 - Sep 2024",
    description: "Accommodation Finder Web Application",
    points: [
      "Built a dynamic web app for finding accommodations",
      "Implemented complete CRUD functionality",
      "Cookie based session management and error handling",
      "Integrated Authentication and Authorization systems"
    ],
    tech: "Express • Cloudinary • EJS • Node.js • Bootstrap • Passport Authentication & Authorization",
    githubLink: "https://github.com/Jagdish2004/tripsy",
    liveLink: "https://tripsy1-peach.vercel.app/Tripsy"
  },
  {
    iconUrl: projectsImage,
    theme: 'btn-back-green',
    name: "MultiMaze & More",
    date: "2023 - 2024",
    description: "Collection of Interactive Web Projects",
    points: [
      "MultiMaze: Competitive multiplayer maze game",
      "StonepaperScissor: Interactive game implementation",
      "Spotify Clone: Music player with playlist management",
      "Amazon Clone: E-commerce platform frontend"
    ],
    tech: "JavaScript • HTML • CSS",
    githubLink: "https://github.com/Jagdish2004/",
    liveLink: "https://multi-maze-game-git-main-jagdish2004s-projects.vercel.app/"
  }
];

const ProjectCard = ({ project, index }) => (
  <div className="journey-card">
    <div className="timeline-connector">
      <div className="dot"></div>
      <div className="line"></div>
    </div>

    <div className="project-content">
      <div className="flex gap-6">
        {/* Left side: Content */}
        <div className="flex-1">
          <div className="project-header">
            <h3 className="project-title font-grotesk">{project.name}</h3>
            <span className="project-date font-mono">{project.date}</span>
          </div>

          <p className="project-description font-jakarta">{project.description}</p>

          <ul className="project-points">
            {project.points.map((point, idx) => (
              <li key={idx} className="point-item">
                <span className="point-bullet">•</span>
                {point}
              </li>
            ))}
          </ul>

          <div className="project-footer">
            <p className="tech-stack font-mono">{project.tech}</p>
          </div>
        </div>

        {/* Right side: Image and Buttons */}
        <div className="flex flex-col gap-4 items-center w-[200px] flex-shrink-0">
          <div className="w-full h-[150px] overflow-hidden rounded-lg">
            <img 
              src={project.iconUrl} 
              alt={project.name}
              className="w-full h-full object-cover transform transition-all duration-500 hover:scale-110"
            />
          </div>
          
          <div className="flex flex-col gap-3 w-full">
            <Link 
              to={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-btn bg-blue-500 hover:bg-blue-600"
            >
              Live Demo
              <img src={arrow} alt="arrow" className="w-4 h-4" />
            </Link>
            <Link 
              to={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-btn bg-gray-800 hover:bg-gray-700"
            >
              View Code
              <img src={arrow} alt="arrow" className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

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

      <div className="journey-timeline">
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
