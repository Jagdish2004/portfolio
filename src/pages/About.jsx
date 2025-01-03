import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { CTA } from "../components";
import { experiences, skills } from "../constants";
import { i, sih2024 } from "../assets/images";

import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience, index }) => {
    return (
        <div 
            className="relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl 
                     dark:bg-gray-800/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 
                     group animate-fadeIn experience-card"
            style={{ animationDelay: `${index * 200}ms` }}
        >
            {/* Company Icon */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="w-20 h-20 rounded-full p-2 bg-white dark:bg-gray-700 shadow-xl 
                              flex items-center justify-center border-4 border-blue-500/30 
                              group-hover:border-blue-500 transition-all duration-300 animate-float">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-12 h-12 object-contain"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="mt-8">
                <h3 className="text-2xl font-playfair font-bold text-blue-500 dark:text-blue-400 mb-2">
                    {experience.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-grotesk mb-4">
                    {experience.company_name}
                </p>
                <p className="text-sm text-blue-500 dark:text-blue-400 font-jakarta mb-4">
                    {experience.date}
                </p>

                {/* Points with animated bullets */}
                <ul className='space-y-4'>
                    {experience.points.map((point, idx) => (
                        <li
                            key={`experience-point-${idx}`}
                            className='flex items-start gap-2 animate-slideIn'
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 dark:bg-blue-400 
                                         group-hover:animate-pulse" />
                            <span className='text-gray-700 dark:text-gray-300 font-jakarta text-sm'>
                                {point}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const achievements = [
    {
        title: "Smart India Hackathon Winner 2024",
        description: "National level achievement in India's biggest hackathon.Developed a fuzzy name conversion software, 'Naamsiddhi', for the MP Police Department during SIH 2024, enhancing leadership, teamwork, and problem-solving skills.",
        icon: "🏆"
    },
    {
        title: "600+ DSA Problems",
        description: "Solved over 470+ problems on Leetcode, 60+ on Codechef, and 100+ on other coding platforms, showcasing strong problem-solving and algorithmic skills.",
        icon: "💻"
    },
    {
        title: "2-Star Coder at CodeChef",
        description: "Demonstrated competitive programming skills by participating in 40+ contests on CodeChef and Leetcode.",
        icon: "⭐"
    }
];

const About = () => {
    return (
        <section className='max-container'>
            <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-8'>
                <div className='flex-1'>
                    <h1 className='head-text'>
                        Hello, I'm{" "}
                        <span className='blue-gradient_text font-semibold drop-shadow'>
                            Jagdish
                        </span>
                    </h1>

                    <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                        <p>
                        <b>Full Stack Developer | ML Enthusiast</b>
                        <br />

A Full Stack Developer with a strong foundation in machine learning, skilled in building scalable web applications and integrating AI-driven solutions. I specialize in crafting intuitive user experiences and efficient back-end systems, blending technology and innovation to deliver impactful results. </p>
                    </div>
                </div>

                <div className="relative animate-fadeIn group">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 opacity-75 group-hover:opacity-100 transition duration-300 blur-lg"></div>
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 opacity-50 group-hover:opacity-75 transition duration-300 blur-md"></div>
                    
                    <div className="relative w-[250px] h-[250px] rounded-full border-4 border-white/50 dark:border-white/20 p-2 overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800">
                        <img
                            src={i}
                            alt="Jagdish Raut"
                            className="w-full h-full rounded-full object-cover"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-lg">
                            <p className="text-white text-sm font-grotesk font-medium tracking-wider">
                            Full Stack Developer
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-10'>
                <div className='flex flex-col items-center justify-center'>
                    <h3 className='subhead-text mb-8'>My Resume</h3>
                    <a
                        href="/Jagdish_Raut_Resume.pdf"  // Place your resume in the public folder
                        download="Jagdish_Raut_Resume.pdf"
                        className='flex items-center gap-3 px-6 py-3 rounded-full
                                 bg-gradient-to-r from-blue-600 to-cyan-500 
                                 hover:from-blue-700 hover:to-cyan-600
                                 text-white font-semibold shadow-lg 
                                 transform hover:scale-105 transition-all duration-300
                                 dark:from-blue-500 dark:to-cyan-400'
                    >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                            />
                        </svg>
                        Download Resume
                    </a>
                    <p className='text-slate-500 dark:text-slate-400 mt-4 text-center max-w-lg'>
                        Get a detailed overview of my skills, experiences, and achievements
                    </p>
                </div>
                <hr className='border-slate-200 dark:border-gray-700 my-8' />
            </div>

            <div className='py-10 flex flex-col'>
                <h3 className='subhead-text'>My Skills</h3>

                <div className='mt-16 flex flex-wrap gap-12'>
                    {skills.map((skill) => (
                        <div className='block-container w-20 h-20' key={skill.name}>
                            <div className='btn-back rounded-xl' />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className='w-1/2 h-1/2 object-contain'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Achievements Section */}
            <div className='py-10 flex flex-col'>
                <h3 className='subhead-text'>My Achievements</h3>
                <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {achievements.map((achievement, index) => (
                        <div 
                            key={index}
                            className={`bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl
                                     hover:bg-white/20 transition-all duration-300
                                     dark:bg-gray-800/50 dark:hover:bg-gray-700/50
                                     ${achievement.title.includes('Smart India Hackathon') ? 'md:col-span-3' : ''}`}
                        >
                            <div className='flex flex-col md:flex-row gap-6 items-start'>
                                <div className='flex-1'>
                                    <div className='text-4xl mb-4'>{achievement.icon}</div>
                                    <h4 className='text-xl font-bold text-blue-500 dark:text-blue-400 mb-2 font-grotesk'>
                                        {achievement.title}
                                    </h4>
                                    <p className='text-gray-600 dark:text-gray-300 font-jakarta'>
                                        {achievement.description}
                                    </p>
                                </div>
                                
                                {/* Show image only for SIH achievement */}
                                {achievement.title.includes('Smart India Hackathon') && (
                                    <div className='w-full md:w-[350px] overflow-hidden rounded-xl shadow-lg'>
                                        <img 
                                            src={sih2024} 
                                            alt="SIH 2024 Winner" 
                                            className='w-full h-auto object-cover hover:scale-105 transition-transform duration-300'
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='py-16'>
                <div className="text-center mb-12 animate-fadeIn">
                    <h3 className='subhead-text mb-4'>Work Experience</h3>
                    <p className='text-slate-500 dark:text-slate-400 max-w-2xl mx-auto'>
                        I've worked with various organizations, enhancing my skills in both teaching
                        and practical implementation of AI/ML solutions:
                    </p>
                </div>

                <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 px-4'>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={experience.company_name}
                            experience={experience}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            <hr className='border-slate-200' />
            <CTA />
        </section>
    );
};

export default About;
  
