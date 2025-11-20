import { ArrowRight, ExternalLink, Github,Info } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Used Products Resale",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.jpg",
    tags: ["JavaScript", "ReactJs", "NodeJs", "ExpressJs", "MongoDB", "Firebase", "TailwindCSS"],
    demoUrl: "https://classice-phone-dc43a.web.app/",
    githubUrl: "https://github.com/anamul101/Classice-phone-client",
    projectdetailsUrl: "/projects/used-products-resale",
  },
  {
    id: 2,
    title: "Service Review App",
    description:
      "Interactive Service Review App with data visualization.",
    image: "/projects/project2.jpg",
    tags: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB", "Firebase", "Stripe", "JWT", "Tailwind CSS",],
    demoUrl: "https://mw-photography.web.app/",
    githubUrl: "https://github.com/anamul101/photography-studio-client",
    projectdetailsUrl: "/projects/service-review-app",
  },
  {
    id: 3,
    title: "Learning Platform",
    description:
      "Full-featured Learning platform with user authentication",
    image: "/projects/project3.jpg",
    tags: ["React", "NodeJs","Firebase","TailwindCSS","React Router Dom", "SwetAlert","DaisyUI"],
    demoUrl: "https://es6-tutorial-1c39e.web.app/",
    githubUrl: "https://github.com/anamul101/learning-platform-clinet",
    projectdetailsUrl: "/projects/learning-platform",
  },
  {
    id: 4,
    title: "Quiz Makers web application",
    description:
      "Quiz Makers web application with dynamic quiz generation and real-time scoring.",
    image: "/projects/project4.jpg",
    tags: ["React","TailwindCSS","React Router Dom","DaisyUI"],
    demoUrl: "https://grand-palmier-d59eab.netlify.app/",
    githubUrl: "https://github.com/anamul101/quiez-assignment",
    projectdetailsUrl: "/projects/quiz-makers-app",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
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

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.projectdetailsUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Info size={20} />
                    </a>
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
            href="https://github.com/anamul101"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
