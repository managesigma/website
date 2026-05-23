'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Cpu, 
  CircuitBoard, 
  Radio, 
  Activity, 
  Code, 
  Settings, 
  Cloud, 
  Layout, 
  Layers, 
  RefreshCw, 
  Bug, 
  Users, 
  Building, 
  Hammer, 
  Microscope, 
  UserCheck, 
  Zap, 
  Rocket, 
  BookOpen, 
  HardHat, 
  Globe, 
  Brain, 
  Milestone, 
  Trophy 
} from "lucide-react";

const domains = [
  { icon: Cpu, label: "Embedded Systems Fundamentals", desc: "Hardware thinking, microcontroller concepts, and real device logic." },
  { icon: CircuitBoard, label: "PCB & Electronics Product Design", desc: "From schematic to PCB layout and manufacturing considerations." },
  { icon: Radio, label: "IoT Device Architecture", desc: "Building connected systems, protocols, and cloud integration." },
  { icon: Activity, label: "Sensor Integration & Communication", desc: "Working with sensors, interfaces, and wireless modules." },
  { icon: Code, label: "Firmware & Device Logic", desc: "Writing embedded firmware for real product behavior." },
  { icon: Settings, label: "Industrial Automation Concepts", desc: "Control systems, PLCs, and industrial field devices." },
  { icon: Cloud, label: "Cloud-Connected Device Systems", desc: "MQTT, APIs, dashboards, and telemetry pipelines." },
  { icon: Layout, label: "Web Platform Development", desc: "Full-stack concepts for modern SaaS and IoT portals." },
  { icon: Layers, label: "Full-Stack Software Exposure", desc: "Frontend, backend, databases, and deployment basics." },
  { icon: RefreshCw, label: "Product Lifecycle Understanding", desc: "From ideation, design, prototyping to deployment." },
  { icon: Bug, label: "Real-World Debugging & Deployment", desc: "Practical problem-solving on real hardware and systems." },
  { icon: Users, label: "Cross-Functional Innovation Projects", desc: "Collaborative builds combining hardware and software." },
];

const formats = [
  { icon: Building, title: "Internship Programs", desc: "Structured, industry-grade internships with real project exposure." },
  { icon: Hammer, title: "Project-Based Learning", desc: "Hands-on learning through actual product and solution builds." },
  { icon: Microscope, title: "Research Support Initiatives", desc: "Support for academic and innovation research projects." },
  { icon: UserCheck, title: "Industry Mentorship", desc: "One-on-one guidance from experienced technology professionals." },
  { icon: Zap, title: "Innovation Bootcamps", desc: "Intensive, focused programs on specific technology domains." },
  { icon: Rocket, title: "Startup Exposure Programs", desc: "Understanding how technology companies operate and build products." },
  { icon: BookOpen, title: "Applied Learning Modules", desc: "Structured content aligned with industry-relevant skills." },
  { icon: HardHat, title: "Collaborative Build Opportunities", desc: "Work alongside Sigmatronics teams on real-world projects." },
];

const whyPoints = [
  { icon: Globe, title: "Real-World Projects", desc: "Work on actual hardware and software systems — not simulated or theoretical exercises." },
  { icon: Brain, title: "Industry-Led Mentorship", desc: "Learn directly from professionals who build and deploy technology systems every day." },
  { icon: Milestone, title: "Clear Career Pathways", desc: "Exposure across multiple domains — embedded, IoT, software, automation — opens doors to diverse roles." },
  { icon: Trophy, title: "Recognized Experience", desc: "Build a portfolio of real work that demonstrates skills to future employers or startup investors." },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const cardVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function LearningsPage() {
  return (
    <div className="relative overflow-hidden bg-white text-slate-900">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 80, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-orange-400/10 blur-[120px]" />
        <motion.div animate={{ scale: [1.2, 1, 1.2], y: [0, 80, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-32 bottom-0 h-[700px] w-[700px] rounded-full bg-blue-400/10 blur-[140px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[40px] border border-orange-100 bg-gradient-to-br from-white via-orange-50/40 to-amber-50/50 p-8 shadow-xl lg:p-14">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-orange-700">🎓 Sigmatronics Learnings</span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Industry-Driven Learning for the{" "}
                <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">Next Generation of Innovators</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Sigmatronics Learnings bridges the gap between academic knowledge and real-world technology execution — through internships, guided projects, practical exposure, and innovation-driven mentorship.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-full bg-orange-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-700">Apply for a Program</a>
                <a href="#formats" className="rounded-full border-2 border-slate-200 bg-white px-8 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-slate-50">Explore Learning Formats</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="overflow-hidden rounded-3xl shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" alt="Students learning" width={900} height={500} className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105" />
            </motion.div>
          </div>
        </section>

        {/* WHY IT MATTERS */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-900 to-blue-950 p-10 text-white shadow-2xl lg:p-14">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-orange-300">Why It Matters</p>
              <h2 className="mt-4 text-3xl font-bold leading-snug sm:text-4xl">Future-Ready Talent is Built Through Exposure, Not Just Theory</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">We believe that the most valuable learning happens in real-world environments. Sigmatronics Learnings enables participants to understand how modern products are conceived, designed, built, integrated, tested, and deployed.</p>
              <p className="mt-4 text-base text-slate-400">From embedded systems to cloud platforms, from PCB to production — learners get exposure to the full technology lifecycle that industry actually uses.</p>
            </div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {whyPoints.map(p => (
                <motion.div key={p.title} variants={cardVariants} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="text-blue-300">
                    <p.icon size={32} strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* WHAT LEARNERS EXPLORE */}
        <section className="mt-20">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-orange-600">Curriculum Domains</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">What Learners Can Explore</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">12 technology domains aligned with real industry needs — from embedded hardware to cloud software.</p>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {domains.map((d, i) => (
              <motion.div key={d.label} variants={cardVariants} whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(0,0,0,0.1)" }} className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${i % 3 === 0 ? "bg-orange-50 text-orange-600" : i % 3 === 1 ? "bg-blue-50 text-blue-600" : "bg-cyan-50 text-cyan-600"}`}>
                  <d.icon size={24} strokeWidth={2.5} />
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{d.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{d.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* FORMATS */}
        <section id="formats" className="mt-24">
          <div className="overflow-hidden rounded-[40px] border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-10 lg:p-14">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">How We Teach</p>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">Learning Formats</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">Multiple formats to match different learning goals, time commitments, and career stages.</p>
            </div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {formats.map(f => (
                <motion.div key={f.title} variants={cardVariants} whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }} className="rounded-3xl border border-white bg-white p-7 text-center shadow-md transition-all">
                  <div className="flex justify-center text-blue-600">
                    <f.icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <motion.section id="contact" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-20 overflow-hidden rounded-[40px] bg-gradient-to-r from-orange-600 to-blue-700 p-12 text-white shadow-2xl shadow-orange-500/20 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-orange-200">Ready to Learn?</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-snug">Work on Real Technologies That Matter.</h2>
              <p className="mt-5 text-lg text-orange-100">Join Sigmatronics Learnings to gain real industry exposure in embedded systems, IoT, software, and modern innovation ecosystems.</p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
              <p className="text-xl font-bold">Apply for a Learning Program</p>
              <p className="text-sm text-orange-100">Open to students, fresh graduates, and aspiring innovators in technology domains.</p>
              <a href="mailto:learnings@sigmatronics.ai" className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-orange-700 shadow-xl transition hover:bg-orange-50">
                Apply Now →
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
