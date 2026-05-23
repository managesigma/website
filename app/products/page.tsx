import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedProductCards from "./AnimatedProductCards";
import { 
  Layout, 
  ShieldCheck, 
  BarChart, 
  Maximize 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Products | Sigmatronics",
  description: "Explore Sigmatronics product platforms, embedded systems, and connected solutions.",
};

const productCards = [
  {
    title: "Cloth Bag Vending Machine",
    description: "Automated dispensing solution for eco-friendly cloth bags, designed to reduce plastic waste.",
    image: "/Cloth bag vending machine_product.jpg",
    features: ["Eco-friendly", "Automated dispensing", "Smart payments"],
  },
  {
    title: "Mask Mitra",
    description: "A smart vending machine for face masks, providing quick and hygienic access in public spaces.",
    image: "/Mask Mitra_Product .jpg",
    features: ["Hygienic access", "Contactless option", "Compact design"],
  },
  {
    title: "Solar Sync-Lite",
    description: "Smart solar-powered lighting and synchronization system for energy-efficient illumination.",
    image: "/Solar sync-lite_product.jpeg",
    features: ["Solar-powered", "Energy efficient", "Smart sync"],
  },
  {
    title: "Wins Vending Machine",
    description: "Automated sanitary napkin vending machine providing 24/7 access to essential hygiene products.",
    image: "/Wins (sanitary napkings vending machine)_Product.jpg",
    features: ["24/7 Access", "Reliable dispensing", "Hygiene focus"],
  },
  {
    title: "IoT Edge Hardware",
    description: "Industrial-grade hardware for IoT applications, remote monitoring, and sensor integration.",
    image: "/iothardware_Product.jpeg",
    features: ["Industrial grade", "Remote monitoring", "Sensor ready"],
  },
];

export default function ProductsPage() {
  return (
    <div className="relative overflow-hidden bg-white text-slate-900">
      <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <section className="rounded-4xl border border-slate-200 bg-slate-50 p-10 shadow-sm">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-700">Products & Platforms</p>
            <h1 className="text-4xl font-semibold text-slate-900">Built as modular product components for modern enterprise use.</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              Explore hardware and software modules designed for fast integration, secure operations, and consistent performance.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-4xl border border-cyan-100 bg-slate-50 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="AI-generated product platform illustration"
              width={1200}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>

          <AnimatedProductCards productCards={productCards} />

          <div className="mt-10 rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-700">Platform focus</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                { label: "Modular architecture", icon: Layout },
                { label: "Secure connectivity", icon: ShieldCheck },
                { label: "Device-centric analytics", icon: BarChart },
                { label: "Scalable deployment", icon: Maximize },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm font-medium text-slate-700">
                  <item.icon size={18} className="text-cyan-600" />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center rounded-full bg-cyan-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-800 interactive-hover"
            >
              View solutions
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 interactive-hover"
            >
              Talk to sales
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
