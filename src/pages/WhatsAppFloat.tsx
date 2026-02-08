import { MessageCircle } from "lucide-react";

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/916383106107"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-5 right-5 z-50
        flex items-center gap-2
        bg-green-500 text-white
        px-4 py-3 rounded-full
        shadow-lg
        hover:bg-green-600
        hover:scale-105
        transition-all duration-300
      "
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-6 h-6"
      />
      <span className="hidden sm:inline text-sm font-semibold">
        WhatsApp
      </span>
    </a>
  );
}

export default WhatsAppFloat;


