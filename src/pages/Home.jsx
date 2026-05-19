import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Quote, Star, Zap, ClipboardCheck, Truck, Wrench } from "lucide-react";
import heroImg from "../assets/hero-fabrication.jpg";
import laserImg from "../assets/service-laser.jpg";
import weldImg from "../assets/service-welding.jpg";
import bendImg from "../assets/service-bending.jpg";
import p1 from "../assets/project-1.jpg";
import p2 from "../assets/project-2.jpg";
import p3 from "../assets/project-3.jpg";
import { PageShell, SectionTitle } from "../components/PageShell.jsx";
import { services } from "../data/services.js";

const stats = [
  { v: "25+", l: "Years experience" },
  { v: "1.2K", l: "Projects delivered" },
  { v: "98%", l: "On-time rate" },
  { v: "ISO", l: "9001 certified" },
];

const featured = [
  { img: laserImg, slug: "laser-cutting" },
  { img: weldImg, slug: "welding" },
  { img: bendImg, slug: "cnc-bending" },
].map((f) => ({ ...f, ...services.find((s) => s.slug === f.slug) }));

const process = [
  { icon: ClipboardCheck, t: "Quote", d: "Send drawings or sketches — quote returned in 24 hours." },
  { icon: Zap, t: "Engineer", d: "Our team reviews DFM, materials, finish, and tolerance." },
  { icon: Wrench, t: "Fabricate", d: "Cut, bend, weld, finish — all under one roof." },
  { icon: Truck, t: "Deliver", d: "QC-signed parts shipped or installed on schedule." },
];

const testimonials = [
  {
    q: "IronForge turned a complicated stainless tank package around in half the time our previous shop quoted — and the welds are gorgeous.",
    n: "Sasha Klein", r: "Lead Engineer, Cascade Brewing",
  },
  {
    q: "They quote like consultants, fabricate like artisans, and deliver like a 24/7 operation. Rare combination.",
    n: "Marcus Holt", r: "PM, Northpoint Logistics",
  },
  {
    q: "From sketch to install in six weeks. Our architectural stair is the best detail in the entire house.",
    n: "Lena Park", r: "Park & Watanabe Architects",
  },
];

const clients = ["NORTHPOINT", "CASCADE", "AETHER MFG", "PARK & W.", "MERIDIAN", "VANTA"];

export default function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Metal fabrication workshop with sparks" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-background/60" />
          <div className="absolute inset-0 grid-pattern opacity-25" />
          <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-gradient-ember opacity-15 blur-[160px] aurora" />
          <div className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-accent/30 blur-[160px] aurora" style={{ animationDelay: "4s" }} />
        </div>

        <div className="relative container mx-auto px-6 py-24">
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 glass text-xs font-semibold tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-primary" /> Forging Since 1998
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-4xl text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95]"
          >
            Built from <span className="text-gradient-ember">steel</span>.<br />
            Engineered for <span className="text-gradient-ember">legacy</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            className="mt-6 max-w-xl text-lg text-foreground/80 leading-relaxed"
          >
            Heavy-duty metal fabrication for industrial plants, architects and engineers
            who refuse to compromise on tolerance, finish, or deadlines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/contact" className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-ember text-white font-semibold shadow-ember hover:scale-105 transition-transform">
              Request a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg glass hover:border-primary/60 font-semibold transition-colors">
              View Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.25em] text-muted-foreground"
          >
            <span className="text-foreground/60">Trusted by</span>
            {clients.map((c) => <span key={c} className="font-semibold">{c}</span>)}
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border glass">
        <div className="container mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.l} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient-ember">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground tracking-wider uppercase">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container mx-auto px-6 py-24">
        <SectionTitle
          eyebrow="Capabilities"
          title="Heavy metal, handled with precision."
          sub="Three core disciplines, one continuous workflow — from raw plate to finished assembly under one roof."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl glass hover:border-primary/60 hover:shadow-ember transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute top-4 left-4 grid place-items-center w-11 h-11 rounded-xl bg-gradient-ember shadow-ember">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  <Link to={`/services/${s.slug}`} className="mt-5 inline-flex items-center text-sm text-primary font-semibold gap-2 hover:gap-3 transition-all">
                    Explore service <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            See all six capabilities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container mx-auto px-6 pb-24">
        <SectionTitle eyebrow="Our process" title="From sketch to install — four predictable steps." />
        <div className="grid gap-5 md:grid-cols-4">
          {process.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="relative p-6 rounded-2xl glass hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 grid place-items-center rounded-xl bg-gradient-ember shadow-ember">
                  <p.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-muted-foreground/60">0{i + 1}</span>
              </div>
              <div className="font-semibold text-lg">{p.t}</div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="container mx-auto px-6 pb-24">
        <SectionTitle eyebrow="Selected work" title="Steel that earned its place." />
        <div className="grid gap-6 md:grid-cols-3">
          {[{ img: p1, t: "Northpoint Logistics", tag: "Structural Steel" },
            { img: p2, t: "Cascade Brewing Plant", tag: "Stainless Tanks" },
            { img: p3, t: "Hillside Stair", tag: "Architectural" }].map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl shadow-elegant"
            >
              <img src={p.img} alt={p.t} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-xs uppercase tracking-widest text-primary font-semibold">{p.tag}</div>
                <div className="text-lg font-semibold mt-1">{p.t}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            See all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container mx-auto px-6 pb-24">
        <SectionTitle eyebrow="Word on the floor" title="What our clients say." />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.n}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="p-7 rounded-2xl glass hover:border-primary/50 hover:-translate-y-1 transition-all relative"
            >
              <Quote className="absolute top-5 right-5 w-7 h-7 text-primary/30" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <blockquote className="text-foreground/90 leading-relaxed text-[15px]">"{t.q}"</blockquote>
              <figcaption className="mt-5 pt-4 border-t border-border">
                <div className="font-semibold text-sm">{t.n}</div>
                <div className="text-xs text-muted-foreground">{t.r}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl p-10 md:p-16 glass-strong"
        >
          <div className="absolute inset-0 grid-pattern opacity-15" />
          <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-gradient-ember opacity-30 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-accent/30 blur-3xl" />

          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <ShieldCheck className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-3xl md:text-4xl font-bold max-w-xl">Have a blueprint? We'll quote it in 24 hours.</h3>
              <p className="mt-3 text-muted-foreground max-w-lg">
                Send specs, drawings or a rough sketch — our engineers respond within one business day.
              </p>
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
