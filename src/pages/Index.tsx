import { Link } from "react-router-dom";
import { Monitor, Users, GraduationCap, Briefcase, Building2, Landmark, Scale } from "lucide-react";
import heroImg from "@/assets/hero-home.jpg";
import Layout from "@/components/Layout";

const services = [
  { icon: Monitor, title: "ICT Services", desc: "Cutting-edge technology solutions for digital transformation and e-governance." },
  { icon: Users, title: "Capacity Building", desc: "Institutional strengthening and human capital development programs." },
  { icon: GraduationCap, title: "Leadership Training", desc: "Executive leadership programmes tailored for public and private sectors." },
  { icon: Briefcase, title: "Management Consultancy", desc: "Strategic advisory for organisational growth and operational excellence." },
];

const clients = [
  { icon: Landmark, name: "Federal Ministry of Finance" },
  { icon: Building2, name: "Bureau of Public Service Reforms" },
  { icon: Scale, name: "Federal Ministry of Justice" },
  { icon: Landmark, name: "National Assembly" },
  { icon: Building2, name: "Office of the Head of Civil Service" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center">
      <img src={heroImg} alt="RICG professionals" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      <div className="relative section-container py-20">
        <div className="max-w-2xl">
          <p className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">ICT • Consulting • Training • Research</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6">
            Delivering Unparalleled Value Through Governance, Consulting & Training
          </h1>
          <Link
            to="/services"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            Discover What We Do
          </Link>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="py-16 md:py-24">
      <div className="section-container max-w-3xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">Who We Are</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Rockbel International Centre for Governance (RICG) is a premier financial, management and strategy consulting firm based in Nigeria. 
          We partner with governments, institutions, and businesses to drive sustainable growth through innovative solutions in ICT, 
          capacity building, leadership training, and research.
        </p>
      </div>
    </section>

    {/* Service Cards */}
    <section className="bg-muted py-16 md:py-24">
      <div className="section-container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Our Core Areas</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="service-card text-center group">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary/20 transition-colors">
                <s.icon className="text-secondary" size={28} />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Clients */}
    <section className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Our Clients</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {clients.map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <c.icon size={36} className="text-secondary" />
              <span className="text-xs text-muted-foreground text-center max-w-[120px]">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
