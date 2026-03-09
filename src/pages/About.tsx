import { Target, Eye, Heart } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import Layout from "@/components/Layout";

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
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Who We Are</h1>
        <p className="text-secondary-foreground/80 text-lg max-w-xl mx-auto">Building capacity, driving change, delivering results</p>
      </div>
    </section>

    {/* About Content */}
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Consulting, Strategy, Training & Research</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Rockbel International Centre for Governance (RICG) is a Consulting (Financial & Management), Strategy, Training and Research 
              Consultants based in Nigeria. We specialise in providing high-quality advisory services to public and private sector organisations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of experienced professionals brings deep sectoral knowledge and a commitment to excellence, 
              ensuring that every engagement delivers measurable value and lasting impact.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
            <img src={aboutImg} alt="RICG team in boardroom" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>

    {/* Quote */}
    <section className="bg-muted py-16">
      <div className="section-container max-w-3xl text-center">
        <blockquote className="font-heading text-2xl md:text-3xl font-semibold text-foreground italic leading-relaxed">
          "Our confidence is derived from our experience and passion to add value"
        </blockquote>
      </div>
    </section>

    {/* Values */}
    <section className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">What Drives Us</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="service-card text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <v.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
