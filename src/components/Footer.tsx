import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="section-container py-12 md:py-16">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-heading font-bold text-xl mb-3">RICG</h3>
          <p className="text-sm opacity-70 leading-relaxed">
            Rockbel International Centre for Governance — Delivering unparalleled value through governance, consulting & training.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-lg mb-3">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Our Services", path: "/services" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-lg mb-3">Contact</h4>
          <div className="flex flex-col gap-3 text-sm opacity-70">
            <span className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Abuja, Nigeria</span>
            <span className="flex items-center gap-2"><Mail size={16} className="shrink-0" /> info@ricg.com.ng</span>
            <span className="flex items-center gap-2"><Phone size={16} className="shrink-0" /> +234 800 000 0000</span>
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 mt-10 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Rockbel International Centre for Governance. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
