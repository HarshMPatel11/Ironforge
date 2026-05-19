import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare } from "lucide-react";
import { PageShell, SectionTitle } from "../components/PageShell.jsx";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote request:", form);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", company: "", service: "", message: "" });
    }, 3500);
  };

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <PageShell>
      <section className="relative container mx-auto px-6 py-20">
        <div className="absolute -top-10 right-0 w-[500px] h-[400px] bg-gradient-ember opacity-15 blur-[140px] pointer-events-none aurora" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <SectionTitle
              eyebrow="Get in touch"
              title="Tell us about your project."
              sub="Send drawings, specs, or a rough description. You'll hear back from a real engineer within 24 hours."
            />

            <div className="space-y-4 mt-2">
              {[
                { Icon: Mail, label: "Email", v: "hello@ironforge.co", href: "mailto:hello@ironforge.co" },
                { Icon: Phone, label: "Phone", v: "+1 (313) 555-0142", href: "tel:+13135550142" },
                { Icon: MapPin, label: "Workshop", v: "412 Foundry Rd, Detroit MI 48201" },
                { Icon: Clock, label: "Hours", v: "Mon–Fri 7am–6pm · 24/5 production" },
              ].map(({ Icon, label, v, href }) => {
                const Tag = href ? "a" : "div";
                return (
                  <Tag
                    key={label} href={href}
                    className="group flex items-start gap-4 p-5 rounded-2xl glass hover:border-primary/60 hover:-translate-y-0.5 transition-all"
                  >
                    <span className="w-11 h-11 grid place-items-center rounded-xl bg-gradient-ember shadow-ember shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </span>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-widest">{label}</div>
                      <div className="font-semibold mt-0.5 group-hover:text-primary transition-colors">{v}</div>
                    </div>
                  </Tag>
                );
              })}
            </div>

            <div className="mt-8 p-5 rounded-2xl glass-strong">
              <div className="flex items-center gap-2 text-primary mb-2">
                <MessageSquare className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-semibold">Response promise</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every quote request lands directly with an engineer. You'll get an acknowledgment in under 2
                hours and a full quote within 24 hours — even on weekends.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="rounded-3xl glass-strong p-8 md:p-10 space-y-5 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-ember opacity-20 blur-3xl pointer-events-none" />

            <div className="relative grid sm:grid-cols-2 gap-5">
              <Field label="Full name" value={form.name} onChange={onChange("name")} required />
              <Field label="Email" type="email" value={form.email} onChange={onChange("email")} required />
            </div>
            <div className="relative grid sm:grid-cols-2 gap-5">
              <Field label="Company" value={form.company} onChange={onChange("company")} />
              <div>
                <label className="block text-sm font-medium mb-2">Service interest</label>
                <select
                  value={form.service} onChange={onChange("service")}
                  className="w-full px-4 py-3 rounded-lg bg-background/60 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                >
                  <option value="">Select…</option>
                  <option>Laser Cutting</option>
                  <option>MIG / TIG Welding</option>
                  <option>CNC Press Brake</option>
                  <option>Structural Steel</option>
                  <option>Custom Fabrication</option>
                  <option>Finishing & Coating</option>
                </select>
              </div>
            </div>
            <div className="relative">
              <label className="block text-sm font-medium mb-2">Project details</label>
              <textarea
                required rows={5} value={form.message} onChange={onChange("message")}
                className="w-full px-4 py-3 rounded-lg bg-background/60 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
                placeholder="Tell us about quantities, materials, deadlines…"
              />
            </div>
            <button
              type="submit" disabled={sent}
              className="relative w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-ember text-white font-semibold shadow-ember hover:scale-[1.02] transition-transform disabled:opacity-80"
            >
              {sent ? (<><CheckCircle2 className="w-5 h-5" /> Sent — we'll be in touch</>) : (<><Send className="w-4 h-4" /> Send Quote Request</>)}
            </button>
          </motion.form>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input {...props} className="w-full px-4 py-3 rounded-lg bg-background/60 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition" />
    </div>
  );
}
