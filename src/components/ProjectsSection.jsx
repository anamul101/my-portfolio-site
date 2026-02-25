import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink, Github, Info, X, Clock, CheckCircle, Code2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "School Management System",
    description: "Full-stack school management system with student and teacher management",
    image: "/projects/school.png",
    tags: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "React",
      "TailwindCSS",
      "Express.js"
    ],
    demoUrl: "https://www.govtmollartekuhss.edu.bd/",
    githubUrl: "#",
    projectdetailsUrl: "/projects/school-management-system",
    completedAt: "November 11, 2025",
    fullDescription:
      "Real-world projects A complete school management system with student and teacher management, attendance tracking, and grade reporting.",
    features: [
      "Student Management",
      "Teacher Management",
      "Attendance Tracking",
      "PDF viewer",
      "Class Scheduling",
      "Admin Dashboard",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB","React", "Tailwind CSS"],
    status: "completed" // Add status field
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce platform with payment integration",
    image: "/projects/fancyloom.png",
    tags: [
      "WordPress",
      "Elementor",
      "Contact Form 7",
      "Revolution Slider",
      "WooCommerce",
      "Yoast SEO"
    ],
    demoUrl: "https://fancyloom.com/",
    githubUrl: "#",
    projectdetailsUrl: "/projects/ecommerce-platform",
    completedAt: "February 20, 2026",
    fullDescription:
      "A complete e-commerce solution with product management, shopping cart, user authentication, and secure payment processing.",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "User Authentication",
      "Payment Processing",
      "Order Management",
      "Admin Dashboard",
    ],
    technologies: ["WordPress", "Elementor", "Contact Form 7", "Revolution Slider", "WooCommerce", "Yoast SEO"],
    status: "completed" // Add status field
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce platform with payment integration",
    image: "/projects/shop.png",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "TailwindCSS",
      "Express.js"
    ],
    demoUrl: "https://shop-frontend-three.vercel.app/",
    githubUrl: "https://github.com/anamul101/shop-frontend",
    projectdetailsUrl: "/projects/ecommerce-platform",
    completedAt: "July 4, 2023",
    fullDescription:
      "A complete e-commerce solution with product management, shopping cart, user authentication, and secure payment processing.",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "User Authentication",
      "Payment Processing",
      "Order Management",
      "Admin Dashboard",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    status: "completed"
  },
  {
    id: 4,
    title: "AI-Powered Analytics Dashboard",
    description: "Advanced analytics platform with AI-driven insights and real-time data visualization",
    image: "/projects/project7.png",
    tags: [
      "React",
      "TypeScript",
      "TensorFlow.js",
      "D3.js",
      "Node.js",
      "PostgreSQL"
    ],
    demoUrl: "https://analytics-demo.vercel.app",
    githubUrl: "https://github.com/anamul101/analytics-dashboard",
    completedAt: "Expected: March 2026",
    fullDescription:
      "A cutting-edge analytics platform that leverages machine learning to provide predictive insights and real-time data visualization for business intelligence.",
    features: [
      "AI-Powered Predictions",
      "Real-time Data Streaming",
      "Custom Dashboard Builder",
      "Advanced Data Visualization",
      "Automated Reporting",
      "Team Collaboration Tools"
    ],
    technologies: ["React", "TypeScript", "TensorFlow.js", "D3.js", "Node.js", "PostgreSQL", "WebSocket"],
    status: "ongoing"
  },
  {
    id: 5,
    title: "Mobile-First Social Platform",
    description: "Cross-platform social networking app with real-time messaging",
    image: "/projects/project8.png",
    tags: [
      "React Native",
      "Firebase",
      "Redux",
      "Socket.io",
      "Expo",
      "TailwindCSS"
    ],
    demoUrl: "https://social-app.expo.dev",
    githubUrl: "https://github.com/anamul101/social-app",
    completedAt: "Expected: April 2026",
    fullDescription:
      "A modern social networking platform built with React Native, featuring real-time messaging, story sharing, and rich media support across iOS and Android.",
    features: [
      "Real-time Messaging",
      "Story Sharing",
      "Push Notifications",
      "Media Sharing",
      "User Profiles",
      "Group Chats",
      "Video Calls"
    ],
    technologies: ["React Native", "Firebase", "Redux", "Socket.io", "Expo", "WebRTC"],
    status: "ongoing"
  },
  {
    id: 6,
    title: "Used Products Resale",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project3.png",
    tags: [
      "JavaScript",
      "ReactJs",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Firebase",
      "TailwindCSS",
    ],
    demoUrl: "https://classice-phone-dc43a.web.app/",
    githubUrl: "https://github.com/anamul101/Classice-phone-client",
    projectdetailsUrl: "/projects/used-products-resale",
    completedAt: "December 28, 2022",
    fullDescription:
      "This project is a complete resale marketplace where users can buy and sell used products. The platform includes separate dashboards for users, sellers, and admins, along with secure authentication and product management features.",
    features: [
      "Home Page",
      "Showcases product advertisements",
      "Displays product categories for easy navigation",
      "User Dashboard",
      "Authentication System",
      "Logout functionality",
      "Admin Controls",
      "Verify sellers",
      "Delete any product listings",
      "Admin Panel Management",
      "Add or update seller and buyer roles",
      "Manage platform users efficiently",
    ],
    technologies: [
      "ReactJs",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Firebase",
      "Stripe",
      "JWT",
      "Tailwind CSS",
    ],
    status: "completed"
  },
  {
    id: 7,
    title: "Service Review App",
    description: "Interactive Service Review App with data visualization.",
    image: "/projects/project2.jpg",
    tags: [
      "ReactJs",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
      "Firebase",
      "Stripe",
      "JWT",
      "Tailwind CSS",
    ],
    demoUrl: "https://mw-photography.web.app/",
    githubUrl: "https://github.com/anamul101/photography-studio-client",
    projectdetailsUrl: "/projects/service-review-app",
    completedAt: "March 15, 2023",
    fullDescription:
      "A comprehensive service review platform that allows users to browse services, leave reviews, and visualize ratings through interactive charts and graphs.",
    features: [
      "Service Listings",
      "Review System",
      "Data Visualization",
      "Payment Integration",
      "User Profiles",
      "Rating System",
    ],
    technologies: ["React", "Express.js", "MongoDB", "Stripe", "JWT"],
    status: "completed"
  },
  {
    id: 8,
    title: "Learning Platform",
    description: "Full-featured Learning platform with user authentication",
    image: "/projects/project3.jpg",
    tags: [
      "React",
      "NodeJs",
      "Firebase",
      "TailwindCSS",
      "React Router Dom",
      "SwetAlert",
      "DaisyUI",
    ],
    demoUrl: "https://es6-tutorial-1c39e.web.app/",
    githubUrl: "https://github.com/anamul101/learning-platform-clinet",
    projectdetailsUrl: "/projects/learning-platform",
    completedAt: "June 10, 2023",
    fullDescription:
      "An interactive learning platform offering various courses with progress tracking and user authentication.",
    features: [
      "Course Management",
      "Progress Tracking",
      "User Authentication",
      "Interactive Lessons",
      "Admin Panel",
      "Certificate Generation",
    ],
    technologies: ["React", "Firebase", "Tailwind CSS", "React Router"],
    status: "completed"
  },
  {
    id: 9,
    title: "Quiz Makers Web Application",
    description:
      "Quiz Makers web application with dynamic quiz generation and real-time scoring.",
    image: "/projects/project4.jpg",
    tags: ["React", "TailwindCSS", "React Router Dom", "DaisyUI"],
    demoUrl: "https://grand-palmier-d59eab.netlify.app/",
    githubUrl: "https://github.com/anamul101/quiez-assignment",
    projectdetailsUrl: "/projects/quiz-makers-app",
    completedAt: "August 22, 2023",
    fullDescription:
      "A dynamic quiz application that allows users to create and take quizzes with real-time scoring and analytics.",
    features: [
      "Quiz Creation",
      "Real-time Scoring",
      "Analytics Dashboard",
      "User Management",
      "Multiple Question Types",
    ],
    technologies: ["React", "Tailwind CSS", "React Router", "Context API"],
    status: "completed"
  },
];

const projectTypes = ["all", "completed", "ongoing"];

// Project Details Modal Component with Smooth Animations
const ProjectModal = ({ project, isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div 
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* Header */}
              <div className="relative p-6 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-white transition-colors bg-gray-700/50 rounded-full p-1"
                >
                  <X size={20} />
                </motion.button>
                <motion.h2 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl text-start font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  {project.title}
                </motion.h2>
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-2 mt-2"
                >
                  {project.status === "ongoing" ? (
                    <span className="flex items-center gap-1 px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                      <Clock size={14} />
                      In Progress
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      <CheckCircle size={14} />
                      Completed
                    </span>
                  )}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Project Image */}
                <motion.div 
                  className="mb-6 rounded-xl overflow-hidden"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-300 my-2 text-start leading-relaxed"
                >
                  {project.fullDescription}
                </motion.p>
                
                {/* Features */}
                <motion.div 
                  className="mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-start bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features?.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center gap-2 text-gray-300"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </div>
                </motion.div>

                {/* Technologies */}
                <motion.div 
                  className="mb-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="text-2xl font-semibold mb-3 text-start bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 rounded-full text-sm font-medium border border-purple-500/20"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Links */}
                <motion.div 
                  className="flex justify-between items-center gap-4 pt-4 border-t border-gray-700"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition-all"
                    >
                      <Github size={16} />
                      View Code
                    </motion.a>
                  </div>
                  
                  <motion.div 
                    className="flex justify-end items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    <span className="text-sm text-gray-400">
                      {project.status === "ongoing" ? "Expected: " : "Completed on: "}
                      <span className="text-white font-medium">{project.completedAt}</span>
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeType, setActiveType] = useState("completed"); // Default to "completed"
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

  const filteredProjects = projects.filter(
    (project) => activeType === "all" || project.status === activeType
  );

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Calculate stats
  const completedCount = projects.filter(p => p.status === "completed").length;
  const ongoingCount = projects.filter(p => p.status === "ongoing").length;

  return (
    <motion.section 
      ref={sectionRef}
      id="projects" 
      className="py-16 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isSectionVisible ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Background Decoration */}
      <motion.div 
        className="absolute inset-0 opacity-5"
        initial={{ scale: 0.8 }}
        animate={isSectionVisible ? { scale: 1 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl"
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
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={isSectionVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <motion.p 
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isSectionVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </motion.p>
        </motion.div>

        {/* Project Type Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={isSectionVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.button
            onClick={() => setActiveType("completed")}
            className={cn(
              "px-6 py-2.5 rounded-full cursor-pointer transition-all duration-300 capitalize font-medium flex items-center gap-2",
              activeType === "completed"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700 hover:border-purple-500"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CheckCircle size={18} />
            Completed ({completedCount})
          </motion.button>
          <motion.button
            onClick={() => setActiveType("ongoing")}
            className={cn(
              "px-6 py-2.5 rounded-full cursor-pointer transition-all duration-300 capitalize font-medium flex items-center gap-2",
              activeType === "ongoing"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700 hover:border-purple-500"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Clock size={18} />
            In Progress ({ongoingCount})
          </motion.button>
          <motion.button
            onClick={() => setActiveType("all")}
            className={cn(
              "px-6 py-2.5 rounded-full cursor-pointer transition-all duration-300 capitalize font-medium flex items-center gap-2",
              activeType === "all"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25 scale-105"
                : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700 hover:border-purple-500"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code2 size={18} />
            All Projects ({projects.length})
          </motion.button>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeType}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl overflow-hidden shadow-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                onClick={() => handleProjectClick(project)}
              >
                <div className="h-48 overflow-hidden relative">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  {/* Status Badge */}
                  <motion.div 
                    className="absolute top-4 right-4"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.status === "ongoing" ? (
                      <span className="flex items-center gap-1 px-3 py-1 bg-yellow-500/90 text-white rounded-full text-xs backdrop-blur-sm">
                        <Clock size={12} />
                        In Progress
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 px-3 py-1 bg-green-500/90 text-white rounded-full text-xs backdrop-blur-sm">
                        <CheckCircle size={12} />
                        Completed
                      </span>
                    )}
                  </motion.div>
                </div>
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-semibold mb-1 text-primary "
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <motion.span
                        key={index}
                        className="px-2 py-1 text-xs font-medium border border-gray-700 rounded-full bg-gray-800/50 text-gray-300"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium text-gray-400">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <motion.a
                        whileHover={{ scale: 1.2, color: "#8b5cf6" }}
                        whileTap={{ scale: 0.9 }}
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, color: "#8b5cf6" }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project);
                      }}
                      className="cursor-pointer flex items-center gap-2 px-3 py-2 text-sm text-gray-300 border border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white hover:border-purple-500 transition-all"
                    >
                      <Info size={16} />
                      Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ y: 20, opacity: 0 }}
          animate={isSectionVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 cosmic-button bg-gradient-to-r from-gray-600 to-gray-900 border border-gray-700 rounded-md text-gray-300 font-semibold  transition-all duration-300 group/btn"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/anamul101"
          >
            Check My GitHub <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-500/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, 50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </motion.section>
  );
};