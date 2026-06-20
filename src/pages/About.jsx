import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { CTA } from "../components";
import { experiences, educations, skills } from "../constants";
import { i, sih2024, annualaward, techzooka } from "../assets/images";

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
        title: "Smart India Hackathon 2024 — Grand Finale Winner",
        description: "Won the national-level Grand Finale of Smart India Hackathon 2024. Built 'Naamsiddhi', a fuzzy name-matching algorithm and scalable prototype for the MP Police Department.",
        icon: "🏆"
    },
    {
        title: "TCS CodeVita 2025 — Global Rank #269",
        description: "Secured a Global Rank of 269 in TCS CodeVita 2025 among 5.5 lakh+ participants worldwide — one of the largest competitive programming contests on the planet.",
        icon: "🎯"
    },
    {
        title: "Academic Excellence Award 2024-25",
        description: "Awarded the Annual Academic Excellence Award by DYPCOE Pune for outstanding performance in the 5th and 6th semesters.",
        icon: "🏆"
    },
    {
        title: "TechZooka 2024 Innovation Challenge — Infosys",
        description: "Received the Certificate of Excellence at the TechZooka 2024 Innovation Challenge by Infosys for an innovative project submission.",
        icon: "🏆"
    },
    {
        title: "CodeRed 2025 — Rank #11",
        description: "Ranked 11th out of 1000+ participants in the CodeRed 2025 offline competitive programming contest organized at Pune.",
        icon: "🏆"
    },
    {
        title: "Competitive Programming",
        description: "Knight on LeetCode (rating 1861) and 3★ on CodeChef (rating 1606). 800+ DSA problems solved across 75+ contests.",
        icon: "⚔️"
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
                            Jagdish Raut
                        </span>
                    </h1>

                    <div className='mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-300'>
                        <p>
                            I build scalable backend systems with <b>Go</b>, <b>Java</b> & <b>Spring Boot</b>, design <b>REST</b> and <b>GraphQL</b> APIs, and ship cloud-native applications on AWS &amp; Docker.
                            <br /><br />
                           <b>SIH 2024 Grand Finale Winner</b> (National) and a competitive programmer with a Global Rank of <b>269 in TCS CodeVita 2025</b> (among 5.5 lakh+ participants worldwide), <b>Knight on LeetCode</b> (rating 1861), and <b>3★ on CodeChef</b> (rating 1606), with <b>1000+ DSA problems solved</b> across multiple competitive programming platforms and <b>75+ contests participated</b>.  </p>
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
                        <div className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-lg whitespace-nowrap">
                            <p className="text-white text-sm font-grotesk font-medium tracking-wider">
                                SDE @ Josh Software
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
                        className='btn flex items-center gap-3 px-6 py-3 rounded-full
                                 bg-gradient-to-r from-blue-600 to-cyan-500
                                 hover:from-blue-700 hover:to-cyan-600
                                 !text-white font-semibold shadow-lg
                                 transform hover:scale-105 transition-all duration-300
                                 dark:from-blue-500 dark:to-cyan-400
                                 dark:shadow-[0_0_25px_rgba(56,189,248,0.45)]
                                 dark:hover:shadow-[0_0_35px_rgba(56,189,248,0.65)]'
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
                
                {/* Achievement Images Grid */}
                <div className='mt-8 mb-12'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        <div className='group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-slate-100 dark:bg-gray-800'>
                            <img
                                src={sih2024}
                                alt="Smart India Hackathon 2024 Winner"
                                className='w-full h-56 sm:h-48 object-contain group-hover:scale-105 transition-transform duration-300'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                            <div className='absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <p className='font-semibold text-sm'>SIH 2024 Winner</p>
                            </div>
                        </div>

                        <div className='group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-slate-100 dark:bg-gray-800'>
                            <img
                                src={annualaward}
                                alt="Academic Excellence Award 2024-25"
                                className='w-full h-56 sm:h-48 object-contain group-hover:scale-105 transition-transform duration-300'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                            <div className='absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <p className='font-semibold text-sm'>Academic Excellence</p>
                            </div>
                        </div>

                        <div className='group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-slate-100 dark:bg-gray-800'>
                            <img
                                src={techzooka}
                                alt="Techzooka 2024 Innovation Challenge"
                                className='w-full h-56 sm:h-48 object-contain group-hover:scale-105 transition-transform duration-300'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                            <div className='absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <p className='font-semibold text-sm'>Techzooka Innovation</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Achievement Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    {achievements.map((achievement, index) => (
                        <div 
                            key={index}
                            className='bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl
                                     hover:bg-white/20 transition-all duration-300
                                     dark:bg-gray-800/50 dark:hover:bg-gray-700/50
                                     group hover:shadow-xl'
                        >
                            <div className='flex items-start gap-4'>
                                <div className='text-3xl group-hover:scale-110 transition-transform duration-300'>
                                    {achievement.icon}
                                </div>
                                <div className='flex-1'>
                                    <h4 className='text-lg font-bold text-blue-500 dark:text-blue-400 mb-2 font-grotesk
                                                group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors'>
                                        {achievement.title}
                                    </h4>
                                    <p className='text-gray-600 dark:text-gray-300 font-jakarta text-sm leading-relaxed'>
                                        {achievement.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='py-16'>
                <div className="text-center mb-12 animate-fadeIn">
                    <h3 className='subhead-text mb-4'>Work Experience</h3>
                    <p className='text-slate-500 dark:text-slate-400 max-w-2xl mx-auto'>
                        Roles I've held — from interning to shipping production systems and mentoring peers.
                    </p>
                </div>

                <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 px-4'>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`${experience.company_name}-${experience.title}`}
                            experience={experience}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            <hr className='border-slate-200 dark:border-gray-700' />

            <div className='py-16'>
                <div className="text-center mb-12 animate-fadeIn">
                    <h3 className='subhead-text mb-4'>Education</h3>
                    <p className='text-slate-500 dark:text-slate-400 max-w-2xl mx-auto'>
                        Where I built the foundation — CS fundamentals, coursework, and academic milestones.
                    </p>
                </div>

                <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 px-4'>
                    {educations.map((education, index) => (
                        <ExperienceCard
                            key={`${education.company_name}-${education.title}`}
                            experience={education}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            <hr className='border-slate-200 dark:border-gray-700' />
            <CTA />
        </section>
    );
};

export default About;
  
