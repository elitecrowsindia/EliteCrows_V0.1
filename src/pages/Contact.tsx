import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <Mail size={28} />,
      title: "Email",
      details: ["info@elitecrows.com", "support@elitecrows.com"],
    },
    {
      icon: <Phone size={28} />,
      title: "Phone",
      details: ["+91 1234567890", "+91 0987654321"],
    },
    {
      icon: <MapPin size={28} />,
      title: "Service Area",
      details: ["All Over Tamil Nadu", "Remote Services Available"],
    },
    {
      icon: <Clock size={28} />,
      title: "Business Hours",
      details: ["Mon - Sat: 9 AM - 6 PM", "Sunday: Closed"],
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_2r7ddha",          // 🔴 replace
        "template_hlrd256",       // 🔴 replace
        formRef.current,
        "WZawqmV08XgvK1Pkd"         // 🔴 replace
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setLoading(false);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center justify-center text-white px-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://www.shutterstock.com/image-photo/using-laptop-show-icon-address-600nw-2521386695.jpg)",
          }}
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl text-center">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            Let’s discuss your project and build something great together
          </p>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border hover:border-black transition text-center"
            >
              <div className="inline-block mb-3 text-black">{info.icon}</div>
              <h3 className="font-semibold mb-1">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-sm text-gray-600">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* FORM */}
        <div className="max-w-4xl mx-auto bg-black rounded-xl p-6 md:p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Send Us a Message
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            We’ll respond within 24 hours.
          </p>

          {success && (
            <p className="mb-4 text-green-400 font-medium">
              ✅ Message sent successfully!
            </p>
          )}

          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <input
              name="name"
              required
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-md"
            />

            <input
              name="email"
              required
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-md"
            />

            <input
              name="phone"
              required
              placeholder="Phone Number"
              className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-md"
            />

            <select
              name="service"
              className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-md"
            >
              <option value="">Select Service</option>
              <option>Web Development</option>
              <option>Software Development</option>
              <option>Digital Marketing & SEO</option>
              <option>Cloud Customization</option>
              <option>AI Solutions</option>
            </select>

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Project Details"
              className="w-full px-4 py-3 bg-zinc-900 border border-white/10 rounded-md resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black py-3 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
