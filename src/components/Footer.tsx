import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="section-container pt-16 pb-8">
      <div className="grid md:grid-cols-4 gap-10 mb-14">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <img
              src="/rockbell-logo.jpeg"
              alt="Rockbell International Centre for Governance"
              className="h-10 w-auto object-contain"
            />
            <img
              src="/rockbel.jpeg"
              alt=""
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="text-sm opacity-50 leading-relaxed">
            Delivering unparalleled value through governance, consulting & training.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm mb-5 opacity-70 tracking-wide uppercase">Pages</h4>
          <nav className="flex flex-col gap-3">
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Our Services", path: "/services" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm opacity-50 hover:opacity-100 transition-all duration-300 flex items-center gap-1 group"
              >
                {link.label}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm mb-5 opacity-70 tracking-wide uppercase">Services</h4>
          <nav className="flex flex-col gap-3">
            {["ICT Services", "Leadership Training", "Management Consultancy", "Capacity Building"].map((s) => (
              <Link key={s} to="/services" className="text-sm opacity-50 hover:opacity-100 transition-all duration-300">
                {s}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-sm mb-5 opacity-70 tracking-wide uppercase">Contact</h4>
          <div className="flex flex-col gap-4 text-sm opacity-50">
            <span className="flex items-start gap-2.5"><MapPin size={15} className="mt-0.5 shrink-0" /> Abuja, Nigeria</span>
            <a href="mailto:info@ricg.com.ng" className="flex items-center gap-2.5 hover:opacity-100 transition-opacity"><Mail size={15} className="shrink-0" /> info@ricg.com.ng</a>
            <a href="tel:+2348000000000" className="flex items-center gap-2.5 hover:opacity-100 transition-opacity"><Phone size={15} className="shrink-0" /> +234 800 000 0000</a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-40">
        <span>© {new Date().getFullYear()} Rockbel International Centre for Governance</span>
        <span>All rights reserved</span>
      </div>
    </div>
  </footer>
);

export default Footer;
