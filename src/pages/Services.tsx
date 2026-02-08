import { Code, Search, Cloud, Bot, Factory, Check } from "lucide-react";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Web & Software Development",
      description:
        "Custom web applications and software solutions built with modern technologies for optimal performance and scalability.",
      benefits: [
        "Responsive web design for all devices",
        "Custom software tailored to your needs",
        "Modern technology stack (React, Node.js, Python)",
        "Scalable architecture for future growth",
        "Clean, maintainable code",
        "Full-stack development expertise",
      ],
    },
    {
      icon: <Search size={40} />,
      title: "Digital Marketing & SEO",
      description:
        "Comprehensive digital marketing strategies and SEO optimization to boost your online visibility and drive qualified traffic.",
      benefits: [
        "SEO optimized website development",
        "Keyword research and optimization",
        "Content marketing strategies",
        "Google ranking improvement",
        "Social media integration",
        "Analytics and performance tracking",
      ],
    },
    {
      icon: <Cloud size={40} />,
      title: "Cloud Customization",
      description:
        "Scalable cloud solutions designed to enhance business efficiency, reduce costs, and improve operational flexibility.",
      benefits: [
        "AWS, Azure, and GCP expertise",
        "Cloud migration services",
        "Infrastructure optimization",
        "Cost-effective solutions",
        "High availability and disaster recovery",
        "Secure cloud architecture",
      ],
    },
    {
      icon: <Bot size={40} />,
      title: "AI Chat Support & Automation",
      description:
        "Intelligent AI chatbot solutions to automate customer support, enhance user experience, and streamline operations.",
      benefits: [
        "24/7 automated customer support",
        "Natural language processing",
        "Multi-channel integration",
        "Reduced support costs",
        "Improved customer satisfaction",
        "Custom AI training",
      ],
    },
    {
      icon: <Factory size={40} />,
      title: "Custom Industrial Applications",
      description:
        "Specialized software systems designed for manufacturing, enterprise operations, and industrial automation.",
      benefits: [
        "Manufacturing execution systems",
        "Inventory management solutions",
        "Production tracking systems",
        "Quality control automation",
        "Real-time monitoring dashboards",
        "System integrations",
      ],
    },
  ];

  return (
    <div className="bg-white">

      {/* ================= HERO (Same as Home & About) ================= */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-white px-4 overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://mytechdecisions.com/wp-content/uploads/2020/05/AdobeStock_291716289-1000x500.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            Comprehensive technology solutions designed to drive your business forward
          </p>
        </div>
      </section>

      {/* ================= SERVICES LIST ================= */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto space-y-16">

          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Left */}
              <div className="flex-1">
                <div className="bg-black text-white p-6 rounded-lg inline-block mb-4">
                  {service.icon}
                </div>

                <h2 className="text-xl md:text-2xl font-bold mb-3">
                  {service.title}
                </h2>

                <p className="text-sm md:text-base text-gray-700 mb-5">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-800 transition"
                >
                  Get Started
                </Link>
              </div>

              {/* Right */}
              <div className="flex-1 bg-gray-50 p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <Check size={18} className="mt-1 text-black" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-14 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Why Choose Our Services?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <h3 className="font-semibold mb-1">Client Satisfaction</h3>
              <p className="text-sm text-gray-400">
                Excellence in every project
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold mb-2">Fast</div>
              <h3 className="font-semibold mb-1">Delivery</h3>
              <p className="text-sm text-gray-400">
                Agile and efficient execution
              </p>
            </div>

            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <h3 className="font-semibold mb-1">Support</h3>
              <p className="text-sm text-gray-400">
                Dedicated client assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-14 px-4 bg-gray-50 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
          Contact EliteCrows Infotech today for web development, software solutions,
          SEO services, AI automation, and cloud customization.
        </p>

        <Link
          to="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition"
        >
          Contact Us Now
        </Link>
      </section>

    </div>
  );
}

export default Services;
