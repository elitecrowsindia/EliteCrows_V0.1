import { ExternalLink, Code, Search, Bot, Factory, Globe } from "lucide-react";

function Portfolio() {
  const projects = [
    {
      category: "Web Development",
      icon: <Globe size={32} />,
      title: "E-Commerce Platform",
      description:
        "Full-featured online shopping platform with payment integration, inventory management, and customer analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      highlights: ["Responsive Design", "SEO Optimized", "Payment Gateway", "Admin Dashboard"],
    },
    {
      category: "Software Development",
      icon: <Code size={32} />,
      title: "Hospital Management System",
      description:
        "Comprehensive healthcare management solution for patient records, appointments, billing, and inventory.",
      technologies: ["React", "PostgreSQL", "Express", "TypeScript"],
      highlights: ["Patient Portal", "Appointments", "Billing System", "Reports"],
    },
    {
      category: "AI Solutions",
      icon: <Bot size={32} />,
      title: "Customer Support Chatbot",
      description:
        "AI chatbot for automated customer support with natural language processing.",
      technologies: ["Python", "TensorFlow", "React", "WebSocket"],
      highlights: ["24/7 Support", "Multi-language", "Context Awareness", "Self Learning"],
    },
    {
      category: "SEO & Digital Marketing",
      icon: <Search size={32} />,
      title: "Business Website Optimization",
      description:
        "Complete SEO overhaul resulting in 300% growth in organic traffic.",
      technologies: ["Technical SEO", "Content Strategy", "Analytics", "Schema"],
      highlights: ["Google Page 1", "Mobile Optimized", "Speed Boost", "Conversions"],
    },
    {
      category: "Industrial Applications",
      icon: <Factory size={32} />,
      title: "Manufacturing Execution System",
      description:
        "Real-time production tracking and quality control system.",
      technologies: ["Python", "PostgreSQL", "React", "IoT"],
      highlights: ["Live Monitoring", "Quality Control", "Inventory", "Analytics"],
    },
    {
      category: "Web Development",
      icon: <Globe size={32} />,
      title: "Restaurant Booking System",
      description:
        "Online reservation platform with table management and payments.",
      technologies: ["React", "Node.js", "MySQL", "Payments"],
      highlights: ["Online Booking", "Table Mgmt", "Payments", "Reviews"],
    },
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "95%", label: "Client Retention" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="bg-white">

      {/* ================= HERO (Same as Other Pages) ================= */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-white px-4 overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://blog.imointerns.com/wp-content/uploads/2023/10/IMG-20231020-WA0001.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Our Portfolio
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            Successful digital solutions delivered across Tamil Nadu
          </p>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 text-center border rounded-lg hover:border-black transition"
            >
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Featured Projects
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Web, software, AI, and SEO solutions built for real business impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden hover:shadow-xl transition group"
              >
                {/* Top */}
                <div className="bg-black text-white p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold">
                      {project.category}
                    </span>
                    <div className="group-hover:scale-110 transition">
                      {project.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {project.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="p-5">
                  <h4 className="text-sm font-semibold mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-sm font-semibold mb-2">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <ExternalLink size={14} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-14 px-4 bg-black text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Start Your Project Today
        </h2>
        <p className="text-sm md:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
          Let’s build scalable, high-quality digital solutions together.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          Get a Free Consultation
        </a>
      </section>

    </div>
  );
}

export default Portfolio;
