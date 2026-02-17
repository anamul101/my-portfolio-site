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
      // Using Formspree endpoint
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

      // Clear form fields on success
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

  return (
    <section id="contact" className="pt-20 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Email</h4>
                  <a
                    href="mailto:mohammadanamul0000@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    mohammadanamul0000@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Phone</h4>
                  <a
                    href="tel:+8801882473710"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +880 1882473710
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Location</h4>
                  <p className="text-muted-foreground">
                    Faridpur, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex flex-col items-center">
              <h4 className="font-medium mb-4 text-center md:text-left">Connect With Me</h4>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-gray-600 to-gray-900   border border-gray-700 shadow-lg shadow-purple-900/40 rounded-md hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-gray-600 to-gray-900   border border-gray-700 shadow-lg shadow-purple-900/40 rounded-md hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-gray-600 to-gray-900   border border-gray-700 shadow-lg shadow-purple-900/40 rounded-md hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://facebook.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-r from-gray-600 to-gray-900   border border-gray-700 shadow-lg shadow-purple-900/40 rounded-md hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Mohammad Anamul..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="mohammadanamul0000@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-2 bg-gradient-to-r from-gray-600 to-gray-900 border border-gray-700 rounded-md font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
                  isSubmitting && "animate-pulse"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} className={cn(
                  "transition-transform",
                  !isSubmitting && "group-hover:translate-x-1"
                )} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};