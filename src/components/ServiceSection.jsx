import React from 'react';
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
  Layers
} from 'lucide-react';

export default function ServiceSection() {
  const services = [
    {
      id: 1,
      icon: <Code2 className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Modern, responsive frontend development using React, Next.js, and Vue.js. Pixel-perfect implementation of designs with animations and interactions.",
      features: [
        "React/Next.js Development",
        "Responsive Design",
        "Performance Optimization",
        "Cross-browser Testing"
      ],
      price: "$999 - $4,999",
      delivery: "2-4 weeks",
      color: "from-purple-500 to-indigo-500",
      tags: ["React", "Next.js", "Tailwind", "TypeScript"]
    },
    {
      id: 2,
      icon: <Server className="w-6 h-6" />,
      title: "Backend Development",
      description: "Scalable backend solutions with Node.js, Python, and cloud services. RESTful APIs, databases, and server infrastructure.",
      features: [
        "Node.js/Express",
        "Database Design",
        "API Development",
        "Authentication"
      ],
      price: "$1,499 - $6,999",
      delivery: "3-6 weeks",
      color: "from-blue-500 to-cyan-500",
      tags: ["Node.js", "Python", "MongoDB", "PostgreSQL"]
    },
    {
      id: 3,
      icon: <Layers className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "End-to-end web application development with modern tech stack. From concept to deployment with full documentation.",
      features: [
        "Full Stack MERN",
        "Real-time Features",
        "Payment Integration",
        "DevOps & Deployment"
      ],
      price: "$2,999 - $9,999",
      delivery: "4-8 weeks",
      color: "from-green-500 to-emerald-500",
      tags: ["MERN Stack", "Next.js", "AWS", "Docker"]
    },
    {
      id: 4,
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "e-Commerce Solutions",
      description: "Complete e-commerce platforms with secure payment gateways, inventory management, and admin dashboard.",
      features: [
        "Shopify/WordPress",
        "Payment Gateway",
        "Product Management",
        "Order Tracking"
      ],
      price: "$1,999 - $7,999",
      delivery: "3-5 weeks",
      color: "from-orange-500 to-red-500",
      tags: ["Shopify", "WooCommerce", "Stripe", "PayPal"]
    },
    {
      id: 5,
      icon: <Gauge className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Website speed optimization and performance enhancement. Reduce loading time and improve Core Web Vitals.",
      features: [
        "Page Speed Audit",
        "Image Optimization",
        "Caching Strategy",
        "CDN Setup"
      ],
      price: "$499 - $2,499",
      delivery: "1-2 weeks",
      color: "from-yellow-500 to-orange-500",
      tags: ["Lighthouse", "Webpack", "CDN", "Optimization"]
    },
    {
      id: 6,
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native and Flutter. Native-like performance with single codebase.",
      features: [
        "React Native",
        "iOS & Android",
        "Push Notifications",
        "App Store Deployment"
      ],
      price: "$3,999 - $12,999",
      delivery: "6-12 weeks",
      color: "from-pink-500 to-rose-500",
      tags: ["React Native", "iOS", "Android", "Firebase"]
    }
  ];

  return (
    <section id="services" className="">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full mb-8 animate-pulse">
            <Code2 className="w-10 h-10 text-purple-400" />
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I provide a complete web development services 
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative"
            >
              {/* Card */}
              <div className="relative cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 h-full overflow-hidden">
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.4),transparent_50%)]" />
                </div>

                {/* Floating Icon Container */}
                <div className="absolute  left-1/2 -translate-x-1/2 z-20">
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center shadow-2xl group-hover:rotate-[360deg] transition-all duration-700 ease-out`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 ${service.color} rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-700`} />
                  </div>
                </div>

                {/* Service Number */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-gray-300 text-sm font-bold">0{service.id}</span>
                </div>

                {/* Content */}
                <div className="pt-25">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl  font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & Delivery */}
                  <div className="flex items-center justify-between mb-8 pt-6 border-t border-gray-700">
                    <div>
                      <div className="text-sm text-gray-400">Starting from</div>
                      <div className="text-2xl font-bold  text-green-400">{service.price}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Delivery Time</div>
                      <div className="text-lg font-semibold text-gray-300">{service.delivery}</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full py-3 bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-xl text-gray-300 font-semibold hover:text-white hover:border-purple-500 hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-purple-700/30 transition-all duration-300 group/btn flex items-center justify-center gap-2">
                    Get This Service
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  {/* Popular Badge */}
                  {service.id === 3 && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xs font-semibold text-white animate-pulse">
                      Most Popular
                    </div>
                  )}
                </div>

                {/* Hover Effect Gradient Border */}
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
              </div>
            </div>
          ))}
        </div>


        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Projects Completed", value: "150+", icon: <CheckCircle className="w-5 h-5" /> },
            { label: "Happy Clients", value: "120+", icon: <Globe className="w-5 h-5" /> },
            { label: "Years Experience", value: "5+", icon: <Zap className="w-5 h-5" /> },
            { label: "Support Hours", value: "24/7", icon: <Cloud className="w-5 h-5" /> }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full mb-4">
                <div className="text-wihite">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}