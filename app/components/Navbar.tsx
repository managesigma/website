'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Code2, Layers, Lightbulb, GraduationCap, MessageCircle, type LucideIcon } from "lucide-react";

type SubItem = { label: string; href: string; icon: LucideIcon; color: string; bg: string; desc: string };
type NavItem = { label: string; href: string; isDropdown?: boolean; subItems?: SubItem[] };

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { 
    label: "Verticals", 
    href: "#", 
    isDropdown: true,
    subItems: [
      { label: "Hardware",    href: "/hardware",    icon: Cpu,           color: "text-blue-600",   bg: "bg-blue-50",   desc: "Embedded & IoT systems" },
      { label: "Software",   href: "/software",   icon: Code2,         color: "text-violet-600", bg: "bg-violet-50", desc: "Platforms & digital products" },
      { label: "Solutions",  href: "/solutions",  icon: Layers,        color: "text-cyan-600",   bg: "bg-cyan-50",   desc: "End-to-end integration" },
      { label: "Consultancy",href: "/consultancy",icon: Lightbulb,     color: "text-orange-600", bg: "bg-orange-50", desc: "Strategy & advisory" },
      { label: "Learnings",  href: "/learnings",  icon: GraduationCap, color: "text-emerald-600",bg: "bg-emerald-50",desc: "Industry-driven programs" },
    ]
  },
  { label: "Industries", href: "/industries" },
  { label: "Products", href: "/products" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>("Verticals");
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown("Verticals");
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* ─── Top Bar ─── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/Sigmatronics_Logo_new.png" alt="Sigmatronics" width={150} height={40} className="h-10 w-auto object-contain" priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 xl:flex">
            {navItems.map((item) =>
              item.isDropdown ? (
                <div key={item.label} className="group relative">
                  <button className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900">
                    {item.label}
                    <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" /></svg>
                  </button>
                  <div className="absolute left-1/2 top-full hidden -translate-x-1/2 pt-3 group-hover:block">
                    <div className="w-64 overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl shadow-slate-200/60">
                      {item.subItems?.map((sub) => {
                        const Icon = sub.icon;
                        return (
                          <Link key={sub.href} href={sub.href} className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-slate-50">
                            <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg ${sub.bg}`}>
                              <Icon size={16} className={sub.color} strokeWidth={2} />
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-slate-800">{sub.label}</p>
                              <p className="text-xs text-slate-400">{sub.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.label} href={item.href} className={`rounded-full px-4 py-2 text-sm font-medium transition hover:bg-slate-100 hover:text-slate-900 ${pathname === item.href ? "bg-slate-100 text-slate-900" : "text-slate-600"}`}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <Link href="/contact" className="hidden rounded-full bg-cyan-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-800 xl:inline-flex">
            Contact Us
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="xl:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-slate-200"
            aria-label="Open menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </header>

      {/* ─── Mobile Sidebar ─── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-slate-900/50 backdrop-blur-[2px]"
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[88vw] max-w-[360px] flex-col bg-white shadow-2xl"
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white px-5 py-4">
                <Image src="/Sigmatronics_Logo_new.png" alt="Sigmatronics" width={130} height={36} className="h-8 w-auto object-contain" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-800"
                  aria-label="Close menu"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                </button>
              </div>

              {/* Panel Body */}
              <div className="flex-1 overflow-y-auto px-4 py-5">

                {/* Flat links */}
                {navItems.filter(i => !i.isDropdown).map((item, idx) => (
                  <motion.div key={item.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 + 0.1 }}>
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between rounded-xl px-4 py-3.5 mb-1.5 text-base font-semibold transition ${pathname === item.href ? "bg-cyan-50 text-cyan-700" : "text-slate-800 hover:bg-slate-50"}`}
                    >
                      {item.label}
                      {pathname === item.href && (
                        <span className="h-2 w-2 rounded-full bg-cyan-500" />
                      )}
                    </Link>
                  </motion.div>
                ))}

                {/* Verticals section */}
                <div className="mt-3">
                  <p className="mb-3 px-4 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">Technology Verticals</p>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden">
                    {navItems
                      .find(i => i.isDropdown)
                      ?.subItems?.map((sub, idx) => {
                        const Icon = sub.icon;
                        const active = pathname === sub.href;
                        return (
                          <motion.div key={sub.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 + 0.25 }}>
                            <Link
                              href={sub.href}
                              className={`flex items-center gap-4 px-4 py-3.5 transition hover:bg-white ${idx !== 0 ? "border-t border-slate-100" : ""} ${active ? "bg-white" : ""}`}
                            >
                              <span className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl shadow-sm border border-slate-100 ${active ? sub.bg : "bg-white"}`}>
                                <Icon size={20} className={active ? sub.color : "text-slate-400"} strokeWidth={1.75} />
                              </span>
                              <div>
                                <p className={`text-sm font-semibold ${active ? "text-cyan-700" : "text-slate-800"}`}>
                                  Sigmatronics {sub.label}
                                </p>
                                <p className="text-xs text-slate-400 mt-0.5">{sub.desc}</p>
                              </div>
                              {active && (
                                <span className="ml-auto h-2 w-2 rounded-full bg-cyan-500 flex-shrink-0" />
                              )}
                            </Link>
                          </motion.div>
                        );
                      })}
                  </div>
                </div>

              </div>

              {/* Panel Footer */}
              <div className="border-t border-slate-100 p-4 space-y-3">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:from-cyan-700 hover:to-blue-700"
                >
                  <MessageCircle size={16} strokeWidth={2} />
                  Contact Us
                </Link>
                <p className="text-center text-[11px] text-slate-400">© 2025 Sigmatronics Innovation Pvt. Ltd.</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
