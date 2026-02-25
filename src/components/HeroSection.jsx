import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";
import { SiFiverr, SiUpwork, SiFreelancer } from "react-icons/si";

export const HeroSection = () => {
  const roles = [
    { text: "Full-Stack Developer", gradient: "from-purple-800 to-pink-600" },
    { text: "Front-End Developer", gradient: "from-purple-800 to-pink-600" },
    { text: "Back-End Developer", gradient: "from-purple-800 to-pink-600" },
    { text: "WordPress Expert", gradient: "from-purple-800 to-pink-600" }
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isWhite, setIsWhite] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setIsWhite(false);
      
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsVisible(true);
      }, 500);
      
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16"
    >
      <div className="flex flex-col-reverse md:flex-row w-full max-w-7xl items-center gap-8 md:gap-12">
        {/* Text Content */}
        <div className="md:basis-2/3 w-full text-center md:text-left z-10 animate-fade-in-delay-1">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl sm:text-6xl font-bold tracking-tight">
              <span className="opacity-100">
                I'm a{" "}
              </span>
              
              <span 
                className={`inline-block transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${
                  isWhite 
                    ? 'bg-gradient-to-r from-purple-800 to-pink-600 text-transparent bg-clip-text' 
                    : `bg-gradient-to-r ${roles[currentRoleIndex].gradient} text-transparent bg-clip-text`
                }`}
              >
                {roles[currentRoleIndex].text}
              </span>
            </h1>
            
            <h1 className="text-2xl md:text-4xl">
              <span className="opacity-0 animate-fade-in"> Graduated</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Govt Rajendra College
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              I design and develop modern, responsive websites that blend creativity with performance. As a <b>Full-stack developer</b>, 
              I focus on clean code, smooth user experiences, and visuals that make a strong impact.
            </p>

            <div className="mb-4 opacity-0 animate-fade-in-delay-4 gap-6 flex justify-center md:justify-start">
              {/* Fiverr Icon with Tooltip */}
              <div className="relative group">
                <a 
                  href="#" 
                  target="_blank" 
                  className="cosmic-button bg-gradient-to-r from-gray-600 to-gray-900 border border-gray-700 rounded-full text-gray-300 font-semibold transition-all duration-300 group/btn p-3 flex items-center justify-center"
                >
                  <SiFiverr className="w-6 h-6" />
                </a>
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-gray-700">
                  Fiverr
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 border-r border-b border-gray-700"></span>
                </span>
              </div>

              {/* Upwork Icon with Tooltip */}
              <div className="relative group">
                <a 
                  href="#" 
                  target="_blank" 
                  className="cosmic-button bg-gradient-to-r from-gray-600 to-gray-900 border border-gray-700 rounded-full text-gray-300 font-semibold transition-all duration-300 group/btn p-3 flex items-center justify-center"
                >
                  <SiUpwork className="w-6 h-6" />
                </a>
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-gray-700">
                  Upwork
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 border-r border-b border-gray-700"></span>
                </span>
              </div>

              {/* Freelancer Icon with Tooltip */}
              <div className="relative group">
                <a 
                  href="#" 
                  target="_blank" 
                  className="cosmic-button bg-gradient-to-r from-gray-600 to-gray-900 border border-gray-700 rounded-full text-gray-300 font-semibold transition-all duration-300 group/btn p-3 flex items-center justify-center"
                >
                  <SiFreelancer className="w-6 h-6" />
                </a>
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-gray-700">
                  Freelancer
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 border-r border-b border-gray-700"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Container */}
        <div className="basis-1/3 flex justify-center md:justify-end w-full max-w-xs md:max-w-md">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/24 blur-xl animate-pulse"></div>
            <div className="relative rounded-full bg-gradient-to-br from-primary/20 to-background p-1 shadow-lg">
              <div className="bg-black/40 rounded-full p-2">
                <img 
                  src="/projects/anamul.png" 
                  alt="Anamul Haque"
                  className="rounded-full w-full h-auto object-cover aspect-square shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </a>
    </section>
  );
};