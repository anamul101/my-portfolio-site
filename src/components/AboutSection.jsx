import { Briefcase, Code, User, Code2, FileDown } from "lucide-react";

export const AboutSection = () => {
  const handleDownloadCV = () => {
    // Replace this URL with the actual path to your CV PDF file
    const cvUrl = "/cv/Resume_of_Mohammad_Anamul.pdf"; // Update this path
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Resume_of_Mohammad_Anamul.pdf"; // Set the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="px-4 relative">
      {" "}
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer
            </h3>

            <p className="text-muted-foreground text-justify">
              With a passion for clean code, modern design, and problem-solving, 
              I create front-end interfaces that feel smooth and engaging, while building reliable and efficient 
              back-end systems that power them. I focus on maintainability, scalability, 
              and best-practice development to deliver long-lasting results.
            </p>

            <p className="text-muted-foreground text-justify">
              I’ve collaborated with businesses of all sizes from small startups to established 
              companies helping them turn ideas into polished digital experiences. 
              If you’re looking for someone to bring your next project to life, I’m always excited to collaborate.
            </p>
            <p className="text-muted-foreground text-justify">
              When I’m not coding, you’ll find me outdoors, 
              listening to music, traveling, and exploring new adventures that inspire creativity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button py-2 bg-gradient-to-r from-gray-600 to-gray-900 border border-gray-700 rounded-full text-gray-300 font-semibold transition-all duration-300 group/btn flex items-center justify-center">
                Get In Touch
              </a>

              <button
                onClick={handleDownloadCV}
                className="px-6 cursor-pointer py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FileDown className="h-4 w-4" />
                Download CV
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Developer</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks like React, Next.js, and Node.js.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">WordPress Developer</h4>
                  <p className="text-muted-foreground">
                    Custom theme development, plugin customization, and performance 
                    optimization for WordPress websites with WooCommerce integration.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies, client communication, and timely delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};