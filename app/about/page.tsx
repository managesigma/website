'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Settings, 
  Target, 
  TrendingUp, 
  Handshake, 
  ShieldCheck, 
  BookOpen, 
  Cpu, 
  Code, 
  Rocket, 
  Brain, 
  GraduationCap, 
  Globe 
} from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation with Purpose", desc: "Every product we build starts with a real problem. We innovate not for novelty, but for meaningful, measurable impact." },
  { icon: Settings, title: "Engineering Excellence", desc: "From PCB to cloud, our work is grounded in deep engineering discipline — built to last and designed to scale." },
  { icon: Target, title: "Practical Execution", desc: "We don't just conceptualize. We prototype, test, deploy, and iterate until the solution works in the real world." },
  { icon: TrendingUp, title: "Scalable Thinking", desc: "Every system we design is built with tomorrow in mind — ready to grow from a pilot to enterprise-scale deployment." },
  { icon: Handshake, title: "Customer-Centric Problem Solving", desc: "We listen first. Every solution is shaped by the client's actual workflow, constraints, and business goals." },
  { icon: ShieldCheck, title: "Integrity in Delivery", desc: "We commit to honest timelines, transparent processes, and systems that work as promised — every single time." },
  { icon: BookOpen, title: "Continuous Learning & Collaboration", desc: "Technology evolves fast. We stay ahead through relentless learning, cross-domain collaboration, and open knowledge sharing." },
];

const verticals = [
  { icon: Cpu, label: "Sigmatronics Hardware", desc: "Embedded systems, IoT devices, industrial electronics & custom PCB design.", href: "/hardware" },
  { icon: Code, label: "Sigmatronics Software", desc: "Custom platforms, IoT dashboards, web apps & digital products.", href: "/software" },
  { icon: Rocket, label: "Sigmatronics Solutions", desc: "End-to-end integrated hardware + software + deployment.", href: "/solutions" },
  { icon: Brain, label: "Sigmatronics Consultancy", desc: "Strategic advisory, product guidance & partner-led execution.", href: "/consultancy" },
  { icon: GraduationCap, label: "Sigmatronics Learnings", desc: "Industry-driven programs for the next generation of innovators.", href: "/learnings" },
];

const timeline = [
  { year: "Foundation", title: "Hardware & Embedded Systems", desc: "Started with a strong foundation in hardware design, embedded systems engineering, and industrial electronics." },
  { year: "Expansion", title: "Software & IoT Platforms", desc: "Expanded into software platforms, IoT analytics, industrial automation, and digital business systems." },
  { year: "Integration", title: "Multi-Vertical Enterprise", desc: "Evolved into an integrated technology company with five specialized verticals working together." },
  { year: "Today", title: "Complete Technology Partner", desc: "Delivering end-to-end solutions — from concept to cloud, from prototype to production deployment." },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-white text-slate-900">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 80, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[120px]" />
        <motion.div animate={{ scale: [1.2, 1, 1.2], x: [0, -60, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-32 top-48 h-[700px] w-[700px] rounded-full bg-orange-400/10 blur-[140px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[40px] border border-cyan-100 bg-gradient-to-br from-white via-cyan-50/40 to-blue-50/50 p-8 shadow-xl lg:p-14">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-700">
                🏢 About Us
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
                About Sigmatronics Innovation{" "}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Private Limited
                </span>
              </h1>
              <p className="mt-6 text-xl font-semibold leading-relaxed text-slate-700">
                Engineering Technology That Solves Real-World Challenges
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/solutions" className="rounded-full bg-cyan-700 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-800">
                  Explore Our Work
                </Link>
                <Link href="/contact" className="rounded-full border-2 border-slate-200 bg-white px-8 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-slate-50">
                  Get in Touch
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="grid gap-4">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" alt="Sigmatronics Innovation team" width={900} height={500} className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[{ v: "5+", l: "Technology Verticals" }, { v: "9+", l: "Hardware Domains" }, { v: "5+", l: "Flagship Platforms" }, { v: "Full-Stack", l: "Innovation Capability" }].map(s => (
                  <div key={s.l} className="rounded-2xl border border-cyan-100 bg-white p-5 text-center shadow-sm">
                    <p className="text-2xl font-black text-slate-900">{s.v}</p>
                    <p className="mt-1 text-xs font-medium text-slate-500">{s.l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* COMPANY STORY — DARK SECTION */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mt-16 overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-900 to-blue-950 p-10 text-white shadow-2xl lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">Our Story</p>
              <h2 className="mt-4 text-3xl font-bold leading-snug sm:text-4xl">
                From Hardware Innovation to a Multi-Vertical Technology Enterprise
              </h2>
              <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-slate-300">
                <p>
                  Sigmatronics Innovation Private Limited is a technology company built on a strong engineering-first foundation. What began as a hardware-driven innovation journey has now expanded into a multi-vertical enterprise spanning advanced electronics, embedded systems, IoT platforms, software products, smart automation solutions, consultancy, and learning initiatives.
                </p>
                <p>
                  Our strength lies in combining practical engineering with product thinking. We understand that businesses today need more than just a device or a dashboard — they need complete, scalable, and future-ready systems that work reliably in the real world.
                </p>
                <p>
                  That is why Sigmatronics brings together hardware design, software development, industrial integration, automation logic, cloud platforms, and deployment support under one roof.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10">
              <Image src="https://images.unsplash.com/photo-1581091870622-2d5e8de5d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Technology innovation" width={800} height={500} className="h-80 w-full object-cover" />
            </div>
          </div>
        </motion.section>

        {/* EVOLUTION TIMELINE */}
        <section className="mt-20">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Our Journey</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">How Sigmatronics Evolved</h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <motion.div key={t.year} variants={cardVariants} whileHover={{ y: -6 }} className="relative rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all">
                <div className={`inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-black ${i === 3 ? "bg-cyan-600 text-white" : "bg-blue-50 text-blue-700"}`}>{t.year}</div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{t.desc}</p>
                {i < 3 && <div className="absolute -right-3 top-1/2 hidden h-0.5 w-6 bg-blue-200 lg:block" />}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* MISSION & VISION */}
        <section className="mt-20 grid gap-6 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-[32px] border border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50 p-10 shadow-lg">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 shadow-sm">
                <Target size={32} strokeWidth={2.5} />
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">Our Mission</p>
            </div>
            <h2 className="mt-6 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
              To build intelligent, practical, and scalable technology solutions that empower businesses, institutions, and innovators across industries.
            </h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="overflow-hidden rounded-[32px] border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 p-10 shadow-lg">
            <div className="flex items-center gap-4">
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 shadow-sm">
                <Globe size={32} strokeWidth={2.5} />
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-orange-700">Our Vision</p>
            </div>
            <h2 className="mt-6 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
              To become a globally respected innovation-driven technology company delivering impactful hardware, software, and integrated smart systems for the future.
            </h2>
          </motion.div>
        </section>

        {/* VALUES */}
        <section className="mt-20">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-600">What Drives Us</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">Our Core Values</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">The principles that guide every product, platform, and partnership at Sigmatronics.</p>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {values.map((v, i) => (
              <motion.div key={v.title} variants={cardVariants} whileHover={{ y: -5, boxShadow: "0 20px 50px rgba(0,0,0,0.08)" }} className="group rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ${i % 2 === 0 ? "bg-blue-50 text-blue-600" : "bg-orange-50 text-orange-600"}`}>
                  <v.icon size={28} strokeWidth={2.5} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* FIVE VERTICALS */}
        <section className="mt-24">
          <div className="overflow-hidden rounded-[40px] border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-10 lg:p-14">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">How We're Structured</p>
              <h2 className="mt-4 text-4xl font-bold text-slate-900">Our Five Technology Verticals</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">Each vertical is a specialized domain — engineered to work independently or as part of a complete integrated solution.</p>
            </div>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {verticals.map((v, i) => (
                <motion.div key={v.label} variants={cardVariants} whileHover={{ y: -6, boxShadow: "0 16px 48px rgba(0,0,0,0.1)" }} className="group flex flex-col items-center rounded-3xl border border-white bg-white p-8 text-center shadow-md transition-all">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm ${i % 2 === 0 ? "bg-blue-50 text-blue-600" : "bg-orange-50 text-orange-600"}`}>
                    <v.icon size={32} strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-bold text-slate-900">{v.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{v.desc}</p>
                  <Link href={v.href} className="mt-4 text-sm font-semibold text-cyan-700 transition hover:text-cyan-900">
                    Learn More →
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-24 overflow-hidden rounded-[40px] bg-gradient-to-r from-cyan-700 to-blue-700 p-12 text-white shadow-2xl shadow-cyan-500/20 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-200">Work With Us</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-snug">Partner with Sigmatronics Innovation</h2>
              <p className="mt-5 text-lg text-cyan-100">Whether you need custom hardware, a software platform, an end-to-end solution, or expert guidance — we're ready to build with you.</p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
              <p className="text-xl font-bold">Start a Conversation</p>
              <p className="text-sm text-cyan-100">Tell us what you're building. Our team will respond with the right approach.</p>
              <Link href="/contact" className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-cyan-700 shadow-xl transition hover:bg-cyan-50">
                Contact Our Team →
              </Link>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
