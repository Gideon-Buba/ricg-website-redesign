import { Link } from "react-router-dom";
import { Monitor, Users, Lightbulb, GraduationCap, ClipboardList, Briefcase, BarChart3, Compass, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/Animations";

const services = [
  {
    icon: Monitor,
    title: "ICT Services",
    desc: "Digital transformation, e-governance solutions, IT infrastructure advisory, and technology strategy consulting.",
    image: "/rcig-images/boardroom-session.jpeg",
  },
  {
    icon: Users,
    title: "Capacity Building & Institutional Change",
    desc: "Organisational restructuring, institutional strengthening, and human capital development programmes.",
    image: "/rcig-images/capacity-building-training.jpeg",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship & Business Development",
    desc: "SME advisory, business plan development, market entry strategies, and startup ecosystem support.",
    image: "/rcig-images/group-photo.jpeg",
  },
  {
    icon: GraduationCap,
    title: "Leadership Training",
    desc: "Executive leadership programmes, public sector leadership development, and change management workshops.",
    image: "/rcig-images/certificate-presentation.jpeg",
  },
  {
    icon: ClipboardList,
    title: "Procurement Management",
    desc: "Procurement reform, compliance auditing, supply chain optimisation, and public procurement advisory.",
    image: "/rcig-images/official-handover.jpeg",
  },
  {
    icon: Briefcase,
    title: "Management Consultancy",
    desc: "Strategic advisory, performance management, organisational design, and operational excellence consulting.",
    image: "/rcig-images/seminar-session.jpeg",
  },
  {
    icon: BarChart3,
    title: "Productivity Planning & Improvement",
    desc: "Workflow analysis, process reengineering, KPI frameworks, and productivity benchmarking.",
    image: "/rcig-images/training-workshop.jpeg",
  },
  {
    icon: Compass,
    title: "Strategic Retreat Planning & Facilitation",
    desc: "Corporate retreats, strategic planning sessions, stakeholder engagement, and team alignment programmes.",
    image: "/rcig-images/sensitization-exercise-team.jpeg",
  },
];

const Services = () => (
  <Layout>
    {/* Hero with photo background */}
    <section className="relative py-32 md:py-44 overflow-hidden">
      <img
        src="/rcig-images/capacity-building-training.jpeg"
        alt="RICG services"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
      <div className="relative section-container text-center z-10">
        <FadeIn>
          <p className="section-label text-primary-foreground/60 mb-4">Our Expertise</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-background mb-4 leading-tight">What We Do</h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-background/70 text-lg max-w-xl mx-auto">Comprehensive consulting and training solutions for public and private sectors</p>
        </FadeIn>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20 md:py-28">
      <div className="section-container">
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <motion.div
                className="group rounded-2xl overflow-hidden border border-border/60 bg-card shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-all duration-500 h-full flex flex-col"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  {/* Icon badge */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shadow-lg">
                    <s.icon className="text-secondary-foreground" size={18} />
                  </div>
                </div>
                {/* Text */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-[15px] text-foreground mb-2 leading-snug">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
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
