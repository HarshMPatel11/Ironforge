import { Flame, Hammer, Cog, Wrench, Layers, Boxes } from "lucide-react";

export const services = [
  {
    slug: "laser-cutting",
    icon: Flame,
    title: "Laser Cutting",
    tagline: "Hairline precision on plate up to 25mm.",
    desc: "6kW fiber laser cuts mild, stainless and aluminum with tolerances within ±0.1mm.",
    overview:
      "Our 6kW fiber laser handles everything from delicate 0.5mm sheet to 25mm carbon plate with consistent, slag-free edges. Nesting software maximizes yield, and every program is verified against your CAD before the bed lights up.",
    features: [
      "±0.1mm positional tolerance",
      "4m × 2m cutting bed",
      "Mild, stainless, aluminum, brass",
      "Optimized nesting — minimal scrap",
      "Marking, etching & micro-tabs",
      "DXF / DWG / STEP intake",
    ],
    process: [
      { t: "Intake", d: "We import your CAD and verify material, gauge, and quantity." },
      { t: "Nest & Quote", d: "Smart nesting reports yield and fixed pricing in 24 hours." },
      { t: "Cut", d: "Lights-out production runs validate first-piece tolerances." },
      { t: "QC & Ship", d: "Edge inspection, deburr, package, and dispatch." },
    ],
    tech: ["TRUMPF TruLaser 5030", "Lantek Expert", "SigmaNEST", "Mitutoyo CMM"],
    faqs: [
      { q: "What file formats do you accept?", a: "DXF, DWG, STEP, IGES and PDF with dimensions." },
      { q: "Minimum order quantity?", a: "None — we run prototypes through to 10k+ piece production." },
      { q: "Do you cut reflective materials?", a: "Yes — our fiber source handles brass and copper safely." },
    ],
  },
  {
    slug: "welding",
    icon: Hammer,
    title: "MIG / TIG Welding",
    tagline: "AWS-certified joints, every time.",
    desc: "Certified welders for structural, sanitary and architectural applications.",
    overview:
      "From code-stamped structural assemblies to mirror-polished sanitary tank welds, our AWS D1.1 and D1.6 certified team delivers joints that pass first-time inspection. Each welder is qualified to specific procedures and re-tested annually.",
    features: [
      "AWS D1.1 / D1.6 certified",
      "MIG, TIG, flux-core, stick",
      "Stainless, aluminum, mild steel",
      "Sanitary 3-A welds for food/pharma",
      "WPS / PQR documentation",
      "On-site weld repair available",
    ],
    process: [
      { t: "WPS Setup", d: "We match procedure spec to your code and material." },
      { t: "Fit-up", d: "Jigs and fixtures ensure repeatability." },
      { t: "Weld", d: "Certified welders + interpass temperature control." },
      { t: "Inspect", d: "Visual, dye-pen or UT inspection per spec." },
    ],
    tech: ["Miller Dynasty 400", "Lincoln Power Wave", "Magnetic fixtures", "Dye-pen NDT"],
    faqs: [
      { q: "Do you provide weld traceability?", a: "Yes — heat numbers, WPS and welder ID on every joint." },
      { q: "Aluminum thickness range?", a: "0.080 inch through 1.5 inch with pre-heat." },
      { q: "Field welding?", a: "Mobile crews available within 200 miles." },
    ],
  },
  {
    slug: "cnc-bending",
    icon: Cog,
    title: "CNC Press Brake",
    tagline: "400-ton multi-axis forming.",
    desc: "400-ton bending capacity, 4-meter beds, multi-axis tooling for complex profiles.",
    overview:
      "Our CNC press brakes handle long, deep, multi-bend parts with the consistency your downstream assembly demands. Crowning compensation and laser angle sensing eliminate the spring-back guesswork.",
    features: [
      "Up to 400 tons / 4m bed",
      "6-axis back-gauge",
      "Laser angle measurement",
      "Bumping for tight radii",
      "Hemming & joggling",
      "Tube & profile rolling",
    ],
    process: [
      { t: "Unfold", d: "We confirm bend allowance for your material lot." },
      { t: "Tool", d: "Punch and die selected for marks-free forming." },
      { t: "Bend", d: "First-piece check verifies angle and dimension." },
      { t: "Form", d: "Run completes with periodic SPC checks." },
    ],
    tech: ["Bystronic Xpert Pro 400", "Wila tooling", "Bend simulation", "FaroArm"],
    faqs: [
      { q: "Smallest radius you can form?", a: "We can air-bend to 0.5× thickness, bottom-bend tighter." },
      { q: "Max sheet length?", a: "4 meters in a single press; longer with split tooling." },
      { q: "Do you bend stainless without marking?", a: "Yes — urethane tooling or film protection." },
    ],
  },
  {
    slug: "structural-steel",
    icon: Layers,
    title: "Structural Steel",
    tagline: "Engineered. Fabricated. Erected.",
    desc: "Beams, columns, trusses and stair stringers — engineered, fabricated, delivered.",
    overview:
      "From warehouse frames to architectural exposed structures, we deliver structural steel packages on the contractor's schedule. AISC-quality control protocols, digital piece tracking, and dedicated project managers keep the field crew loaded out.",
    features: [
      "AISC-aligned QC procedures",
      "Detailing in Tekla Structures",
      "Beams, columns, joists, bracing",
      "Galvanizing & shop-priming",
      "BIM model coordination",
      "Erection partner network",
    ],
    process: [
      { t: "Detail", d: "Tekla model + shop drawings for stamp." },
      { t: "Fabricate", d: "Cut-list, weld, plate, mark each piece." },
      { t: "Coat", d: "Shop prime or hot-dip galv coordination." },
      { t: "Deliver", d: "Sequenced loads to site, ready to set." },
    ],
    tech: ["Tekla Structures", "Peddinghaus BDL-1250", "Lincoln SAW", "RFID piece tracking"],
    faqs: [
      { q: "Do you offer erection?", a: "We coordinate with vetted erection partners regionally." },
      { q: "Typical lead time?", a: "6–10 weeks for a mid-size commercial frame." },
      { q: "Connection design?", a: "Yes — delegated design through licensed PE." },
    ],
  },
  {
    slug: "custom-fabrication",
    icon: Wrench,
    title: "Custom Fabrication",
    tagline: "Prototype to production — built once, built right.",
    desc: "From prototype to production: handrails, frames, enclosures, machine guards.",
    overview:
      "When standard catalog parts won't cut it, our custom shop builds it. Prototype iterations move fast; production runs come with fixtures, documented BOMs, and a kanban schedule so you never wait on parts.",
    features: [
      "One-off prototypes welcome",
      "Production fixtures & jigs",
      "Sheet-metal enclosures",
      "OSHA-compliant machine guards",
      "Architectural handrails & gates",
      "Powder-coated finished assemblies",
    ],
    process: [
      { t: "Concept", d: "Sketch, photo, or rough drawing — we'll model it." },
      { t: "Prototype", d: "A first article in your hand within 2 weeks." },
      { t: "Refine", d: "Tolerance, finish, BOM iterations together." },
      { t: "Produce", d: "Repeat runs at locked unit price." },
    ],
    tech: ["SolidWorks", "OnShape collaboration", "In-house powder", "FaroArm QC"],
    faqs: [
      { q: "Can you reverse-engineer existing parts?", a: "Yes — we scan and re-create from samples." },
      { q: "Do you stock material?", a: "Yes, common gauges and tube sizes in-house." },
      { q: "NDA / IP?", a: "Standard mutual NDA available on request." },
    ],
  },
  {
    slug: "finishing",
    icon: Boxes,
    title: "Finishing & Coating",
    tagline: "A finish that outlasts the structure.",
    desc: "In-house powder coat, sandblast, hot-dip galv coordination, and stainless polish.",
    overview:
      "Finish is the first thing seen and the last line of defense. Our climate-controlled finishing department blasts, primes, powders and polishes — all under one roof, all on the same schedule as fabrication.",
    features: [
      "In-house powder coat (RAL spectrum)",
      "Garnet & glass-bead blasting",
      "Hot-dip galvanizing partner",
      "#4 / mirror stainless polish",
      "Two-component industrial paints",
      "Salt-spray rated systems",
    ],
    process: [
      { t: "Surface Prep", d: "Blast to SSPC-SP10 near-white profile." },
      { t: "Pretreat", d: "Iron or zinc phosphate as required." },
      { t: "Apply", d: "Electrostatic powder or wet spray." },
      { t: "Cure & QC", d: "Mil-thickness check + adhesion test." },
    ],
    tech: ["Wagner powder line", "Nordson booth", "Elcometer DFT", "Salt-fog cabinet"],
    faqs: [
      { q: "Lead time for finishing only?", a: "Typically 5–7 business days door-to-door." },
      { q: "Largest part you can powder?", a: "20 ft × 6 ft × 7 ft oven envelope." },
      { q: "Color matching?", a: "Custom RAL / Pantone matching available." },
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
