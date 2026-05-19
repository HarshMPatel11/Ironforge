import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { PageShell, SectionTitle } from "../components/PageShell.jsx";
import { getService, services } from "../data/services.js";
import heroImg from "../assets/hero-fabrication.jpg";

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left py-5 group"
      >
        <span className="font-medium text-base md:text-lg pr-6 group-hover:text-primary transition-colors">{q}</span>
        <ChevronRight className={`w-5 h-5 shrink-0 transition-transform ${open ? "rotate-90 text-primary" : "text-muted-foreground"}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden"
      >
        <p className="text-muted-foreground pb-5 pr-10 leading-relaxed">{a}</p>
      </motion.div>
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const svc = getService(slug);
  if (!svc) return <Navigate to="/services" replace />;
  const Icon = svc.icon;
  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" aria-hidden className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-gradient-ember opacity-20 blur-[140px] aurora" />
        </div>
        <div className="relative container mx-auto px-6 pt-16 pb-24">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/services" className="hover:text-primary">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{svc.title}</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Service
            </span>
            <h1 className="mt-5 text-5xl md:text-7xl font-bold leading-[0.95]">
              {svc.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-gradient-ember">{svc.title.split(" ").slice(-1)}</span>
            </h1>
            <p className="mt-5 text-xl text-foreground/80">{svc.tagline}</p>
            <p className="mt-3 text-muted-foreground max-w-2xl">{svc.desc}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-ember text-white font-semibold shadow-ember hover:scale-105 transition-transform">
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg glass hover:border-primary/60 font-semibold transition-colors">
                All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-3 gap-10 items-start">
        <div className="md:col-span-1">
          <div className="sticky top-28 glass p-6 rounded-2xl">
            <div className="w-14 h-14 grid place-items-center rounded-xl bg-gradient-ember shadow-ember mb-4">
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Capability</div>
            <div className="text-2xl font-bold mt-1">{svc.title}</div>
          </div>
        </div>
        <div className="md:col-span-2">
          <SectionTitle eyebrow="Overview" title="What this service delivers." />
          <p className="text-lg text-muted-foreground leading-relaxed">{svc.overview}</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container mx-auto px-6 py-16">
        <SectionTitle eyebrow="Features & Benefits" title="Why teams choose us for this." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {svc.features.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 p-5 rounded-xl glass hover:border-primary/40 transition-colors"
            >
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span className="text-sm font-medium leading-relaxed">{f}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="container mx-auto px-6 py-20">
        <SectionTitle eyebrow="Process" title="A workflow built for predictability." sub="Four steps. Clear gates. Same project manager from quote to delivery." />
        <div className="relative grid gap-6 md:grid-cols-4">
          {svc.process.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="relative p-6 rounded-xl glass hover:border-primary/40 transition-all"
            >
              <div className="text-5xl font-bold text-gradient-ember opacity-80">0{i + 1}</div>
              <div className="mt-3 font-semibold text-lg">{p.t}</div>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECH */}
      <section className="container mx-auto px-6 py-16">
        <SectionTitle eyebrow="Technologies" title="Modern hardware. Calibrated daily." />
        <div className="flex flex-wrap gap-3">
          {svc.tech.map((t) => (
            <span key={t} className="px-5 py-2.5 rounded-full glass text-sm font-medium hover:border-primary/60 hover:text-primary transition-colors">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 py-20">
        <SectionTitle eyebrow="FAQ" title="Frequently asked." />
        <div className="max-w-3xl glass rounded-2xl px-6 md:px-8">
          {svc.faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="container mx-auto px-6 pb-16">
        <SectionTitle eyebrow="Continue exploring" title="More of our capabilities." />
        <div className="grid gap-5 md:grid-cols-3">
          {others.map((s) => {
            const I = s.icon;
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group p-6 rounded-xl glass hover:border-primary/60 hover:-translate-y-1 transition-all"
              >
                <I className="w-7 h-7 text-primary mb-3" />
                <div className="font-semibold text-lg">{s.title}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.tagline}</div>
                <div className="mt-4 inline-flex items-center text-sm text-primary font-semibold gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-24">
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl p-10 md:p-16 glass-strong">
          <div className="absolute inset-0 grid-pattern opacity-15" />
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-ember opacity-30 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold max-w-xl">Ready to put {svc.title.toLowerCase()} on your next build?</h3>
              <p className="mt-3 text-muted-foreground max-w-lg">Send drawings, specs, or a rough sketch — we'll respond with a quote in 24 hours.</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-gradient-ember text-white font-semibold shadow-ember hover:scale-105 transition-transform whitespace-nowrap">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
