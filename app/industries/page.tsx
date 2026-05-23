'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Factory, 
  Droplets, 
  Zap, 
  Building2, 
  Truck, 
  Briefcase, 
  Smartphone, 
  Cloud, 
  GraduationCap, 
  Building, 
  Rocket 
} from "lucide-react";

const industries = [
  { icon: ShoppingCart, title: "Smart Retail & Unattended Commerce", desc: "Connected vending, smart kiosks, QR payment systems, and unattended retail technology.", color: "from-blue-50 to-cyan-50 border-blue-100", accent: "text-blue-700 bg-blue-100" },
  { icon: Factory, title: "Industrial Automation & Manufacturing", desc: "Machine monitoring, process automation, telemetry, and production intelligence systems.", color: "from-slate-50 to-blue-50 border-slate-100", accent: "text-slate-700 bg-slate-100" },
  { icon: Droplets, title: "Utilities & Water Management", desc: "Smart tanker filling, distribution automation, valve control, and water metering solutions.", color: "from-sky-50 to-blue-50 border-sky-100", accent: "text-sky-700 bg-sky-100" },
  { icon: Zap, title: "Renewable Energy & Power Systems", desc: "Solar monitoring, energy metering, inverter analytics, and smart load management.", color: "from-amber-50 to-orange-50 border-amber-100", accent: "text-amber-700 bg-amber-100" },
  { icon: Building2, title: "Smart Infrastructure & Civic Tech", desc: "Urban automation, municipal deployments, smart campus systems, and civic IoT.", color: "from-cyan-50 to-teal-50 border-cyan-100", accent: "text-cyan-700 bg-cyan-100" },
  { icon: Truck, title: "Logistics & Asset Monitoring", desc: "Temperature+GPS tracking, cold-chain compliance, mobile asset telemetry, and fleet monitoring.", color: "from-orange-50 to-amber-50 border-orange-100", accent: "text-orange-700 bg-orange-100" },
  { icon: Briefcase, title: "Commercial & Institutional Operations", desc: "Business process automation, enterprise portals, and smart facility management.", color: "from-blue-50 to-slate-50 border-blue-100", accent: "text-blue-700 bg-blue-100" },
  { icon: Smartphone, title: "Consumer Electronics & Smart Devices", desc: "IoT product development, smart home devices, and embedded consumer technology.", color: "from-cyan-50 to-blue-50 border-cyan-100", accent: "text-cyan-700 bg-cyan-100" },
  { icon: Cloud, title: "Digital Platforms & SaaS", desc: "Cloud-based software products, IoT dashboards, and multi-tenant business platforms.", color: "from-sky-50 to-blue-50 border-sky-100", accent: "text-sky-700 bg-sky-100" },
  { icon: GraduationCap, title: "Education & Innovation Ecosystems", desc: "Smart campus tech, learning management, and innovation infrastructure for institutions.", color: "from-orange-50 to-amber-50 border-orange-100", accent: "text-orange-700 bg-orange-100" },
  { icon: Building, title: "Municipal & Government Tech Initiatives", desc: "Civic automation, utility management, water distribution, and public infrastructure IoT.", color: "from-blue-50 to-cyan-50 border-blue-100", accent: "text-blue-700 bg-blue-100" },
  { icon: Rocket, title: "Startups & Product Development Ventures", desc: "End-to-end product incubation — hardware design, software, MVP and market launch support.", color: "from-amber-50 to-orange-50 border-amber-100", accent: "text-amber-700 bg-amber-100" },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const cardVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function IndustriesPage() {
  return (
    <div className="relative overflow-hidden bg-white text-slate-900">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 80, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[120px]" />
        <motion.div animate={{ scale: [1.2, 1, 1.2], x: [0, -60, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-32 top-48 h-[700px] w-[700px] rounded-full bg-orange-400/10 blur-[140px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[40px] border border-blue-100 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/50 p-8 shadow-xl lg:p-14">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">🏭 Industries We Serve</span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Technology Solutions Across{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Every Industry</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Sigmatronics serves a wide spectrum of industries with integrated hardware, software, and IoT solutions — designed to deliver real-world outcomes for each sector's unique operational challenges.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/solutions" className="rounded-full bg-blue-700 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-800">View Our Solutions</Link>
                <Link href="/contact" className="rounded-full border-2 border-slate-200 bg-white px-8 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-slate-50">Talk to Our Team</Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="grid gap-4">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" alt="Industries" width={900} height={400} className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["12+ Industries", "H/W + S/W", "End-to-End"].map(t => (
                  <div key={t} className="rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-sm">
                    <p className="text-sm font-bold text-slate-900">{t}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* INTRO DARK */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-900 to-blue-950 p-10 text-white shadow-2xl lg:p-14">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Our Reach</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Serving Businesses Across Multiple Sectors</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              From smart retail to renewable energy, from industrial manufacturing to municipal infrastructure — Sigmatronics brings hardware, software, IoT, and automation capabilities to clients across every sector that needs connected, intelligent technology systems.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {["IoT Systems", "Cloud Platforms", "Embedded Hardware", "Automation", "Analytics", "Custom Solutions"].map(tag => (
              <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm">{tag}</span>
            ))}
          </div>
        </motion.section>

        {/* INDUSTRIES GRID */}
        <section className="mt-20">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Sectors We Serve</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">12 Industry Verticals</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">Sigmatronics technology is designed to be practical, deployable, and scalable across all of these sectors.</p>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(ind => (
              <motion.div key={ind.title} variants={cardVariants} whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }} className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br p-8 transition-all ${ind.color}`}>
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ${ind.accent}`}>
                  <ind.icon size={28} strokeWidth={2.5} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{ind.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{ind.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-20 overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-700 to-cyan-600 p-12 text-white shadow-2xl shadow-blue-500/20 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-200">Your Industry, Our Technology</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-snug">Don't See Your Industry Listed? We Still Build For You.</h2>
              <p className="mt-5 text-lg text-blue-100">Sigmatronics builds custom hardware, software, and solutions for any industry that needs connected, intelligent technology. Tell us what you need.</p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
              <p className="text-xl font-bold">Start a Conversation</p>
              <p className="text-sm text-blue-100">Our team will assess your industry's specific needs and propose the right solution.</p>
              <Link href="/contact" className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-blue-700 shadow-xl transition hover:bg-blue-50">
                Talk to Our Team →
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
