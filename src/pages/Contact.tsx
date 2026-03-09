import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { FadeIn } from "@/components/Animations";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    toast.success("Message sent successfully! We'll get back to you soon.");
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero">
        <div className="section-container relative z-10 text-center">
          <FadeIn>
            <p className="section-label text-secondary-foreground/60 mb-4">Reach Out</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight">Contact Us</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-secondary-foreground/70 text-lg max-w-xl mx-auto">We'd love to hear from you</p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-14">
            {/* Form */}
            <FadeIn direction="left">
              <div>
                <p className="section-label mb-3">Send a Message</p>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Get In Touch</h2>

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center justify-center py-20 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                        <CheckCircle2 className="text-secondary" size={32} />
                      </div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Your Name"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="input-field"
                        />
                        <input
                          type="email"
                          placeholder="Your Email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="input-field"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Subject"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="input-field"
                      />
                      <textarea
                        placeholder="Tell us about your project or inquiry..."
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="input-field resize-none"
                      />
                      <button
                        type="submit"
                        disabled={sending}
                        className="btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {sending ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send Message
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>

            {/* Contact Details */}
            <FadeIn direction="right" delay={0.2}>
              <div>
                <p className="section-label mb-3">Contact Info</p>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Our Details</h2>
                <div className="flex flex-col gap-6 mb-10">
                  {[
                    { icon: MapPin, label: "Office Address", value: "Suite 204, Plot 1234 Somewhere Street,\nWuse 2, Abuja, Nigeria" },
                    { icon: Mail, label: "Email", value: "info@ricg.com.ng", href: "mailto:info@ricg.com.ng" },
                    { icon: Phone, label: "Phone", value: "+234 800 000 0000", href: "tel:+2348000000000" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-secondary/8 flex items-center justify-center shrink-0 group-hover:bg-secondary/15 transition-colors duration-300">
                        <item.icon className="text-secondary" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-sm mb-1">{item.label}</h4>
                        {item.href ? (
                          <a href={item.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="rounded-2xl overflow-hidden border border-border bg-muted/50 h-56 flex items-center justify-center">
                  <p className="text-muted-foreground/50 text-sm">Google Maps Embed — Abuja, Nigeria</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
