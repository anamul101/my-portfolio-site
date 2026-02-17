import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Facebook,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xwvnbwla', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setFormData({
        name: "",
        email: "",
        message: ""
      });

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const contactInfoVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const formVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="lg:pt-20 px-4 relative bg-secondary/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          variants={itemVariants}
        >
          Get In <span className="text-primary"> Touch</span>
        </motion.h2>

        <motion.p 
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-8"
            variants={contactInfoVariants}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6"
              variants={itemVariants}
            >
              Contact Information
            </motion.h3>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              {[
                {
                  icon: Mail,
                  title: "Email",
                  content: "mohammadanamul0000@gmail.com",
                  href: "mailto:mohammadanamul0000@gmail.com"
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+880 1882473710",
                  href: "tel:+8801882473710"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Faridpur, Dhaka, Bangladesh",
                  href: null
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div 
                    className="p-3 rounded-full bg-primary/10"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <item.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="font-medium text-start">{item.title}</h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">
                        {item.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="pt-8 flex flex-col items-center"
              variants={itemVariants}
            >
              <motion.h4 
                className="font-medium mb-4 text-center md:text-left"
                variants={itemVariants}
              >
                Connect With Me
              </motion.h4>
              <motion.div 
                className="flex justify-center md:justify-start space-x-4"
                variants={containerVariants}
              >
                {[
                  { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
                  { icon: Twitter, href: "https://twitter.com/yourusername" },
                  { icon: Instagram, href: "https://instagram.com/yourusername" },
                  { icon: Facebook, href: "https://facebook.com/yourusername" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-gray-600 to-gray-900 border border-gray-700 shadow-lg shadow-purple-900/40 rounded-md hover:bg-primary/20 transition-all duration-300"
                    variants={socialIconVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-card p-8 rounded-lg shadow-sm"
            variants={formVariants}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-6"
              variants={itemVariants}
            >
              Send a Message
            </motion.h3>

            <motion.form 
              className="space-y-6" 
              onSubmit={handleSubmit}
              variants={containerVariants}
            >
              {[
                { id: "name", label: "Your Name", type: "text", placeholder: "Mohammad Anamul..." },
                { id: "email", label: "Your Email", type: "email", placeholder: "mohammadanamul0000@gmail.com" }
              ].map((field) => (
                <motion.div 
                  key={field.id}
                  variants={itemVariants}
                >
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium mb-2"
                  >
                    {field.label}
                  </label>
                  <motion.input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder={field.placeholder}
                    whileFocus={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                </motion.div>
              ))}

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              </motion.div>

              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-2 bg-gradient-to-r from-gray-600 to-gray-900 border border-gray-700 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
                    isSubmitting && "animate-pulse"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <motion.div
                    animate={isSubmitting ? { x: [0, 5, 0] } : {}}
                    transition={{ repeat: isSubmitting ? Infinity : 0, duration: 1 }}
                  >
                    <Send size={18} className={cn(
                      "transition-transform",
                      !isSubmitting && "group-hover:translate-x-1"
                    )} />
                  </motion.div>
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};