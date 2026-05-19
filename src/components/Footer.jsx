import { Link } from "react-router-dom";
import { Sparkles, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";
import { services } from "../data/services.js";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/40 mt-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-ember opacity-20 blur-[120px] pointer-events-none" />

      <div className="relative container mx-auto px-6 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link to="/" className="flex items-center gap-2 mb-5">
            <span className="grid place-items-center w-10 h-10 rounded-lg bg-gradient-ember shadow-ember">
              <Sparkles className="w-5 h-5 text-white" />
            </span>
            <span className="font-display font-bold text-xl">
              IRON<span className="text-gradient-ember">FORGE</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            Precision metal fabrication and structural steel for industrial, commercial and architectural
            projects — engineered for legacy since 1998.
          </p>

          <div className="mt-6 flex items-center gap-3">
            {[
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Twitter, href: "#", label: "Twitter" },
              { Icon: Instagram, href: "#", label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid place-items-center w-10 h-10 rounded-lg glass hover:scale-110 hover:text-primary transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-display font-semibold mb-4 text-sm tracking-widest uppercase text-foreground/90">
            Explore
          </h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display font-semibold mb-4 text-sm tracking-widest uppercase text-foreground/90">
            Capabilities
          </h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <span>{s.title}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display font-semibold mb-4 text-sm tracking-widest uppercase text-foreground/90">
            Reach Us
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span>412 Foundry Rd, Detroit MI 48201</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <a href="tel:+13135550142" className="hover:text-primary transition-colors">+1 (313) 555-0142</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <a href="mailto:hello@ironforge.co" className="hover:text-primary transition-colors">hello@ironforge.co</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-border py-5 px-6 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} IronForge Fabrication. All rights reserved.</div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">ISO 9001 Cert</a>
        </div>
      </div>
    </footer>
  );
}
