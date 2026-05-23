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
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const ChevRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="10" height="10">
    <path d="m9 18 6-6-6-6"/>
  </svg>
);
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="13" height="13">
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
    ],
  },
];

const socials = [
  { Icon: LiIcon, href: "#", label: "LinkedIn" },
  { Icon: TwIcon, href: "#", label: "Twitter" },
  { Icon: GhIcon, href: "#", label: "GitHub" },
];

const contactItems = [
  { Icon: PinIcon,   text: "Maharashtra, India" },
  { Icon: MailIcon,  text: "contact@sigmatronics.in" },
  { Icon: PhoneIcon, text: "+91 98765 43210" },
];

/* ─── Footer ─────────────────────────────────────────── */
export default function SiteFooter() {
  return (
    <footer id="site-footer" className="bg-[#f0f9ff] border-t border-sky-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-8 py-20">

        {/* ── Main Design Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[3rem] border border-orange-100 bg-white/70 backdrop-blur-xl p-12 lg:p-20 shadow-2xl shadow-orange-900/10 relative overflow-hidden group"
          style={{ 
            background: "linear-gradient(165deg, rgba(255, 247, 237, 0.9) 0%, rgba(255, 255, 255, 0.8) 50%, rgba(240, 249, 255, 0.9) 100%)",
          }}
        >
          {/* Complex Decorative Mesh Blobs */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
            <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-orange-200/40 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] bg-sky-200/40 rounded-full blur-[110px] animate-pulse" style={{ animationDelay: "1s" }} />
            <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-orange-100/30 rounded-full blur-[80px]" />
          </div>
          
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-12 relative z-10">

            {/* ── Col 1: Brand & Identity ── */}
            <div className="lg:col-span-5 flex flex-col gap-10">
              <Link href="/" className="inline-block transition-all hover:scale-110 duration-500 hover:rotate-1">
                <Image
                  src="/Sigmatronics_Logo_new.png"
                  alt="Sigmatronics"
                  width={220}
                  height={60}
                  className="h-14 w-auto object-contain"
                  priority
                />
              </Link>

              <div className="space-y-6">
                <p className="text-[17px] leading-relaxed text-slate-600 max-w-sm font-semibold">
                  Empowering <span className="text-sky-600">innovation</span> through engineering excellence. We build the bridges between <span className="text-orange-500">ideas</span> and reality.
                </p>
                
                <div className="flex gap-4">
                  {socials.map(({ Icon, href, label }) => (
                    <motion.a
                      key={label} href={href} aria-label={label}
                      whileHover={{ y: -6, scale: 1.15, rotate: 5 }} whileTap={{ scale: 0.95 }}
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-100 bg-white text-orange-400 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-600 transition-all duration-300 shadow-lg shadow-orange-100/50"
                    >
                      <Icon />
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="space-y-5 p-8 rounded-[2rem] bg-white/50 border border-white shadow-inner">
                <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-sky-600 mb-2">Contact Us</h4>
                {contactItems.map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-4 text-[15px] text-slate-700 font-bold group cursor-pointer transition-colors hover:text-sky-600">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 shadow-sm">
                      <Icon />
                    </span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Col 2: Navigation Matrix ── */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16">
                {navCols.map(({ title, links }, i) => (
                  <motion.div key={title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                  >
                    <h3 className="mb-10 text-[13px] font-black uppercase tracking-[0.25em] text-orange-500 flex items-center gap-2">
                      <span className="w-8 h-[2px] bg-sky-200" />
                      {title}
                    </h3>
                    <ul className="space-y-5">
                      {links.map(({ label, href }) => (
                        <li key={label}>
                          <Link href={href}
                            className="group flex items-center gap-3 text-[15px] text-slate-500 hover:text-sky-600 font-bold transition-all duration-300"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-orange-300 group-hover:w-6 group-hover:bg-sky-500 transition-all duration-500" />
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
              
              {/* Premium Brand Statement */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-r from-sky-600 to-sky-400 text-white shadow-xl shadow-sky-200 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                  <div>
                    <h4 className="text-xl font-black mb-2 tracking-tight">Sigmatronics Hardware</h4>
                    <p className="text-sky-50 text-sm font-medium opacity-90 italic">Built for the future of Intelligent Systems.</p>
                  </div>
                  <Link href="/contact" className="px-8 py-4 bg-white text-sky-600 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-500 hover:text-white transition-all duration-500 shadow-lg">
                    Work With Us
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>

        {/* ── Outer Bottom Bar ── */}
        <div className="mt-14 flex flex-col items-center justify-between gap-8 text-[14px] text-slate-500 sm:flex-row px-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
            <p className="font-bold">© {new Date().getFullYear()} <span className="text-sky-600">Sigmatronics</span> Innovation</p>
            <div className="flex items-center gap-8 font-black uppercase tracking-widest text-[11px]">
              {["Privacy", "Terms"].map(item => (
                <Link key={item}
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-orange-500 transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 font-black text-sky-700 bg-orange-100/50 px-8 py-3 rounded-2xl border border-orange-200 shadow-sm"
          >
            <span className="text-sky-500 animate-bounce"><GlobeIcon /></span>
            <span className="uppercase tracking-[0.2em] text-[12px]">Global Impact</span>
          </motion.div>
        </div>

      </div>
    </footer>
  );
}
