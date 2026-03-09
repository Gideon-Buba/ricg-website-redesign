import { Link } from "react-router-dom";
import { Monitor, Users, Lightbulb, GraduationCap, ClipboardList, Briefcase, BarChart3, Compass } from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  { icon: Monitor, title: "ICT Services", desc: "Digital transformation, e-governance solutions, IT infrastructure advisory, and technology strategy consulting." },
  { icon: Users, title: "Capacity Building & Institutional Change", desc: "Organisational restructuring, institutional strengthening, and human capital development programmes." },
  { icon: Lightbulb, title: "Entrepreneurship & Business Development", desc: "SME advisory, business plan development, market entry strategies, and startup ecosystem support." },
  { icon: GraduationCap, title: "Leadership Training", desc: "Executive leadership programmes, public sector leadership development, and change management workshops." },
  { icon: ClipboardList, title: "Procurement Management", desc: "Procurement reform, compliance auditing, supply chain optimisation, and public procurement advisory." },
  { icon: Briefcase, title: "Management Consultancy", desc: "Strategic advisory, performance management, organisational design, and operational excellence consulting." },
  { icon: BarChart3, title: "Productivity Planning & Improvement", desc: "Workflow analysis, process reengineering, KPI frameworks, and productivity benchmarking." },
  { icon: Compass, title: "Strategic Retreat Planning & Facilitation", desc: "Corporate retreats, strategic planning sessions, stakeholder engagement, and team alignment programmes." },
];

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="page-hero">
      <div className="section-container relative z-10 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">What We Do</h1>
        <p className="text-secondary-foreground/80 text-lg max-w-xl mx-auto">Comprehensive consulting and training solutions for public and private sectors</p>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="service-card group">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary/20 transition-colors">
                <s.icon className="text-secondary" size={24} />
              </div>
              <h3 className="font-heading font-bold text-base text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="cta-banner">
      <div className="section-container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to work with us?</h2>
        <p className="text-primary-foreground/80 text-lg mb-8">Get in touch today and discover how RICG can help your organisation thrive.</p>
        <Link
          to="/contact"
          className="inline-block bg-background text-foreground px-8 py-4 rounded-md font-semibold text-lg hover:bg-background/90 transition-colors"
        >
          Contact Us Now
        </Link>
      </div>
    </section>
  </Layout>
);

export default Services;
