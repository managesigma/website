'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Cpu, 
  Code, 
  Radio, 
  Globe, 
  Handshake, 
  Phone, 
  ClipboardList, 
  Map, 
  Rocket 
} from "lucide-react";

const consultancyAreas = [
  {
    icon: Cpu,
    title: "Hardware Consultancy & Development",
    color: "from-blue-50 to-cyan-50 border-blue-100",
    accent: "bg-blue-100 text-blue-700",
    items: ["Product feasibility assessment", "Architecture planning", "PCB and embedded system advisory", "Component selection & BOM optimization", "Industrialization planning", "Prototype-to-production support", "Communication module integration", "Certification-readiness guidance"],
  },
  {
    icon: Code,
    title: "Software Consultancy & Development",
    color: "from-sky-50 to-blue-50 border-sky-100",
    accent: "bg-sky-100 text-sky-700",
    items: ["Product requirement definition", "Platform architecture planning", "Dashboard and admin panel design", "API and cloud system design", "SaaS product structuring", "Data flow and telemetry design", "Web platform development support", "MVP and scale roadmap planning"],
  },
  {
    icon: Radio,
    title: "IoT & Automation Consultancy",
    color: "from-cyan-50 to-teal-50 border-cyan-100",
    accent: "bg-cyan-100 text-cyan-700",
    items: ["Connected device architecture", "Protocol selection", "Gateway and cloud design", "Data pipeline planning", "Device management strategies", "Edge vs cloud processing decisions", "Fleet deployment readiness", "Security and reliability planning"],
  },
  {
    icon: Globe,
    title: "Website & Digital Consultancy",
    color: "from-orange-50 to-amber-50 border-orange-100",
    accent: "bg-orange-100 text-orange-700",
    items: ["Corporate websites", "Startup websites", "Brand and digital identity systems", "Lead generation landing pages", "Publishing and content platforms", "Portal design and UX structuring", "Conversion-focused business sites"],
  },
  {
    icon: Handshake,
    title: "Partner-Led Specialized Execution",
    color: "from-slate-50 to-blue-50 border-slate-100",
    accent: "bg-slate-100 text-slate-700",
    items: ["Large-scale deployment support", "Multi-vendor project execution", "System integration with partner ecosystems", "Technology augmentation", "Government / institutional project collaboration", "Specialized domain experts through partner network"],
  },
];

const engagementSteps = [
  { step: "01", icon: Phone, title: "Discovery Call", desc: "We understand your challenge, goals, and technology context." },
  { step: "02", icon: ClipboardList, title: "Assessment", desc: "We assess your current state and define the right architecture." },
  { step: "03", icon: Map, title: "Roadmap", desc: "We build a clear, actionable technology roadmap and strategy." },
  { step: "04", icon: Rocket, title: "Execution", desc: "We support or lead implementation — directly or through partners." },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function ConsultancyPage() {
  return (
    <div className="relative overflow-hidden bg-white text-slate-900">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 80, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-blue-400/10 blur-[120px]" />
        <motion.div animate={{ scale: [1.2, 1, 1.2], y: [0, 80, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-32 bottom-0 h-[700px] w-[700px] rounded-full bg-orange-400/10 blur-[140px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[40px] border border-blue-100 bg-gradient-to-br from-white via-blue-50/40 to-cyan-50/60 p-8 shadow-xl lg:p-14">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">🧠 Sigmatronics Consultancy</span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Strategic Technology Advisory,{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Product Development</span>{" "}
                & Partner-Led Execution
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Sigmatronics Consultancy helps businesses, startups, institutions, and project teams accelerate technology adoption with the right mix of strategy, engineering insight, and execution support.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-full bg-blue-700 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-800">Book a Consultation</a>
                <a href="#areas" className="rounded-full border-2 border-slate-200 bg-white px-8 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-slate-50">Explore Consultancy Areas</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="overflow-hidden rounded-3xl shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" alt="Strategy session" width={900} height={500} className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105" />
            </motion.div>
          </div>
        </section>

        {/* INTRO DARK */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-900 to-blue-950 p-10 text-white shadow-2xl lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Why Consultancy Matters</p>
              <h2 className="mt-4 text-3xl font-bold leading-snug sm:text-4xl">Technology Direction Before You Build — The Smarter Approach</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">Where direct implementation requires broader capabilities or faster scaling, we collaborate with trusted technology partners and specialist firms to deliver complete outcomes for our clients — bridging the gap between strategy and real-world execution.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ v: "5", l: "Consultancy Domains" }, { v: "Strategy+", l: "Execution Support" }, { v: "Partner-Led", l: "Network Delivery" }, { v: "H/W+S/W", l: "Full-Stack Advisory" }].map(s => (
                <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
                  <p className="text-xl font-black text-white">{s.v}</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-400">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CONSULTANCY AREAS */}
        <section id="areas" className="mt-20">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Our Expertise</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">Consultancy Areas</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">Five specialized advisory domains — from hardware architecture to digital strategy.</p>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {consultancyAreas.map(area => (
              <motion.div key={area.title} variants={cardVariants} whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }} className={`group rounded-3xl border bg-gradient-to-br p-8 transition-all ${area.color}`}>
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ${area.accent}`}>
                  <area.icon size={28} strokeWidth={2.5} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{area.title}</h3>
                <ul className="mt-5 space-y-2">
                  {area.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mt-24">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-600">Our Process</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">How Engagement Works</h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {engagementSteps.map((s) => (
              <motion.div key={s.step} variants={cardVariants} whileHover={{ y: -5 }} className="relative rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all">
                <div className="absolute right-5 top-5 text-5xl font-black text-slate-100">{s.step}</div>
                <div className="text-blue-600">
                  <s.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <motion.section id="contact" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-20 overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-700 to-cyan-600 p-12 text-white shadow-2xl shadow-blue-500/20 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-200">Need Technology Direction?</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-snug">Define the Right Architecture, Roadmap & Execution Strategy.</h2>
              <p className="mt-5 text-lg text-blue-100">Sigmatronics Consultancy can help you make the right technology decisions before you invest in building.</p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
              <p className="text-xl font-bold">Book a Consultation</p>
              <p className="text-sm text-blue-100">Our team will assess your needs and propose the right strategy and roadmap.</p>
              <a href="mailto:hello@sigmatronics.ai" className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-blue-700 shadow-xl transition hover:bg-blue-50">
                Book a Consultation →
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
