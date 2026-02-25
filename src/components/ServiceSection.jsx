import React, { useEffect, useState, useRef } from 'react';
import { 
  Code2, 
  ShoppingBag, 
  Gauge,
  Server,
  Smartphone,
  Shield,
  Database,
  Cloud,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  Layers,
  Users,
  Clock,
  Award,
  Palette,
  ShoppingCart,
  Webhook
} from 'lucide-react';

// Counter Component
const Counter = ({ value, duration = 2000, symbol = "" }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const numericValue = parseInt(value.toString().replace('+', '').replace('/', ''));
    const end = numericValue;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <span ref={counterRef} className="text-3xl font-bold text-white mb-2">
      {count}{symbol}
    </span>
  );
};

// Animation Component for Fade In Up
const FadeInUp = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Animation Component for Scale In
const ScaleIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-75'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Animation Component for Slide In Left
const SlideInLeft = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Animation Component for Slide In Right
const SlideInRight = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Animation Component for Floating Effect
const FloatingAnimation = ({ children }) => {
  return (
    <div className="animate-float">
      {children}
    </div>
  );
};

// Animation Component for Pulse Effect
const PulseAnimation = ({ children }) => {
  return (
    <div className="animate-pulse-slow">
      {children}
    </div>
  );
};

export default function ServiceSection() {
  const services = [
    {
      id: 1,
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Modern, responsive frontend development using React, Next.js, and Vue.js. Pixel-perfect implementation of designs with animations and interactions.",
      features: [
        "React/Next.js Development",
        "Responsive Design",
        "Performance Optimization",
        "Cross-browser Testing",
        "While a business site with 5-10 pages."
      ],
      price: "$100 - $1,500",
      delivery: "2-4 weeks",
      color: "from-purple-500 to-indigo-500",
      tags: ["React", "Next.js", "Tailwind", "TypeScript"]
    },
    {
      id: 2,
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development",
      description: "Scalable backend solutions with Node.js, Express.js, and cloud services. RESTful APIs, databases, and server infrastructure.",
      features: [
        "Node.js/Express",
        "Database Design",
        "API Development",
        "Authentication",
        "While a business site with 5-10 pages."
      ],
      price: "$100 - $1,500",
      delivery: "3-6 weeks",
      color: "from-blue-500 to-cyan-500",
      tags: ["Node.js", "Express.js", "MongoDB", "AWS"]
    },
    {
      id: 3,
      icon: <Layers className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "End-to-end web application development with modern tech stack. From concept to deployment with full documentation.",
      features: [
        "Full Stack MERN",
        "Real-time Features",
        "Payment Integration",
        "DevOps & Deployment",
        "While a business site with 5-10 pages."
      ],
      price: "$200 - $2,000",
      delivery: "4-8 weeks",
      color: "from-green-500 to-emerald-500",
      tags: ["MERN Stack", "Next.js", "PostgreSQL", "Docker"]
    },
    {
      id: 4,
      icon: <Webhook className="w-8 h-8" />,
      title: "WordPress Expert",
      description: "Complete WordPress solutions including custom themes, plugins, and full website development. Pixel perfect, responsive, and SEO optimized.",
      features: [
        "Custom Theme Development",
        "Plugin Development",
        "WooCommerce Setup",
        "SEO Optimization",
        "While a business site with 5-10 pages."
      ],
      price: "$100 - $1,500",
      delivery: "1-3 weeks",
      color: "from-blue-600 to-purple-600",
      tags: ["Divi", "Astra", "WooCommerce", "Elementor"]
    },
    {
      id: 5,
      icon: <Gauge className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Website speed optimization and performance enhancement. Reduce loading time and improve Core Web Vitals.",
      features: [
        "Page Speed Audit",
        "Image Optimization",
        "Caching Strategy",
        "CDN Setup",
        "Full website with WP Rocket plugin"
      ],
      price: "$50 - $500",
      delivery: "1-2 weeks",
      color: "from-yellow-500 to-orange-500",
      tags: ["Lighthouse", "Webpack", "CDN", "Optimization"]
    },
    {
      id: 6,
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "e-Commerce Solutions",
      description: "Complete e-commerce platforms with secure payment gateways, inventory management, and admin dashboard.",
      features: [
        "Shopify/WordPress",
        "Payment Gateway",
        "Product Management",
        "Order Tracking",
        "While a business site with 5-10 pages."
      ],
      price: "$100 - $1,500",
      delivery: "3-5 weeks",
      color: "from-orange-500 to-red-500",
      tags: ["Shopify", "WooCommerce", "Stripe", "PayPal"]
    }
  ];

  return (
    <section id="services" className="lg:pt-16 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with animations */}
        <FadeInUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              My <span className="text-primary"> Services</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              I provide complete web development & WordPress solutions
            </p>
          </div>
        </FadeInUp>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeInUp key={service.id} delay={index * 100}>
              <div className="group relative animate-card-enter" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Card */}
                <div className="relative cursor-pointer bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 h-full overflow-hidden">
                  
           
                  {/* Floating Icon Container */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-20">
                    <FloatingAnimation>
                      <div className={`relative w-20 h-20 bg-gradient-to-br rounded-full border border-gradient-to-br from-gray-900 to-gray-800 border-gray-600 flex items-center justify-center shadow-2xl group-hover:rotate-[360deg] transition-all duration-1500 ease-out`}>
                        <div className="text-primary animate-bounce-slow">
                          {service.icon}
                        </div>
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 ${service.color} rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-700`} />
                      </div>
                    </FloatingAnimation>
                  </div>

                  {/* Service Number with animation */}
                  <SlideInRight delay={index * 50}>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-gray-300 text-sm font-bold animate-pulse-slow">0{service.id}</span>
                    </div>
                  </SlideInRight>

                  {/* Content */}
                  <div className="pt-25">
                    {/* Tags with staggered animation */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.map((tag, tagIndex) => (
                        <ScaleIn key={tagIndex} delay={tagIndex * 50}>
                          <span 
                            className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-300 hover:scale-110 transition-transform duration-300"
                          >
                            {tag}
                          </span>
                        </ScaleIn>
                      ))}
                    </div>

                    {/* Title */}
                    <SlideInLeft delay={index * 50}>
                      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">
                        {service.title}
                      </h3>
                    </SlideInLeft>

                    {/* Description */}
                    <FadeInUp delay={index * 50}>
                      <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </FadeInUp>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <SlideInLeft key={featureIndex} delay={featureIndex * 50}>
                          <li className="flex items-start gap-3 group/feature">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" style={{ animationDelay: `${featureIndex * 100}ms` }} />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        </SlideInLeft>
                      ))}
                    </ul>

                    {/* Price & Delivery */}
                    <div className="flex items-center justify-between mb-8 pt-6 border-t border-gray-700">
                      <SlideInLeft delay={index * 50}>
                        <div>
                          <div className="text-sm text-gray-400">Starting from</div>
                          <div className="text-2xl font-bold text-green-500 animate-pulse-slow">{service.price}</div>
                        </div>
                      </SlideInLeft>
                      <SlideInRight delay={index * 50}>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">Delivery Time</div>
                          <div className="text-lg font-semibold text-gray-300">{service.delivery}</div>
                        </div>
                      </SlideInRight>
                    </div>

                    {/* CTA Button */}
                    <FadeInUp delay={index * 50}>
                      <button className="w-full py-3 bg-gradient-to-r from-gray-600 to-gray-900 border border-gray-700 rounded-xl text-gray-300 font-semibold hover:text-white cursor-pointer  transition-all duration-300 group/btn flex items-center justify-center gap-2">
                        Get This Service
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform animate-pulse" />
                      </button>
                    </FadeInUp>

                    {/* Popular Badge */}
                    {service.id === 3 && (
                      <PulseAnimation>
                        <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-semibold text-white">
                          Popular Service
                        </div>
                      </PulseAnimation>
                    )}
                  </div>

                 
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* Stats Bar with Auto Counter */}
        <div className="my-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                label: "Projects Completed", 
                value: "150", 
                symbol: "+", 
                icon: <CheckCircle className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              { 
                label: "Happy Clients", 
                value: "120", 
                symbol: "+", 
                icon: <Users className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              { 
                label: "Experience Years", 
                value: "4", 
                symbol: "+", 
                icon: <Award className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500"
              },
              { 
                label: "Support Hours", 
                value: "24", 
                symbol: "/7", 
                icon: <Clock className="w-8 h-8" />,
                color: "from-orange-500 to-red-500"
              }
            ].map((stat, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div 
                  className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center hover:border-purple-500 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl opacity-50 animate-pulse-slow" />
                  
                  {/* Icon Container */}
                  <FloatingAnimation>
                    <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-600 bg-opacity-10 rounded-2xl mb-4 group-hover:rotate-12 transition-all duration-500`}>
                      <div className="text-primary animate-bounce-slow">
                        {stat.icon}
                      </div>
                      {/* Glow Effect */}
                      <div className={`absolute inset-0 ${stat.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                    </div>
                  </FloatingAnimation>

                  {/* Counter with Auto Increment */}
                  <div className="relative">
                    <Counter value={stat.value} symbol={stat.symbol} />
                    <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </div>

      {/* Add these styles to your global CSS or in a style tag */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes card-enter {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .animate-card-enter {
          animation: card-enter 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}