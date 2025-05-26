// src/app/technical-overview/page.tsx
import React from 'react';
import Link from 'next/link';

// Example icons from react-icons - YOU MUST CHOOSE AND IMPORT YOUR OWN
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiNextdotjs, SiExpress, SiPostgresql, SiMongodb, SiTailwindcss, SiVercel } from 'react-icons/si';
// import Header from '@/components/Header'; // If you have this, uncomment it below
// import Footer from '@/components/Footer'; // If you have this, uncomment it below

// --- Data Structures ---
type SkillItem = {
  name: string;
  icon?: React.ReactNode;
};

type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  codeLink?: string;
  imageUrl?: string;
};

// --- Sample Data (REPLACE WITH YOUR ACTUAL DATA AND CORRECT ICONS) ---
const skillCategoriesData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript className="w-6 h-6 text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-blue-500" /> },
      { name: "Python", icon: <FaPython className="w-6 h-6 text-sky-500" /> },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="w-6 h-6 text-sky-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black" /> },
      { name: "HTML5", icon: <span className="font-bold text-orange-500">H5</span> }, 
      { name: "CSS3", icon: <span className="font-bold text-blue-500">C3</span> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-teal-500" /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="w-6 h-6 text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="w-6 h-6 text-gray-600" /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-indigo-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-600" /> },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", icon: <FaGitAlt className="w-6 h-6 text-orange-600" /> },
      { name: "Docker", icon: <FaDocker className="w-6 h-6 text-blue-600" /> },
      { name: "AWS", icon: <FaAws className="w-6 h-6 text-orange-500" /> },
      { name: "Vercel", icon: <SiVercel className="w-6 h-6 text-black" /> },
    ],
  },
];

const projectsData: Project[] = [
  {
    title: "E-commerce Platform X",
    description: "A full-featured online store with user authentication, product listings, cart functionality, and a Stripe payment integration, built for modern web performance.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe API", "PostgreSQL", "Prisma"],
    liveLink: "#", 
    codeLink: "#", 
    imageUrl: "https://via.placeholder.com/800x600.png/EEEEEE/333333?text=Project+Alpha",
  },
  {
    title: "Task Management API Pro",
    description: "A robust RESTful API for managing tasks, users, and collaborative projects, built with Node.js and Express, featuring JWT authentication and role-based access control.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Docker"],
    codeLink: "#", 
    imageUrl: "https://via.placeholder.com/800x600.png/DDDDDD/222222?text=Project+Beta",
  },
];


export default function TechnicalOverviewPage() {
  const descriptionFontSize = "text-md sm:text-lg";

  return (
    <>
      {/* <Header /> */} {/* If you use a Header, uncomment this line. The comment itself is fine here. */}
      
      <main className="container mx-auto px-4 py-12 md:py-20 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto"> {/* This comment is fine as it's next to a valid JSX element */}
          
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black tracking-tight leading-tight font-display">
              Technical Proficiency
            </h1>
            <p className={`mt-4 ${descriptionFontSize} text-gray-600 max-w-3xl mx-auto`}>
              An overview of the technologies I leverage, my core skills, and a selection of projects I've brought to life.
            </p>
          </div>

          {/* --- Skills Section --- */}
          <section id="skills" className="mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-10 md:mb-12 font-display text-center">
              Core Skills & Technologies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategoriesData.map((category) => (
                <div key={category.title} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 font-display border-b border-gray-300 pb-3">
                    {category.title}
                  </h3>
                  <ul className="space-y-4">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="flex items-center text-gray-700">
                        {skill.icon ? (
                          <span className="mr-3 flex-shrink-0 flex items-center justify-center w-6 h-6">
                            {skill.icon}
                          </span>
                        ) : (
                          <span className="w-6 h-6 mr-3 flex-shrink-0" />
                        )}
                        <span className="text-lg">{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          
          {/* --- Projects Section --- */}
          <section id="projects">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black mb-10 md:mb-12 font-display text-center">
              Selected Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projectsData.map((project) => (
                <div 
                  key={project.title} 
                  className="bg-white rounded-xl shadow-xl border border-black flex flex-col overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
                >
                  {project.imageUrl && (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img 
                        src={project.imageUrl} 
                        alt={`${project.title} screenshot`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" 
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 font-display">
                      {project.title}
                    </h3>
                    <p className={`${descriptionFontSize} text-gray-700 mb-5 leading-relaxed flex-grow`}>
                      {project.description}
                    </p>
                    <div className="mb-5">
                      <strong className="text-sm text-gray-500 block mb-2 uppercase tracking-wider">Technologies Used:</strong>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm rounded-full border border-gray-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-4 border-t border-gray-200">
                      {project.liveLink && (
                        <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500 font-medium hover:underline transition-colors duration-200 text-sm sm:text-base">
                          Live Demo →
                        </Link>
                      )}
                      {project.codeLink && (
                        <Link href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500 font-medium hover:underline transition-colors duration-200 text-sm sm:text-base">
                          View Code →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      {/* <Footer /> */} {/* This comment is fine here */}
    </>
  );
}