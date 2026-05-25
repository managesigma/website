import type { Metadata } from "next";
import Link from "next/link";
import AnimatedProductCards from "./AnimatedProductCards";
import BackToHome from "../components/BackToHome";
import {
  Layout,
  ShieldCheck,
  BarChart,
  Maximize,
  Cpu,
  Zap,
  Globe,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Products | Sigmatronics Innovation",
  description:
    "Explore Sigmatronics flagship product platforms — from smart vending machines to IoT edge hardware, built for real-world enterprise impact.",
};

const productCards = [
  {
    title: "Cloth Bag Vending Machine",
    description:
      "Automated dispensing solution for eco-friendly cloth bags, designed to reduce plastic waste.",
    image: "/Cloth bag vending machine_product.jpg",
    features: ["Eco-friendly", "Automated dispensing", "Smart payments"],
  },
  {
    title: "Mask Mitra",
    description:
      "A smart vending machine for face masks, providing quick and hygienic access in public spaces.",
    image: "/Mask Mitra_Product .jpg",
    features: ["Hygienic access", "Contactless option", "Compact design"],
  },
  {
    title: "Solar Sync-Lite",
    description:
      "Smart solar-powered lighting and synchronization system for energy-efficient illumination.",
    image: "/Solar sync-lite_product.jpeg",
    features: ["Solar-powered", "Energy efficient", "Smart sync"],
  },
  {
    title: "Wins Vending Machine",
    description:
      "Automated sanitary napkin vending machine providing 24/7 access to essential hygiene products.",
    image: "/Wins (sanitary napkings vending machine)_Product.jpg",
    features: ["24/7 Access", "Reliable dispensing", "Hygiene focus"],
  },
  {
    title: "IoT Edge Hardware",
    description:
      "Industrial-grade hardware for IoT applications, remote monitoring, and sensor integration.",
    image: "/iothardware_Product.jpeg",
    features: ["Industrial grade", "Remote monitoring", "Sensor ready"],
  },
];

const platformFeatures = [
  { label: "Modular Architecture", icon: Layout, desc: "Plug-and-play components that scale independently." },
  { label: "Secure Connectivity", icon: ShieldCheck, desc: "End-to-end encrypted communication layers." },
  { label: "Device Analytics", icon: BarChart, desc: "Real-time telemetry and usage dashboards." },
  { label: "Scalable Deployment", icon: Maximize, desc: "From pilot to enterprise-wide rollout seamlessly." },
  { label: "Embedded Intelligence", icon: Cpu, desc: "On-device processing with minimal latency." },
  { label: "Always-On Reliability", icon: Zap, desc: "99.9% uptime with built-in fail-safe mechanisms." },
];

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 text-slate-900">
      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute top-1/2 -left-60 h-[500px] w-[500px] rounded-full bg-blue-400/8 blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 h-[400px] w-[400px] rounded-full bg-indigo-400/8 blur-[100px]" />
      </div>

      <BackToHome />

      <main className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">

        {/* ── HERO SECTION ── */}
        <section className="relative mb-20 overflow-hidden rounded-[40px] border border-white/60 bg-white/70 p-10 shadow-2xl shadow-slate-200/60 backdrop-blur-xl sm:p-16">
          {/* Decorative gradient bar */}
          <div className="absolute left-0 top-0 h-1 w-full rounded-t-[40px] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />

          {/* Decorative pill badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/60 bg-cyan-50 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700">Our Product Lineup</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[58px] lg:leading-[1.08]">
                Flagship Products{" "}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Built for Impact
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                From smart vending machines to industrial IoT hardware — every Sigmatronics product is engineered for reliability, sustainability, and real-world performance.
              </p>

              {/* Stats row */}
              <div className="mt-10 flex flex-wrap gap-8">
                {[
                  { val: "5+", label: "Flagship Products" },
                  { val: "10K+", label: "Units Deployed" },
                  { val: "99.9%", label: "Uptime SLA" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-black text-slate-900">{s.val}</p>
                    <p className="mt-0.5 text-sm font-medium text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA stack */}
            <div className="flex flex-col gap-3 lg:pb-1">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-700"
              >
                View Solutions <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-900 shadow-sm transition hover:border-cyan-300 hover:bg-cyan-50"
              >
                <Globe size={15} />
                Talk to Sales
              </Link>
            </div>
          </div>
        </section>

        {/* ── PRODUCT CARDS ── */}
        <section className="mb-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-600">Product Catalog</p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">All Products</h2>
            </div>
            <p className="hidden text-sm text-slate-500 sm:block">{productCards.length} products available</p>
          </div>
          <AnimatedProductCards productCards={productCards} />
        </section>

        {/* ── PLATFORM CAPABILITIES ── */}
        <section className="relative overflow-hidden rounded-[36px] border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 shadow-2xl sm:p-14">
          {/* Glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.15),transparent_60%)]" />

          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">Platform Capabilities</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Engineering-First by Design
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-400">
              Every product is built on a shared foundation of reliability, security, and scalability — so integration is fast and performance is consistent.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {platformFeatures.map((item) => (
                <div
                  key={item.label}
                  className="group flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/20 transition group-hover:bg-cyan-500/20">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-white">{item.label}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
