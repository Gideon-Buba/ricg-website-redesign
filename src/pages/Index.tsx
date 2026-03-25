import { Link } from "react-router-dom";
import { Monitor, Users, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

const services = [
  { icon: Monitor, title: "ICT Services", desc: "Cutting-edge technology solutions for digital transformation and e-governance." },
  { icon: Users, title: "Capacity Building", desc: "Institutional strengthening and human capital development programs." },
  { icon: GraduationCap, title: "Leadership Training", desc: "Executive leadership programmes tailored for public and private sectors." },
  { icon: Briefcase, title: "Management Consultancy", desc: "Strategic advisory for organisational growth and operational excellence." },
];

const clients = [
  { logo: "/fortis-logo.png", name: "Fortis" },
  { logo: "/gis-logo.jpeg", name: "GIS" },
  { logo: "/jamb-logo.png", name: "JAMB" },
  { logo: "/nimet-logo.png", name: "NIMET" },
  { logo: "/tetfund-logo.png", name: "TETFund" },
  { logo: "/FMYD-logo.jpg", name: "Federal Ministry of Youth Development" },
  { logo: "/coat-of-arms.png", name: "Federal Ministry of Transport" },
  { logo: "/coat-of-arms.png", name: "Office of the SGF" },
  { logo: "/coat-of-arms.png", name: "Federal Ministry of Finance, Budget & National Planning" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <img src="/rcig-images/group-photo.jpeg" alt="RICG professionals" className="absolute inset-0 w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
      <div className="relative section-container py-24 w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="section-label text-primary-foreground/70 mb-6"
          >
            ICT • Consulting • Training • Research
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-background leading-[1.1] mb-8"
          >
            Delivering Unparalleled Value Through Governance, Consulting & Training
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/services" className="btn-primary inline-flex items-center gap-2 group text-base py-4 px-10">
              Discover What We Do
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="btn-outline text-background border-background/30 hover:bg-background hover:text-foreground inline-flex items-center justify-center text-base py-4 px-10">
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="py-20 md:py-28">
      <div className="section-container max-w-3xl text-center">
        <FadeIn>
          <p className="section-label mb-4">About Us</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Who We Are
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Rockbel International Centre for Governance (RICG) is a premier financial, management and strategy consulting firm based in Nigeria. 
            We partner with governments, institutions, and businesses to drive sustainable growth through innovative solutions in ICT, 
            capacity building, leadership training, and research.
          </p>
        </FadeIn>
      </div>
    </section>

    {/* Service Cards */}
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="section-container">
        <FadeIn>
          <p className="section-label text-center mb-4">What We Offer</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-14 leading-tight">Our Core Areas</h2>
        </FadeIn>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <div className="service-card text-center group cursor-default h-full">
                <div className="w-14 h-14 rounded-xl bg-secondary/8 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/15 group-hover:scale-110 transition-all duration-500">
                  <s.icon className="text-secondary" size={26} />
                </div>
                <h3 className="font-heading font-bold text-base text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Clients */}
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="section-container">
        <FadeIn>
          <p className="section-label text-center mb-4">Trusted By</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-14 leading-tight">Our Clients</h2>
        </FadeIn>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        <div className="flex [animation:marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((c, i) => (
            <div key={i} className="flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-all duration-500 cursor-default group shrink-0 mx-10">
              <div className="w-24 h-16 flex items-center justify-center">
                <img src={c.logo} alt={c.name} className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <span className="text-xs text-muted-foreground text-center max-w-[120px] leading-tight">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="cta-banner">
      <div className="section-container relative z-10">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 leading-tight">Ready to get started?</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-lg mx-auto">
            Let's discuss how RICG can help your organisation achieve its goals.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-background text-foreground px-10 py-4 rounded-xl font-semibold hover:bg-background/90 transition-all duration-300 hover:shadow-[var(--shadow-elevated)] group"
          >
            Contact Us
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
      </div>
    </section>
  </Layout>
);

export default Index;
