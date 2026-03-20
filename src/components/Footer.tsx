import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="inline-block mb-6">
              <img src="/logo.png" alt="Fovorse Logo" className="h-12 w-auto" />
            </a>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Driving business growth through strategy, data, and AI-driven marketing solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="/#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/#approach" className="text-gray-400 hover:text-white transition-colors">Approach</a></li>
              <li><a href="/#results" className="text-gray-400 hover:text-white transition-colors">Results</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-brand-accent-light" />
                <a href="mailto:fovorse@gmail.com" className="hover:underline"> fovorse@gmail.com </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-brand-accent-light" />
                <a href="tel:+91 63831 20945" className="hover:underline"> +91 63831 20945 </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-accent-light shrink-0 mt-1" />
                India
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Fovorse Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
