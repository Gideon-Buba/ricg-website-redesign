import { Link } from "react-router-dom";
import { Monitor, Users, Lightbulb, GraduationCap, ClipboardList, Briefcase, BarChart3, Compass, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

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
        <FadeIn>
          <p className="section-label text-secondary-foreground/60 mb-4">Our Expertise</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight">What We Do</h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-secondary-foreground/70 text-lg max-w-xl mx-auto">Comprehensive consulting and training solutions for public and private sectors</p>
        </FadeIn>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20 md:py-28">
      <div className="section-container">
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <div className="service-card group h-full">
                <div className="w-12 h-12 rounded-xl bg-secondary/8 flex items-center justify-center mb-6 group-hover:bg-secondary/15 group-hover:scale-110 transition-all duration-500">
                  <s.icon className="text-secondary" size={22} />
                </div>
                <h3 className="font-heading font-bold text-[15px] text-foreground mb-3 leading-snug">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="cta-banner">
      <div className="section-container relative z-10">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 leading-tight">Ready to work with us?</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-lg mx-auto">Get in touch today and discover how RICG can help your organisation thrive.</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-background text-foreground px-10 py-4 rounded-xl font-semibold hover:bg-background/90 transition-all duration-300 hover:shadow-[var(--shadow-elevated)] group"
          >
            Contact Us Now
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Services;
