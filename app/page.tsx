'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
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
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown
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
  // Focused carousel state
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | "up" | "down">("right");
  const total = verticals.length;

  // Touch/swipe tracking
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const goPrev = useCallback(() => {
    setDirection("left");
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNext = useCallback(() => {
    setDirection("right");
    setActiveIndex((i) => (i + 1) % total);
  }, [total]);

  const goPrevMobile = useCallback(() => {
    setDirection("up");
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goNextMobile = useCallback(() => {
    setDirection("down");
    setActiveIndex((i) => (i + 1) % total);
  }, [total]);

  const handleDesktopTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleDesktopTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const handleMobileTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleMobileTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goNextMobile();
      else goPrevMobile();
    }
  };

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
                  <div className="space-y-3 pl-1">
                    {[
                      { label: "Device Engineering", icon: Cpu },
                      { label: "Cloud Platforms", icon: Cloud },
                      { label: "Automation", icon: Settings },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-50 text-cyan-600 ring-1 ring-cyan-100">
                          <item.icon size={12} strokeWidth={2.5} />
                        </span>
                        {item.label}
                      </div>
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

        {/* Our Technology Verticals Section */}
        <section className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <p className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-700">Our Verticals</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Technology Verticals</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              A high-impact ecosystem of specialized engineering and digital domains.
            </p>
          </motion.div>

          {/* DESKTOP VIEW: Focused Single-Card Carousel */}
          <div
            className="hidden md:block relative select-none"
            onTouchStart={handleDesktopTouchStart}
            onTouchEnd={handleDesktopTouchEnd}
          >
            {/* Prev Button */}
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 z-30 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-slate-200 shadow-xl text-slate-700 hover:bg-cyan-50 hover:border-cyan-300 hover:text-cyan-700 transition-all duration-200 active:scale-90 focus:outline-none cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft size={26} strokeWidth={2.5} />
            </button>

            {/* Next Button */}
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 z-30 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-slate-200 shadow-xl text-slate-700 hover:bg-cyan-50 hover:border-cyan-300 hover:text-cyan-700 transition-all duration-200 active:scale-90 focus:outline-none cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight size={26} strokeWidth={2.5} />
            </button>

            {/* Cards Stage */}
            <div className="flex items-center justify-center gap-6 py-8 px-24 overflow-hidden min-h-[380px]">
              {verticals.map((vertical, index) => {
                const offset = ((index - activeIndex + total) % total);
                const normalizedOffset = offset > total / 2 ? offset - total : offset;
                // Only render cards that are close to center
                if (Math.abs(normalizedOffset) > 2) return null;
                const isActive = normalizedOffset === 0;
                const isAdjacent = Math.abs(normalizedOffset) === 1;
                const translateX = normalizedOffset * 310;
                const scale = isActive ? 1 : isAdjacent ? 0.82 : 0.68;
                const opacity = isActive ? 1 : isAdjacent ? 0.55 : 0.25;
                const zIndex = isActive ? 20 : isAdjacent ? 10 : 5;
                return (
                  <motion.div
                    key={vertical.title}
                    animate={{
                      x: translateX,
                      scale,
                      opacity,
                      zIndex,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className={`absolute w-[340px] overflow-hidden rounded-3xl border cursor-pointer transition-shadow duration-300 bg-white ${
                      isActive
                        ? "border-cyan-400 shadow-2xl shadow-cyan-200/60 ring-2 ring-cyan-400/40"
                        : "border-slate-200 shadow-md"
                    }`}
                    onClick={() => {
                      if (!isActive) {
                        if (normalizedOffset > 0) goNext();
                        else goPrev();
                      }
                    }}
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={vertical.image}
                        alt={vertical.fullName}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${vertical.color} text-white shadow-lg`}>
                          <vertical.icon size={20} />
                        </div>
                      </div>
                      {isActive && (
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">{vertical.subtitle}</p>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900">{vertical.fullName}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-3">{vertical.description}</p>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                          className="mt-4 pt-4 border-t border-slate-100"
                        >
                          <p className="text-xs leading-relaxed text-slate-400 line-clamp-3">{vertical.longDescription}</p>
                          <Link
                            href={vertical.href}
                            className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-700 px-5 py-2 text-xs font-bold text-white hover:bg-cyan-800 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Explore <ChevronRight size={14} />
                          </Link>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-4 pb-2">
              {verticals.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > activeIndex ? "right" : "left"); setActiveIndex(i); }}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    i === activeIndex ? "w-8 bg-cyan-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* MOBILE VIEW: Vertical Swipe Carousel */}
          <div
            className="md:hidden relative flex flex-col items-center px-6"
            onTouchStart={handleMobileTouchStart}
            onTouchEnd={handleMobileTouchEnd}
          >
            {/* Up Button */}
            <button
              onClick={goPrevMobile}
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200 shadow-lg text-slate-700 hover:bg-cyan-50 hover:border-cyan-300 hover:text-cyan-700 transition-all duration-200 active:scale-90 focus:outline-none cursor-pointer"
              aria-label="Previous"
            >
              <ChevronUp size={22} strokeWidth={2.5} />
            </button>

            {/* Card Viewport */}
            <div className="relative w-full max-w-sm overflow-hidden" style={{ height: 420 }}>
              {(() => {
                const activeVertical = verticals[activeIndex];
                const ActiveIcon = activeVertical.icon;
                return (
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={{
                    enter: (d: string) => ({ y: d === "down" ? 120 : -120, opacity: 0, scale: 0.92 }),
                    center: { y: 0, opacity: 1, scale: 1 },
                    exit: (d: string) => ({ y: d === "down" ? -120 : 120, opacity: 0, scale: 0.92 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 280, damping: 28 }}
                  className="absolute inset-0 w-full overflow-hidden rounded-3xl border border-cyan-300 bg-white shadow-2xl shadow-cyan-100/60 ring-2 ring-cyan-400/30"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={activeVertical.image}
                      alt={activeVertical.fullName}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                        <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${activeVertical.color} text-white shadow-lg`}>
                          <ActiveIcon size={22} />
                        </div>
                      </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-300">{activeVertical.subtitle}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-slate-900">{activeVertical.fullName}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-3">{activeVertical.description}</p>
                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <p className="text-xs text-slate-400 font-medium">{activeIndex + 1} / {total}</p>
                      <Link
                        href={activeVertical.href}
                        className="inline-flex items-center gap-1.5 rounded-full bg-cyan-700 px-4 py-2 text-xs font-bold text-white hover:bg-cyan-800 transition-colors"
                      >
                        Explore <ChevronRight size={12} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
                );
              })()}
            </div>

            {/* Down Button */}
            <button
              onClick={goNextMobile}
              className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-slate-200 shadow-lg text-slate-700 hover:bg-cyan-50 hover:border-cyan-300 hover:text-cyan-700 transition-all duration-200 active:scale-90 focus:outline-none cursor-pointer"
              aria-label="Next"
            >
              <ChevronDown size={22} strokeWidth={2.5} />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2 mt-4">
              {verticals.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > activeIndex ? "down" : "up"); setActiveIndex(i); }}
                  className={`w-2 rounded-full transition-all duration-300 focus:outline-none ${
                    i === activeIndex ? "h-8 bg-cyan-600" : "h-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
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
                  &quot;Our mission is to help businesses, institutions, governments, and innovators adopt practical, scalable, and future-ready technology that solves real-world problems.&quot;
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

      </main>
    </div>
  );
}
