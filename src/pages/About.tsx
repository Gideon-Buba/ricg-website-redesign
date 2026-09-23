import { useState, useEffect } from "react";
import { Target, Eye, Heart, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

const values = [
  { icon: Target, title: "Mission", desc: "To deliver innovative, world-class consulting and training solutions that drive sustainable development across Africa." },
  { icon: Eye, title: "Vision", desc: "To be the foremost governance and consulting centre of excellence in Nigeria and across the continent." },
  { icon: Heart, title: "Core Values", desc: "Integrity, Excellence, Innovation, Client Focus, and Accountability guide everything we do." },
];

const ceoTrainingAreas = [
  "Budget and Budgetary Systems in the Public Sector",
  "Performance Management System",
  "Procurement Management",
  "Project Management",
  "Public Financial Management",
  "Information and Communication Technology",
  "Microfinance Development",
  "Entrepreneurship Development",
];

const bdmStrengths = [
  "Business Development & Growth",
  "Stakeholder & Partner Relations",
  "Proposal & Tender Documentation",
  "Vendor & Project Coordination",
  "Compliance & Document Control",
  "Event & Workshop Management",
];

const galleryImages = [
  { src: "/rcig-images/boardroom-session.jpeg", span: "col-span-2 row-span-2" },
  { src: "/rcig-images/training-workshop.jpeg", span: "" },
  { src: "/rcig-images/certificate-presentation.jpeg", span: "" },
  { src: "/rcig-images/updated-group-image.jpg", span: "" },
  { src: "/rcig-images/seminar-session.jpeg", span: "" },
  { src: "/rcig-images/capacity-building-training.jpeg", span: "col-span-2" },
  { src: "/rcig-images/group-photo.jpeg", span: "" },
  { src: "/rcig-images/official-handover.jpeg", span: "" },
];

const About = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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

      {/* Leadership */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <FadeIn>
            <p className="section-label text-center mb-4">Leadership</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-14 leading-tight">Meet Our Team</h2>
          </FadeIn>
          <div className="grid md:grid-cols-5 gap-10 md:gap-14">
            <FadeIn direction="left" className="md:col-span-2">
              <div className="md:sticky md:top-28">
                <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
                  <img
                    src="/rcig-images/ceo-taiwo-kolawole.jpeg"
                    alt="Taiwo Kolawole, CEO of RICG"
                    className="w-full aspect-[4/5] object-cover object-top"
                  />
                </div>
                <div className="mt-6 text-center md:text-left">
                  <h3 className="font-heading text-2xl font-bold text-foreground">Taiwo Kolawole, FCA, FCTI</h3>
                  <p className="text-primary font-medium mt-1">Chief Executive Officer</p>
                  <p className="text-muted-foreground text-sm mt-2">B.Sc. (Econs.), M.Sc. (Forensic Acct.), FCA, FCTI</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2} className="md:col-span-3">
              <p className="text-muted-foreground leading-relaxed text-justify hyphens-auto mb-5">
                Taiwo is a renowned chartered accountant, seasoned tax expert, and financial and management consultant. His experience in
                accounting, taxation, microfinance and human resource development spans seventeen years across both the public and private sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify hyphens-auto mb-5">
                He is a graduate of Economics from Olabisi Onabanjo University, Ago-Iwoye, and holds a Master's Degree in Forensic Accounting
                and Auditing from Nasarawa State University, Keffi. He is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN)
                and the Chartered Institute of Taxation of Nigeria (CITN).
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify hyphens-auto mb-5">
                Taiwo is a registered member of the Financial Reporting Council of Nigeria and a trained Post Examination Monitoring Consultant
                of Microfinance Banks by the Central Bank of Nigeria. He is also certified by the Central Bank of Nigeria and the Nigeria Deposit
                Insurance Corporation as a trainer in Microfinance Management, giving him deep insight into current developments in the
                private and public sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify hyphens-auto mb-8">
                He has rendered a variety of consultancy services spanning Auditing, Taxation, Staff Training & Capacity Building, Management
                Consultancy and Socio-Economic Projects Development. Accredited as a Management Trainer by the Centre for Management
                Development (CMD), he has led capacity building and training programmes in both sectors, with key areas including:
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {ceoTrainingAreas.map((area) => (
                  <li key={area} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="text-primary" size={12} />
                    </span>
                    {area}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div className="h-px bg-border my-16 md:my-20" />

          <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-center">
            <FadeIn direction="right" className="md:col-span-2 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
                <img
                  src="/rcig-images/mabotundi.jpeg"
                  alt="Mabotundi Kordon, Business Development Manager at RICG"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>
              <div className="mt-6 text-center md:text-left">
                <h3 className="font-heading text-2xl font-bold text-foreground">Mabotundi Kordon, PMP</h3>
                <p className="text-primary font-medium mt-1">Business Development Manager</p>
                <p className="text-muted-foreground text-sm mt-2">B.Sc. (HRM), PMP, NCMD-Accredited Management Trainer</p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="md:col-span-3 md:order-1">
              <p className="text-muted-foreground leading-relaxed text-justify hyphens-auto mb-5">
                Mabotundi Kordon is a results-driven Business Development Manager with over 8 years of experience building relationships,
                coordinating stakeholders and driving operational delivery across corporate, non-profit and oil and gas engineering
                environments. At RICG, she supports business growth through stakeholder engagement, proposal and documentation support, and
                the coordination of partnerships and opportunities that advance the organisation's mandate.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify hyphens-auto mb-5">
                Her business development background includes compiling, verifying and submitting documentation through e-procurement platforms
                such as NipeX and SAP Ariba, supporting 40+ tender submissions with zero late-submission disqualifications, and liaising with
                technical leads, legal advisers and senior management to keep proposals accurate and on schedule. She has also coordinated 20+
                outreach programmes, workshops and stakeholder events, managing vendors, partners and senior-level engagements from planning
                through to delivery.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify hyphens-auto mb-8">
                She holds a B.Sc. in Human Resource Management from Central University, Accra, and is a certified Project Management
                Professional (PMP) and an NCMD-accredited Management Trainer, bringing a structured, relationship-focused approach to business
                growth and partnership development.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {bdmStrengths.map((strength) => (
                  <li key={strength} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Check className="text-primary" size={12} />
                    </span>
                    {strength}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div className="h-px bg-border my-16 md:my-20" />

          <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-center">
            <FadeIn direction="left" className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
                <img
                  src="/rcig-images/sandra.jpeg"
                  alt="Sandra Makwin, Administrative Manager at RICG"
                  className="w-full aspect-[4/5] object-cover scale-105 origin-bottom"
                />
              </div>
              <div className="mt-6 text-center md:text-left">
                <h3 className="font-heading text-2xl font-bold text-foreground">Sandra Makwin</h3>
                <p className="text-primary font-medium mt-1">Administrative Manager</p>
                <p className="text-muted-foreground text-sm mt-2">Dip. (Marketing), B.Sc. (Bus. Admin.), Master's Degree</p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2} className="md:col-span-3">
              <p className="text-muted-foreground leading-relaxed text-justify hyphens-auto mb-5">
                Sandra Makwin is an experienced administrator with over 10 years in public service and private sector operations. She holds a
                Diploma in Marketing from Plateau State Polytechnic, a B.Sc. in Business Administration from Federal University Birnin Kebbi,
                and a Master's Degree from Ahmadu Bello University, Zaria.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify hyphens-auto mb-5">
                Her career spans the Industrial Training Fund, the National Institute for Policy and Strategic Studies, the Federal Inland
                Revenue Service and Space Spectrum Limited (Member, Clinotech Canada). She joined RICG in 2022, where she serves as part of the
                leadership team.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify hyphens-auto">
                Sandra is committed to excellence, integrity, and building systems that drive organisational growth.
              </p>
            </FadeIn>
          </div>

          <div className="h-px bg-border my-16 md:my-20" />

          <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-center">
            <FadeIn direction="right" className="md:col-span-2 md:order-2">
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]">
                <img
                  src="/rcig-images/kayode.jpeg"
                  alt="Oluwakayode Bankole Ijadare, Operations and Programme Manager at RICG"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>
              <div className="mt-6 text-center md:text-left">
                <h3 className="font-heading text-2xl font-bold text-foreground">Oluwakayode Bankole Ijadare</h3>
                <p className="text-primary font-medium mt-1">Operations and Programme Manager</p>
                <p className="text-muted-foreground text-sm mt-2">B.Sc. (Sociology)</p>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2} className="md:col-span-3 md:order-1">
              <p className="text-muted-foreground leading-relaxed text-justify hyphens-auto mb-5">
                Oluwakayode Bankole Ijadare is an experienced administrative, logistics and operations professional with over 10 years of
                experience in administration, procurement, logistics coordination, project supervision and field operations.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify hyphens-auto mb-5">
                A Sociology graduate of Ekiti State University, Ado-Ekiti, with a Second Class Upper Division, he combines strong analytical,
                organisational, communication and problem-solving skills with practical operational experience.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify hyphens-auto">
                He is recognised for professionalism, integrity, adaptability and attention to detail, with a strong commitment to continuous
                learning and organisational growth.
              </p>
            </FadeIn>
          </div>
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
