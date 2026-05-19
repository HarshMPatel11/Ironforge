import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageShell, SectionTitle } from "../components/PageShell.jsx";
import { services } from "../data/services.js";

export default function Services() {
  return (
    <PageShell>
      <section className="relative container mx-auto px-6 py-20">
        <div className="absolute -top-10 right-0 w-[500px] h-[400px] bg-gradient-ember opacity-15 blur-[140px] pointer-events-none aurora" />
        <SectionTitle
          eyebrow="What we do"
          title="Six disciplines. One responsible team."
          sub="Every service runs through a single project manager — no handoffs, no finger-pointing, no schedule slips."
        />

        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group relative p-7 rounded-2xl glass hover:border-primary/60 hover:shadow-ember transition-all"
              >
                <div className="w-14 h-14 grid place-items-center rounded-xl bg-gradient-ember mb-5 group-hover:scale-110 transition-transform shadow-ember">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-primary/90 font-medium">{s.tagline}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

                <Link
                  to={`/services/${s.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
                >
                  Explore service <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-gradient-ember text-white font-semibold shadow-ember hover:scale-105 transition-transform">
            Discuss your project <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
