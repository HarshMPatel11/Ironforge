import { motion } from "framer-motion";
import { Award, Users, Factory, Leaf, Target, Heart } from "lucide-react";
import { PageShell, SectionTitle } from "../components/PageShell.jsx";
import storyImg from "../assets/hero-fabrication.jpg";

const values = [
  { icon: Award, title: "Craftsmanship", desc: "Every weld inspected. Every cut verified. Zero shortcuts." },
  { icon: Users, title: "Partnership", desc: "We work as an extension of your engineering team." },
  { icon: Factory, title: "Capacity", desc: "60,000 sq ft facility running 24/5 production." },
  { icon: Leaf, title: "Responsibility", desc: "98% scrap recycled. Solar-assisted plant since 2021." },
];

const milestones = [
  { y: "1998", t: "A single bay garage", d: "Founded by Henrik Vasquez with one MIG welder and a borrowed press brake." },
  { y: "2006", t: "First 10,000 sq ft shop", d: "Acquired our first CNC press brake; structural steel division opens." },
  { y: "2014", t: "Fiber laser era", d: "Installed our first 4kW fiber laser — production triples in 18 months." },
  { y: "2021", t: "Solar + 24/5", d: "Rooftop solar covers 40% of plant load; lights-out production launches." },
  { y: "2024", t: "60,000 sq ft", d: "Expanded to a fully integrated cut-bend-weld-finish facility." },
];

const team = [
  { name: "Henrik Vasquez", role: "Founder & Master Welder" },
  { name: "Dana Okoye", role: "VP Operations" },
  { name: "Marcus Lin", role: "Chief Engineer" },
  { name: "Priya Rao", role: "Quality Director" },
];

export default function About() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative container mx-auto px-6 py-20">
        <div className="absolute -top-10 right-0 w-[500px] h-[400px] bg-gradient-ember opacity-15 blur-[140px] pointer-events-none aurora" />
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-[0.2em] uppercase">
          Our Story
        </span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="mt-4 text-5xl md:text-7xl font-bold leading-tight max-w-4xl"
        >
          Three generations of <span className="text-gradient-ember">metalworkers</span>, one obsession.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          Founded in 1998 in a single-bay garage, IronForge now operates one of the most advanced fabrication
          facilities in the Midwest — but our standard hasn't changed: if it leaves our shop, it's the best
          piece of steel you'll touch this year.
        </motion.p>
      </section>

      {/* OUR STORY + IMAGE */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <SectionTitle eyebrow="Our Story" title="From a single arc to a continuous production line." />
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                We started in 1998 with one welder, a tape measure, and a stubborn belief that American
                manufacturing still had soul. Twenty-five years later that conviction has shaped every hire,
                every machine purchase, and every project we've taken on.
              </p>
              <p>
                Today our shop handles everything from architectural staircases to structural packages for
                logistics hubs — but the same person who tacks a tank also signs the QC sheet. That continuity
                is what keeps tolerances tight and deadlines firm.
              </p>
              <p>
                We invest in our people, our machines, and the long arc of getting it right. It's slower than
                bidding the lowest price. It's the only way we know how to work.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { v: "25+", l: "Years" },
                { v: "1.2K", l: "Projects" },
                { v: "98%", l: "On-time" },
              ].map((s) => (
                <div key={s.l} className="glass p-4 rounded-xl text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient-ember">{s.v}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative order-1 md:order-2 float"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-ember glow-ring">
              <img
                src={storyImg}
                alt="IronForge fabrication shop floor with sparks flying"
                className="w-full h-full object-cover aspect-[4/5] md:aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-strong rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Family-run since 1998</div>
                    <div className="text-sm font-semibold">Detroit, Michigan</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -inset-6 bg-gradient-ember opacity-20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* MISSION */}
      <section className="container mx-auto px-6 pb-24">
        <div className="glass-strong rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-10" />
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Target className="w-10 h-10 text-primary mb-4" />
              <SectionTitle eyebrow="Mission" title="Bring back the soul of American manufacturing." />
              <p className="text-muted-foreground leading-relaxed">
                We believe great industry deserves great craftsmanship. From bridge components to architectural
                staircases, our team treats every piece as a signature — because it is.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div key={v.title} className="p-5 rounded-xl glass hover:border-primary/50 hover:-translate-y-1 transition-all">
                  <v.icon className="w-7 h-7 text-primary mb-3" />
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container mx-auto px-6 pb-24">
        <SectionTitle eyebrow="Milestones" title="A quarter-century of compounding craft." />
        <div className="relative pl-6 md:pl-0">
          <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.y}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`md:text-right ${i % 2 ? "md:text-left" : ""}`}>
                  <div className="text-4xl font-bold text-gradient-ember">{m.y}</div>
                </div>
                <div className="glass p-6 rounded-xl ml-6 md:ml-0 relative">
                  <div className="absolute -left-[34px] md:left-auto md:right-auto md:-left-[34px] top-6 w-3 h-3 rounded-full bg-primary shadow-ember" />
                  <div className="font-semibold text-lg">{m.t}</div>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="container mx-auto px-6 pb-24">
        <SectionTitle eyebrow="Leadership" title="People behind the press brake." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group glass rounded-2xl p-6 text-center hover:border-primary/60 hover:-translate-y-1 transition-all"
            >
              <div className="mx-auto w-20 h-20 rounded-full bg-gradient-ember grid place-items-center text-2xl font-bold text-white shadow-ember group-hover:scale-110 transition-transform">
                {p.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="mt-4 font-semibold">{p.name}</div>
              <div className="text-sm text-muted-foreground">{p.role}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
