import { Target, Eye, Heart, Users, Lightbulb, Zap } from "lucide-react";

function About() {
  const values = [
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation",
      description: "Embracing cutting-edge technologies to deliver forward-thinking solutions.",
    },
    {
      icon: <Heart size={32} />,
      title: "Quality",
      description: "Commitment to excellence in every project we undertake.",
    },
    {
      icon: <Users size={32} />,
      title: "Client Focus",
      description: "Your success is our priority. We build lasting partnerships.",
    },
    {
      icon: <Zap size={32} />,
      title: "Agility",
      description: "Fast, efficient delivery without compromising on quality.",
    },
  ];

  return (
    <div className="bg-white">

      {/* ================= HERO (Same as Home Style) ================= */}
     <section className="relative min-h-[50vh] flex items-center justify-center text-white px-4 overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://img.pikbest.com/ai/illus_our/20230428/dc1319f64c99fe099ab7b27808d8907b.jpg!w700wp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            About EliteCrows Infotech
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            Technology Company Since 2023 – Delivering Innovation Across Tamil Nadu
          </p>
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                Founded in 2023, EliteCrows Infotech emerged with a vision to empower
                businesses across Tamil Nadu through innovative technology solutions.
              </p>
              <p>
                We deliver SEO optimized websites, software development, AI chat systems,
                cloud customization, and industrial applications using modern technologies.
              </p>
              <p>
                Our focus is on long-term partnerships and measurable business growth.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-black/20">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Target size={26} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Our Mission</h3>
                  <p className="text-sm text-gray-700">
                    Deliver cutting-edge technology solutions for digital excellence.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-black text-white p-3 rounded-lg">
                  <Eye size={26} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Our Vision</h3>
                  <p className="text-sm text-gray-700">
                    Become Tamil Nadu’s most trusted technology partner.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="py-14 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Core Values</h2>
          <p className="text-sm md:text-base text-gray-300">
            Principles that guide everything we do
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition"
            >
              <div className="mb-3">{value.icon}</div>
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg border">
            <div className="text-3xl font-bold">2023</div>
            <p className="text-sm text-gray-600">Established</p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <div className="text-3xl font-bold">100+</div>
            <p className="text-sm text-gray-600">Projects Delivered</p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <div className="text-3xl font-bold">24/7</div>
            <p className="text-sm text-gray-600">Support</p>
          </div>
        </div>
      </section>

      {/* ================= SERVICE AREA ================= */}
      <section className="py-14 px-4 bg-black text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Service Area</h2>
        <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
          Serving businesses across Tamil Nadu with web development, software solutions,
          AI automation, cloud services, and industrial applications.
        </p>
      </section>

    </div>
  );
}

export default About;
