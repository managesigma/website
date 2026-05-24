"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* ─── Inline SVGs ─────────────────────────────────────── */
const LiIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const TwIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);
const GhIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

/* ─── Data ─────────────────────────────────────────────── */
const navCols = [
  {
    title: "Verticals",
    links: [
      { label: "Hardware Engineering", href: "/hardware" },
      { label: "Software Development", href: "/software" },
      { label: "System Solutions",     href: "/solutions" },
      { label: "Consultancy",          href: "/consultancy" },
      { label: "Learnings & Training", href: "/learnings" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Smart Retail",          href: "/industries#retail" },
      { label: "Industrial Automation", href: "/industries#automation" },
      { label: "Utilities",             href: "/industries#utilities" },
      { label: "Renewable Energy",      href: "/industries#energy" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us",       href: "/about" },
      { label: "Careers",        href: "/careers" },
      { label: "Contact",        href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use",   href: "/terms" },
      { label: "Disclaimer",     href: "/disclaimer" },
      { label: "Refund Policy",  href: "/refund" },
    ],
  },
];

const socials = [
  { Icon: LiIcon, href: "#", label: "LinkedIn" },
  { Icon: TwIcon, href: "#", label: "Twitter" },
  { Icon: GhIcon, href: "#", label: "GitHub" },
];

const contactItems = [
  { Icon: PinIcon,   text: "121, Welcome Society, Behind Shriram Heights, Katol Road, Nagpur, Maharashtra - 440013" },
  { Icon: MailIcon,  text: "info@sigmatronics.co.in" },
  { Icon: PhoneIcon, text: "+91 98904 55177" },
];

/* ─── Footer ─────────────────────────────────────────── */
export default function SiteFooter() {
  return (
    <footer id="site-footer" className="bg-gradient-to-b from-white via-orange-50/20 to-orange-50/40 border-t border-orange-100/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">

        {/* ── Main Design Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[2.5rem] border border-orange-100/40 bg-white/70 backdrop-blur-xl p-8 md:p-14 shadow-xl shadow-orange-100/20 relative overflow-hidden group"
          style={{ 
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 247, 237, 0.5) 100%)",
          }}
        >
          {/* Subtle Cyber Decorative Mesh Blobs */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-[-10%] right-[-5%] w-[35%] h-[35%] bg-cyan-200/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[45%] h-[45%] bg-orange-200/30 rounded-full blur-[110px]" />
          </div>
          
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 relative z-10">

            {/* ── Col 1: Brand & Identity ── */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <Link href="/" className="inline-block transition-transform hover:scale-105 duration-300">
                <Image
                  src="/Sigmatronics_Logo_new.png"
                  alt="Sigmatronics Innovation"
                  width={210}
                  height={50}
                  className="h-12 w-auto object-contain"
                  priority
                />
              </Link>

              <p className="text-[15px] leading-relaxed text-slate-600 font-medium max-w-sm">
                Empowering <span className="text-cyan-600 font-semibold">global industries</span> through engineering excellence. We design, prototype, and build the intelligent bridges between <span className="text-orange-600 font-semibold">ideas</span> and scale.
              </p>
              
              <div className="flex gap-3 mt-2">
                {socials.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label} href={href} aria-label={label}
                    whileHover={{ y: -4, scale: 1.1 }} whileTap={{ scale: 0.95 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white text-slate-500 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700 transition-all duration-300 shadow-sm"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>

            </div>

            {/* ── Col 2: Navigation Matrix ── */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                {navCols.map(({ title, links }) => (
                  <div key={title}>
                    <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-slate-900 flex items-center gap-2">
                      <span className="w-4 h-[2px] bg-cyan-500 rounded-full" />
                      {title}
                    </h3>
                    <ul className="space-y-4">
                      {links.map(({ label, href }) => (
                        <li key={label}>
                          <Link href={href}
                            className="group flex items-center gap-2 text-sm text-slate-600 hover:text-cyan-600 font-semibold transition-all duration-300 hover:translate-x-1.5"
                          >
                            <span className="h-1 w-1 rounded-full bg-slate-300 group-hover:bg-cyan-500 transition-colors" />
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Col 3: Beautiful Contact Us Grid ── */}
          <div className="mt-14 pt-8 border-t border-slate-200/60 grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactItems.map(({ Icon, text }) => (
              <div key={text} className="group flex items-start gap-4 text-sm text-slate-700 font-semibold cursor-pointer">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-100 text-slate-500 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500 transition-all duration-500 shadow-sm">
                  <Icon />
                </span>
                <span className="group-hover:text-cyan-600 transition-colors duration-300 mt-1">{text}</span>
              </div>
            ))}
          </div>

          {/* ── Paragraph Description Box ── */}
          <div className="mt-10 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 text-xs leading-relaxed text-slate-500">
            Sigmatronics Innovation Private Limited is a technology company specializing in hardware development, IoT systems, automation solutions, embedded electronics, industrial software, cloud platforms, smart monitoring systems, consultancy, and innovation-driven technology solutions.
          </div>

        </motion.div>

        {/* ── Outer Bottom Bar ── */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 text-xs text-slate-500 sm:flex-row px-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
            <p className="font-semibold">
              © {new Date().getFullYear()} <span className="text-cyan-600 font-bold">Sigmatronics Innovation</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 font-black uppercase tracking-wider text-[10px]">
              {["Privacy", "Terms", "Disclaimer", "Refund"].map(item => (
                <Link key={item}
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-cyan-600 transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-2.5 font-bold text-cyan-700 bg-cyan-50 border border-cyan-100 px-5 py-2.5 rounded-full shadow-sm hover:bg-cyan-100/70 transition-all duration-300 cursor-pointer"
          >
            <span className="text-cyan-500 animate-pulse"><GlobeIcon /></span>
            <span className="uppercase tracking-[0.2em] text-[10px]">Global Impact</span>
          </motion.div>
        </div>

      </div>
    </footer>
  );
}
