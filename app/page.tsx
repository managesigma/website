'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  Code, 
  Rocket, 
  Brain, 
  GraduationCap, 
  Settings, 
  Cloud, 
  Zap,
  ArrowRight
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Hardware", href: "/hardware" },
  { label: "Software", href: "/software" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const verticals = [
  {
    title: "Hardware",
    fullName: "Sigmatronics Hardware",
    icon: Cpu,
    subtitle: "Advanced Electronics & Embedded Systems",
    description: "Designing intelligent, connected hardware — from industrial control systems to custom embedded products.",
    longDescription: "Our hardware division specializes in multi-layer PCB design, firmware development, and industrial-grade enclosure engineering. We build gateways, sensing nodes, and specialized controllers that operate reliably in harsh industrial environments. Our expertise covers ARM, ESP32, and STM32 architectures with a focus on low-power connectivity.",
    href: "/hardware",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Software",
    fullName: "Sigmatronics Software",
    icon: Code,
    subtitle: "Custom Platforms & IoT Dashboards",
    description: "Developing modern software platforms, dashboards, and digital products that integrate seamlessly.",
    longDescription: "We build scalable SaaS architectures using Next.js, Node.js, and advanced cloud infrastructures. Our software vertical delivers real-time telemetry dashboards, user-facing mobile apps, and robust API layers. We focus on data visualization, device management, and enterprise-grade security protocols for all our digital platforms.",
    href: "/software",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-indigo-600 to-purple-500",
  },
  {
    title: "Solutions",
    fullName: "Sigmatronics Solutions",
    icon: Rocket,
    subtitle: "Integrated Smart Systems",
    description: "Delivering fully integrated hardware + software solutions tailored to complex business use cases.",
    longDescription: "Our solutions team bridges the gap between hardware and software. We deliver turnkey systems for smart vending, water automation, and energy monitoring. This includes field deployment, system integration with existing ERPs, and complete lifecycle support — ensuring your technology investment delivers measurable ROI.",
    href: "/solutions",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-cyan-600 to-blue-500",
  },
  {
    title: "Consultancy",
    fullName: "Sigmatronics Consultancy",
    icon: Brain,
    subtitle: "Strategic Advisory & Partnerships",
    description: "Helping organizations build and scale technology through expert advisory and product strategy.",
    longDescription: "We provide high-level technology roadmapping for startups and established enterprises. Our consultants help with product feasibility, architecture selection, and scaling strategies. We also facilitate partner-led implementation, connecting you with specialized domain experts and manufacturing partners to accelerate your time-to-market.",
    href: "/consultancy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-slate-700 to-slate-900",
  },
  {
    title: "Learnings",
    fullName: "Sigmatronics Learnings",
    icon: GraduationCap,
    subtitle: "Innovation & Applied Learning",
    description: "Empowering innovators with practical exposure to embedded systems, IoT, and modern tech.",
    longDescription: "Our learning vertical is dedicated to closing the gap between academia and industry. We offer hands-on internship programs, workshops, and innovation labs focused on real-world engineering challenges. Participants work on live projects, gaining skills in firmware, full-stack development, and product design under the guidance of industry veterans.",
    href: "/learnings",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "from-orange-600 to-red-500",
  }
];



const heroImages = [
  {
    src: "/hero_ai_hardware_software.png",
    alt: "AI generated technology visualization across hardware and software",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    alt: "AI concept visualization with connected digital hardware",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    alt: "Embedded system hardware board with a futuristic finish",
  },
];

export default function Home() {
  const [expandedVertical, setExpandedVertical] = useState<string | null>(null);

  return (
    <div className="relative overflow-hidden bg-white text-slate-900">
      {/* Light Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle Mesh Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Animated Light Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -80, 0],
            y: [0, 120, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-20 top-40 h-[600px] w-[600px] rounded-full bg-orange-400/20 blur-[120px]"
        />
      </div>

      <main className="relative z-20 mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[32px] border border-slate-200/60 bg-white/80 p-4 shadow-xl backdrop-blur-xl lg:p-8">
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <p className="inline-flex rounded-full border border-cyan-200/50 bg-cyan-50/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700 shadow-sm">
                Multi-Vertical Technology
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
                Building <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Intelligent</span> Technology
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Sigmatronics Innovation Private Limited is a multi-vertical technology company delivering advanced embedded hardware, IoT systems, industrial automation, custom software platforms, smart products, digital solutions, consultancy, and innovation-driven learning programs for businesses, institutions, and emerging industries.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/verticals"
                  className="rounded-full bg-cyan-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-900/20 transition hover:bg-cyan-800"
                >
                  Explore Verticals
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-slate-200 bg-white/50 px-6 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:bg-white"
                >
                  Talk to Our Experts
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="relative rounded-3xl border border-slate-200 bg-white/40 p-4 shadow-lg backdrop-blur-md"
            >
              <div className="relative grid gap-4">
                <div className="space-y-4">
                  <div className="h-48 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                    <Image
                      src={heroImages[0].src}
                      alt={heroImages[0].alt}
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="h-24 overflow-hidden rounded-4xl border border-slate-200 bg-slate-100 shadow-sm">
                      <Image
                        src={heroImages[1].src}
                        alt={heroImages[1].alt}
                        width={260}
                        height={160}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-24 overflow-hidden rounded-4xl border border-slate-200 bg-slate-100 shadow-sm">
                      <Image
                        src={heroImages[2].src}
                        alt={heroImages[2].alt}
                        width={260}
                        height={160}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex h-full min-h-65 flex-col justify-between rounded-4xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="space-y-3">
                    <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">End-to-End Execution</p>
                    <h2 className="text-xl font-semibold leading-tight text-slate-950">
                      Trusted by innovators and enterprises.
                    </h2>
                    <p className="text-sm leading-6 text-slate-600">
                      Trusted by innovators, enterprises, institutions, and growing businesses for end-to-end technology execution — from device engineering to cloud platforms.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    {[
                      { label: "Device Engineering", icon: Cpu },
                      { label: "Cloud Platforms", icon: Cloud },
                      { label: "Automation", icon: Settings },
                    ].map((item) => (
                      <span key={item.label} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
                        <item.icon size={14} className="text-cyan-600" />
                        {item.label}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/about"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="mt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white p-8 shadow-2xl sm:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.08),transparent_40%)]" />
            <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-700">Who We Are</p>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  A New-Age Technology Company Built for Multi-Domain Innovation
                </h2>
                <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
                  <p>
                    Sigmatronics Innovation Private Limited began with a strong foundation in hardware design and embedded systems engineering. Over time, our expertise expanded into software platforms, IoT analytics, industrial automation, smart dispensing systems, digital business platforms, consultancy, and innovation enablement.
                  </p>
                  <p>
                    Today, Sigmatronics operates as an integrated technology company with multiple verticals that work together to deliver complete solutions — from concept, electronics design, and firmware to cloud software, analytics, deployment, and long-term support.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-inner lg:p-10">
                <p className="text-lg leading-relaxed text-slate-600 italic">
                  "Our mission is to help businesses, institutions, governments, and innovators adopt practical, scalable, and future-ready technology that solves real-world problems."
                </p>
                <div className="mt-8 flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-cyan-600 shadow-lg shadow-cyan-200" />
                  <div>
                    <p className="font-bold text-slate-900">Sigmatronics Innovation</p>
                    <p className="text-sm text-slate-500">Leading the future of tech</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Our Technology Verticals Section - Auto-Scrolling Ticker */}
        <section className="mt-32 overflow-hidden py-10 bg-slate-50/50">
          <div className="text-center px-4 mb-16">
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Technology Verticals</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              A high-impact ecosystem of specialized engineering and digital domains.
            </p>
          </div>

          <div className="relative flex overflow-hidden pause-on-hover">
            {/* Ticker Container */}
            <div
              className="flex gap-6 whitespace-nowrap py-4 px-3 animate-marquee"
              style={{ width: "max-content" }}
            >
              {/* Duplicate cards for infinite loop */}
              {[...verticals, ...verticals, ...verticals].map((vertical, index) => (
                <div
                  key={`${vertical.title}-${index}`}
                  onClick={() => setExpandedVertical(expandedVertical === vertical.title ? null : vertical.title)}
                  className={`relative w-[260px] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border transition-all duration-500 ${
                    expandedVertical === vertical.title 
                    ? 'ring-2 ring-cyan-500 border-cyan-500 shadow-2xl scale-105 bg-white z-20' 
                    : 'border-slate-200 bg-white shadow-sm hover:border-cyan-300 hover:shadow-md'
                  }`}
                >
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={vertical.image}
                      alt={vertical.fullName}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/40" />
                    <div className="absolute top-3 left-4">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br ${vertical.color} text-white shadow-md`}>
                        <vertical.icon size={16} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-slate-900">{vertical.fullName}</h3>
                    <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-cyan-600 truncate">{vertical.subtitle}</p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500 whitespace-normal line-clamp-2">
                      {vertical.description}
                    </p>
                    
                    <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-3">
                      <span className="text-[10px] font-bold text-slate-400">Click to expand</span>
                      <Link
                        href={vertical.href}
                        onClick={(e) => e.stopPropagation()}
                        className="text-[10px] font-bold text-cyan-600 hover:underline"
                      >
                        Visit Page →
                      </Link>
                    </div>

                    <AnimatePresence>
                      {expandedVertical === vertical.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 border-t border-slate-100 pt-3">
                            <p className="text-[11px] leading-relaxed text-slate-600 whitespace-normal">
                              {vertical.longDescription}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>

            {/* Gradient Overlays for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>
        </section>



        <section className="mt-20 rounded-4xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-700">Focused pages</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Everything lives in the right place.</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                Home is simple and bold, with product and company details moved to dedicated pages so the site feels modern and easy to explore.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-cyan-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-800 interactive-hover"
              >
                About Sigmatronics
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 interactive-hover"
              >
                Products & Platforms
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
