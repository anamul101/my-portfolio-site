import { useState } from "react";
import { ArrowRight, ExternalLink, Github, Info, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Used Products Resale",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.jpg",
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
    // Add more details for the popup
    fullDescription:
      "A comprehensive e-commerce platform for buying and selling used products with user authentication, product management, and secure payments.",
    features: [
      "User Authentication",
      "Product Management",
      "Real-time Chat",
      "Secure Payments",
      "Admin Dashboard",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind CSS"],
  },
  {
    id: 2,
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
    fullDescription:
      "A platform for service providers to manage their services and for customers to leave reviews with data visualization features.",
    features: [
      "Service Management",
      "Review System",
      "Data Visualization",
      "Payment Integration",
      "User Profiles",
    ],
    technologies: ["React", "Express.js", "MongoDB", "Stripe", "JWT"],
  },
  {
    id: 3,
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
    fullDescription:
      "An interactive learning platform offering various courses with progress tracking and user authentication.",
    features: [
      "Course Management",
      "Progress Tracking",
      "User Authentication",
      "Interactive Lessons",
      "Admin Panel",
    ],
    technologies: ["React", "Firebase", "Tailwind CSS", "React Router"],
  },
  {
    id: 4,
    title: "Quiz Makers web application",
    description:
      "Quiz Makers web application with dynamic quiz generation and real-time scoring.",
    image: "/projects/project4.jpg",
    tags: ["React", "TailwindCSS", "React Router Dom", "DaisyUI"],
    demoUrl: "https://grand-palmier-d59eab.netlify.app/",
    githubUrl: "https://github.com/anamul101/quiez-assignment",
    projectdetailsUrl: "/projects/quiz-makers-app",
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
  },
  {
    id: 5,
    title: "Quiz Makers web application",
    description:
      "Quiz Makers web application with dynamic quiz generation and real-time scoring.",
    image: "/projects/project4.jpg",
    tags: ["React", "TailwindCSS", "React Router Dom", "DaisyUI"],
    demoUrl: "https://grand-palmier-d59eab.netlify.app/",
    githubUrl: "https://github.com/anamul101/quiez-assignment",
    projectdetailsUrl: "/projects/quiz-makers-app",
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
  },
];

// Project Details Modal Component
const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative p-6 border-b">
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={24} />
          </button>
          <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
          <p className="text-muted-foreground mt-2">
            {project.fullDescription}
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Project Image */}
          <div className="mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          {/* Features */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.features?.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4 border-t">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Github size={16} />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-1 text-primary">
                {" "}
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                {project.description}
              </p>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center space-x-4">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={25} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={25} />
                      </a>
                    </div>
                    {/* <button
                      onClick={() => handleProjectClick(project)}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Info size={20} />
                    </button> */}
                    <button
                      onClick={() => handleProjectClick(project)}
                      className="flex items-center gap-2 px-2 py-2 hover:text-primary cursor-pointer border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Info size={25} />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/anamul101"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};
