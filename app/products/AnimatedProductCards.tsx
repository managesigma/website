"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

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

  return (
    <>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {productCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-lg transition-all hover:shadow-xl hover:border-cyan-200 cursor-pointer"
            onClick={() => setSelectedImage(card.image)}
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10 flex items-center justify-center">
                 <span className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white/90 text-slate-900 font-semibold px-4 py-2 rounded-full text-sm backdrop-blur-sm shadow-lg">
                   View Full Image
                 </span>
              </div>
            </div>
            <div className="p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-600">Product</p>
              <h2 className="mt-4 text-2xl font-bold text-slate-900">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {card.features.map((feature) => (
                  <span key={feature} className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 transition-colors group-hover:border-cyan-100 group-hover:bg-cyan-50/50">
                    <CheckCircle2 size={12} className="text-cyan-600" />
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition hover:bg-black/70"
              >
                <X size={20} />
              </button>
              <div className="relative h-[80vh] w-full">
                <Image
                  src={selectedImage}
                  alt="Product Full View"
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
