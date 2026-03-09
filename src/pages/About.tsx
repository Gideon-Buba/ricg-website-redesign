import { Target, Eye, Heart } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import Layout from "@/components/Layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

const values = [
  { icon: Target, title: "Mission", desc: "To deliver innovative, world-class consulting and training solutions that drive sustainable development across Africa." },
  { icon: Eye, title: "Vision", desc: "To be the foremost governance and consulting centre of excellence in Nigeria and across the continent." },
  { icon: Heart, title: "Core Values", desc: "Integrity, Excellence, Innovation, Client Focus, and Accountability guide everything we do." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="page-hero">
      <div className="section-container relative z-10 text-center">
        <FadeIn>
          <p className="section-label text-secondary-foreground/60 mb-4">Our Story</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight">Who We Are</h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-secondary-foreground/70 text-lg max-w-xl mx-auto">Building capacity, driving change, delivering results</p>
        </FadeIn>
      </div>
    </section>

    {/* About Content */}
    <section className="py-20 md:py-28">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <FadeIn direction="left">
              <p className="section-label mb-4">About RICG</p>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6 leading-tight">Consulting, Strategy, Training & Research</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Rockbel International Centre for Governance (RICG) is a Consulting (Financial & Management), Strategy, Training and Research 
                Consultants based in Nigeria. We specialise in providing high-quality advisory services to public and private sector organisations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of experienced professionals brings deep sectoral knowledge and a commitment to excellence, 
                ensuring that every engagement delivers measurable value and lasting impact.
              </p>
            </FadeIn>
          </div>
          <FadeIn direction="right" delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
              <img src={aboutImg} alt="RICG team in boardroom" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>

    {/* Quote */}
    <section className="bg-muted/50 py-20">
      <div className="section-container max-w-3xl text-center">
        <FadeIn>
          <div className="relative">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-primary/10 font-heading font-bold leading-none select-none">"</span>
            <blockquote className="font-heading text-2xl md:text-3xl font-semibold text-foreground leading-relaxed relative z-10">
              Our confidence is derived from our experience and passion to add value
            </blockquote>
            <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-8" />
          </div>
        </FadeIn>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 md:py-28">
      <div className="section-container">
        <FadeIn>
          <p className="section-label text-center mb-4">Our Foundation</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-14 leading-tight">What Drives Us</h2>
        </FadeIn>
        <StaggerContainer className="grid sm:grid-cols-3 gap-5">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="service-card text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/8 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <v.icon className="text-primary" size={26} />
                </div>
                <h3 className="font-heading font-bold text-base text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  </Layout>
);

export default About;
