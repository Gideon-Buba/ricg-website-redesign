import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";
import { knowledgeHubs, consultancyServices } from "@/lib/knowledgeHubs";

const KnowledgeHubs = () => (
  <Layout>
    {/* Hero with photo background */}
    <section className="relative py-32 md:py-44 overflow-hidden">
      <img
        src="/rcig-images/capacity-building-training.jpeg"
        alt="RICG Knowledge Hubs"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
      <div className="relative section-container text-center z-10">
        <FadeIn>
          <p className="section-label text-primary-foreground/60 mb-4">What We Offer</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-background mb-4 leading-tight">Our Knowledge Hubs</h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-background/70 text-lg max-w-xl mx-auto">Six specialised hubs for knowledge transfer on public governance</p>
        </FadeIn>
      </div>
    </section>

    {/* Hubs Grid */}
    <section className="py-20 md:py-28">
      <div className="section-container">
        <FadeIn>
          <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto mb-14">
            The Centre comprises six Knowledge Hubs, featuring a library, digital learning tools and e-learning portals to support remote
            and continuous learning.
          </p>
        </FadeIn>
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {knowledgeHubs.map((hub) => (
            <StaggerItem key={hub.title}>
              <motion.div
                className="group rounded-2xl overflow-hidden border border-border/60 bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-500 h-full flex flex-col"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={hub.image}
                    alt={hub.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shadow-lg">
                    <hub.icon className="text-secondary-foreground" size={18} />
                  </div>
                </div>
                {/* Text */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-base text-foreground mb-3 leading-snug">{hub.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-justify hyphens-auto">{hub.desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Consultancy Services */}
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="section-container">
        <FadeIn>
          <p className="section-label text-center mb-4">Excellence Centre for Management Consultancy Services</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-14 leading-tight">Management Consultancy Services</h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {consultancyServices.map((service) => (
              <li key={service} className="flex items-start gap-3 text-sm text-foreground bg-card rounded-xl border border-border/60 p-4">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check className="text-primary" size={12} />
                </span>
                {service}
              </li>
            ))}
          </ul>
        </FadeIn>
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

export default KnowledgeHubs;
