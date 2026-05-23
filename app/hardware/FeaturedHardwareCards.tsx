"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface FeaturedHardware {
  title: string;
  description: string;
  image: string;
  badges: string[];
}

interface Props {
  featuredHardware: FeaturedHardware[];
}

export default function FeaturedHardwareCards({ featuredHardware }: Props) {
  const highlights = [
    "Auto-rotating feature insights",
    "Premium card motion on scroll",
    "Sticky showcase navigation",
    "Modern hardware storytelling",
  ];
  const [highlightIndex, setHighlightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % highlights.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [highlights.length]);

  return (
    <section id="featured-hardware" className="mt-20 overflow-hidden">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="sticky top-30 self-start rounded-4xl border border-slate-200 bg-linear-to-br from-slate-50 via-white to-slate-50 p-8 shadow-xl shadow-slate-200/30">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-700">Featured hardware</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950">Live hardware cards with premium motion.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Scroll through polished hardware cards while the left panel keeps key capabilities front and center.
          </p>
          <motion.div
            key={highlightIndex}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="mt-6 rounded-3xl border border-cyan-100 bg-white px-4 py-4 text-sm font-semibold text-slate-900 shadow-sm"
          >
            {highlights[highlightIndex]}
          </motion.div>
          <div className="mt-6 grid gap-3 rounded-3xl bg-white/90 p-4 text-sm text-slate-600 shadow-sm ring-1 ring-slate-200">
            <span className="block">Sticky navigation</span>
            <span className="block">Smooth entry animations</span>
            <span className="block">Card-focused visual hierarchy</span>
          </div>
        </div>

        <div className="space-y-8">
          {featuredHardware.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: 90, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, delay: index * 0.14 }}
              className="group overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.08)]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <span className="text-sm uppercase tracking-[0.32em] text-slate-500">Hardware solution</span>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.badges.map((badge) => (
                    <span key={badge} className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
