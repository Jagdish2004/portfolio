import { cpmc, tesla } from "../assets/images";
import {
    css,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    nodejs,
    react,
    python,
    mysql,
    ml,
    linkedin,
    contact,
    mui,
    motion,
    codechef,
    leetcode,
    instagram,
    java,
    c,
    cpp,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: c,
        name: "C",
        type: "Language",
    },
    {
        imageUrl: cpp,
        name: "Cpp",
        type: "Language",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
     {
        imageUrl: java,
        name: "Java",
        type: "Language",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: ml,
        name: "Machine Learning",
        type: "AI/ML",
    },
      
    {
        imageUrl: mui,
        name: "Material UI",
        type: "Frontend",
    },
    {
        imageUrl: motion,
        name: "Framer Motion",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
   
    
];

export const experiences = [
    {
        title: "Competitive Programming Mentor",
        company_name: "CPMC - DYPCOE Pune",
        icon: cpmc,
        iconBg: "#accbe1",
        date: "Sep 2023 - Present",
        points: [
            "Mentored 50+ students in solving complex programming problems using algorithms and data structures",
            "Organized and conducted coding competitions and workshops to enhance problem-solving skills",
            "Created comprehensive learning materials and practice problems for data structures and algorithms",
            "Hosted multiple events to promote competitive programming culture in the institution"
        ],
    },
    {
        title: "AI/ML Virtual Intern",
        company_name: "EduSkill",
        icon: tesla,
        iconBg: "#b7e4c7",
        date: "Oct 2024 - Dec 2024",
        points: [
            "Completed a 10-week internship focused on building and deploying machine learning models",
            "Developed predictive models for real-world datasets using Python and TensorFlow",
            "Learned various machine learning algorithms and deep learning architectures",
        ],
    }
];

export const socialLinks = [
    {
        name: 'CodeChef',
        iconUrl: codechef,
        link: 'https://www.codechef.com/users/jaggu2004',
    },
    {
        name: 'LeetCode',
        iconUrl: leetcode,
        link: 'https://leetcode.com/u/jaggu2004/',
    },
    {
        name: 'Instagram',
        iconUrl: instagram,
        link: 'https://www.instagram.com/jagdish.2004/',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/jagdish-raut-bba036259/',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Jagdish2004',
    },
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    }
];

export const achievements = [
    {
        title: "Smart India Hackathon Winner 2024 🏆",
        icon: "🥇",
        description: "Led a team to victory in Smart India Hackathon 2024 Software Edition at LNCT Bhopal, developing an innovative solution that secured first place among nationwide participants.",
    },
    // ... other achievements
];
