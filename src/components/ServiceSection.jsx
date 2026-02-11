import React from 'react';
import { 
  Palette, 
  ShoppingCart, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function ServiceSection() {
  const services = [
    {
      id: 1,
      icon: <Palette className="w-8 h-8" />,
      title: "Web Design & Development",
      description: "I will make a clean, unique, and professional-looking WordPress website. My design must be responsive in all devices, pixel perfect, w3c valid code, clean coding and SEO friendly.",
      features: [
        "Responsive Design",
        "Pixel Perfect",
        "Clean Code",
        "SEO Friendly"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "e-Commerce Solutions",
      description: "Do you want to sell your product online? I will build your online eCommerce WordPress website with a very professional looking.",
      features: [
        "Online Store Setup",
        "Secure Payments",
        "Inventory Management",
        "Real-time Processing"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      icon: <Zap className="w-8 h-8" />,
      title: "Page Speed Optimization",
      description: "I am the fuel behind the high speed of innumerable fast-running WordPress websites.",
      features: [
        "Performance Audit",
        "Loading Optimization",
        "Caching Solutions",
        "Image Optimization"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="services" className="">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I provide a complete Website developmnent services
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
              <div className="relative bg-primary/10 p-8  rounded-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full">
                {/* Gradient Border Effect */}
                
                
                {/* Service Number */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">0{service.id}</span>
                </div>

                {/* Content */}
                <div className="pt-16 pb-8 px-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group/btn">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Hover Effect Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>

              {/* Background Decoration */}
              <div className="absolute -z-10 inset-0 bg-gradient-to-br from-gray-100 to-white rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}