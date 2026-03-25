import { useState } from "react";
import { Target, Eye, Heart, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

const values = [
  { icon: Target, title: "Mission", desc: "To deliver innovative, world-class consulting and training solutions that drive sustainable development across Africa." },
  { icon: Eye, title: "Vision", desc: "To be the foremost governance and consulting centre of excellence in Nigeria and across the continent." },
  { icon: Heart, title: "Core Values", desc: "Integrity, Excellence, Innovation, Client Focus, and Accountability guide everything we do." },
];

const galleryImages = [
  { src: "/rcig-images/boardroom-session.jpeg", span: "col-span-2 row-span-2" },
  { src: "/rcig-images/training-workshop.jpeg", span: "" },
  { src: "/rcig-images/certificate-presentation.jpeg", span: "" },
  { src: "/rcig-images/sensitization-exercise-team.jpeg", span: "" },
  { src: "/rcig-images/seminar-session.jpeg", span: "" },
  { src: "/rcig-images/capacity-building-training.jpeg", span: "col-span-2" },
  { src: "/rcig-images/group-photo.jpeg", span: "" },
  { src: "/rcig-images/official-handover.jpeg", span: "" },
];

const About = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero with photo background */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <img
          src="/rcig-images/boardroom-session.jpeg"
          alt="RICG"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="relative section-container text-center z-10">
          <FadeIn>
            <p className="section-label text-primary-foreground/60 mb-4">Our Story</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-background mb-4 leading-tight">Who We Are</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-background/70 text-lg max-w-xl mx-auto">Building capacity, driving change, delivering results</p>
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
                <img
                  src="/rcig-images/capacity-building-training.jpeg"
                  alt="RICG team"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
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

      {/* Gallery */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="section-container">
          <FadeIn>
            <p className="section-label text-center mb-4">In The Field</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-14 leading-tight">Gallery</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
              {galleryImages.map((img, i) => (
                <motion.div
                  key={i}
                  className={`relative overflow-hidden rounded-xl cursor-pointer group ${img.span}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightbox(img.src)}
                >
                  <img
                    src={img.src}
                    alt={`RICG gallery ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-background text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">View</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-5 text-background/70 hover:text-background transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              src={lightbox}
              alt="Gallery"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default About;
