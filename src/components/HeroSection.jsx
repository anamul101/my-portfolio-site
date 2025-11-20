import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16"
    >
      <div className="flex flex-col-reverse md:flex-row w-full max-w-7xl items-center gap-8 md:gap-12">
        {/* Text Content */}
        <div className="md:basis-2/3 w-full text-center md:text-left z-10">
          <div className="space-y-6">
            <h1 className="text-2xl md:text-6xl font-bold tracking-tight">
              {/* <span className="opacity-0 animate-fade-in"> Full-stack developer</span> */}
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Full-Stack 
              </span>
              
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                Developer
              </span>
            </h1>
            
            <h1 className="text-3xl md:text-4xl">
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

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="https://drive.google.com/drive/folders/1hkItcdayi3Nws_YZyUlymZtzAF2bB_3K?usp=sharing" target="_blank" className="cosmic-button">
                View My Internship Report
              </a>
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
      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </a>
    </section>
  );
};