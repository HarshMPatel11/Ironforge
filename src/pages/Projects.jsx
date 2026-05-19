import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Hammer } from "lucide-react";
import { PageShell, SectionTitle } from "../components/PageShell.jsx";
import p1 from "../assets/project-1.jpg";
import p2 from "../assets/project-2.jpg";
import p3 from "../assets/project-3.jpg";

const projects = [
  {
    img: p1, title: "Northpoint Logistics Hub", tag: "Structural Steel", year: "2024", location: "Toledo, OH",
    desc: "32,000 sqft warehouse frame — beams, columns, bracing fabricated and erected on schedule.",
    stats: [{ k: "Tons", v: "420" }, { k: "Beams", v: "186" }, { k: "Lead time", v: "10 wk" }],
  },
  {
    img: p2, title: "Cascade Brewing Plant", tag: "Stainless Tanks", year: "2024", location: "Grand Rapids, MI",
    desc: "Six 40HL fermentation vessels with sanitary welds and food-grade polish.",
    stats: [{ k: "Vessels", v: "6" }, { k: "Capacity", v: "40HL" }, { k: "Finish", v: "Mirror" }],
  },
  {
    img: p3, title: "Hillside Residence Stair", tag: "Architectural", year: "2023", location: "Asheville, NC",
    desc: "Floating black-steel stringer staircase with white oak treads, custom TIG-welded.",
    stats: [{ k: "Risers", v: "18" }, { k: "Span", v: "14 ft" }, { k: "Finish", v: "Matte black" }],
  },
];

const categories = ["All", "Structural", "Architectural", "Industrial", "Sanitary"];

export default function Projects() {
  return (
    <PageShell>
      <section className="relative container mx-auto px-6 py-20">
        <div className="absolute -top-10 right-0 w-[500px] h-[400px] bg-gradient-ember opacity-15 blur-[140px] pointer-events-none aurora" />
        <SectionTitle
          eyebrow="Selected work"
          title="Steel that earned its place."
          sub="A small slice of recent projects across industrial, commercial and residential builds."
        />

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((c, i) => (
            <button
              key={c}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                i === 0 ? "bg-gradient-ember text-white shadow-ember" : "glass hover:border-primary/60 hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="space-y-24">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative">
                <div className="overflow-hidden rounded-2xl shadow-elegant group glow-ring">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute -z-10 -inset-6 bg-gradient-ember opacity-20 blur-3xl rounded-full" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold tracking-widest uppercase text-primary mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30">{p.tag}</span>
                  <span className="flex items-center gap-1.5 text-muted-foreground"><Calendar className="w-3.5 h-3.5" /> {p.year}</span>
                  <span className="flex items-center gap-1.5 text-muted-foreground"><MapPin className="w-3.5 h-3.5" /> {p.location}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">{p.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.desc}</p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {p.stats.map((s) => (
                    <div key={s.k} className="glass p-4 rounded-xl">
                      <div className="text-xl font-bold text-gradient-ember">{s.v}</div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.k}</div>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                  Discuss a similar project <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-24 glass-strong rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 grid-pattern opacity-15" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-72 bg-gradient-ember opacity-25 blur-3xl" />
          <div className="relative">
            <Hammer className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-3xl md:text-4xl font-bold">Your project, our next case study.</h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              From single-piece prototypes to full structural packages — we'd love to add yours to the list.
            </p>
            <Link to="/contact" className="mt-7 inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-gradient-ember text-white font-semibold shadow-ember hover:scale-105 transition-transform">
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
