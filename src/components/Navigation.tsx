import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  /* ---------- Scroll Effect ---------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-500
        ${
          isScrolled
            ? "bg-gradient-to-b from-black to-zinc-900 backdrop-blur-md shadow-lg border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/eclogo.png"
              alt="EliteCrows Infotech Logo"
              className="h-9 md:h-10 w-auto"
            />

            <span className="font-bold tracking-wide text-sm sm:text-base md:text-xl lg:text-2xl whitespace-nowrap">

  <span className="text-white">
    Elite
  </span>
  <span className="text-yellow-500">
    Crows
  </span>{" "}
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
    Infotech
  </span>
</span>

          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
  key={link.path}
  to={link.path}
  className={`group relative text-sm font-medium transition-all duration-300
    ${
      isActive(link.path)
        ? "text-white"
        : "text-gray-300 hover:text-white"
    }
  `}
>
  <span className="relative z-10 group-hover:-translate-y-[1px] transition-transform duration-300">
    {link.label}
  </span>

  {/* Underline */}
  <span
    className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-500
      transition-all duration-300
      ${isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"}
    `}
  />

  {/* Glow */}
  <span
    className={`absolute left-0 -bottom-1 h-[2px] blur-md bg-yellow-400/70
      transition-all duration-300
      ${isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"}
    `}
  />
</Link>

            ))}
          </div>

          {/* Mobile Toggle */}
<button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden p-2 rounded-md border border-white/20 hover:bg-white/10 transition text-white"
>
  {isOpen ? <X size={22} /> : <Menu size={22} />}
</button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
  key={link.path}
  to={link.path}
  onClick={() => setIsOpen(false)}
  className={`group block px-4 py-3 rounded-xl transition-all duration-300
    ${
      isActive(link.path)
        ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow-lg"
        : "text-gray-300 hover:bg-white/10 hover:text-white"
    }
  `}
>
  <span className="flex items-center justify-between">
    {link.label}
    <span className="opacity-0 group-hover:opacity-100 transition">
      →
    </span>
  </span>
</Link>

            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
