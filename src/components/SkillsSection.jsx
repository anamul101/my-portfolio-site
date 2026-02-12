import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Tailwind", level: 95, category: "frontend" },
  { name: "Bootstrap", level: 80, category: "frontend" },
  { name: "OOP", level: 80, category: "frontend" },
  { name: "Redux", level: 80, category: "frontend" },
  { name: "WordPress", level: 100, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "NoSQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "N8N", level: 50, category: "tools" },

  // Soft Skills
  { name: "Team Collaboration", level: 90, category: "SoftSkills" },
  { name: "AI Prompt Engineering", level: 70, category: "SoftSkills" },
  { name: "MS Word", level: 90, category: "SoftSkills" },
  { name: "PowerPoint", level: 90, category: "SoftSkills" },
  { name: "Communication", level: 95, category: "SoftSkills" },
  { name: "Time Management", level: 80, category: "SoftSkills" },
  { name: "Quick Learner", level: 75, category: "SoftSkills" },
  { name: "Adaptability", level: 90, category: "SoftSkills" },
  { name: "Analytical Thinking", level: 70, category: "SoftSkills" },
];

const categories = ["all", "frontend", "backend", "tools", "SoftSkills"];

// Circular Progress Bar Component
const CircularProgress = ({ percentage, skillName }) => {
  const [progress, setProgress] = useState(0);
  const circleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = percentage;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setProgress(end);
        clearInterval(timer);
      } else {
        setProgress(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, percentage]);

  // Determine color based on percentage
  const getGradientColor = () => {
    if (percentage >= 90) return "url(#gradientExcellent)";
    if (percentage >= 70) return "url(#gradientGood)";
    if (percentage >= 50) return "url(#gradientAverage)";
    return "url(#gradientBasic)";
  };

  return (
    <div ref={circleRef} className="flex flex-col items-center justify-center group">
      {/* SVG Circle */}
      <div className="relative w-30 h-30">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 180 180">
          {/* SVG Gradients */}
          <defs>
            <linearGradient id="gradientExcellent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="gradientGood" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="gradientAverage" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
            <linearGradient id="gradientBasic" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6b7280" />
              <stop offset="100%" stopColor="#9ca3af" />
            </linearGradient>
            
            {/* Glow Filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background Circle */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-gray-800/30"
          />

          {/* Progress Circle */}
          <circle
            cx="90"
            cy="90"
            r={radius}
            fill="none"
            stroke={getGradientColor()}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-out filter drop-shadow-lg"
            style={{ filter: "url(#glow)" }}
          />
        </svg>

        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {Math.round(progress)}%
          </span>
          {/* <span className="text-xs text-gray-400 mt-1">Proficiency</span> */}
        </div>

        {/* Decorative Rings */}
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
      </div>

      {/* Title at Bottom */}
      <div className="mt-2 text-center">
        <h3 className="text-lg font-bold text-white/80 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
          {skillName}
        </h3>
        <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100" />
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="mt-25 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Expertise across frontend, backend, tools, and soft skills
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2.5 rounded-full cursor-pointer transition-all duration-300 capitalize font-medium",
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700 hover:border-purple-500"
              )}
            >
              {category === "SoftSkills" ? "Soft Skills" : category}
            </button>
          ))}
        </div>

        {/* Skills Grid - Circular Progress Bars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              
            >
              <CircularProgress percentage={skill.level} skillName={skill.name} />
            </div>
          ))}
        </div>

        {/* Overall Proficiency Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Frontend", value: "85%", color: "from-purple-500 to-pink-500" },
            { label: "Backend", value: "70%", color: "from-blue-500 to-cyan-500" },
            { label: "Tools", value: "78%", color: "from-yellow-500 to-orange-500" },
            { label: "Soft Skills", value: "82%", color: "from-green-500 to-emerald-500" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4  bg-gray-800/30 rounded-xl border border-gray-700">
              <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};