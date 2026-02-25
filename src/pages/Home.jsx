// src/pages/Home.jsx
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import ServiceSection from "../components/ServiceSection";
import {FloatingWhatsApp} from 'react-floating-whatsapp'; // Default import

export const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Background Effects */}
        <StarBackground />
     
        {/* Navbar */}
        <Navbar />
        
        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ServiceSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
      
      {/* WhatsApp Button - Outside main div for proper positioning */}
      <FloatingWhatsApp
        phoneNumber="8801882473710"
        accountName="Mohammad Anamul"
        avatar="/projects/anamul.png"
        chatMessage="Hello! How can I help you with your project?"
        placeholder="Type your message..."
        statusMessage="Typically replies within 1 hour"
        darkMode={true} // Changed from "true" (string) to {false} (boolean)
        allowEsc={true} // Changed to boolean
        notification={true}
        notificationSound={true}
        notificationDelay={30}
        allowClickOutside={true}
        buttonStyle={{
          width: '60px',
          height: '60px',
          backgroundColor: '#25D366',
        }}
      />
    </>
  );
};