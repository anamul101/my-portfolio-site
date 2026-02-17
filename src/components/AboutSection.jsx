import { Briefcase, Code, User, Code2, FileDown } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const leftContentVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const rightContentVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 30 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.6
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.4
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // Setup intersection observer
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: "-50px", // Slight offset for better timing
  });

  return (
    <motion.section
      id="about"
      className="px-4 relative lg:pt-16"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          variants={itemVariants}
        >
          About <span className="text-primary"> Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-6"
            variants={leftContentVariants}
          >
            <motion.h3 
              className="text-2xl font-semibold"
              variants={itemVariants}
            >
              Passionate Web Developer
            </motion.h3>

            <motion.p 
              className="text-muted-foreground text-justify"
              variants={itemVariants}
            >
              With a passion for clean code, modern design, and problem-solving, 
              I create front-end interfaces that feel smooth and engaging, while building reliable and efficient 
              back-end systems that power them. I focus on maintainability, scalability, 
              and best-practice development to deliver long-lasting results.
            </motion.p>

            <motion.p 
              className="text-muted-foreground text-justify"
              variants={itemVariants}
            >
              I've collaborated with businesses of all sizes from small startups to established 
              companies helping them turn ideas into polished digital experiences. 
              If you're looking for someone to bring your next project to life, I'm always excited to collaborate.
            </motion.p>
            
            <motion.p 
              className="text-muted-foreground text-justify"
              variants={itemVariants}
            >
              When I'm not coding, you'll find me outdoors, 
              listening to music, traveling, and exploring new adventures that inspire creativity.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
              variants={itemVariants}
            >
              <motion.a 
                href="#contact" 
                className="cosmic-button py-2 bg-gradient-to-r from-gray-600 to-gray-900 border border-gray-700 rounded-full text-gray-300 font-semibold transition-all duration-300 group/btn flex items-center justify-center"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Get In Touch
              </motion.a>

              <motion.button
                onClick={handleDownloadCV}
                className="px-6 cursor-pointer py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FileDown className="h-4 w-4" />
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Cards */}
          <motion.div 
            className="grid grid-cols-1 gap-6"
            variants={rightContentVariants}
          >
            <motion.div 
              className="gradient-border p-6 card-hover"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 rounded-full bg-primary/10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Code className="h-6 w-6 text-primary" />
                </motion.div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Developer</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks like React, Next.js, and Node.js.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="gradient-border p-6 card-hover"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 rounded-full bg-primary/10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Code2 className="h-6 w-6 text-primary" />
                </motion.div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">WordPress Developer</h4>
                  <p className="text-muted-foreground">
                    Custom theme development, plugin customization, and performance 
                    optimization for WordPress websites with WooCommerce integration.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="gradient-border p-6 card-hover"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="p-3 rounded-full bg-primary/10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Briefcase className="h-6 w-6 text-primary" />
                </motion.div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies, client communication, and timely delivery.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};