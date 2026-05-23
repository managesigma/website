'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Droplets, 
  Settings, 
  Zap, 
  Waves, 
  MapPin, 
  Home, 
  Factory, 
  Microscope, 
  Rocket, 
  Package, 
  Building2, 
  Tag, 
  Wrench, 
  Target, 
  Handshake 
} from "lucide-react";

const solutions = [
  {
    title: "Smart Vending Solutions",
    icon: ShoppingCart,
    color: "from-blue-600 to-cyan-500",
    bg: "from-blue-50 to-cyan-50",
    border: "border-blue-100",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    desc: "End-to-end vending ecosystems combining intelligent hardware controllers, payment integration, and real-time cloud monitoring.",
    items: ["Multi-product & single-product vending systems", "UPI / QR payment-enabled vending", "Remote monitoring and inventory control", "Dispense verification & machine analytics", "Refill and maintenance alert systems", "Branded vending deployment support"],
  },
  {
    title: "Automated Water Management",
    icon: Droplets,
    color: "from-sky-600 to-blue-500",
    bg: "from-sky-50 to-blue-50",
    border: "border-sky-100",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    desc: "Intelligent water automation systems for municipal, institutional, and industrial applications — from tanker filling to distribution monitoring.",
    items: ["Smart water tanker filling automation", "Valve + flow meter controlled dispensing", "Order-based water allocation systems", "Municipal water distribution automation", "Remote tracking & transaction logs", "Cloud-integrated water delivery workflows", "Audit and reporting systems"],
  },
  {
    title: "Industrial IoT & Automation",
    icon: Settings,
    color: "from-slate-700 to-blue-700",
    bg: "from-slate-50 to-blue-50",
    border: "border-slate-100",
    image: "https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    desc: "Complete industrial intelligence platforms that connect machines, processes, and operations through embedded hardware and real-time cloud software.",
    items: ["Machine monitoring systems", "Industrial telemetry & diagnostics", "Remote equipment diagnostics", "Production parameter visibility", "Predictive maintenance-ready architecture", "Multi-site industrial dashboards"],
  },
  {
    title: "Energy & Utility Solutions",
    icon: Zap,
    color: "from-amber-600 to-orange-500",
    bg: "from-amber-50 to-orange-50",
    border: "border-amber-100",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    desc: "Integrated energy monitoring and management platforms for solar, utility, and electrical infrastructure — from metering to smart load control.",
    items: ["Solar monitoring systems", "Inverter & charge controller analytics", "Energy metering dashboards", "Genset / fuel monitoring systems", "Smart load control & energy optimization", "Remote utility infrastructure visibility"],
  },
  {
    title: "Smart Dispensing Solutions",
    icon: Waves,
    color: "from-teal-600 to-cyan-500",
    bg: "from-teal-50 to-cyan-50",
    border: "border-teal-100",
    image: "https://images.unsplash.com/photo-1544724107-6d5e4b1b9988?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    desc: "Controlled, metered, and access-secured dispensing systems for liquid, utility, and consumable products with full usage tracking.",
    items: ["Liquid & utility dispensing systems", "Metered dispensing logic", "Secure access-based dispense flows", "Consumable dispensing control", "Usage logs & transaction reporting"],
  },
  {
    title: "Smart Monitoring & Tracking",
    icon: MapPin,
    color: "from-rose-600 to-pink-500",
    bg: "from-rose-50 to-pink-50",
    border: "border-rose-100",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    desc: "GPS, temperature, and condition monitoring systems for assets, logistics, and sensitive cargo — with real-time cloud tracking and alerts.",
    items: ["Temperature + GPS tracking", "Asset condition monitoring", "Battery health tracking", "Mobile asset telemetry", "Cold-chain / sensitive material monitoring", "Remote alerts & threshold management"],
  },
  {
    title: "Home & Building Automation",
    icon: Home,
    color: "from-emerald-600 to-green-500",
    bg: "from-emerald-50 to-green-50",
    border: "border-emerald-100",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    desc: "Smart automation for residential and commercial spaces — enabling energy savings, remote control, safety, and intelligent environmental management.",
    items: ["Smart control systems", "Energy usage monitoring", "Access & sensor-based automation", "Remote appliance control", "Occupancy and safety automation", "Integrated control dashboards"],
  },
  {
    title: "Custom Industry Solutions",
    icon: Factory,
    color: "from-blue-600 to-blue-500",
    bg: "from-blue-50 to-blue-50",
    border: "border-blue-100",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
    desc: "Tailored end-to-end technology solutions for a wide range of sectors — from retail and utilities to smart campuses and startup product incubation.",
    items: ["Retail & utilities", "Manufacturing & municipal corporations", "Educational institutions & smart campuses", "Warehousing & logistics", "Hospitality & healthcare-support", "Renewable energy & commercial infrastructure", "Startup product incubation"],
  },
];

const deliveryModels = [
  { icon: Microscope, label: "Prototype / MVP" },
  { icon: Rocket, label: "Pilot Deployment" },
  { icon: Package, label: "Small Batch Production" },
  { icon: Building2, label: "Enterprise Rollout" },
  { icon: Tag, label: "White-Label Technology" },
  { icon: Wrench, label: "OEM / ODM Support" },
  { icon: Target, label: "Turnkey Execution" },
  { icon: Handshake, label: "Partner-Led Deployment" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SolutionsPage() {
  return (
    <div className="relative overflow-hidden bg-white text-slate-900">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div animate={{ scale:[1,1.2,1], y:[0,60,0] }} transition={{ duration:20, repeat:Infinity, ease:"easeInOut" }} className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-teal-400/10 blur-[120px]" />
        <motion.div animate={{ scale:[1.2,1,1.2], x:[0,-60,0] }} transition={{ duration:28, repeat:Infinity, ease:"easeInOut" }} className="absolute -right-32 top-48 h-[700px] w-[700px] rounded-full bg-orange-400/10 blur-[140px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[40px] border border-teal-100 bg-gradient-to-br from-white via-teal-50/40 to-blue-50/60 p-8 shadow-xl lg:p-14">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity:0, x:-30 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-700">
                🎯 Sigmatronics Solutions
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                End-to-End <span className="bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent">Technology Solutions</span> for Real-World Operations
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                We don't just build components. We deliver complete, deployable, and scalable solutions — combining hardware, software, IoT, and deployment into one integrated outcome.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#solutions" className="rounded-full bg-teal-700 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-teal-500/25 transition hover:bg-teal-800">
                  Explore All Solutions
                </a>
                <a href="#contact" className="rounded-full border-2 border-slate-200 bg-white px-8 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-slate-50">
                  Talk to Our Solutions Team
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Hardware + Software", "IoT Integration", "Cloud Connected", "Turnkey Delivery", "Scalable"].map(tag => (
                  <span key={tag} className="rounded-full border border-teal-100 bg-white px-3 py-1.5 text-xs font-semibold text-teal-700 shadow-sm">{tag}</span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.8, delay:0.2 }} className="grid gap-4">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Solutions" width={800} height={400} className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[{ v:"8+", l:"Solution Domains" }, { v:"H/W + S/W", l:"Integrated Delivery" }, { v:"Pilot→Scale", l:"Flexible Rollout" }, { v:"B2B Ready", l:"Enterprise-Grade" }].map(s => (
                  <div key={s.l} className="rounded-2xl border border-teal-100 bg-white p-4 text-center shadow-sm">
                    <p className="text-lg font-black text-slate-900">{s.v}</p>
                    <p className="mt-1 text-xs font-medium text-slate-500">{s.l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* INTRO */}
        <motion.section initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="mt-16 overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-900 to-teal-950 p-10 text-white shadow-2xl lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-teal-300">Complete Execution</p>
              <h2 className="mt-4 text-3xl font-bold leading-snug sm:text-4xl">
                From Concept to Deployment — One Partner, Complete Ownership
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Sigmatronics Solutions combines our hardware engineering, software development, IoT expertise, automation capabilities, and execution support into integrated systems built for practical business and industrial outcomes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ v:"Hardware", l:"Engineering" }, { v:"Software", l:"Platforms" }, { v:"IoT", l:"Integration" }, { v:"Support", l:"Long-term" }].map(s => (
                <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
                  <p className="text-xl font-black text-white">{s.v}</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-400">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* SOLUTIONS GRID */}
        <section id="solutions" className="mt-20">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-600">What We Deliver</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">Our Complete Solution Portfolio</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">Eight specialized solution domains, each built to deliver real-world business outcomes.</p>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once:true }} className="mt-12 grid gap-8 md:grid-cols-2">
            {solutions.map((sol) => (
              <motion.div key={sol.title} variants={cardVariants} whileHover={{ y:-6, boxShadow:"0 20px 60px rgba(0,0,0,0.1)" }} className={`group overflow-hidden rounded-[32px] border bg-gradient-to-br ${sol.bg} ${sol.border} shadow-md transition-all`}>
                <div className="relative h-52 overflow-hidden">
                  <Image src={sol.image} alt={sol.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r ${sol.color} text-white shadow-lg`}>
                      <sol.icon size={20} strokeWidth={2.5} />
                    </span>
                    <h3 className="text-xl font-bold text-white">{sol.title}</h3>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-base leading-relaxed text-slate-700">{sol.desc}</p>
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {sol.items.map(item => (
                      <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* DELIVERY MODEL */}
        <section className="mt-24">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="overflow-hidden rounded-[40px] border border-slate-100 bg-gradient-to-br from-slate-900 to-blue-950 p-10 text-white lg:p-14">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Flexible Engagement</p>
              <h2 className="mt-4 text-4xl font-bold">Our Delivery Model</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
                Our solutions are designed to be flexible and scalable, whether you need a quick MVP or an enterprise-grade rollout.
              </p>
            </div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once:true }} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {deliveryModels.map(m => (
                <motion.div key={m.label} variants={cardVariants} whileHover={{ y:-5, backgroundColor:"rgba(255,255,255,0.1)" }} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all">
                  <div className="flex justify-center text-blue-300">
                    <m.icon size={40} strokeWidth={1.5} />
                  </div>
                  <p className="mt-4 font-bold text-white">{m.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* CTA */}
        <motion.section id="contact" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="mt-20 overflow-hidden rounded-[40px] bg-gradient-to-r from-teal-700 to-blue-600 p-12 text-white shadow-2xl shadow-teal-500/20 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-teal-200">Ready to Build?</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-snug">Complete Solutions, Delivered End-to-End.</h2>
              <p className="mt-5 text-lg text-teal-100">From your initial idea to a production-ready, cloud-connected, field-deployed system — Sigmatronics Solutions manages the entire journey.</p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
              <p className="text-xl font-bold">Talk to Our Solutions Team</p>
              <p className="text-sm text-teal-100">Tell us your challenge. We'll map it to the right hardware, software, and deployment strategy.</p>
              <a href="mailto:hello@sigmatronics.ai" className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-teal-700 shadow-xl transition hover:bg-teal-50">
                Start Your Solution →
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
