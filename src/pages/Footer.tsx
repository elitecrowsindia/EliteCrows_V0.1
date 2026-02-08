import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3">
              <span className="text-white">Elite</span>
              <span className="text-yellow-400">Crows</span>
              <span className="block text-sm font-medium text-gray-400 mt-1">
                Infotech
              </span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              EliteCrows Infotech is a technology-driven company delivering
              scalable web, software, and digital solutions across Tamil Nadu.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Web Development</li>
              <li>Software Development</li>
              <li>AI & Machine Learning</li>
              <li>Cloud & DevOps</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                Gobichettipalayam, Tamil Nadu, India
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                +91 6383106107
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                elitecrowsindia@gmail.com
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} EliteCrows Infotech. All rights reserved.
          </p>

          <p className="text-sm text-gray-400">
            Designed & Developed by <span className="text-white">EliteCrows</span>
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
