import { cpmc, dypcoe, joshsoftware } from "../assets/images";
import {
    css,
    express,
    git,
    github,
    javascript,
    mongodb,
    nodejs,
    react,
    python,
    linkedin,
    contact,
    codechef,
    leetcode,
    instagram,
    java,
    c,
    cpp,
    aws,
    docker,
    n8n,
    postgresql,
    redis,
    restapi,
    springboot,
    golang,
    linux,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: golang,
        name: "Go",
        type: "Language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Language",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Language",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Language",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Language",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: restapi,
        name: "REST API",
        type: "Backend",
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
    { imageUrl: springboot,
        name: "Spring Boot",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: redis,
        name: "Redis",
        type: "Database",
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "DevOps",
    },
    { imageUrl: docker,
        name: "Docker",
        type: "DevOps",
    },
    { imageUrl: aws,
        name: "AWS",
        type: "Cloud",
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
    {
        imageUrl: n8n,
        name: "n8n",
        type: "Workflow Automation",
    },
   
    
];

export const experiences = [
    {
        title: "SDE Intern",
        company_name: "Josh Software",
        icon: joshsoftware,
        iconBg: "#fff1ed",
        date: "Jan 2026 - Jun 2026",
        points: [
            "Contributed to KindKart by building Golang-based services and GraphQL APIs, designing GraphQL and DB schemas for donation workflows, verification systems, and analytics.",
            "Built a video processing pipeline (upload → speech-to-text → LLM-based answer extraction) enabling faster, more transparent verification.",
            "Designed an LLM-driven, component-aware analytics system that converts user-selected inputs into dynamic queries and selects appropriate frontend visualizations via GraphQL for real-time chart rendering.",
            "Created an end-to-end bulk job processing flow using the worker pool pattern with goroutines — managing API rate limits, processing async jobs in chunks, and tracking progress.",
        ],
    },
    {
        title: "Competitive Programming Mentor",
        company_name: "CPMC - DYPCOE Pune",
        icon: cpmc,
        iconBg: "#accbe1",
        date: "Sep 2024 - Sep 2025",
        points: [
            "Designed and evaluated competitive programming contests on HackerRank.",
            "Organized coding competitions and workshops to enhance students' problem-solving skills.",
            "Hosted multiple events to promote a competitive programming culture in the institution.",
        ],
    },
];

export const educations = [
    {
        title: "B.E. in Information Technology",
        company_name: "Dr. D. Y. Patil College of Engineering, Pune",
        icon: dypcoe,
        iconBg: "#accbe1",
        date: "Nov 2022 - June 2026",
        points: [
            "Graduated with a Bachelor of Engineering in Information Technology — CGPA 8.9 / 10.",
            "Strong foundation in CS fundamentals — DSA, OOP, DBMS, OS, CN, ML.",
            "Annual Academic Excellence Award 2024-25 for outstanding performance in 5th & 6th semesters.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'CodeChef',
        iconUrl: codechef,
        link: 'https://www.codechef.com/users/jagdish2004',
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
        link: 'https://www.linkedin.com/in/jagdish2004/',
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


