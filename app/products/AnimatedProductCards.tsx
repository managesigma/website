"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, ZoomIn } from "lucide-react";

interface ProductCard {
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface Props {
  productCards: ProductCard[];
}

export default function AnimatedProductCards({ productCards }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  const openImage = (image: string, title: string) => {
    setSelectedImage(image);
    setSelectedTitle(title);
  };

  return (
    <>
      <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
        {productCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.09 }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:border-cyan-200 hover:-translate-y-1 cursor-pointer"
            onClick={() => openImage(card.image, card.title)}
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              {/* Zoom hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-slate-900 shadow-lg backdrop-blur-sm">
                  <ZoomIn size={14} /> View Image
                </span>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                  Product
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-7">
              <h2 className="text-xl font-bold text-slate-900 leading-snug">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-500 flex-1">{card.description}</p>

              {/* Features */}
              <div className="mt-5 flex flex-wrap gap-2">
                {card.features.map((feature) => (
                  <span
                    key={feature}
                    className="flex items-center gap-1.5 rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-[11px] font-semibold text-cyan-700 transition-colors group-hover:border-cyan-200 group-hover:bg-cyan-100/60"
                  >
                    <CheckCircle2 size={11} className="text-cyan-500" />
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom accent bar */}
            <div className="h-0.5 w-full bg-gradient-to-r from-cyan-500/0 via-cyan-500/60 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-slate-900 shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <X size={18} />
              </button>

              {/* Title bar */}
              <div className="px-6 pt-5 pb-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Product View</p>
                <h3 className="mt-1 text-lg font-bold text-white">{selectedTitle}</h3>
              </div>

              {/* Image */}
              <div className="relative h-[70vh] w-full">
                <Image
                  src={selectedImage}
                  alt={selectedTitle}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
