import { useState, useRef } from "react";
import {
  GraduationCap,
  Briefcase,
  TrendingUp,
  Users,
  Award,
  Lightbulb,
} from "lucide-react";
import emailjs from "@emailjs/browser";

function Careers() {
  const [formType, setFormType] = useState("internship");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef();

  const benefits = [
    {
      icon: <TrendingUp size={32} />,
      title: "Career Growth",
      description: "Clear career progression and skill development opportunities",
    },
    {
      icon: <Users size={32} />,
      title: "Great Team",
      description: "Collaborative environment with talented professionals",
    },
    {
      icon: <Award size={32} />,
      title: "Real Projects",
      description: "Hands-on experience with live industry projects",
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Learning Culture",
      description: "Continuous learning and mentorship programs",
    },
  ];

  const internshipAreas = [
    "Web Development",
    "Software Development",
    "AI / Machine Learning",
    "Cloud & DevOps",
    "Digital Marketing & SEO",
  ];

  const handleSubmit = (e, type) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_y9gjftz",        // 🔴 replace
        "template_zsg7n2p",     // 🔴 replace
        formRef.current,
        "WZawqmV08XgvK1Pkd"       // 🔴 replace
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        formRef.current.reset();
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        alert("Submission failed. Please try again.");
      });
  };

  return (
    <div className="bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-white px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://miro.medium.com/1*3H-td35zObK4t312wZ1npA.jpeg)",
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Careers & Internships
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            Build your career with EliteCrows Infotech across Tamil Nadu
          </p>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Why Join Us?</h2>
          <p className="text-sm md:text-base text-gray-600">
            Learn, grow, and work on real-world technology projects
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-black/10 hover:border-black transition text-center"
            >
              <div className="inline-block mb-3">{benefit.icon}</div>
              <h3 className="font-semibold mb-1">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= APPLY ================= */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Apply Now</h2>

            <div className="flex justify-center gap-3 mt-4">
              <button
                onClick={() => setFormType("internship")}
                className={`px-6 py-2.5 rounded-md text-sm font-semibold transition ${
                  formType === "internship"
                    ? "bg-black text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <GraduationCap className="inline mr-2" size={18} />
                Internship
              </button>

              <button
                onClick={() => setFormType("job")}
                className={`px-6 py-2.5 rounded-md text-sm font-semibold transition ${
                  formType === "job"
                    ? "bg-black text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                <Briefcase className="inline mr-2" size={18} />
                Job
              </button>
            </div>
          </div>

          {success && (
            <p className="text-green-600 font-medium text-center mb-6">
              ✅ Application submitted successfully!
            </p>
          )}

          {/* ================= FORMS ================= */}
          {formType === "internship" ? (
            <form
              ref={formRef}
              onSubmit={(e) => handleSubmit(e, "Internship")}
              className="bg-white border border-black/20 rounded-xl p-6 md:p-8 space-y-6"
            >
              <input type="hidden" name="type" value="Internship" />

              <div className="grid md:grid-cols-2 gap-5">
                <input name="name" required placeholder="Full Name" className="input" />
                <input name="email" required type="email" placeholder="Email Address" className="input" />
                <input name="phone" required placeholder="Phone Number" className="input" />
                <input name="details" required placeholder="College / University" className="input" />
              </div>

              <select name="area" required className="input">
                <option value="">Area of Interest</option>
                {internshipAreas.map((area) => (
                  <option key={area}>{area}</option>
                ))}
              </select>

              <textarea
                name="details"
                required
                rows={4}
                placeholder="Your Skills"
                className="input resize-none"
              />

              <input
                name="resume"
                required
                type="url"
                placeholder="Resume Drive Link"
                className="input"
              />

              <button
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition"
              >
                {loading ? "Submitting..." : "Submit Internship Application"}
              </button>
            </form>
          ) : (
            <form
              ref={formRef}
              onSubmit={(e) => handleSubmit(e, "Job")}
              className="bg-white border border-black/20 rounded-xl p-6 md:p-8 space-y-6"
            >
              <input type="hidden" name="type" value="Job" />

              <div className="grid md:grid-cols-2 gap-5">
                <input name="name" required placeholder="Full Name" className="input" />
                <input name="email" required type="email" placeholder="Email Address" className="input" />
                <input name="phone" required placeholder="Phone Number" className="input" />
                <input name="details" required placeholder="Position Applying For" className="input" />
              </div>

              <textarea
                name="details"
                required
                rows={4}
                placeholder="Technical Skills"
                className="input resize-none"
              />

              <input
                name="resume"
                type="url"
                placeholder="Portfolio / Resume Drive Link"
                className="input"
              />

              <button
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-900 transition"
              >
                {loading ? "Submitting..." : "Submit Job Application"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ================= INFO ================= */}
      <section className="py-14 px-4 bg-black text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Internship Opportunities
        </h2>
        <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
          Gain real-world experience in web development, software engineering,
          AI, cloud computing, and digital marketing with EliteCrows Infotech.
        </p>
      </section>
    </div>
  );
}

export default Careers;
