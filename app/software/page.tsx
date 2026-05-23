'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Layout, 
  Gauge, 
  Settings2, 
  CreditCard, 
  Workflow, 
  Layers, 
  BarChart3, 
  Webhook, 
  Cloud, 
  ShieldCheck, 
  ShoppingBag, 
  Radio,
  Zap,
  Lock,
  Users,
  RefreshCw
} from "lucide-react";

const whatWeBuild = [
  { icon: Layout, label: "Custom Web Applications", desc: "Modern, scalable web apps built to match your workflows and users." },
  { icon: Gauge, label: "IoT Dashboards", desc: "Real-time device monitoring portals with live data, alerts & control." },
  { icon: Settings2, label: "Device Management Portals", desc: "Manage fleets of devices, firmware, health, and events from one place." },
  { icon: CreditCard, label: "Payment-Enabled Systems", desc: "UPI, QR, card, wallet-integrated transaction platforms." },
  { icon: Workflow, label: "Enterprise Workflow Systems", desc: "Operational management platforms for complex business processes." },
  { icon: Layers, label: "SaaS-Style Platforms", desc: "Multi-tenant platforms built for subscription and operational scale." },
  { icon: BarChart3, label: "Analytics & Reporting", desc: "Business intelligence dashboards with deep data visibility." },
  { icon: Webhook, label: "API-First Integrations", desc: "Connect devices, third-party services, and data pipelines." },
  { icon: Cloud, label: "Cloud Backend Systems", desc: "Scalable databases, microservices, and secure cloud architectures." },
  { icon: ShieldCheck, label: "Admin Control Panels", desc: "Role-based operational panels for managing users, data, and devices." },
  { icon: ShoppingBag, label: "E-commerce & Marketplace", desc: "B2C and B2B platforms with catalog, cart, and fulfillment logic." },
  { icon: Radio, label: "Device-Cloud Middleware", desc: "Telemetry pipelines that connect field hardware to cloud software." },
];

const portfolio = [
  {
    title: "VendMonitor",
    subtitle: "Smart Vending Monitoring & Analytics Platform",
    description: "A cloud-connected monitoring and operations platform for vending machine ecosystems — providing real-time visibility, transaction intelligence, and fleet management.",
    color: "from-cyan-600 to-blue-600",
    bg: "from-cyan-50 to-blue-50",
    border: "border-cyan-100",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Remote machine monitoring", "Real-time inventory visibility", "Sales & transaction insights", "Device health alerts", "Payment event tracking", "Multi-machine dashboard management", "Refill planning & operational control", "Location-wise performance analytics"],
    url: "vendmonitor.com",
  },
  {
    title: "NodeQue",
    subtitle: "Digital Queue & Service Flow Management",
    description: "An intelligent queue and order management platform that transforms how businesses serve customers — reducing wait times and improving operational efficiency.",
    color: "from-sky-600 to-blue-600",
    bg: "from-sky-50 to-blue-50",
    border: "border-sky-100",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Queue token management", "Service flow optimization", "Customer wait-time visibility", "Multi-location operations", "Service analytics dashboards", "Automated order sequencing", "Customer communication support", "Operational efficiency tracking"],
    url: null,
  },
  {
    title: "MetaPlugs",
    subtitle: "AI, Technology & Innovation Digital Platform",
    description: "A forward-thinking digital ecosystem covering AI insights, technology innovation, research content, and product discovery for the next generation of innovators.",
    color: "from-orange-500 to-amber-500",
    bg: "from-orange-50 to-amber-50",
    border: "border-orange-100",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Technology insights & research", "AI and innovation publishing", "Community engagement", "Product discovery", "Industry trend curation", "Innovation branding for Sigmatronics"],
    url: null,
  },
  {
    title: "JivanSecure",
    subtitle: "Finance, Investment & Wealth Literacy Platform",
    description: "A trust-based digital platform for financial awareness, investment knowledge, and modern wealth literacy — empowering individuals with intelligent financial guidance.",
    color: "from-emerald-600 to-teal-600",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Financial knowledge content", "Investment awareness", "Market intelligence", "Personal finance guidance", "Financial education", "User engagement ecosystem"],
    url: null,
  },
  {
    title: "Custom IoT Platforms",
    subtitle: "Tailored Software for Your Devices & Business",
    description: "We build bespoke software platforms that match your device ecosystem, business model, and user workflows — from MVP to enterprise-scale multi-tenant solutions.",
    color: "from-slate-700 to-blue-700",
    bg: "from-slate-50 to-blue-50",
    border: "border-slate-100",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Device dashboards", "Remote control portals", "Role-based admin systems", "Reports & exports", "API integrations", "User access management", "Subscription dashboards", "Multi-client tenancy architecture"],
    url: null,
  },
];

const techStack = [
  { icon: "⚡", label: "Modern Web Tech" },
  { icon: "☁️", label: "Cloud-Ready Backends" },
  { icon: "🔗", label: "API-First Architecture" },
  { icon: "🔒", label: "Secure Data Handling" },
  { icon: "📊", label: "Real-Time Dashboards" },
  { icon: "📡", label: "Device Telemetry Pipelines" },
  { icon: "💳", label: "Payment Gateway Integration" },
  { icon: "📱", label: "Mobile-Ready Platforms" },
  { icon: "👥", label: "Multi-Tenant Architecture" },
  { icon: "🔄", label: "Analytics & Reporting Layers" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SoftwarePage() {
  return (
    <div className="relative overflow-hidden bg-white text-slate-900">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div animate={{ scale:[1,1.2,1], x:[0,100,0] }} transition={{ duration:22, repeat:Infinity, ease:"easeInOut" }} className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-blue-400/10 blur-[120px]" />
        <motion.div animate={{ scale:[1.2,1,1.2], y:[0,80,0] }} transition={{ duration:28, repeat:Infinity, ease:"easeInOut" }} className="absolute -right-32 bottom-0 h-[700px] w-[700px] rounded-full bg-cyan-400/10 blur-[140px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[40px] border border-sky-100 bg-gradient-to-br from-white via-sky-50/40 to-blue-50/60 p-8 shadow-xl lg:p-14">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity:0, x:-30 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-700">
                💻 Sigmatronics Software
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Custom Platforms, <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">IoT Applications</span> & Digital Products
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Building modern software ecosystems that power devices, businesses, operations, and digital experiences — designed to be practical, scalable, and ready for real-world operations.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#portfolio" className="rounded-full bg-sky-700 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-800">
                  View Platform Portfolio
                </a>
                <a href="#contact" className="rounded-full border-2 border-slate-200 bg-white px-8 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-slate-50">
                  Build Your Platform
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.8, delay:0.2 }} className="overflow-hidden rounded-3xl shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" alt="Software development" width={900} height={500} className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105" />
            </motion.div>
          </div>
        </section>

        {/* INTRO CARD */}
        <motion.section initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="mt-16 overflow-hidden rounded-[32px] bg-gradient-to-r from-slate-900 to-blue-950 p-10 text-white shadow-2xl lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-300">About Sigmatronics Software</p>
              <h2 className="mt-4 text-3xl font-bold leading-snug sm:text-4xl">
                Software That Powers Devices, Operations & Digital Businesses
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Sigmatronics Software builds robust, scalable, and user-friendly software solutions for businesses, products, and digital platforms. Whether integrated with our hardware or third-party systems, our platforms enable monitoring, control, analytics, transactions, and customer engagement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ v:"5+", l:"Flagship Platforms" }, { v:"Full-Stack", l:"Development Capability" }, { v:"API-First", l:"Integration Approach" }, { v:"SaaS-Ready", l:"Multi-Tenant Architecture" }].map(s => (
                <div key={s.l} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
                  <p className="text-xl font-black text-white">{s.v}</p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-slate-400">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* WHAT WE BUILD */}
        <section className="mt-20">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Our Build Scope</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">What We Build</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">A comprehensive range of software products for devices, businesses, and digital ecosystems.</p>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once:true }} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {whatWeBuild.map((item) => (
              <motion.div key={item.label} variants={cardVariants} whileHover={{ y:-6, boxShadow:"0 16px 48px rgba(124,58,237,0.1)" }} className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <item.icon size={24} strokeWidth={2.5} />
                </div>
                <h3 className="mt-4 font-bold text-slate-900">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PLATFORM PORTFOLIO */}
        <section id="portfolio" className="mt-24">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Signature Platforms</p>
            <h2 className="mt-4 text-4xl font-bold text-slate-900">Our Software Portfolio</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500">Flagship platforms built by Sigmatronics — each addressing a distinct market opportunity.</p>
          </div>
          <div className="mt-12 space-y-10">
            {portfolio.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:i*0.05 }} className={`overflow-hidden rounded-[32px] border bg-gradient-to-br ${item.bg} ${item.border} shadow-xl`}>
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 lg:p-10">
                    <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${item.color} px-5 py-2 text-sm font-bold text-white shadow-lg`}>
                      {item.title}
                    </div>
                    <h3 className="mt-5 text-2xl font-bold text-slate-900">{item.subtitle}</h3>
                    <p className="mt-4 text-base leading-relaxed text-slate-600">{item.description}</p>
                    <div className="mt-6 grid grid-cols-2 gap-2">
                      {item.features.map(f => (
                        <div key={f} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                          {f}
                        </div>
                      ))}
                    </div>
                    {item.url && (
                      <div className="mt-6">
                        <span className="rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-xs font-bold text-green-700">🌐 {item.url}</span>
                      </div>
                    )}
                  </div>
                  <div className="relative overflow-hidden">
                    <Image src={item.image} alt={item.title} width={700} height={450} className="h-full min-h-[240px] w-full object-cover transition-transform duration-700 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <section className="mt-24">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="overflow-hidden rounded-[40px] border border-slate-100 bg-gradient-to-br from-slate-900 to-blue-950 p-10 text-white lg:p-14">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Technology Positioning</p>
                <h2 className="mt-4 text-4xl font-bold leading-snug">Software Built on Modern,<br />Enterprise-Grade Architecture</h2>
                <p className="mt-5 text-lg text-slate-300">A key advantage of Sigmatronics Software is our ability to build platforms that integrate directly with hardware — enabling clients to deploy complete smart systems without coordinating multiple vendors.</p>
              </div>
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once:true }} className="grid grid-cols-2 gap-3">
                {techStack.map(t => (
                  <motion.div key={t.label} variants={cardVariants} whileHover={{ backgroundColor:"rgba(255,255,255,0.08)" }} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-all">
                    <span className="text-xl">{t.icon}</span>
                    <span className="text-sm font-medium text-slate-200">{t.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <motion.section id="contact" initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }} className="mt-20 overflow-hidden rounded-[40px] bg-gradient-to-r from-sky-700 to-blue-700 p-12 text-white shadow-2xl shadow-sky-500/20 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-sky-200">Looking for a Software Platform?</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-snug">Built for Your Business,<br />Devices & Customers.</h2>
              <p className="mt-5 text-lg text-blue-100">We build modern software products that are practical, scalable, and ready for real-world operations — from IoT dashboards to full-stack business platforms.</p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
              <p className="text-xl font-bold">Build Your Platform With Us</p>
              <p className="text-sm text-blue-100">Connect with our software team to design, build, and launch your next digital product or platform.</p>
              <a href="mailto:hello@sigmatronics.ai" className="mt-2 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-blue-700 shadow-xl transition hover:bg-blue-50">
                Start Your Project →
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
