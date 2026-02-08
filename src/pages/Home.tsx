import { Link } from "react-router-dom";
import { Code, Search, Cloud, Bot, Factory, TrendingUp, Shield, Users, Award, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

const bgImages = [
  "https://thumbs.dreamstime.com/b/cloud-computing-network-connecting-data-digital-matrix-under-dark-sky-icons-representing-global-exchange-transformation-373242663.jpg",
  // "https://www.shutterstock.com/image-photo/person-using-magnifying-glass-on-600nw-2637787885.jpg",
  // "https://www.shutterstock.com/image-photo/black-male-developer-typing-on-260nw-2324952291.jpg",
  // "https://guptadeepak.com/content/images/size/w2000/2024/07/The-Future-of-AI-and-Its-Impact-on-Humanity.webp",
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
{ icon: <Code size={32} />, title: "Web & Software Development", description: "Custom websites and software solutions." },
{ icon: <Search size={32} />, title: "Digital Marketing & SEO", description: "SEO focused websites & marketing strategies." },
{ icon: <Cloud size={32} />, title: "Cloud Customization", description: "Scalable cloud solutions for businesses." },
{ icon: <Bot size={32} />, title: "AI Chat Support", description: "Smart chatbot automation systems." },
{ icon: <Factory size={32} />, title: "Industrial Applications", description: "Enterprise & industrial software systems." },
{ icon: <ShieldCheck size={32} />, title: "Cybersecurity & System Protection", description: "Secure applications, data protection, and vulnerability assessments." }

  ];

  const features = [
    { icon: <TrendingUp size={26} />, title: "Proven Track Record", description: "Successful projects across Tamil Nadu" },
    { icon: <Shield size={26} />, title: "Secure & Scalable", description: "Industry-standard security practices" },
    { icon: <Users size={26} />, title: "Expert Team", description: "Skilled professionals" },
    { icon: <Award size={26} />, title: "Quality Assured", description: "Strict quality control" },
  ];

  const technologies = [
  { name: "React", logo: "https://cdn.simpleicons.org/react/000000" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/000000" },
  { name: "Express", logo: "https://cdn.simpleicons.org/express/000000" },
  { name: "Django", logo: "https://cdn.simpleicons.org/django/000000" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python/000000" },
  { name: "Java", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtU6sGWtWlnyQhF5sxSLvnM98ZoWrHuFOsxQ&s" },
  { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/000000" },
  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/000000" },
  { name: "AWS", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoW39H9P0lr6X_YqK8SwvU2jpdGNytmDQN3A&s" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker/000000" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git/000000" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github/000000" },
  { name: "Linux", logo: "https://cdn.simpleicons.org/linux/000000" },
  { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/000000" },
  { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/000000" },
  { name: "Redis", logo: "https://cdn.simpleicons.org/redis/000000" },
  { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes/000000" },
];

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-4">

        {bgImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
        ))}

        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
  Reliable Web & Software Development Partner for {" "}
  <span
    className="
      font-medium
      bg-gradient-to-b
      from-yellow-300
      via-yellow-400
      to-orange-500
      bg-clip-text
      text-transparent
      drop-shadow-[0_0_4px_rgba(255,193,7,0.6)]
    "
  >
    Your Business Growth
  </span>
</h1>


          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8">
            EliteCrows Infotech builds modern websites, software solutions,
            AI chat systems, and cloud-based applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Start Project
            </Link>

            <Link
              to="/services"
              className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
<section className="py-16 px-4 bg-gray-50">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-2xl md:text-4xl font-bold mb-3">
        Our Services
      </h2>
      <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
        Technology solutions designed for growth and scalability
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="
            group bg-white p-7 rounded-xl border border-black/10
            hover:border-black
            transition-all duration-300
            hover:-translate-y-2 hover:shadow-xl
          "
        >
          {/* Icon */}
          <div
            className="
              w-12 h-12 flex items-center justify-center rounded-lg
              bg-black text-white mb-4
              group-hover:scale-110 transition-transform
            "
          >
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-base md:text-lg font-semibold mb-2">
            {service.title}
          </h3>

          {/* Divider */}
          <div className="w-10 h-[2px] bg-black mb-3"></div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


      {/* ================= WHY CHOOSE ================= */}
<section className="py-20 px-4 bg-black text-white">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-2xl md:text-4xl font-bold mb-4">
        Why Choose EliteCrows?
      </h2>
      <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
        We combine technology, strategy, and execution to deliver measurable results
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="
            group bg-zinc-900 border border-white/10 rounded-xl p-7
            hover:border-white/30 hover:-translate-y-1 hover:shadow-2xl
            transition-all duration-300
          "
        >
          {/* Icon */}
          <div
            className="
              w-12 h-12 flex items-center justify-center rounded-lg
              bg-white text-black mb-4
              group-hover:scale-110 transition-transform
            "
          >
            {feature.icon}
          </div>

          {/* Title */}
          <h3 className="text-base md:text-lg font-semibold mb-2">
            {feature.title}
          </h3>

          {/* Divider */}
          <div className="w-10 h-[2px] bg-white/40 mb-3"></div>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


      {/* ================= TECHNOLOGIES ================= */}
<section className="py-16 px-4 bg-white">
  <div className="max-w-7xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-2xl md:text-4xl font-bold mb-4">
      Technology Stack
    </h2>
    <p className="text-gray-600 text-sm md:text-base mb-12">
      Modern technologies we use to build scalable and secure solutions
    </p>

    {/* Tech Grid */}
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="
            group flex flex-col items-center
            bg-white border border-black/10
            rounded-xl p-4
            hover:border-black
            hover:-translate-y-1 hover:shadow-lg
            transition-all duration-300
          "
        >
          <img
            src={tech.logo}
            alt={tech.name}
            className="h-10 w-10 mb-3 grayscale group-hover:grayscale-0 transition"
          />
          <span className="text-xs md:text-sm font-medium">
            {tech.name}
          </span>
        </div>
      ))}
    </div>

  </div>
</section>



      {/* ================= CTA ================= */}
      <section className="py-14 px-4 bg-gray-50 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-sm md:text-base text-gray-600 mb-6 max-w-xl mx-auto">
          Let’s build scalable digital solutions together.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
        >
          Get Started
        </Link>
      </section>

    </div>
  );
}

export default Home;
