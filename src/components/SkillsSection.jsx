import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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
const CircularProgress = ({ percentage, skillName, index }) => {
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
    <motion.div 
      ref={circleRef} 
      className="flex flex-col items-center justify-center group"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
    >
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
          <motion.circle
            cx="90"
            cy="90"
            r={radius}
            fill="none"
            stroke={getGradientColor()}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-out"
            style={{ filter: "url(#glow)" }}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>

        {/* Center Content */}
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center"
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {Math.round(progress)}%
          </span>
        </motion.div>

        {/* Decorative Rings */}
        <motion.div 
          className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
      </div>

      {/* Title at Bottom */}
      <motion.div 
        className="mt-2 text-center"
        whileHover={{ y: -2 }}
      >
        <h3 className="text-lg font-bold text-white/80 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
          {skillName}
        </h3>
        <motion.div 
          className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
        />
      </motion.div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef(null);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const categoryStats = {
    frontend: { value: "85%", color: "from-purple-500 to-pink-500" },
    backend: { value: "70%", color: "from-blue-500 to-cyan-500" },
    tools: { value: "78%", color: "from-yellow-500 to-orange-500" },
    SoftSkills: { value: "82%", color: "from-green-500 to-emerald-500" },
  };

  return (
    <motion.section 
      ref={sectionRef}
      id="skills" 
      className="pt-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isSectionVisible ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Background Decoration with Animation */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ scale: 0.8 }}
        animate={isSectionVisible ? { scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Header with Animation */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={isSectionVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Tech<span className="text-primary"> Stack</span>
          </h2>
          <motion.p 
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isSectionVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Expertise across frontend, backend, tools, and soft skills
          </motion.p>
        </motion.div>

        {/* Category Filters with Animation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={isSectionVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {categories.map((category, key) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2.5 rounded-full cursor-pointer transition-all duration-300 capitalize font-medium",
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700 hover:border-purple-500"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={activeCategory === category ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              {category === "SoftSkills" ? "Soft Skills" : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid - Circular Progress Bars */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredSkills.map((skill, key) => (
              <CircularProgress 
                key={`${skill.name}-${key}`} 
                percentage={skill.level} 
                skillName={skill.name} 
                index={key}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Overall Proficiency Summary with Animation */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ y: 50, opacity: 0 }}
          animate={isSectionVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {Object.entries(categoryStats).map(([category, stat], index) => (
            <motion.div 
              key={index} 
              className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05,
                borderColor: stat.color.split(' ')[1],
                boxShadow: `0 0 20px ${stat.color.includes('purple') ? '#8b5cf6' : 
                                               stat.color.includes('blue') ? '#3b82f6' : 
                                               stat.color.includes('yellow') ? '#eab308' : 
                                               '#10b981'}40`
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={isSectionVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
            >
              <motion.div 
                className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-400 mt-1 capitalize">
                {category === "SoftSkills" ? "Soft Skills" : category}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Particles for Decoration */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-500/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};